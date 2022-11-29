class Castle extends GameObject {

    constructor() {
        super(800, 420, 300, 400);
    }

    Update() {
        this.DrawDrawingBridge();
        this.DrawWall();

    }

    DrawDrawingBridge() { 
        stroke("black");
        strokeWeight(8);
        line(-200, -100, 0, -150);

        strokeWeight(1);

        fill("#533123");
        rect(-100, 100, 200, 40, 10);

        fill("#7f452e");
        rect(-190, -20, 40, 200, 10);
        for (let i = 0; i < 3; ++i) {
            line(-200 + (i * 10), 80, -200 + (i * 10), -120);
        }
    }

    DrawWall() { 
        stroke("#000");
        fill("#666666");
        rect((-this.Width / 2) + 20, (-this.Height / 2) - 10, 40, 80, 10);
        rect(0, 0, this.Width, this.Height, 20);

        let y = -this.Height / 2;
        for (let i = 0; i < 13; ++i) {
            if (i % 2 === 0) {
                rect(-110, y + 20, 80, 40, 10);
                rect(-50 , y + 20, 40, 40, 10);
                rect(10 , y + 20, 80, 40, 10);
            }
            else { 
                rect(-130, y + 20, 40, 40, 10);
                rect(-70 , y + 20, 80, 40, 10);
                rect(-10 , y + 20, 40, 40, 10);
            }
            y += 40;
        }
    }
}