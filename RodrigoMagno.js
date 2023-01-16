class TicketManager {
    #precioBaseGanancia = 0.25;

    constructor() {
        this.compras = [];
    }

    getCompras = () => {
        return this.compras;
    }

    agregarEvento = (marca, estilo, precio, stock = 50) => {
        const evento = {
            marca,
            estilo,
            precio: precio+precio*this.#precioBaseGanancia,
            stock,
            participantes: []
           
        }
        
        if (this.compras.length === 0) {
            evento.id = 1;
        } else {
            evento.id = this.compras[this.compras.length - 1].id + 1;
        }

        this.compras.push(evento);
    }

    agregarUsuario = (idCompra, idUsuario) => {
        const eventoIndex = this.compras.findIndex(e=>e.id === idCompra);

        if (eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }

        const usuarioRegistrado = this.compras[eventoIndex].participantes.includes(idUsuario);

        if (usuarioRegistrado) {
            console.log('usuario ya registrado');
            return;
        }

        this.compras[eventoIndex].participantes.push(idUsuario);
    }
}

const manejadorCompras = new TicketManager();
manejadorCompras.agregarEvento('Corona', 'Cerveza Rubia', 340);
manejadorCompras.agregarUsuario(1, 2)
manejadorCompras.agregarEvento('Andes', 'Cerveza Roja', 260);
manejadorCompras.agregarEvento('Andes', 'Cerveza Rubia', 260);
console.log(manejadorCompras.getCompras());