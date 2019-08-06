class Negociacao {

    constructor(data, quantidade, valor){

        this._data =  new Date(data);
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume = this.calculaVolume();

        Object.freeze(this);
    }

    calculaVolume(){

        return this._quantidade * this._valor;
    }

    get data(){

        return new Date(this._data);
    }

    get quantidade(){

        return this.quantidade;
    }

    get valor(){

        return this._valor;
    }

    get volume(){

        return this._volume;
    }
}