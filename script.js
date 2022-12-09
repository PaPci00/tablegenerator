function start(){
const wiersze = document.querySelector('#wiersze');
const kolumny = document.querySelector('#kolumny');
const tabela = document.querySelector('#tabela');
const szukana = document.querySelector('#szukana');
let ilew = 0;
let ilek = 0;
let los = 0;
console.log(wiersze,kolumny,tabela)
}

function generuj(){
    let wynik = '<table>';
    ilew = wiersze.value;
    ilek = kolumny.value;

    for(let i=1; i<=ilew;i++){
        wynik+="<tr>";
        for (let j=1; j<=ilek;j++){
            los = Math.floor(Math.random()*100);
            if (los==szukana.value){
                wynik+='<td class ="kolor">'+los+"</td>";
            }   
            else {
                wynik+="<td>"+los+"</td>";
            }
        }
        wynik+="</tr>"
    }

    wynik+="</table>"
    tabela.innerHTML = wynik;
    console.log(wynik);
}
