class MensagemView {

    constructor(elemento){

        this._elemento = elemento;
    }

    _template(modelo){

        return `
        
            <p>${modelo.texto}</p>
        `;
    }

    update(modelo){

        this._elemento.innerHTML = this._template(modelo);
    }
}