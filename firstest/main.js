const scene=new THREE.Scene();
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: "blue"} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

const camera=new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
camera.position.set(1,1,5);
camera.scale.set(1,2,3);

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const renderer = new THREE.WebGLRenderer(1,1);

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene,camera);

document.body.appendChild( renderer.domElement);
// cube.position.normalize();

// console.log(cube.position.length());
// console.log(cube.position.distanceTo(new THREE.Vector3(0,0,0)));
// console.log(cube.position.distanceTo(camera.position));

