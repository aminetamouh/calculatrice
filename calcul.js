window.onload = function(){
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click",traitement)
    }
}
function traitement(){
    if(this.textContent=="="){
        try{
            document.getElementById("ecran").innerText=eval(document.getElementById("ecran").textContent)
        }catch(error){
            document.getElementById("ecran").innerText="Instruction non valide"
        }
    }else if(this.textContent=="C"){
        document.getElementById("ecran").innerText=""
    }else if(this.textContent=="CE"){   
        var c = confirm("vous veuillez vraiment quitter calculatrice ...?")
            if(c){
                window.close();
            }
    }else{
        document.getElementById("ecran").innerText+=this.textContent
    }
}
