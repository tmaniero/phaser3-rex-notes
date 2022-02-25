import { ControllerKey } from './Const.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class InverseSpriteFxPipelineControl {
    constructor(gameObject, config) {
        this.gameObject = gameObject;
        this.resetFromJSON(config);

        gameObject[ControllerKey] = this;
    }

    resetFromJSON(o) {
        this.setIntensity(GetValue(o, 'intensity', 1));
        return this;
    }

    onDrawSprite(pipeline) {
        pipeline.intensity = this.intensity;
    }

    // intensity
    setIntensity(value) {
        this.intensity = value;
        return this;
    }
}

export default InverseSpriteFxPipelineControl;