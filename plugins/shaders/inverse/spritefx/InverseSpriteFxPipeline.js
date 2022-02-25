import FragSrc from '../inverse-postfxfrag.js';
import { ControllerKey } from './Const.js';

const SpriteFXPipeline = Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline;

class InverseSpriteFxPipeline extends SpriteFXPipeline {
    constructor(game) {
        super({
            name: ControllerKey,
            game: game,
            renderTarget: true,
            fragShader: FragSrc
        });

        this.intensity = 1;
    }

    onDrawSprite(gameObject) {
        gameObject[ControllerKey].onDrawSprite(this);
    }

    onDraw(target) {
        this.set1f('intensity', this.intensity);
        this.drawToGame(target);
    }
}

export default InverseSpriteFxPipeline;