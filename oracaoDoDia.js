
    const mensagens =["Oração é o canal que nos liga a Deus (Agostinho de Hipona)" , "A oração é a linguagem do Céu(Carlo Acutis)","A oração é o alimento da alma(Padre Ibiapina", "e a graça,repito, vem pela oração(Frei Damião)","Quem reza, Deus ouve(Padre Cícero)"," Portanto, vós orareis assim: Pai nosso que estás nos céus, santificado seja o teu nome venha o teu reino, seja feita a tua vontade, assim na terra como no céu o pão nosso de cada dia nos dá hoje, perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores; e não nos induzas à tentação, mas livra-nos do mal(Jesus Cristo)",
    "“Eu rogo por eles; não rogo pelo mundo, mas por aqueles que me deste, porque são teus(Jesus Cristo)","Mas Jesus retirava-se para lugares solitários e orava( Lucas 5:16)",
    "Eu rogo também por aqueles que virão a crer em mim, por meio da palavra deles(Jesus Cristo)",
    "Perdoo de coração aos meus inimigos e ofereço a Deus o sacrifício da minha vida(Dom Vital)",
 'A oração não consiste apenas em pedir, mas também em inclinar a vontade para receber a graça(São Tomás de Aquino)'
    ]


const indice = Math.floor(Math.random() * mensagens.length);
(mensagens[indice]);
  function mostrarResposta() {
    document.getElementById("meuBotao").classList.add("hidden");
    document.getElementById("resposta").classList.remove("hidden"); }
