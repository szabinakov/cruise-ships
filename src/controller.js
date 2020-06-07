
(function exportController () {

function Controller(ship) {

    this.initialiseSea();

    this.ship = ship;

    document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
    } );
};


Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = [
        './images/water0.png',
        './images/water1.png'
    ];
    let backgroundIndex = 0;
    window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage=`url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
    }, 1000);
};
Controller.prototype.renderPorts = function renderPorts(ports) {
    const portsElement = document.querySelector('#ports');
    portsElement.style.width = '0px';

    ports.forEach((port,index) => {
        const newPortElement = document.createElement('div');

        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        newPortElement.className = 'port';

        portsElement.appendChild(newPortElement);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
        }) 
}
Controller.prototype.renderShip = function renderShip() {
    const ship = this.ship;

    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
    const shipElement = document.querySelector('#ship');
    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;

};

Controller.prototype.setSail = function setSail() {
    const ship = this.ship
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

    if (!nextPortElement) {
        return this.renderMessage('End of the line!')
    }
    this.renderMessage(`Now departing ${ship.currentPort.name}`);
    
    const shipElement = document.querySelector('#ship');
    
    const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft ===  (nextPortElement.offsetLeft - 32)) {
            ship.dock();
            this.displayPorts();
            this.renderMessage(`Arriving at ${ship.currentPort.name}`);
            clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
    }, 20);
    ship.setSail();
    
}

Controller.prototype.renderMessage = function renderMessage (message) {
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerHTML = message;

    const viewport = document.querySelector('#viewport');
    viewport.appendChild(messageElement);
    setTimeout(() => {
        viewport.removeChild(messageElement);
    }, 2000);

}

Controller.prototype.displayPorts = function displayPorts() {
    const ship = this.ship;

    const currentPortDisplayedName = document.querySelector('#current-port')
    const nextPortDisplayedName = document.querySelector('#next-port')

    if(ship.currentPort) {
        currentPortDisplayedName.innerHTML = `Current Port : ${ship.currentPort.name}`;
    }

    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;

    if(nextPortIndex === ship.itinerary.ports.length) {
        nextPortDisplayedName.innerHTML = `End of the journey`;
    } else {
        nextPortDisplayedName.innerHTML = `Next Port : ${ship.itinerary.ports[nextPortIndex].name}`;
    }
}

Controller.prototype.createNewPort = function createNewPort() {
    const ship = this.ship

    const newPort = document.querySelector('#portcreator').nodeValue

    const portObject = new Port(newPort);


}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
}());