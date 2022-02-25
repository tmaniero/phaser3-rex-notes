import { ControllerKey } from './Const.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class InverseSpriteFxPipelineControl {
    constructor(pipeline, gameObject, config) {
        this.pipeline = pipeline;
        this.gameObject = gameObject;
        this.resetFromJSON(config);

        gameObject[ControllerKey] = this;

        gameObject.once('destroy', this.destroy, this);
    }

    destroy() {
        this.gameObject[ControllerKey] = undefined;

        this.pipeline = undefined;
        this.gameObject = undefined;
    }

    resetFromJSON(o) {
        this.setIntensity(GetValue(o, 'intensity', 1));
        return this;
    }

    onDrawSprite() {
        this.pipeline.intensity = this.intensity;
    }

    // intensity
    setIntensity(value) {
        this.intensity = value;
        return this;
    }
}

export default InverseSpriteFxPipelineControl;