console.log(THREE)
const scene=new THREE.Scene();
const geometry = new THREE.BoxGeometry( 2, 3, 2 ); 
const material = new THREE.MeshBasicMaterial( {color: "light blue"} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

const camera=new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight);
camera.position.z=4;
camera.position.x=2;
camera.position.y=1;

const renderer = new THREE.WebGLRenderer(1,1);

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene,camera);

document.body.appendChild( renderer.domElement );
