let position;
const display = document.getElementById("divDisplay");
const tabela = document.getElementById("tabela");
let posPolo;

window.onload = function(){
    mostrarPolos();
}

function mostrarPolos(){
    const tabelaPolos = document.getElementById("pontosExistentes");
    polos.forEach(polo=>{
        const linha = `
        <tr>
            <td>${polo.nome}</td>
        </tr>
        `
        tabelaPolos.innerHTML += linha;
    })
}

function pesquisar(){
    let encontrado;
    const pesquisa = document.getElementById("inputPesquisa");
    const termo = pesquisa.value.trim().toLowerCase();

    polos.forEach(polo =>{
        if(polo.nome.toLowerCase() === termo){
            encontrado = true;
            posPolo = polo.pos;
        }
    });

    if(!encontrado){
        display.style.display = 'inline';
        const linha = `
            <tr>
                <td>Digite um ponto válido</td>
            </tr>`
        tabela.innerHTML += linha;
    }
    pesquisaPolo();
}

function pesquisaPolo(){
    display.style.display = 'inline';
    polos.forEach(polo =>{
        if(posPolo == polo.pos){
            const bike = polo.bikeQntd;
            const patinete = polo.patineteQntd;

            if(bike > 0 && patinete > 0){
                const linha = `
                <tr>
                    <td>Temos ${bike} bicicletas disponíveis!</td>
                    <td>Temos ${patinete} patinetes disponíveis!</td>
                </tr>`;
                tabela.innerHTML = linha;
            }else if(bike == 0 && patinete > 0){
                const linha = `
                <tr>
                    <td>Infelizmente não temos bicicletas disponíveis!</td>
                    <td>Temos ${patinete} patinetes disponíveis!</td>
                </tr>`;
                tabela.innerHTML = linha;
            }else if(bike > 0 && patinete == 0){
                const linha = `
                <tr>
                    <td>Temos ${bike} patinetes disponíveis!</td>
                    <td>Infelizmente não temos patinetes disponíveis!</td>
                </tr>`;
                tabela.innerHTML = linha;
            }else{
                const linha = `
                <tr>
                    <td>Infelizmente não temos bicicletas disponíveis!</td>
                    <td>Infelizmente não temos patinetes disponíveis!</td>
                </tr>`;
                tabela.innerHTML = linha;
            }
        }
    })

}

function cliquePolo(polo){
    const bike = polo.bikeQntd ?? 'N/A';
    const patinete = polo.patineteQntd ?? 'N/A';

    display.style.display = 'inline';

    if(bike > 0 && patinete > 0){
        const linha = `
        <tr>
            <td>Temos ${bike} bicicletas disponíveis!</td>
            <td>Temos ${patinete} patinetes disponíveis!</td>
        </tr>`;
        tabela.innerHTML = linha;
    }else if(bike == 0 && patinete > 0){
        const linha = `
        <tr>
            <td>Infelizmente não temos bicicletas disponíveis!</td>
            <td>Temos ${patinete} patinetes disponíveis!</td>
        </tr>`;
        tabela.innerHTML = linha;
    }else if(bike > 0 && patinete == 0){
        const linha = `
        <tr>
            <td>Temos ${bike} patinetes disponíveis!</td>
            <td>Infelizmente não temos patinetes disponíveis!</td>
        </tr>`;
        tabela.innerHTML = linha;
    }else{
        const linha = `
        <tr>
            <td>Infelizmente não temos bicicletas disponíveis!</td>
            <td>Infelizmente não temos patinetes disponíveis!</td>
        </tr>`;
        tabela.innerHTML = linha;
    }
}
