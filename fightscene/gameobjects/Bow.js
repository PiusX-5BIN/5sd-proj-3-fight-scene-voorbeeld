class Bow extends GameObject { 
    constructor(x, y, w, h) { 
        super(x, y, w, h);
    }
    Update() { 
        stroke("#000");
        strokeWeight(4);
        line(0, 0, -25, -45);
        line(0, 0, -25, 45);
        noFill();
        strokeWeight(8);
        stroke("#7f452e");
        arc(0, 0, 90, 120, PI - PI/3, PI + PI/3);
    }
}