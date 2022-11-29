class Sword extends GameObject { 
    constructor(x, y, w, h) { 
        super(x, y, w, h);
    }


    Update() { 
        fill("#999999");
        triangle(-5, -10, 0, -120, 5, -10);
        stroke("#000");
        strokeWeight(4);
        line(-20, -10, 20, -10);
        line(0, 5, 0, -10);
    }
}