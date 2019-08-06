var campos = [

    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var form = document.querySelector('.form');
var tabela = document.querySelector('#tabela');

form.addEventListener('submit', function(evento){

    evento.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo){

        var td = document.createElement('td');

        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');

    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tabela.appendChild(tr);

    form.reset();
    campos[0].focus();
});