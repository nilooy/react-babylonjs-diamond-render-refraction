import * as BABYLON from "babylonjs";

export default function StoneMaterial(scene, color) {
  var pbr = new BABYLON.PBRMaterial("pbr", scene);

  pbr.metallic = 0.0;
  pbr.roughness = 0.3;

  var texture = new BABYLON.Texture("assets/textures/" + color + ".jpg", scene);

  pbr.diffuseTexture = texture;
  pbr.refractionTexture = texture;
  pbr.emissiveTexture = texture;
  pbr.lightmapTexture = texture;

  pbr.diffuseTexture.coordinatesMode = BABYLON.Texture.EXPLICIT_MODE;
  pbr.refractionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
  pbr.emissiveTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;

  pbr.diffuseTexture.level = 1;
  pbr.refractionTexture.level = 0.6;
  pbr.emissiveTexture.level = 0.34;
  pbr.lightmapTexture.level = 0.6;

  pbr.alpha = 1;
  pbr.alphaMode = BABYLON.Engine.ALPHA_SUBTRACT;
  pbr.backFaceCulling = true;
  pbr.disableDepthWrite = true;

  pbr.specularPower = 1.08;

  // pbr.subSurface.tintColor = BABYLON.Color3.Teal();

  // pbr.emissiveColor = new BABYLON.Color3(
  //   Math.random() * 1,
  //   Math.random() * 1,
  //   Math.random() * 1
  // );

  return pbr;
}
