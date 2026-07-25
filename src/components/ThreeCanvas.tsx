"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface ThreeCanvasProps {
  modelPath?: string;
  isBackground?: boolean;
}

export default function ThreeCanvas({ modelPath = "/model.glb", isBackground = false }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.5, 4);

    // 3. Renderer Setup with premium colors & shadows
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    // Clear container and append canvas
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    // 4. Orbit Controls (Interactive rotation/zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    if (isBackground) {
      // Disable orbit controls completely in background mode to allow mouse events to pass smoothly
      controls.enabled = false;
    } else {
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI / 2 + 0.1; // Limit under-table viewing
      controls.minDistance = 1.5;
      controls.maxDistance = 8;
      controls.enablePan = false; // Keep it centered
    }

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0001;
    scene.add(dirLight);

    // Fill light (opposite side to soften shadows)
    const fillLight = new THREE.DirectionalLight(0x90b0ff, 0.5);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    // Subtle floor shadow receiver
    const shadowPlaneGeo = new THREE.PlaneGeometry(10, 10);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.8;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Load Model
    const loader = new GLTFLoader();
    let model: THREE.Group | null = null;

    // Define positioning layout function
    const updateLayout = () => {
      if (!model) return;
      if (isBackground) {
        if (window.innerWidth >= 1024) {
          model.position.x = 1.1; // Shift to the right half of the screen
          model.position.y = -0.4;
          model.position.z = -0.3;
          shadowPlane.position.x = 1.1;
          shadowPlane.position.y = -0.4;
          shadowPlane.position.z = -0.3;
        } else {
          model.position.x = 0;   // Center on tablet/mobile screens
          model.position.y = -0.6;
          model.position.z = 0;
          shadowPlane.position.x = 0;
          shadowPlane.position.y = -0.6;
          shadowPlane.position.z = 0;
        }
      }
    };

    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;
        
        // Traverse to enable shadows for all meshes
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            
            // Adjust materials if necessary for web
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              if (mat.roughness !== undefined) {
                mat.roughness = Math.max(mat.roughness, 0.1);
              }
            }
          }
        });

        // Center model bounding box & scale appropriately
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        // Reposition origin to center of base
        model.position.x += (model.position.x - center.x);
        model.position.y += (model.position.y - box.min.y) - 0.8; // Align bottom of model to shadow plane
        model.position.z += (model.position.z - center.z);
        
        // Auto-scale model if too big/small
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scaleFactor = isBackground ? 1.4 : 1.8; // Slightly smaller when background to look neat
          model.scale.setScalar(scaleFactor);
        }

        updateLayout();
        scene.add(model);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Error loading model:", err);
        setError("Please add your 'model.glb' file to the 'public' directory.");
        setLoading(false);
      }
    );

    // 7. Interactive Parallax Mouse Move & Scroll Handler (for Background mode)
    let mouseX = 0;
    let mouseY = 0;
    let currentScrollY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      currentScrollY = window.scrollY;
    };

    if (isBackground) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("scroll", handleScroll, { passive: true });
      currentScrollY = window.scrollY; // Initialize in case user reloads scrolled down
    }

    // 8. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      if (model) {
        if (isBackground) {
          // Calculate scroll progress (0.0 to 1.0)
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const scrollFraction = maxScroll > 0 ? Math.min(Math.max(currentScrollY / maxScroll, 0), 1) : 0;
          
          let targetX = 1.1;
          let targetY = -0.4;
          let targetZ = -0.3;
          const targetRotY = scrollFraction * Math.PI * 4; // 2 complete spins over the page height
          const targetRotX = mouseY * 0.15;

          if (window.innerWidth >= 1024) {
            // Desktop scroll sections interpolation:
            // Section 1: Hero (scrollFraction 0 to 0.25)
            //   At 0: x = 1.1, y = -0.4, z = -0.3
            //   Moves to: x = -1.0, y = -0.4, z = -0.3 (at 0.25)
            // Section 2: Work (scrollFraction 0.25 to 0.5)
            //   Moves to: x = 0.0, y = -0.4, z = -1.0 (deeper background) (at 0.5)
            // Section 3: About (scrollFraction 0.5 to 0.75)
            //   Moves to: x = 1.1, y = -0.4, z = -0.3 (at 0.75)
            // Section 4: Contact (scrollFraction 0.75 to 1.0)
            //   Stays at: x = 1.1, y = -0.4, z = -0.3 (at 1.0)
            
            if (scrollFraction < 0.25) {
              const t = scrollFraction / 0.25;
              targetX = 1.1 - t * 2.1; // moves 1.1 to -1.0
              targetY = -0.4;
              targetZ = -0.3;
            } else if (scrollFraction < 0.5) {
              const t = (scrollFraction - 0.25) / 0.25;
              targetX = -1.0 + t * 1.0; // moves -1.0 to 0.0
              targetY = -0.4;
              targetZ = -0.3 - t * 0.7; // moves deeper (-0.3 to -1.0)
            } else if (scrollFraction < 0.75) {
              const t = (scrollFraction - 0.5) / 0.25;
              targetX = 0.0 + t * 1.1; // moves 0.0 to 1.1
              targetY = -0.4;
              targetZ = -1.0 + t * 0.7; // moves shallower (-1.0 to -0.3)
            } else {
              targetX = 1.1;
              targetY = -0.4;
              targetZ = -0.3;
            }
          } else {
            // Mobile viewport scroll settings:
            // Keep it centered on X (x = 0), and scale/depth changes slightly on scroll
            targetX = 0;
            targetY = -0.6;
            targetZ = -scrollFraction * 0.8; // Recedes slightly deeper as they scroll down
          }

          // Smooth lerp interpolation for coordinates (damping)
          model.position.x += (targetX - model.position.x) * 0.05;
          model.position.y += (targetY - model.position.y) * 0.05;
          model.position.z += (targetZ - model.position.z) * 0.05;
          
          // Smooth rotation (spinning + mouse parallax coordinates)
          model.rotation.y += (targetRotY + mouseX * 0.22 - model.rotation.y) * 0.05;
          model.rotation.x += (targetRotX - model.rotation.x) * 0.05;

          // Shadow plane matches model coordinates
          shadowPlane.position.x = model.position.x;
          shadowPlane.position.y = model.position.y;
          shadowPlane.position.z = model.position.z;
        } else {
          // Model remains static in standard mode unless manually rotated via OrbitControls
        }
      }

      if (!isBackground) {
        controls.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateLayout();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (isBackground) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      }
      renderer.dispose();
      controls.dispose();
    };
  }, [modelPath, isBackground]);

  return (
    <div className="relative w-full h-full min-h-[350px] flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-slate-900/5 dark:bg-slate-100/5 backdrop-blur-xs rounded-3xl">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-xs text-slate-500 font-mono">Loading 3D Visualizer...</p>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20 bg-slate-950/10 backdrop-blur-md rounded-3xl border border-dashed border-red-500/20">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Model File Missing</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[280px] leading-relaxed mb-3">
            Export your Blender design as <code className="text-blue-500 dark:text-blue-400 px-1 bg-slate-100 dark:bg-slate-900 rounded font-bold">model.glb</code> and save it in your project&apos;s <code className="px-1 bg-slate-100 dark:bg-slate-900 rounded font-bold">public</code> folder.
          </p>
          <div className="text-[10px] text-slate-400 font-mono">
            Expected location: f:\flutter project\Praveen website\public\model.glb
          </div>
        </div>
      )}
      
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
