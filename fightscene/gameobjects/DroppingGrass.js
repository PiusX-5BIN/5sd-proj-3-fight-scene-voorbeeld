class DroppingGrass extends GameObject { 
    constructor(x, y, minHeight, maxHeight) { 
        super(x, y, 30, random(minHeight, maxHeight));

    }

    Update() { 
        fill("#38761d");
        rect(0, this.Height / 2, this.Width, this.Height, 15);
    }
}