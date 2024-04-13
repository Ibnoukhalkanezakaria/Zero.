import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const scene = useRef(new THREE.Scene()).current;
  const camera = useRef(new THREE.PerspectiveCamera(50, 800 / 600)).current;
  const renderer = useRef(new THREE.WebGLRenderer({ alpha: true })).current;
  const torusKnot = useRef(null);
  const light = useRef(null);

  useEffect(() => {
    // Create Torus Knot
    const geometry = new THREE.TorusKnotGeometry(3, 1, 100, 64);
    const material = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.2,
      metalness: 0.8,
    });
    torusKnot.current = new THREE.Mesh(geometry, material);
    scene.add(torusKnot.current);

    // Light
    light.current = new THREE.PointLight(0xffffff, 1000, 100);
    light.current.position.set(10, 10, 10);
    scene.add(light.current);

    // Camera
    camera.position.z = 20;
    const canvas = canvasRef.current;
    renderer.setSize(800, 600);
    renderer.setClearColor(0x000000, 0); // Set background color to black with alpha value of 0 (fully transparent)
    canvas.appendChild(renderer.domElement);

    // Track mouse movement to change torus knot color
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const color = new THREE.Color();
      color.r = (x + 1) / 2;
      color.g = (y + 1) / 2;
      color.b = 1.0 - Math.sqrt(color.r ** 2 + color.g ** 2);
      torusKnot.current.material.color.copy(color);
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.current.rotation.y += 0.01;
      const time = Date.now() * 0.0005;
      const radius = 10;
      light.current.position.x = Math.sin(time) * radius;
      light.current.position.y = Math.cos(time) * radius;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      // Optionally dispose of resources to prevent memory leaks
      geometry.dispose();
      material.dispose();
    };
  }, [scene, camera, renderer]);

  return <div ref={canvasRef} className="webgl" />;
};

export default ThreeScene;
