import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var width = window.innerWidth;
var height = window.innerHeight;


// 1: Set up the scene

var scene = new THREE.Scene();

// 2: Add a camera
var camera = new THREE.PerspectiveCamera(101,width/height,0.1,1000);
camera.position.z = 17;
camera.position.y = 4;
camera.position.x = 0;




// 3: create a renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#141414");
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// **************A D D I N G  O B J E C T S****************

// **********CLOUDS************
var icosahedronGeometry = new THREE.IcosahedronGeometry(1,5);
var icoMaterial = new THREE.MeshStandardMaterial({color: "#fffff", metalness: 0, roughness: 0});
var icosahedron = new THREE.Mesh(icosahedronGeometry,icoMaterial);
scene.add(icosahedron);

icosahedron.position.set(-10.5,10,0);
icosahedron.scale.x = 1.2;


var icogeometry1 = new THREE.IcosahedronGeometry(1,5);
var icoMaterial1 = new THREE.MeshStandardMaterial({color: "#fffff", metalness: 0, roughness: 0});
var ico1 = new THREE.Mesh(icogeometry1,icoMaterial1);
scene.add(ico1);

ico1.position.set(-8.5,10,0);
ico1.scale.x  = 1.2;

var icogeometry2 = new THREE.IcosahedronGeometry(1,5);
var icoMaterial2 = new THREE.MeshStandardMaterial({color: "#fffff", metalness: 0, roughness: 0});
var ico2 = new THREE.Mesh(icogeometry2,icoMaterial2);
scene.add(ico2);

ico2.position.set(-9.5,10.8,0);


//*****ADD PLANES******/
// GROUND PLANE
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
const geometryPlane = new THREE.PlaneGeometry( 1, 1);
const materialPlane = new THREE.MeshLambertMaterial( {color: "#b0dbff", side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometryPlane, materialPlane);
scene.add( plane );

plane.rotation.x = THREE.MathUtils.degToRad(90);
plane.scale.x = 40;     
plane.scale.y = 40;
plane.scale.z = 1;


// WALL PLANES
const geometryPlane2 = new THREE.PlaneGeometry( 1, 1);
const materialPlane2 = new THREE.MeshLambertMaterial( {color: "#63b8ff", side: THREE.DoubleSide} );
const planewall1 = new THREE.Mesh( geometryPlane2, materialPlane2);
scene.add( planewall1);

planewall1.scale.x = 40;     
planewall1.scale.y = 40;
planewall1.scale.z = 1;
planewall1.position.z = -20;
planewall1.position.y = 20;


const geometryPlane3 = new THREE.PlaneGeometry( 1, 1);
const materialPlane3 = new THREE.MeshLambertMaterial( {color: "#63b8ff", side: THREE.DoubleSide} );
const planewall2 = new THREE.Mesh( geometryPlane3, materialPlane3);
scene.add( planewall2);

planewall2.scale.x = 40;     
planewall2.scale.y = 40;
planewall2.scale.z = 1;
planewall2.position.z = 20;
planewall2.position.y = 20;


const geometryPlane4 = new THREE.PlaneGeometry( 1, 1);
const materialPlane4 = new THREE.MeshLambertMaterial( {color: "#63b8ff", side: THREE.DoubleSide} );
const planewall3 = new THREE.Mesh( geometryPlane4, materialPlane4);
scene.add( planewall3);

planewall3.rotation.y = THREE.MathUtils.degToRad(90);
planewall3.scale.x = 40;     
planewall3.scale.y = 40;
planewall3.scale.z = 1;
planewall3.position.z = 0;
planewall3.position.y = 20;
planewall3.position.x = 20;


const geometryPlane5 = new THREE.PlaneGeometry( 1, 1);
const materialPlane5 = new THREE.MeshLambertMaterial( {color: "#63b8ff", side: THREE.DoubleSide} );
const planewall4 = new THREE.Mesh( geometryPlane5, materialPlane5);
scene.add( planewall4);

planewall4.rotation.y = THREE.MathUtils.degToRad(90);
planewall4.scale.x = 40;     
planewall4.scale.y = 40;
planewall4.scale.z = 1;
planewall4.position.z = 0;
planewall4.position.y = 20;
planewall4.position.x = -20;

// ********IMPORT 3D MODELS**************************

//add model
var bellyKirby;

// declare variables for animation
var mixer;            // THREE.js animation mixer
var kirbAnim;   // animation action

// add a 3d model
const gltfLoader = new GLTFLoader();
gltfLoader.load('media/models/bellydancingkirby.glb', (gltf) => {

    bellyKirby = gltf.scene;
    bellyKirby.scale.set(1,1,1);
    bellyKirby.position.set(0.5,2.2,-7);
    scene.add(bellyKirby);

    // ANIMATION MIXER
    mixer = new THREE.AnimationMixer(bellyKirby);
    // APPLY ANIMATION
    kirbAnim = gltf.animations[0]; //first animation
    mixer.clipAction(kirbAnim).play();

});


//add model
var dancingPerson;

// declare variables for animation
var mixer;            // THREE.js animation mixer
var personAnim;   // animation action

// add a 3d model
gltfLoader.load('media/models/dancing_lights_and_colours.glb', (gltf) => {

    dancingPerson = gltf.scene;
    dancingPerson.scale.set(3, 3, 3);
    dancingPerson.position.set(0,0,12);
    dancingPerson.rotation.y = THREE.MathUtils.degToRad(270);
    scene.add(dancingPerson);

    // ANIMATION MIXER
    mixer = new THREE.AnimationMixer(dancingPerson);
    // APPLY ANIMATION
    personAnim = gltf.animations[0]; //first animation
    mixer.clipAction(personAnim).play();
});

//add model
var moonShrine;
// declare variables for animation
var mixer;            // THREE.js animation mixer
var moonAnim;   // animation action
gltfLoader.load('media/models/the_mystic_moon_shrine.glb', (gltf) => {

    moonShrine = gltf.scene;
    moonShrine.scale.set(17,17,17);
    moonShrine.position.set(0,2,0);
    moonShrine.rotation.y = THREE.MathUtils.degToRad(180);
    scene.add(moonShrine);

    // ANIMATION MIXER
    mixer  = new THREE.AnimationMixer(moonShrine);
    // APPLY ANIMATION
    moonAnim = gltf.animations[0]; //first animation
    mixer.clipAction(moonAnim).play();

});

// add model
var cloudRing;
var mixer;            // THREE.js animation mixer
var cloudAnim;   // animation action
gltfLoader.load('media/models/cloud_ring.glb', (gltf) => {
    
        cloudRing = gltf.scene;
        cloudRing.scale.set(1.5, 1.5, 1.5);
        cloudRing.position.set(0,2,0);
        scene.add(cloudRing);
    
        // ANIMATION MIXER
        mixer  = new THREE.AnimationMixer(cloudRing);
        // APPLY ANIMATION
        cloudAnim = gltf.animations[0]; //first animation
        mixer.clipAction(cloudAnim).play();
    
    });









//**********************L I G H T S**********************

var lightSize = 7;
var lightSize2 = 2;
// 5: Add lighting to the scene

// dancer
var pointLight1 = new THREE.PointLight("#ffe1ff",lightSize,200)
pointLight1.position.set(0,4,12);
scene.add(pointLight1);
// clouds
var pointLight3 = new THREE.PointLight("#fffff",lightSize,200)
pointLight3.position.set(-9.5,16,1);
scene.add(pointLight3);
// moving with kirby
var pointLight4 = new THREE.PointLight("#fffff",lightSize,200)
pointLight4.position.set(0.5,4,-7);
scene.add(pointLight4);
// under middle ball
var pointLight5 = new THREE.PointLight("#ffaeff",lightSize,200)
pointLight5.position.set(0.5,4,0);
scene.add(pointLight5);
// under yellow ball
var pointLight6 = new THREE.PointLight("#eee600",lightSize2,200)
pointLight6.position.set(4.6,3.5,4);
scene.add(pointLight6);
// under teal ball
var pointLight7 = new THREE.PointLight("#eee600",lightSize2,200)
pointLight7.position.set(-3.5,3.5,4);
scene.add(pointLight7);
// under white ball
var pointLight8 = new THREE.PointLight("#eee600",lightSize2,200)
pointLight8.position.set(-3.6,3.5,-3.2);
scene.add(pointLight8);
// under red ball
var pointLight9 = new THREE.PointLight("#eee600",lightSize2,200)
pointLight9.position.set(4.6,3.5,-3.2);
scene.add(pointLight9);
// under green ball
var pointLight10 = new THREE.PointLight("#eee600",lightSize2,200)
pointLight10.position.set(5.6,3.5,.4);
scene.add(pointLight10);
// under small pink ball
var pointLight11 = new THREE.PointLight("#eee600",lightSize2,200)
pointLight11.position.set(-4.6,3.5,.4);
scene.add(pointLight11);





// adding ambient light
// second parameter is the intensity of the light
// var ambientLight = new THREE.AmbientLight("#fffff",.2);
// scene.add(ambientLight);




// adding orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5.1;


// responsive window size
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});



