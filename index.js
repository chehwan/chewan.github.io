const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,   // 화면 가로
    height: window.innerHeight, // 화면 세로
    scale: {
        mode: Phaser.Scale.ENVELOP,   // 화면에 맞게 자동 조정
        autoCenter: Phaser.Scale.CENTER_BOTH // 중앙 정렬
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
const game = new Phaser.Game(config);




function preload() {
    this.load.image("pigeon", "pigeon.png");
}
// x좌표, y좌표
function create() {
    this.pigeon2 = this.add.image(this.scale.width / 2,  this.scale.height / 2, "pigeon").setOrigin(0.5, 0.5);
    this.pigeon2.setScale(0.2)
    this.pigeon = this.add.image(this.scale.width / 2 +100,this.scale.height / 2,"pigeon");
    
    this.pigeon.setScale(0.1);
    this.keys = this.input.keyboard.addKeys({
        up: "W",
        down: "S",
        left: "A",
        right: "D",
        space: "SPACE"
    });
}


function update() {
    let speed = 5;
    let angleSpeed = 1;
    let  pigeonSize = 0.3;
    let pigeon2Size = 0.6;
   if (this.keys.right.isDown) {
        this.pigeon.x += speed;
    }
    if (this.keys.left.isDown) {
        this.pigeon.x -= speed;
    }
    if (this.keys.up.isDown) {
        this.pigeon.y -= speed;
    }
   if (this.keys.down.isDown) {
        this.pigeon.y += speed;
    }
    this.pigeon.angle += angleSpeed / (pigeonSize / pigeon2Size);
    this.pigeon2.angle -= angleSpeed
}