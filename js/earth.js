var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 1, 100 );
var globe ; 
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );

//document.body.appendChild( renderer.domElement );
 
camera.position.z = 100;
 


var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);
 
var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);
 
var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();
 
scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('../assets/');
mtlLoader.setPath('../assets/');
mtlLoader.load('1227-Earth.mtl', function (materials) {
 
    materials.preload();
 
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('../assets/');
    objLoader.load('1227-Earth.obj', function (object) {
 
        scene.add(object);
        object.position.y -= 30;
        globe = object;
 
    });
 
});

var animate = function () {
	requestAnimationFrame( animate );
	globe.rotation.y +=0.005;
	renderer.render(scene, camera);

};
 
animate();