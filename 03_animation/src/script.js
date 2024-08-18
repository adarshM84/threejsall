import * as THREE from "three";
import gsap from "gsap";
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// let time=Date.now()
let clock=new THREE.Clock(); 
gsap.to(mesh.position,{x:2,duration:1,delay:1})

const tick=() =>{
  // const currenTime=Date.now();
  // const delta=currenTime-time;
  // time=currenTime;
  // mesh.rotation.x+=0.001 * delta;
  // mesh.rotation.y+=0.001 * delta;
  const elapsedTime=clock.getElapsedTime()

  // mesh.position.y=Math.cos(elapsedTime);
  // mesh.position.x=Math.sin(elapsedTime);

  // mesh.rotation.y=Math.cos(elapsedTime);

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick)
}
tick()
