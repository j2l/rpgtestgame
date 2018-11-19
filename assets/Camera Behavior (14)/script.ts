class CameraBehavior extends Sup.Behavior {
  
  position = new Sup.Math.Vector2();
  cameraWidth: number;
  cameraHeight: number;
  
  awake() {
    this.cameraHeight = this.actor.camera.getOrthographicScale();
    this.cameraWidth = this.cameraHeight * this.actor.camera.getWidthToHeightRatio();
  }

  update() {
    this.position.copy(Game.playerBehavior.position);
    this.position.x = Sup.Math.clamp(this.position.x, this.cameraWidth / 2, Game.mapWidth - this.cameraWidth / 2);
    this.position.y = Sup.Math.clamp(this.position.y, this.cameraHeight / 2, Game.mapHeight - this.cameraHeight / 2);
    
    this.actor.setLocalPosition(this.position);
  }
}
Sup.registerBehavior(CameraBehavior);
