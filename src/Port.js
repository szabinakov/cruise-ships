(function exportPort() {
class Port {
    constructor(name){
        this.ships = [];
        this.name = name;
    }
    addShip(ship) {
        this.ships.push(ship);
    }
    removeShip(ship) {
        this.ships = this.ships.filter(dockedShip => dockedShip !== ship);}
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  };
} ())
