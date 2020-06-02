const Port = require('../src/Port.js')


describe('Port', () => {
    describe('with ships and ports', () => {
        let port;
        let ship;
        let titanic;
        let queenMary;

        beforeEach(() => {
            port = new Port('Dover');
            ship = jest.fn();
            titanic = jest.fn();
            queenMary = jest.fn();
        })
        it('exsists as Object', () => {
            expect(new Port()).toBeInstanceOf(Object);
        })
        it('has a name', () => {
            expect(port.name).toBe('Dover');
        })
        it('can add a ship', () => {
            port.addShip(ship);
            port.addShip(titanic);
            expect(port.ships).toContainEqual(ship,titanic);
        })
        it('can remove a ship', () => {
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);
            expect(port.ships).toEqual([titanic]);
        })
    })
    
})