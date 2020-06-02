const Itinerary = require('../src/Itinerary.js');


describe('Itinerary', () => {
    describe('with ports', () => {
        let dover;
        let calais;
        let itineray;
    beforeEach(() => {
        dover = jest.fn();
        calais = jest.fn();
        itineray = new Itinerary([dover, calais]);
    })
        it('is an object', () => {
            expect(new Itinerary()).toBeInstanceOf(Object);
        })
        it('has a port property with ports', () => {
            expect(itineray.ports).toEqual([dover, calais]);
        })
    })
    
})