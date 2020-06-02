const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js')

describe('Itinerary', () => {
    it('is an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })
    it('has a port property with ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais')

        const itineray = new Itinerary([dover, calais]);
        expect(itineray.ports).toEqual([dover, calais]);
    })
})