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
    this.load.image("bot", "entrybot.png");
}
// x좌표, y좌표
function create() {
    this.bot2 = this.add.image(this.scale.width / 2,  this.scale.height / 2, "bot").setOrigin(0.5, 0.5);
    this.bot2.setScale(0.6)
    this.bot = this.add.image(this.scale.width / 2 +100,this.scale.height / 2,"bot");
    
    this.bot.setScale(0.3);
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
    let botSize = 0.3;
    let bot2Size = 0.6;
   if (this.keys.right.isDown) {
        this.bot.x += speed;
    }
    if (this.keys.left.isDown) {
        this.bot.x -= speed;
    }
    if (this.keys.up.isDown) {
        this.bot.y -= speed;
    }
   if (this.keys.down.isDown) {
        this.bot.y += speed;
    }
    this.bot.angle += angleSpeed / (botSize / bot2Size);
    this.bot2.angle -= angleSpeed
}