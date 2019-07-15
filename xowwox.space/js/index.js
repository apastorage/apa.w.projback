var lesson5 = {
    scene: null,
    camera: null,
    renderer: null,
    container: null,
    controls: null,
    clock: null,
    stats: null,

    init: function () { // Initialization

        // create main scene
        this.scene = new THREE.Scene();

        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;

        // prepare camera
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 1000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(0, 30, 150);
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

        // prepare controls (OrbitControls)
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 0, 0);
        this.controls.maxDistance = 700;

        // prepare clock
        this.clock = new THREE.Clock();

        // prepare stats
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '50px';
        this.stats.domElement.style.bottom = '50px';
        this.stats.domElement.style.zIndex = 1;
        this.container.appendChild(this.stats.domElement);

        // add point light
        var spLight = new THREE.PointLight(0xffffff, 1.75, 1000);
        spLight.position.set(-100, 200, 200);
        this.scene.add(spLight);

        // add simple cube
        var cube = new THREE.Mesh(new THREE.CubeGeometry(50, 10, 50), new THREE.MeshLambertMaterial({ color: 0xffffff * Math.random() }));
        cube.position.set(0, 0, 0);
        this.scene.add(cube);

        // add custom objects
        // .....

        // add simple skybox
        this.drawSimpleSkybox();
        this.drawReflectingObjects();

    },

    drawSimpleSkybox: function() {
        // define path and box sides images
        var path = 'skybox/1/';
        var sides = [path + '1.png', path + '1.png', path + '1.png', path + '1.png', path + '1.png', path + '1.png'];

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
    },



    drawReflectingObjects: function () {
        // Object 1: rectangle

        // create additional camera
        this.mCubeCamera = new THREE.CubeCamera(0.1, 1000, 1000); // near, far, cubeResolution
        this.scene.add(this.mCubeCamera);

        // create mirror material and mesh
        var mirrorCubeMaterial = new THREE.MeshBasicMaterial({ envMap: this.mCubeCamera.renderTarget, side: THREE.DoubleSide });
        this.mCube = new THREE.Mesh(new THREE.CubeGeometry(100, 100, 5, 1, 1, 1), mirrorCubeMaterial);
        this.mCube.position.set(-50, 0, -150);
        this.mCubeCamera.position = this.mCube.position;
        this.mCubeCamera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene.add(this.mCube);

        // Object 2: sphere

        // create additional camera
        this.mSphereCamera = new THREE.CubeCamera(0.1, 1000, 100);
        this.scene.add(this.mSphereCamera);

        // create mirror material and mesh
        var mirrorSphereMaterial = new THREE.MeshBasicMaterial({ envMap: this.mSphereCamera.renderTarget, side: THREE.DoubleSide });
        this.mSphere = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 32), mirrorSphereMaterial);
        this.mSphere.position.set(50, 0, -150);
        this.mSphereCamera.position = this.mSphere.position;
        this.mSphereCamera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene.add(this.mSphere);
    }

};

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    render();
    update();
}

// Update controls and stats
function update() {
    lesson5.controls.update(lesson5.clock.getDelta());
    lesson5.stats.update();
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
