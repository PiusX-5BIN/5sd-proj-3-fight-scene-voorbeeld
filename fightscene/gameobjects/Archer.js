class Archer extends GameObject { 
    #weapon = null;

    constructor(x, y, w, h) { 
        super(x, y, w, h);

        this.#weapon = new Bow(this.Position.x -25, this.Position.y - 40, 10, 100);
    }

    Update() { 

        strokeWeight(16);

        // left arm
        strokeWeight(16);
        stroke("#f6b26b");
        line(-50, -40, -65, -40);
        stroke("#7f452e");
        line(-16, -40, -50, -40);
        
        // body
        stroke("#533123");
        line(0, 0, -20, -50);
        
        // head and helmet
        noStroke();
        fill("#f6b26b");
        circle(-28, -75, 40);
        fill("#7f452e");
        arc(-28, -75, 50, 50, PI + PI / 6, PI / 6);
        stroke("#533123");
        strokeWeight(4);
        line(0, -58, -60, -92);

        // right arm
        strokeWeight(16);
        stroke("#7f452e");
        line(-12, -30, 5, -40);
        stroke("#f6b26b");
        line(-12, -40, -25, -40);
        stroke("#7f452e");
        line(-12, -30, 5, -40);
        line(5, -40, -12, -40);

        // left leg
        strokeWeight(16);
        stroke("#7f452e");
        line(0, 0, -20, 30);
        line(-20, 30, -30, 60);
        stroke("#533123");
        line(-30, 55, -30, 60);

        // right leg
        stroke("#7f452e");
        line(0, 0, 10, 30);
        line(10, 30, 30, 60);
        stroke("#533123");
        line(25, 55, 30, 60);
    }
}