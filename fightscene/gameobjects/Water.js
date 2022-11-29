class Water extends GameObject { 
    constructor(x, y, w, h) { 
        super(x, y, w, h);
    }

    Update() { 
        fill("#3c78d8");
        rect(0, 0, this.Width, this.Height);
    }
}