class OneDMovementScene extends Phaser.Scene {
    constructor() {
        super('OneDMovementScene');

        this.avatarX = 400;
        this.avatarY = 550;

        this.avatarMove = 7; 
        this.heartMove = 3; 
        
        this.heartActive = false; 
    }

    preload() {
        this.load.image('heart', 'assets/tile_heart.png');
        this.load.image('avatar', 'assets/character_squareRed.png');

    }

    create() {
        this.avatar = this.add.sprite(this.avatarX, this.avatarY, 'avatar');
        this.avatar.setOrigin(1, 2); 

        this.input.keyboard.on('keydown-A', () => {
            this.avatar.x -= this.avatarMove;
            this.avatar.setFlipX(false); 
           
            this.avatar.x = Phaser.Math.Clamp(this.avatar.x, 0, this.game.config.width);
        });

        this.input.keyboard.on('keydown-D', () => {
            this.avatar.x += this.avatarMove;
            this.avatar.setFlipX(true); 
            
            this.avatar.x = Phaser.Math.Clamp(this.avatar.x, 0, this.game.config.width);
        });

        this.input.keyboard.on('keydown-SPACE', () => {
            if (!this.heartActive) {
                this.heart= this.add.sprite(this.avatar.x-30, this.avatar.y - 130, 'heart');
                this.heartActive = true;
            }
        });
    }

    update() {
        if (this.heartActive) {
            this.heart.y -= this.heartMove;
           
            if (this.heart.y < -this.heart.height) {
                this.heart.destroy();
                this.heartActive = false;
            }
        }
    }
}


