class Knight extends GameObject { 
    #weapon = null;

    constructor(x, y, w, h) { 
        super(x, y, w, h);

        this.#weapon = new Sword(this.Position.x + 5, this.Position.y - 90, 10, 100);
    }

    Update() { 
        strokeWeight(16);

        // right arm
        stroke("#f6b26b");
        line(5, -70, 5, -85);
        stroke("#666666");
        line(-12, -30, 5, -70);

        // body
        stroke("#444444");
        line(0, 0, -20, -50);

        // head and helmet
        noStroke();
        fill("#f6b26b");
        circle(-28, -75, 40);
        fill("#666666");
        arc(-28, -75, 50, 50, HALF_PI, (2 * PI) - QUARTER_PI);

        // left arm
        strokeWeight(16);
        stroke("#f6b26b");
        line(-30, -10, -40, 0);
        stroke("#666666");
        line(-16, -40, -30, -10);

        // left leg
        stroke("#666666");
        line(0, 0, -10, 30);
        line(-10, 30, -30, 60);
        stroke("#444444");
        line(-27, 55, -30, 60);

        // right leg
        stroke("#666666");
        line(0, 0, 20, 30);
        line(20, 30, 30, 60);
        stroke("#444444");
        line(28, 55, 30, 60);
    }
}