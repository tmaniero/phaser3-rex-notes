class BaseSpriteFxPipelinePlugin extends Phaser.Plugins.BasePlugin {
    setSpriteFxPipelineClass(
        SpriteFxPipelineClass,
        ControllerKey,
        ControllerClass
    ) {
        this.pipeline = this.game.renderer.pipelines.add(ControllerKey, new SpriteFxPipelineClass(this.game));
        this.controllerKey = ControllerKey;
        this.controllerClass = ControllerClass;
        return this;
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    add(gameObject, config) {
        gameObject.setPipeline(this.pipeline);
        if (gameObject[this.controllerKey]) {
            gameObject[this.controllerKey].resetFromJSON(config);
        } else {
            var controller = new this.controllerClass(gameObject, config);
        }
        return this;
    }

    get(gameObject) {
        return gameObject[this.controllerKey];
    }

    remove(gameObject) {
        gameObject.pipeline = gameObject.defaultPipeline;
        return this;
    }
}

export default BaseSpriteFxPipelinePlugin;