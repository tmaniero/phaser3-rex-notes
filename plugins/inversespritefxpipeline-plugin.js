import BaseSpriteFxPipelinePlugin from './utils/renderer/BaseSpriteFxPipelinePlugin.js';
import InverseSpriteFxPipeline from './shaders/inverse/spritefx/InverseSpriteFxPipeline.js';
import { ControllerKey } from './shaders/inverse/spritefx/Const.js';
import InverseSpriteFxPipelineControl from './shaders/inverse/spritefx/InverseSpriteFxPipelineControl.js';

class InverseSpriteFxPipelinePlugin extends BaseSpriteFxPipelinePlugin {
    constructor(pluginManager) {
        super(pluginManager);

        this.setSpriteFxPipelineClass(
            InverseSpriteFxPipeline,
            ControllerKey,
            InverseSpriteFxPipelineControl
        );
    }
}

export default InverseSpriteFxPipelinePlugin;