const clock = new THREE.Clock();


// FINAL: Render the scene
function animate(){
    requestAnimationFrame(animate);

    

    icosahedron.rotation.y += 0.01;
    ico1.rotation.y += 0.01;
    ico2.rotation.y += 0.02;
    icosahedron.position.x += 0.02;
    ico1.position.x += 0.02;
    ico2.position.x += 0.02;
    pointLight3.position.x += 0.02;
    
    if (icosahedron.position.x >= 10.5) {
        icosahedron.position.x = 10.5;
    } else if (icosahedron.position.x <= -10.5) {
        icosahedron.position.x = -10.5;
    }

    if (ico1.position.x >= 8.5) {
        ico1.position.x = 8.5;
    } else if (ico1.position.x <= -8.5) {
        ico1.position.x = -8.5;
    }

    if (ico2.position.x >= 9.5) {
        ico2.position.x = 9.5;
    } else if (ico2.position.x <= -9.5) {
        ico2.position.x = -9.5;
    }
    if (pointLight3.position.x >= 9.6) {
        pointLight3.position.x = 9.6;
    } else if (pointLight3.position.x <= -9.5) {
        pointLight3.position.x = -9.5;
    }

    

    controls.update();

    // update mixer
    if(mixer){
        mixer.update(clock.getDelta());
    }

    bellyKirby.rotation.y += 0.09;
    bellyKirby.rotation.z += 0.09;
    bellyKirby.position.z += 0.03;
    pointLight4.position.z += 0.03;
    cloudRing.rotation.y += 0.01;
    cloudRing.scale.x += 0.001;
    if (cloudRing.scale.x >= 2) {
        cloudRing.scale.x = 2;
    } else if (cloudRing.scale.x <= -2) {
        cloudRing.scale.x = -2;
    }
    

    renderer.render(scene,camera);
}

animate();