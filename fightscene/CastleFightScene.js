class CastleFightScene extends Game { 
    #groundPieces = [];
    #castle = null;
    #water = null;
    #knight = null;
    #archer = null;

    constructor() {
        super();

        this.#knight = new Knight(300, 460, 40, 100);
        this.#archer = new Archer(720, 160, 40, 100);

        this.#water = new Water(500, 600, 400, 50);
        this.#groundPieces.push(new Ground(250, 600, 350, 150));
        this.#groundPieces.push(new Ground(50, 550, 350, 150));
        this.#castle = new Castle();
     }

    Update() { 
        background("#cfe2f3");
    }
}