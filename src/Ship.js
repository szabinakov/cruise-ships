class Ship {
    constructor(currentPort){
        this.currentPort = currentPort;
    }
    setSail() {
        this.currentPort = null;
    }
    dock(newport) {
        this.currentPort = newport;
    }
}

module.exports = Ship;