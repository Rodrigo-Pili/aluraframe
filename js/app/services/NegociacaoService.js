class NegociacaoService {

    obterNegociacoesDaSemana(cb){

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4)
            
                if(xhr.status == 200){

                cb(null, JSON.parse(xhr.responseText).map(campo => new Negociacao(campo.data, campo.quantidade, campo.valor)));
            }else{

                console.log(xhr.responseText);
                cb('Não foi possível obter as negociações!', null);
            }
        };
        
        xhr.send();
    }
}