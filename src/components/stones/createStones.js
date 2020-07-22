import * as BABYLON from "babylonjs";
import "babylonjs-loaders";
import stoneMaterial from "./stoneMaterial";

export default function createScene(model, engine, canvas, color, type) {
  // Init the babylon engine
  let scene = new BABYLON.Scene(engine);

  // change the default background to black
  scene.clearColor = new BABYLON.Color3(0, 0, 0);

  // Adding Light
  new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 6, 0), scene);

  //Adding another light
  let light = new BABYLON.PointLight(
    "Omni",
    new BABYLON.Vector3(20, 20, 100),
    scene
  );

  // var ground = BABYLON.Mesh.CreateGround("ground1", 10, 6, 2, scene);

  //Adding Camera
  // scene.createDefaultCameraOrLight(true, true, true);
  // let camera = scene.activeCamera;

  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0,
    0,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );

  camera.attachControl(canvas, true);
  // The first parameter can be used to specify which mesh to import. Here we import all meshes
  // Async import mesh function with callback
  BABYLON.SceneLoader.ImportMeshAsync(
    "",
    "assets/models/",
    model + ".glb",
    scene
  ).then((loadedMesh) => {
    let stone = loadedMesh.meshes[1];

    camera.setTarget(stone.getBoundingInfo().boundingBox.centerWorld); // Find center & set target
    if (model == "diamond") camera.beta = 1.5;
    else camera.beta = 9.5;
    camera.alpha = 10;
    if (model == "diamond") camera.radius = 9.5;
    else camera.radius = 1;
    // camera.position.x = 2;

    scene.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
      "assets/textures/environment.dds",
      scene
    );

    // Set Material
    stone.material = stoneMaterial(scene, color);
    // camera.useFramingBehavior = true;

    camera.angularSensibilityX = -1000;
    camera.angularSensibilityY = -1000;
    // set position and add auto rotating animation

    autoRotateAnimation(camera);
  });

  // Move the light with the camera
  scene.registerBeforeRender(function () {
    light.position = camera.position;
  });

  return scene;
}

// Add an auto rotation animation
var autoRotateAnimation = function (camera) {
  var autoRotationCamera = new BABYLON.AutoRotationBehavior();
  autoRotationCamera.idleRotationSpeed = 0.8;
  autoRotationCamera.idleRotationWaitTime = 10;
  autoRotationCamera.idleRotationSpinupTime = 100;
  autoRotationCamera.zoomStopsAnimation = true;
  autoRotationCamera.attach(camera);
  autoRotationCamera.init();
};
