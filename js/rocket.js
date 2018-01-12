var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.5, 100 );
var rocket; 
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true, alpha: true});
renderer.setSize( window.innerWidth , window.innerHeight );
renderer.setClearColor(0x000000, 0);

//document.body.appendChild( renderer.domElement );
 
camera.position.z = 25;
 

/*var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 50);
 
var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 50);
 
var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();*/

var light = new THREE.AmbientLight(0xffffff, 3); 
scene.add(light);
var light1 = new THREE.PointLight(0xffffff, 1); 
var light2 = new THREE.PointLight(0xffffff, .7); 
light1.position.set(-250, 250, 250);
light2.position.set(0, 250, -250);
scene.add(light1);
scene.add(light2);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.update();

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('../assets/');
mtlLoader.setPath('../assets/');
mtlLoader.load('CartoonRocket.mtl', function (materials) {
 
    materials.preload();
 
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('../assets/');
    objLoader.load('CartoonRocket.obj', function (object) {
 
        scene.add(object);
        //object.position.y -= 30;
        rocket = object;
 
    });
});

var animate = function () {
	requestAnimationFrame( animate );
	//rocket.rotation.y +=0.01;
	renderer.render(scene, camera);
};
 
animate();