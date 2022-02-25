import BaseSpriteFxPipelinePlugin from './utils/renderer/BaseSpriteFxPipelinePlugin.js';
import InverseSpriteFxPipeline from './inversespritefxpipeline.js';
import { ControllerKey } from './shaders/inverse/spritefx/Const.js';
import InverseSpriteFxPipelineControl from './shaders/inverse/spritefx/InverseSpriteFxPipelineControl.js';
import SetValue from './utils/object/SetValue.js';

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

SetValue(window, 'RexPlugins.Pipelines.InverseSpriteFx', InverseSpriteFxPipeline);

export default InverseSpriteFxPipelinePlugin;