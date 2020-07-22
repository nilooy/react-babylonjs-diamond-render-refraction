import React, { Component } from "react";
import * as BABYLON from "babylonjs";
import CreateStones from "./createStones";

class Bitstones extends Component {
  state = {
    color: this.props.color,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.color !== this.props.color) {
      var texture = new BABYLON.Texture(
        "assets/textures/" + this.props.color + ".jpg",
        window.scene
      );

      window.scene.materials[1].diffuseTexture = texture;
      window.scene.materials[1].refractionTexture = texture;
      window.scene.materials[1].emissiveTexture = texture;
      window.scene.materials[1].lightmapTexture = texture;
      window.scene.materials[1].lightmapTexture.level = 0.6;
    }
  }

  componentDidMount() {
    console.log(this.props);
    const canvas = document.getElementById(
      this.props.model + "-" + this.props.color
    );
    const engine = new BABYLON.Engine(canvas, true);

    window.scene = CreateStones(
      this.props.model,
      engine,
      canvas,
      this.props.color
    );

    engine.runRenderLoop(function () {
      window.scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });
  }

  render() {
    return (
      <canvas
        id={this.props.model + "-" + this.props.color}
        className="stone_in_card"
      />
    );
  }
}

export default Bitstones;
