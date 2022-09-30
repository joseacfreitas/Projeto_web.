
var creditos, temp, vezes=0;
		
function jogo(){

    var n1,n2,n3;
        
    document.getElementById("prize").style.color = "white";
    
    n1 = (Math.floor(Math.random()*9)+1);
    frm.moldura1.src = "Imagens/img"+n1+".png";
    
    n2 = (Math.floor(Math.random()*9)+1);
    frm.moldura2.src = "Imagens/img"+n2+".png";

    n3 = (Math.floor(Math.random()*9)+1);
    frm.moldura3.src = "Imagens/img"+n3+".png";
    
    if(vezes > 10){
        if(n1 == 7 && n2 == 7 && n3 == 7){
            creditos = creditos+ 2500;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "JACKPOT $2.500";
        }

        else if(  (n1 == 7 && n2 == 7) || (n1 == 7 && n3 == 7) || (n2 == 7 && n3 == 7) ){
            creditos = creditos+ 100;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "2 x Joker $100";
        }

        else if(n1 == 7 || n2 == 7 ||  n3 == 7){
            creditos = creditos+ 50;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "1 x Joker $50";
        }

        else if(  (n1 == 7 && n2 == 7) || (n1 == 7 && n3 == 7) || (n2 == 7 && n3 == 7) ){
            creditos = creditos+ 100;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "2 x Joker $100";
        }

        else if(n1 == 2 && n2 == 2 && n3 == 2){
            creditos = creditos+ 1500;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x Diamantes $1.500";
        }

        else if(  (n1 == 2 && n2 == 2) || (n1 == 2 && n3 == 2) || (n2 == 2 && n3 == 2) ){
            creditos = creditos+ 100;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "2 x Diamantes $100";
        }

        else if(n1 == 1 && n2 == 1 && n3 == 1){
            creditos = creditos+ 1000;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x Sacos $1.000";
        }

        else if(n1 == 6 && n2 == 6 && n3 == 6){
            creditos = creditos+ 900;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x Sacos $900";
        }

        else if(n1 == 4 && n2 == 4 && n3 == 4){
            creditos = creditos+ 800;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x cocktail $800";
        }

        else if(n1 == 3 && n2 == 3 && n3 == 3){
            creditos = creditos+ 700;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x Fichas $700";
        }

        else if(n1 == 8 && n2 == 8 && n3 == 8){
            creditos = creditos+ 500;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x Cartas $500";
        }

        else if(n1 == 9 && n2 == 9 && n3 == 9){
            creditos = creditos+ 300;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x Dados $300";
        }

        else if(n1 == 5 && n2 == 5 && n3 == 5){
            creditos = creditos+ 100;
            document.getElementById("prize").style.color = "blue";
            document.getElementById("prize").innerHTML = "3 x Gatos $100";
        }
        
        else{
            creditos = creditos - 50;
        }
            
        frm.txt_creditos.value = creditos;
        vezes=0;
        clearInterval(temp);
    }
        
    else { vezes++ }
    
    if(creditos <=0){
        alert("Ficou sem créditos!"); 
        frm.btn.style.visibility="hidden";
        document.getElementById("prize").style.color = "blue";
        document.getElementById("prize").innerHTML = "Ficou sem créditos";	
        frm.restartBtn.style.visibility="initial";
    }
}

function inicio(){
    creditos = eval(prompt("Introduza o número de creditos"));
    frm.txt_creditos.value = creditos;
}

function restart(){
inicio()   
frm.restartBtn.style.visibility="hidden";
frm.btn.style.visibility="initial";
document.getElementById("prize").style.color = "white";
}