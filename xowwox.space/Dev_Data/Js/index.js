var lesson5 = {
    scene: null,
    camera: null,
    renderer: null,
    container: null,
    controls: null,
    clock: null,
    stats: null,
    cube: null,
    login: null,
    loadObject: null,
    rotSpeed: 0.0003,
    loading: null,

    init: function () { // Initialization

 
        // create main scene
        this.scene = new THREE.Scene();

        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;

        // prepare camera
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 1000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(0, 30, 300);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        
       
        // prepare renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor(0xffffff);

        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;

        // prepare container
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);

        // events
        THREEx.WindowResize(this.renderer, this.camera);

        // prepare clock
        this.clock = new THREE.Clock();


        // add point light
        var spLight = new THREE.PointLight(0xffffff, 1.75, 1000);
        spLight.position.set(-100, 200, 200);
        this.camera.add(spLight);

        //var directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        //directionalLight.position.set(40, 0, 200);
        //this.scene.add(directionalLight);

        // add simple cube Point of view
        this.cube = new THREE.Mesh(new THREE.CubeGeometry(0, 0, 0), new THREE.MeshLambertMaterial({ color: 0xffffff * Math.random() }));
        this.cube.position.set(0, 0, 0);
        this.scene.add(this.cube);

        // add simple cube
        //this.login = new THREE.Mesh(new THREE.CubeGeometry(20, 20, 20), new THREE.MeshLambertMaterial({ color: 0xffffff * Math.random() }));
        //this.login.position.set(40, 0, -200);
        
        //this.camera.add(this.login);

        

        // add custom objects
        // .....
        cuba = new THREE.Mesh(new THREE.CubeGeometry(50, 20, 50), new THREE.MeshLambertMaterial({ color: 0x00616d, transparent: true, opacity: 0.6 }));
        cuba.position.set(-20, 10, -100);
        this.camera.add(cuba);


        //var loader = new THREE.JSONLoader(); // init the loader util

        //// init loading
        //loader.load('Dev_Data/Js/cube.js', function (geometry) {
        //    // create a new material
        //    var material = new THREE.MeshLambertMaterial({
        //        //map: THREE.ImageUtils.loadTexture('path_to_texture'),  // specify and load the texture
        //        colorAmbient: [0.480000026226044, 0.480000026226044, 0.480000026226044],
        //        colorDiffuse: [0.480000026226044, 0.480000026226044, 0.480000026226044],
        //        colorSpecular: [0.8999999761581421, 0.8999999761581421, 0.8999999761581421]
        //    });
  
        //    // create a mesh with models geometry and material
        //    var mesh = new THREE.Mesh(
        //      geometry,
        //      material
        //    );

        //    lesson5.camera.add(mesh);
        //});

        //// OK
        lesson5.loading = false;
        var loader = new THREE.ObjectLoader();
        loader.load('Dev_Data/Js/smb.js', function (object) {
            lesson5.loadObject = object;
            lesson5.loadObject.material = new THREE.MeshLambertMaterial({ color: 0xd3d3d3 });
            lesson5.loadObject.position.set(35, 10, -100);
            //lesson5.loadObject.applyMatrix( new THREE.Matrix4().makeTranslation(15, 0, -100) );
            lesson5.loadObject.scale.set(7, 7, 7);
            lesson5.camera.add(lesson5.loadObject);
            console.debug("loaded");
        });


        //// Text Capcha hmmm
        //lesson5.loading = false;
        //var loader = new THREE.ObjectLoader();
        //loader.load('Dev_Data/Js/cipher.js', function (object) {
        //    object.material = new THREE.MeshLambertMaterial({ color: 0xd3d3d3 });
        //    object.position.set(0, 0, -10);
        //    //lesson5.loadObject.applyMatrix( new THREE.Matrix4().makeTranslation(15, 0, -100) );
        //    object.scale.set(1, 1, 1);
        //    object.rotation.set(0, 0.1, 0);
        //    lesson5.camera.add(object);
        //    console.debug("cipher loaded");
        //});


        // Particle

        //Work as well
        //var loader = new THREE.OBJLoader();
        //loader.load('Dev_Data/Js/cube.obj', function (object) {
        //    object.position.set(40, 0, -100);
        //    object.scale.set(20, 20, 20);
        //    lesson5.camera.add(object);
        //});

        // Black
        //var loader = new THREE.OBJLoader();
        //loader.load('Dev_Data/Js/man.obj', function (object) {

        //    object.traverse(function (child) {
        //        if (child instanceof THREE.Mesh)
        //            child.material = new THREE.MeshLambertMaterial({ color: 0x554455 });
        //    });

        //    object.position.set(40, 0, -100);
        //    object.scale.set(7, 7, 7);
        //    lesson5.camera.add(object);
        //});

        // add simple skybox

       
        this.drawSimpleSkybox();

    },

    CheckRotation: function() {

    var x = this.camera.position.x,
        y = this.camera.position.y,
        z = this.camera.position.z;

    this.camera.position.x = x * Math.cos(this.rotSpeed) + z * Math.sin(this.rotSpeed);
    this.camera.position.z = z * Math.cos(this.rotSpeed) - x * Math.sin(this.rotSpeed);

    this.camera.position.y = y * Math.cos(this.rotSpeed) + z * Math.sin(this.rotSpeed);
    this.camera.position.z = z * Math.cos(this.rotSpeed) - y * Math.sin(this.rotSpeed);

    this.camera.lookAt(this.cube.position);

},

    drawSimpleSkybox: function() {
        // define path and box sides images
        var path = 'Dev_Data/Img/Bgd/';
        var sides = [path + 'sb.jpg', path + 'sb.jpg', path + 'sb.jpg', path + 'sb.jpg', path + 'sb.jpg', path + 'sb.jpg'];

        // load images
        var scCube = THREE.ImageUtils.loadTextureCube(sides);
        scCube.format = THREE.RGBFormat;

        // prepare skybox material (shader)
        var skyShader = THREE.ShaderLib["cube"];
        skyShader.uniforms["tCube"].value = scCube;
        var skyMaterial = new THREE.ShaderMaterial( {
            fragmentShader: skyShader.fragmentShader, vertexShader: skyShader.vertexShader,
            uniforms: skyShader.uniforms, depthWrite: false, side: THREE.BackSide
        });

        // create Mesh with cube geometry and add to the scene
        var skyBox = new THREE.Mesh(new THREE.CubeGeometry(500, 500, 500), skyMaterial);
        skyMaterial.needsUpdate = true;

        this.scene.add(skyBox);
    }

};

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    render();
    lesson5.CheckRotation();
    lesson5.loadObject.rotation.y += 0.01;

    //lesson5.loadObject.rotation.y += lesson5.rotSpeed + 0.001;
    //lesson5.camera.rotation.x += 0.1;
    //lesson5.controls.rotation.x += 0.1;
}



// Update controls and stats
function update() {
 
}

// Render the scene
function render() {
    if (lesson5.renderer) {
        lesson5.renderer.render(lesson5.scene, lesson5.camera);
    }

    
}

// Initialize lesson on page load
function initializeLesson() {
    lesson5.init();
    animate();
}

if (window.addEventListener)
    window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
    window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;
