class Ground extends GameObject {
    #droppingGrassPatches = [];

    constructor(x, y, w, h) {
        super(x, y, w, h);

        for (let i = 0; i < 3; ++i) {
            let xd = (this.Position.x - (this.Width / 2)) + (random(20, this.Width - 20));

            this.#droppingGrassPatches.push(
                new DroppingGrass(xd, this.Position.y - (this.Height / 2) + 15, this.Height / 5, this.Height / 2)
            );
        }
    }

    Update() {

        fill("#85200c");
        rect(0, 0, this.Width, this.Height, 20);

        fill("#38761d");
        rect(0, (-this.Height / 2) + (30 / 2), this.Width, 30, 20);
    }
}