  function verificarRespostas() {
        let acertos = 0;

    
        let q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value === "Monte Sinai") 
            acertos=acertos+1;


    
        let q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === "Natanael")
            acertos=acertos+1;

  
        let resultado = document.getElementById("resultado");
        resultado.classList.remove("d-none");
    
        resultado.innerHTML = `Você acertou <strong>${acertos}</strong> de 2 questões.`;}