// ======================================================
// 1. BANCO DE PERGUNTAS (Com Referências)
// ======================================================
const bancoDePerguntas = [
    // --- Perguntas Fáceis ---
    { pergunta: "Quem construiu a arca?", referencia: "Gênesis 6", opcoes: ["Moisés", "Noé", "Abraão", "Davi"], resposta: 1 },
    { pergunta: "Qual o nome do primeiro homem?", referencia: "Gênesis 2", opcoes: ["Adão", "Caim", "Abel", "Sete"], resposta: 0 },
    { pergunta: "Quem foi engolido por um grande peixe?", referencia: "Jonas 1", opcoes: ["Jonas", "Pedro", "Paulo", "Moisés"], resposta: 0 },
    { pergunta: "Quem matou Golias?", referencia: "1 Samuel 17", opcoes: ["Saul", "Davi", "Salomão", "Sansão"], resposta: 1 },
    { pergunta: "Quantos dias choveu no dilúvio?", referencia: "Gênesis 7", opcoes: ["7 dias", "30 dias", "40 dias", "100 dias"], resposta: 2 },
    { pergunta: "Onde Jesus nasceu?", referencia: "Lucas 2", opcoes: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"], resposta: 2 },
    { pergunta: "Quem traiu Jesus?", referencia: "Mateus 26", opcoes: ["Pedro", "João", "Judas Iscariotes", "Tomé"], resposta: 2 },
    { pergunta: "Qual é o primeiro livro da Bíblia?", referencia: "Gênesis 1", opcoes: ["Apocalipse", "Mateus", "Salmos", "Gênesis"], resposta: 3 },
    
    // --- Perguntas Médias ---
    { pergunta: "Quem abriu o Mar Vermelho?", referencia: "Êxodo 14", opcoes: ["Arão", "Moisés", "Josué", "Elias"], resposta: 1 },
    { pergunta: "Quem foi lançado na cova dos leões?", referencia: "Daniel 6", opcoes: ["Daniel", "Sadraque", "Mesaque", "Abednego"], resposta: 0 },
    { pergunta: "Quem era o homem mais forte da Bíblia?", referencia: "Juízes 16", opcoes: ["Golias", "Sansão", "Davi", "Hércules"], resposta: 1 },
    { pergunta: "Quem foi transformado em uma estátua de sal?", referencia: "Gênesis 19", opcoes: ["Sara", "Mulher de Ló", "Rebeca", "Rute"], resposta: 1 },
    { pergunta: "Qual profeta foi levado ao céu numa carruagem de fogo?", referencia: "2 Reis 2", opcoes: ["Eliseu", "Elias", "Isaías", "Jeremias"], resposta: 1 },
    { pergunta: "Quem negou Jesus três vezes?", referencia: "Lucas 22", opcoes: ["Judas", "Pedro", "João", "Tiago"], resposta: 1 },
    { pergunta: "Quem batizou Jesus?", referencia: "Mateus 3", opcoes: ["Deus", "João Batista", "Pedro", "Paulo"], resposta: 1 },

    // --- Perguntas Difíceis ---
    { pergunta: "Quem escreveu o livro de Apocalipse?", referencia: "Apocalipse 1", opcoes: ["Paulo", "Pedro", "João", "Lucas"], resposta: 2 },
    { pergunta: "Qual era a profissão de Mateus antes de seguir Jesus?", referencia: "Mateus 9", opcoes: ["Pescador", "Cobrador de impostos", "Carpinteiro", "Médico"], resposta: 1 },
    { pergunta: "Quem subiu numa árvore para ver Jesus?", referencia: "Lucas 19", opcoes: ["Nicodemos", "Zaqueu", "Bartimeu", "Lázaro"], resposta: 1 },
    { pergunta: "Quantas pragas o Egito sofreu?", referencia: "Êxodo", opcoes: ["7", "10", "12", "3"], resposta: 1 },
    { pergunta: "Quem foi a rainha que salvou o povo judeu?", referencia: "Ester", opcoes: ["Rute", "Ester", "Débora", "Maria"], resposta: 1 }
    // ADICIONE MAIS PERGUNTAS AQUI...
   , {
        "pergunta": "Qual foi o sinal da aliança de Deus com Noé?",
        "referencia": "Gênesis 9:13",
        "opcoes": ["A Arca", "O Arco-íris", "Uma pomba", "Um altar"],
        "resposta": 1
    },
    {
        "pergunta": "Quem vendeu a sua primogenitura por um prato de lentilhas?",
        "referencia": "Gênesis 25:34",
        "opcoes": ["Jacó", "Esaú", "Isaque", "José"],
        "resposta": 1
    },
    {
        "pergunta": "Quem lutou com um anjo e teve o nome mudado para Israel?",
        "referencia": "Gênesis 32:28",
        "opcoes": ["Abraão", "Moisés", "Jacó", "Davi"],
        "resposta": 2
    },
    {
        "pergunta": "Qual filho de Jacó foi vendido como escravo pelos irmãos?",
        "referencia": "Gênesis 37:28",
        "opcoes": ["Rúben", "Benjamim", "Judá", "José"],
        "resposta": 3
    },
    {
        "pergunta": "Onde Moisés recebeu os Dez Mandamentos?",
        "referencia": "Êxodo 19:20",
        "opcoes": ["Monte das Oliveiras", "Monte Sinai", "Monte Carmelo", "Monte Ararate"],
        "resposta": 1
    },
    {
        "pergunta": "O que Deus usou para guiar os israelitas no deserto durante a noite?",
        "referencia": "Êxodo 13:21",
        "opcoes": ["Uma estrela", "Uma coluna de fogo", "Uma nuvem", "Uma lâmpada"],
        "resposta": 1
    },
    {
        "pergunta": "Qual animal falou com o profeta Balaão?",
        "referencia": "Números 22:28",
        "opcoes": ["Um leão", "Uma ovelha", "Uma jumenta", "Um camelo"],
        "resposta": 2
    },
    {
        "pergunta": "Quem sucedeu Moisés na liderança de Israel?",
        "referencia": "Josué 1:1-2",
        "opcoes": ["Calebe", "Josué", "Arão", "Eleazar"],
        "resposta": 1
    },
    {
        "pergunta": "Qual cidade teve suas muralhas derrubadas após o povo gritar?",
        "referencia": "Josué 6:20",
        "opcoes": ["Jericó", "Ai", "Jerusalém", "Sodoma"],
        "resposta": 0
    },
    {
        "pergunta": "Quem pediu a Deus um sinal com um velo de lã?",
        "referencia": "Juízes 6:37",
        "opcoes": ["Sansão", "Gideão", "Jefté", "Baraque"],
        "resposta": 1
    },
    {
        "pergunta": "Qual a fonte da força de Sansão?",
        "referencia": "Juízes 16:17",
        "opcoes": ["Seus músculos", "Sua oração", "Seus cabelos longos", "Sua espada"],
        "resposta": 2
    },
    {
        "pergunta": "Quem foi a nora leal de Noemi?",
        "referencia": "Rute 1:16",
        "opcoes": ["Orfa", "Rute", "Ester", "Raquel"],
        "resposta": 1
    },
    {
        "pergunta": "Quem foi o primeiro rei de Israel?",
        "referencia": "1 Samuel 10:1",
        "opcoes": ["Davi", "Salomão", "Saul", "Samuel"],
        "resposta": 2
    },
    {
        "pergunta": "Qual instrumento Davi tocava para acalmar Saul?",
        "referencia": "1 Samuel 16:23",
        "opcoes": ["Harpa", "Tamborim", "Flauta", "Trombeta"],
        "resposta": 0
    },
    {
        "pergunta": "Quem foi o melhor amigo de Davi?",
        "referencia": "1 Samuel 18:1",
        "opcoes": ["Jônatas", "Joabe", "Abner", "Natã"],
        "resposta": 0
    },
    {
        "pergunta": "O que Salomão pediu a Deus?",
        "referencia": "1 Reis 3:9",
        "opcoes": ["Riqueza", "Vida longa", "Sabedoria", "Vitória na guerra"],
        "resposta": 2
    },
    {
        "pergunta": "Quem construiu o primeiro Templo em Jerusalém?",
        "referencia": "1 Reis 6",
        "opcoes": ["Davi", "Salomão", "Ezequias", "Josias"],
        "resposta": 1
    },
    {
        "pergunta": "Qual profeta desafiou os profetas de Baal no Monte Carmelo?",
        "referencia": "1 Reis 18:20",
        "opcoes": ["Eliseu", "Elias", "Isaías", "Jeremias"],
        "resposta": 1
    },
    {
        "pergunta": "Quem foi curado da lepra ao mergulhar 7 vezes no Rio Jordão?",
        "referencia": "2 Reis 5:14",
        "opcoes": ["Geazi", "Naamã", "Acabe", "Ben-Hadade"],
        "resposta": 1
    },
    {
        "pergunta": "Qual rainha salvou seu povo de ser destruído?",
        "referencia": "Ester 7",
        "opcoes": ["Vasti", "Ester", "Jezabel", "Atalia"],
        "resposta": 1
    },
    {
        "pergunta": "Satanás pediu permissão a Deus para testar a fé de quem?",
        "referencia": "Jó 1:12",
        "opcoes": ["Jó", "Abraão", "Pedro", "Paulo"],
        "resposta": 0
    },
    {
        "pergunta": "Qual é o maior capítulo da Bíblia?",
        "referencia": "Salmos",
        "opcoes": ["Salmo 23", "Salmo 119", "Salmo 91", "Salmo 150"],
        "resposta": 1
    },
    {
        "pergunta": "Quem interpretou o sonho do rei Nabucodonosor?",
        "referencia": "Daniel 2",
        "opcoes": ["José", "Ezequiel", "Daniel", "Jeremias"],
        "resposta": 2
    },
    {
        "pergunta": "Quem viu uma mão misteriosa escrevendo na parede?",
        "referencia": "Daniel 5",
        "opcoes": ["Dario", "Belsazar", "Ciro", "Nabucodonosor"],
        "resposta": 1
    },

    // NOVO TESTAMENTO
    {
        "pergunta": "Qual foi o primeiro milagre de Jesus?",
        "referencia": "João 2:11",
        "opcoes": ["Andar sobre as águas", "Transformar água em vinho", "Curar um cego", "Multiplicar pães"],
        "resposta": 1
    },
    {
        "pergunta": "Em qual rio Jesus foi batizado?",
        "referencia": "Mateus 3:13",
        "opcoes": ["Nilo", "Eufrates", "Tigre", "Jordão"],
        "resposta": 3
    },
    {
        "pergunta": "Quem andou sobre as águas com Jesus, mas afundou por medo?",
        "referencia": "Mateus 14:30",
        "opcoes": ["João", "Tiago", "Pedro", "André"],
        "resposta": 2
    },
    {
        "pergunta": "Qual era a profissão de Lucas?",
        "referencia": "Colossenses 4:14",
        "opcoes": ["Pescador", "Cobrador de impostos", "Médico", "Carpinteiro"],
        "resposta": 2
    },
    {
        "pergunta": "Quem subiu em uma árvore sicômoro para ver Jesus?",
        "referencia": "Lucas 19:4",
        "opcoes": ["Zaqueu", "Bartimeu", "Nicodemos", "Lázaro"],
        "resposta": 0
    },
    {
        "pergunta": "Qual discípulo duvidou da ressurreição de Jesus?",
        "referencia": "João 20:25",
        "opcoes": ["Pedro", "Tomé", "Filipe", "Mateus"],
        "resposta": 1
    },
    {
        "pergunta": "Quem ajudou Jesus a carregar a cruz?",
        "referencia": "Marcos 15:21",
        "opcoes": ["Simão Pedro", "Simão de Cirene", "José de Arimateia", "João Marcos"],
        "resposta": 1
    },
    {
        "pergunta": "Quantos dias Jesus ficou no deserto sendo tentado?",
        "referencia": "Mateus 4:2",
        "opcoes": ["3 dias", "7 dias", "12 dias", "40 dias"],
        "resposta": 3
    },
    {
        "pergunta": "Quem lavou as mãos para não condenar Jesus?",
        "referencia": "Mateus 27:24",
        "opcoes": ["Herodes", "Caifás", "Pilatos", "César"],
        "resposta": 2
    },
    {
        "pergunta": "Qual o nome da ilha onde João escreveu o Apocalipse?",
        "referencia": "Apocalipse 1:9",
        "opcoes": ["Malta", "Patmos", "Creta", "Chipre"],
        "resposta": 1
    },
    {
        "pergunta": "Quem foi o primeiro mártir cristão (o primeiro a morrer por fé)?",
        "referencia": "Atos 7:59",
        "opcoes": ["Tiago", "Estêvão", "Pedro", "Paulo"],
        "resposta": 1
    },
    {
        "pergunta": "Qual casal morreu por mentir ao Espírito Santo?",
        "referencia": "Atos 5",
        "opcoes": ["Adão e Eva", "Áquila e Priscila", "Ananias e Safira", "Abraão e Sara"],
        "resposta": 2
    },
    {
        "pergunta": "Quem ficou cego no caminho de Damasco?",
        "referencia": "Atos 9",
        "opcoes": ["Saulo (Paulo)", "Pedro", "Barnabé", "Silas"],
        "resposta": 0
    },
    {
        "pergunta": "Qual é o menor versículo da Bíblia?",
        "referencia": "João 11:35",
        "opcoes": ["Orai sem cessar", "Jesus chorou", "Deus é amor", "Tudo posso"],
        "resposta": 1
    },
    {
        "pergunta": "Quantos frutos do Espírito são listados em Gálatas?",
        "referencia": "Gálatas 5:22",
        "opcoes": ["7", "9", "12", "3"],
        "resposta": 1
    },
    {
        "pergunta": "Quem foi ressuscitado por Jesus após 4 dias morto?",
        "referencia": "João 11:39",
        "opcoes": ["Lázaro", "Jairo", "O filho da viúva", "Estêvão"],
        "resposta": 0
    },
    {
        "pergunta": "Qual discípulo era conhecido como 'o discípulo amado'?",
        "referencia": "João 21:20",
        "opcoes": ["Pedro", "Tiago", "João", "André"],
        "resposta": 2
    },
    {
        "pergunta": "O que aconteceu no dia de Pentecostes?",
        "referencia": "Atos 2",
        "opcoes": ["Jesus nasceu", "O Espírito Santo desceu", "Jesus subiu ao céu", "Paulo se converteu"],
        "resposta": 1
    },
    {
        "pergunta": "Quem escreveu a maioria das cartas do Novo Testamento?",
        "referencia": "História Bíblica",
        "opcoes": ["Pedro", "João", "Paulo", "Tiago"],
        "resposta": 2
    },
    {
        "pergunta": "Qual o 'capítulo do amor' na Bíblia?",
        "referencia": "1 Coríntios 13",
        "opcoes": ["Salmo 23", "1 Coríntios 13", "João 3", "Romanos 8"],
        "resposta": 1
    },
    {
        "pergunta": "Quem disse: 'Eis o Cordeiro de Deus que tira o pecado do mundo'?",
        "referencia": "João 1:29",
        "opcoes": ["Jesus", "João Batista", "Pedro", "Isaías"],
        "resposta": 1
    },
    {
        "pergunta": "Quem hospedou os espias em Jericó e foi salva?",
        "referencia": "Josué 2",
        "opcoes": ["Raabe", "Rute", "Ester", "Maria"],
        "resposta": 0
    },
    {
        "pergunta": "Quantos livros tem a Bíblia Católica?",
        "referencia": "Fato Bíblico",
        "opcoes": ["73", "66", "40", "50"],
        "resposta": 0
    },
    {
        "pergunta": "Quem foi a mãe de Samuel?",
        "referencia": "1 Samuel 1",
        "opcoes": ["Sara", "Ana", "Raquel", "Lia"],
        "resposta": 1
    },
    {
        "pergunta": "Quem pediu a cabeça de João Batista em uma bandeja?",
        "referencia": "Marcos 6",
        "opcoes": ["Herodias", "Salomé", "Jezabel", "Dalila"],
        "resposta": 1
    },
    {
        "pergunta": "Qual foi o último livro escrito na Bíblia?",
        "referencia": "História",
        "opcoes": ["Malaquias", "Mateus", "Gênesis", "Apocalipse"],
        "resposta": 3
    }
    // cuidado aqui

    // ANTIGO TESTAMENTO E CURIOSIDADES
   , {
        "pergunta": "Quem foi o homem mais velho da Bíblia (969 anos)?",
        "referencia": "Gênesis 5:27",
        "opcoes": ["Noé", "Adão", "Enoque", "Matusalém"],
        "resposta": 3
    },
    {
        "pergunta": "Qual foi o primeiro assassinato da Bíblia?",
        "referencia": "Gênesis 4:8",
        "opcoes": ["Abel matou Caim", "Esaú matou Jacó", "Caim matou Abel", "Lameque matou um jovem"],
        "resposta": 2
    },
    {
        "pergunta": "Qual o nome da esposa de Isaque?",
        "referencia": "Gênesis 24:67",
        "opcoes": ["Raquel", "Lia", "Sara", "Rebeca"],
        "resposta": 3
    },
    {
        "pergunta": "O que os irmãos de José usaram para manchar a túnica dele?",
        "referencia": "Gênesis 37:31",
        "opcoes": ["Tinta vermelha", "Vinho", "Sangue de um bode", "Lama"],
        "resposta": 2
    },
    {
        "pergunta": "Quem encontrou o bebê Moisés no rio Nilo?",
        "referencia": "Êxodo 2:5",
        "opcoes": ["A esposa de Faraó", "Uma serva egípcia", "A irmã de Moisés", "A filha de Faraó"],
        "resposta": 3
    },
    {
        "pergunta": "Qual foi a primeira das dez pragas do Egito?",
        "referencia": "Êxodo 7:20",
        "opcoes": ["Rãs", "Gafanhotos", "Escuridão", "Água virou sangue"],
        "resposta": 3
    },
    {
        "pergunta": "Qual alimento Deus enviou do céu no deserto?",
        "referencia": "Êxodo 16:15",
        "opcoes": ["Pão ázimo", "Peixe", "Maná", "Figos"],
        "resposta": 2
    },
    {
        "pergunta": "Enquanto Moisés recebia a Lei, o que o povo adorou?",
        "referencia": "Êxodo 32:4",
        "opcoes": ["O Sol", "Uma estátua de Baal", "Uma serpente de bronze", "Um bezerro de ouro"],
        "resposta": 3
    },
    {
        "pergunta": "Qual a cor do cordão que Raabe colocou na janela?",
        "referencia": "Josué 2:18",
        "opcoes": ["Azul", "Branco", "Escarlate (Vermelho)", "Roxo"],
        "resposta": 2
    },
    {
        "pergunta": "Quem matou o general Sísera com uma estaca de tenda?",
        "referencia": "Juízes 4:21",
        "opcoes": ["Débora", "Dalila", "Rute", "Jael"],
        "resposta": 3
    },
    {
        "pergunta": "Qual juiz era canhoto e matou o rei Eglom?",
        "referencia": "Juízes 3:15",
        "opcoes": ["Gideão", "Sangar", "Eúde", "Jefté"],
        "resposta": 2
    },
    {
        "pergunta": "Quantas vezes Deus chamou o menino Samuel enquanto ele dormia?",
        "referencia": "1 Samuel 3",
        "opcoes": ["1 vez", "2 vezes", "7 vezes", "3 vezes (na 4ª ele respondeu)"],
        "resposta": 3
    },
    {
        "pergunta": "Quem era o filho coxo de Jônatas que Davi ajudou?",
        "referencia": "2 Samuel 9",
        "opcoes": ["Absalão", "Amnom", "Mefibosete", "Salomão"],
        "resposta": 2
    },
    {
        "pergunta": "Como morreu Absalão, filho rebelde de Davi?",
        "referencia": "2 Samuel 18",
        "opcoes": ["Em batalha", "Caiu do cavalo", "Preso pelos cabelos numa árvore", "Envenenado"],
        "resposta": 2
    },
    {
        "pergunta": "Quem visitou Salomão para testar sua sabedoria?",
        "referencia": "1 Reis 10",
        "opcoes": ["Rainha Ester", "Rei do Egito", "Rei de Tiro", "Rainha de Sabá"],
        "resposta": 3
    },
    {
        "pergunta": "Como o profeta Elias foi alimentado no ribeiro de Querite?",
        "referencia": "1 Reis 17:6",
        "opcoes": ["Por anjos", "Por peixes", "Por corvos", "Por uma viúva"],
        "resposta": 2
    },
    {
        "pergunta": "Qual objeto de Eliseu flutuou na água?",
        "referencia": "2 Reis 6:6",
        "opcoes": ["Uma pedra", "Um manto", "Um cajado", "Um machado de ferro"],
        "resposta": 3
    },
    {
        "pergunta": "Quem reconstruiu os muros de Jerusalém em 52 dias?",
        "referencia": "Neemias 6:15",
        "opcoes": ["Esdras", "Zorobabel", "Neemias", "Isaías"],
        "resposta": 2
    },
    {
        "pergunta": "Qual profeta teve uma visão de um vale de ossos secos?",
        "referencia": "Ezequiel 37",
        "opcoes": ["Daniel", "Jeremias", "Oséias", "Ezequiel"],
        "resposta": 3
    },
    {
        "pergunta": "Para onde Jonas fugiu em vez de ir para Nínive?",
        "referencia": "Jonas 1:3",
        "opcoes": ["Damasco", "Jerusalém", "Társis", "Babilônia"],
        "resposta": 2
    },
    {
        "pergunta": "Quem foi lançado na fornalha ardente?",
        "referencia": "Daniel 3",
        "opcoes": ["Daniel", "Elias", "José", "Sadraque, Mesaque e Abednego"],
        "resposta": 3
    },
    {
        "pergunta": "Qual profeta é conhecido como o 'profeta chorão'?",
        "referencia": "Lamentações",
        "opcoes": ["Isaías", "Ezequiel", "Jeremias", "Joel"],
        "resposta": 2
    },
    {
        "pergunta": "Quem disse: 'Eu e a minha casa serviremos ao Senhor'?",
        "referencia": "Josué 24:15",
        "opcoes": ["Moisés", "Davi", "Josué", "Paulo"],
        "resposta": 2
    },

    // NOVO TESTAMENTO E ENSINAMENTOS
    {
        "pergunta": "Quais presentes os magos deram a Jesus?",
        "referencia": "Mateus 2:11",
        "opcoes": ["Ouro, Prata e Bronze", "Ouro, Mirra e Perfume", "Roupas, Comida e Dinheiro", "Ouro, Incenso e Mirra"],
        "resposta": 3
    },
    {
        "pergunta": "No Sermão da Montanha, quem Jesus disse que herdará a terra?",
        "referencia": "Mateus 5:5",
        "opcoes": ["Os fortes", "Os ricos", "Os mansos", "Os sábios"],
        "resposta": 2
    },
    {
        "pergunta": "Quantos cestos sobraram após a multiplicação dos 5 pães e 2 peixes?",
        "referencia": "Mateus 14:20",
        "opcoes": ["7 cestos", "3 cestos", "12 cestos", "Nenhum"],
        "resposta": 2
    },
    {
        "pergunta": "Quem apareceu conversando com Jesus na Transfiguração?",
        "referencia": "Mateus 17:3",
        "opcoes": ["Abraão e Isaque", "Davi e Salomão", "Enoque e Elias", "Moisés e Elias"],
        "resposta": 3
    },
    {
        "pergunta": "Qual irmã de Lázaro escolheu ficar ouvindo Jesus em vez de trabalhar?",
        "referencia": "Lucas 10:39",
        "opcoes": ["Marta", "Salomé", "Maria", "Joana"],
        "resposta": 2
    },
    {
        "pergunta": "Na parábola do Bom Samaritano, quem ajudou o ferido?",
        "referencia": "Lucas 10",
        "opcoes": ["O Sacerdote", "O Levita", "O Hospedeiro", "O Samaritano"],
        "resposta": 3
    },
    {
        "pergunta": "Dos 10 leprosos curados, quantos voltaram para agradecer?",
        "referencia": "Lucas 17:15",
        "opcoes": ["Todos", "Cinco", "Nenhum", "Apenas um"],
        "resposta": 3
    },
    {
        "pergunta": "Qual era o nome do cobrador de impostos que escreveu um Evangelho?",
        "referencia": "Mateus 9:9",
        "opcoes": ["Lucas", "Marcos", "Mateus", "João"],
        "resposta": 2
    },
    {
        "pergunta": "O que Jesus suou no Jardim do Getsêmani?",
        "referencia": "Lucas 22:44",
        "opcoes": ["Água", "Lágrimas apenas", "Óleo", "Grandes gotas de sangue"],
        "resposta": 3
    },
    {
        "pergunta": "Quem teve a orelha cortada por Pedro e curada por Jesus?",
        "referencia": "João 18:10",
        "opcoes": ["Caifás", "Judas", "Malco", "Anás"],
        "resposta": 2
    },
    {
        "pergunta": "Quem substituiu Judas Iscariotes como apóstolo?",
        "referencia": "Atos 1:26",
        "opcoes": ["Paulo", "Barnabé", "Estêvão", "Matias"],
        "resposta": 3
    },
    {
        "pergunta": "Quem evangelizou e batizou o eunuco etíope?",
        "referencia": "Atos 8:38",
        "opcoes": ["Pedro", "Paulo", "Filipe", "João"],
        "resposta": 2
    },
    {
        "pergunta": "Qual mulher fazia túnicas e foi ressuscitada por Pedro?",
        "referencia": "Atos 9:36",
        "opcoes": ["Lídia", "Priscila", "Dorcas (Tabita)", "Febe"],
        "resposta": 2
    },
    {
        "pergunta": "O que desceu do céu na visão de Pedro?",
        "referencia": "Atos 10:11",
        "opcoes": ["Uma escada", "Uma carruagem de fogo", "Uma pomba", "Um lençol com animais"],
        "resposta": 3
    },
    {
        "pergunta": "O que aconteceu à meia-noite quando Paulo e Silas louvavam na prisão?",
        "referencia": "Atos 16:26",
        "opcoes": ["Um anjo abriu a porta", "Os guardas dormiram", "Houve um terremoto", "Fogo desceu"],
        "resposta": 2
    },
    {
        "pergunta": "Qual era a profissão do apóstolo Paulo?",
        "referencia": "Atos 18:3",
        "opcoes": ["Pescador", "Carpinteiro", "Sacerdote", "Fabricante de tendas"],
        "resposta": 3
    },
    {
        "pergunta": "Segundo 1 Timóteo 6:10, o que é a raiz de todos os males?",
        "referencia": "1 Timóteo 6:10",
        "opcoes": ["O dinheiro", "A mentira", "O orgulho", "O amor ao dinheiro"],
        "resposta": 3
    },
    {
        "pergunta": "Qual livro fala sobre a 'Armadura de Deus'?",
        "referencia": "Efésios 6",
        "opcoes": ["Romanos", "Gálatas", "Efésios", "Apocalipse"],
        "resposta": 2
    },
    {
        "pergunta": "Segundo Hebreus 11:1, o que é a prova das coisas que não se veem?",
        "referencia": "Hebreus 11:1",
        "opcoes": ["A Esperança", "O Amor", "A Verdade", "A Fé"],
        "resposta": 3
    },
    {
        "pergunta": "Qual discípulo foi mordido por uma cobra em Malta e não morreu?",
        "referencia": "Atos 28:3",
        "opcoes": ["Pedro", "Barnabé", "Paulo", "Timóteo"],
        "resposta": 2
    },
    {
        "pergunta": "Na Nova Jerusalém, o que não haverá mais?",
        "referencia": "Apocalipse 21:4",
        "opcoes": ["Anjos", "Ouro", "Morte, choro e dor", "Cânticos"],
        "resposta": 2
    },
   ,
    {
        "pergunta": "Quem foi o jovem que caiu da janela enquanto Paulo pregava?",
        "referencia": "Atos 20:9",
        "opcoes": ["Timóteo", "Tito", "Êutico", "Onésimo"],
        "resposta": 2
    },
    {
        "pergunta": "Qual é o salário do pecado segundo Romanos?",
        "referencia": "Romanos 6:23",
        "opcoes": ["O sofrimento", "A tristeza", "O inferno", "A morte"],
        "resposta": 3
    },
    {
        "pergunta": "Jesus é chamado de Alfa e...?",
        "referencia": "Apocalipse 22:13",
        "opcoes": ["Beta", "Gama", "Sigma", "Ômega"],
        "resposta": 3
    },
    {
        "pergunta": "Onde Jesus realizou seu primeiro milagre (Bodas)?",
        "referencia": "João 2",
        "opcoes": ["Nazaré", "Cafarnaum", "Caná da Galileia", "Betânia"],
        "resposta": 2
    },
    {
        "pergunta": "Qual o nome do jardim onde Adão e Eva viveram?",
        "referencia": "Gênesis 2",
        "opcoes": ["Jardim das Oliveiras", "Getsêmani", "Jardim Suspenso", "Éden"],
        "resposta": 3
    }
   , {
        "pergunta": "Quem foi o arcanjo que acompanhou Tobias em sua viagem?",
        "referencia": "Tobias 5:4",
        "opcoes": ["Miguel", "Gabriel", "Uriel", "Rafael"],
        "resposta": 3
    },
    {
        "pergunta": "Qual viúva corajosa cortou a cabeça do general Holofernes para salvar seu povo?",
        "referencia": "Judite 13:8",
        "opcoes": ["Ester", "Dalila", "Judite", "Rute"],
        "resposta": 2
    },
    {
        "pergunta": "Em 2 Macabeus, o que Judas mandou fazer pelos soldados mortos (base do Purgatório)?",
        "referencia": "2 Macabeus 12:46",
        "opcoes": ["Construir um monumento", "Jejuar por 7 dias", "Rezar pelos mortos", "Queimar suas roupas"],
        "resposta": 2
    },
    {
        "pergunta": "Segundo o livro de Eclesiástico (Sirácida), o que é um amigo fiel?",
        "referencia": "Eclesiástico 6:16",
        "opcoes": ["Uma fortuna", "Um escudo forte", "Um remédio de vida", "Uma perda de tempo"],
        "resposta": 2
    },
    {
        "pergunta": "Quem foi o secretário do profeta Jeremias que também tem um livro na Bíblia?",
        "referencia": "Baruc 1:1",
        "opcoes": ["Ezequiel", "Isaías", "Baruc", "Daniel"],
        "resposta": 2
    },
    {
        "pergunta": "Qual livro diz: 'As almas dos justos estão na mão de Deus'?",
        "referencia": "Sabedoria 3:1",
        "opcoes": ["Eclesiastes", "Provérbios", "Salmos", "Sabedoria"],
        "resposta": 3
    },
    {
        "pergunta": "Quem foi o líder judeu apelidado de 'Macabeu' (O Martelo)?",
        "referencia": "1 Macabeus 3",
        "opcoes": ["Simão", "Jônatas", "Judas", "Eleazar"],
        "resposta": 2
    },
    {
        "pergunta": "O que Daniel usou para provar que os sacerdotes comiam a comida do ídolo Bel?",
        "referencia": "Daniel 14:14",
        "opcoes": ["Câmeras escondidas", "Trancou a porta", "Vigilância noturna", "Cinzas no chão"],
        "resposta": 3
    },
    {
        "pergunta": "No livro de Daniel (cap. 13), qual mulher foi salva de uma acusação falsa de adultério?",
        "referencia": "Daniel 13",
        "opcoes": ["Bate-Seba", "Maria Madalena", "Susana", "Isabel"],
        "resposta": 2
    },
    {
        "pergunta": "O que Tobias usou para curar a cegueira de seu pai?",
        "referencia": "Tobias 11:11",
        "opcoes": ["Barro", "Água do rio", "Azeite", "O fel do peixe"],
        "resposta": 3
    }
];

// ======================================================
// 2. VARIÁVEIS E CONFIGURAÇÕES
// ======================================================

let perguntasEmbaralhadas, indiceAtual, pontuacao;
let errosAtuais = 0; 
const MAX_ERROS = 3; 
const TOTAL_PERGUNTAS_RODADA = 100; 

// Elementos do DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const feedbackEl = document.getElementById('feedback-msg');
const scoreEl = document.getElementById('score');
const qIndexEl = document.getElementById('q-index');

// Elemento de Rank
let rankEl = document.getElementById('rank-msg'); 
if (!rankEl) {
    rankEl = document.createElement('h3');
    rankEl.id = 'rank-msg';
    resultScreen.appendChild(rankEl);
}

// ======================================================
// 3. FUNÇÕES DO JOGO
// ======================================================

function iniciarQuiz() {
    startScreen.classList.add('hide');
    resultScreen.classList.add('hide');
    gameScreen.classList.remove('hide');
    
    const totalDisponivel = Math.min(bancoDePerguntas.length, TOTAL_PERGUNTAS_RODADA);
    perguntasEmbaralhadas = bancoDePerguntas
        .sort(() => Math.random() - 0.5)
        .slice(0, totalDisponivel);

    indiceAtual = 0;
    pontuacao = 0;
    errosAtuais = 0; 
    scoreEl.innerText = pontuacao;
    
    carregarPergunta();
}

function carregarPergunta() {
    resetarEstado();
    const perguntaAtual = perguntasEmbaralhadas[indiceAtual];
    
    questionEl.innerText = perguntaAtual.pergunta;
    qIndexEl.innerText = indiceAtual + 1;

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.innerText = opcao;
        button.classList.add('btn', 'btn-outline-primary', 'btn-option', 'd-block', 'w-100', 'my-2'); 
        button.addEventListener('click', () => selecionarResposta(index, perguntaAtual.resposta));
        optionsEl.appendChild(button);
    });
}

function resetarEstado() {
    nextBtn.classList.add('hide');
    feedbackEl.innerText = '';
    feedbackEl.className = 'mt-3 fw-bold text-center'; 
    while (optionsEl.firstChild) {
        optionsEl.removeChild(optionsEl.firstChild);
    }
}

function selecionarResposta(indiceEscolhido, indiceCorreto) {
    const botoes = Array.from(optionsEl.children);
    botoes.forEach(btn => btn.disabled = true);

    // --- AQUI ESTÁ A MUDANÇA PARA PEGAR A REFERÊNCIA ---
    const referenciaAtual = perguntasEmbaralhadas[indiceAtual].referencia;

    if (indiceEscolhido === indiceCorreto) {
        // --- ACERTOU ---
        pontuacao++;
        scoreEl.innerText = pontuacao;
        
        // Mostra "Correto" E a referência logo abaixo
        feedbackEl.innerHTML = `Correto! 🎉<br><small>📖 ${referenciaAtual}</small>`;
        feedbackEl.classList.add('text-success');
        
        botoes[indiceEscolhido].classList.remove('btn-outline-primary');
        botoes[indiceEscolhido].classList.add('btn-success');
        
        verificarProximoPasso();

    } else {
        // --- ERROU ---
        botoes[indiceEscolhido].classList.remove('btn-outline-primary');
        botoes[indiceEscolhido].classList.add('btn-danger');
        
        botoes[indiceCorreto].classList.remove('btn-outline-primary');
        botoes[indiceCorreto].classList.add('btn-success');

        errosAtuais++; 

        if (errosAtuais >= MAX_ERROS) {
            // GAME OVER
            feedbackEl.classList.add('text-danger');
            // Mostra que errou, mostra a referência e depois o Game Over
            feedbackEl.innerHTML = `Errado! 😔<br><small>📖 ${referenciaAtual}</small><br><br><strong>GAME OVER! 💀</strong><br>Você errou 3 vezes.`;
            
            nextBtn.innerText = "Ver Meu Nível";
            nextBtn.classList.remove('hide');
            nextBtn.onclick = finalizarQuiz;
        } else {
            // Errou, mas ainda tem vidas
            feedbackEl.classList.add('text-danger');
            feedbackEl.innerHTML = `Errado! 😔<br><small>📖 ${referenciaAtual}</small><br><span class='text-warning'>(Cuidado: ${errosAtuais}/3 erros)</span>`;
            verificarProximoPasso();
        }
    }
}

function verificarProximoPasso() {
    if (perguntasEmbaralhadas.length > indiceAtual + 1) {
        nextBtn.innerText = "Próxima Pergunta ➡️";
        nextBtn.classList.remove('hide');
        nextBtn.onclick = proximaPergunta; 
    } else {
        nextBtn.innerText = "Ver Resultado Final";
        nextBtn.classList.remove('hide');
        nextBtn.onclick = finalizarQuiz;
    }
}

function proximaPergunta() {
    indiceAtual++;
    carregarPergunta();
}

// ======================================================
// 4. CÁLCULO DE NÍVEIS
// ======================================================

function calcularNivel(pontos, total) {
    const porcentagem = (pontos / total) * 100;
    let titulo = "";
    let cor = "";

  
    if (porcentagem <= 5) {
        titulo = "Leigo 🎄🐰";
        cor = "text-danger"; // Vermelho
        document.getElementById("titulo").innerText = titulo;
    } else if (porcentagem <= 10 && porcentagem > 5) {
        titulo = "Coroinha 🔔🍇 ";

        cor = "text-warning"; // Amarelo
         document.getElementById("titulo").innerText = titulo;
    } else if (porcentagem <= 15 && porcentagem >10) {
        titulo = "Pescador de Almas 🎣🐟";
        cor = "text-info"; // Azul claro
         document.getElementById("titulo").innerText = titulo;
    } else if (porcentagem <= 20 && porcentagem > 15) {
        titulo = "Leitor na Missa 📢💬";
        cor = "text-primary"; // Azul escuro
         document.getElementById("titulo").innerText = titulo;
    }

    else if (porcentagem <= 25 && porcentagem > 20) {
        titulo = "Ministro de Música 🎸🎤 ";
        cor = "text-warning"; // Amarelo
         document.getElementById("titulo").innerText = titulo;
    } else if (porcentagem <= 30  && porcentagem >25) {
        titulo = "Catequista 👨🏼‍🦳✝️";
        cor = "text-info"; // Azul claro
         document.getElementById("titulo").innerText = titulo;
    } else if (porcentagem <= 40 && porcentagem > 30) {
        titulo = "Teólogo 🤓📚";
        cor = "text-primary"; // Azul escuro
         document.getElementById("titulo").innerText = titulo;
    }

      else if (porcentagem >= 50  && porcentagem < 80) {
        titulo = "Padre 🕶️📜";
        cor = "text-info"; // Azul claro
         document.getElementById("titulo").innerText = titulo;
    } 
    else if (porcentagem >= 80 && porcentagem <=99) {
        titulo = "Cardeal 🛐🍞";
        cor = "text-primary"; // Azul escuro
         document.getElementById("titulo").innerText = titulo;
    }
     else {
        titulo = "100 pontos = Papa 👑";
        cor = "text-success"; // Verde
         document.getElementById("titulo").innerText = titulo;
    }

    return { titulo, cor };
}

function finalizarQuiz() {
    gameScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    
    let msgFim = "";
    if (errosAtuais >= MAX_ERROS) {
        msgFim = "JOGO ENCERRADO (3 Erros)!";
    } else {
        msgFim = "Parabéns, você completou!";
    }

    document.getElementById('final-score').innerText = 
        `${msgFim}\nPontuação: ${pontuacao} acertos.`;

    const totalPerguntas = perguntasEmbaralhadas.length;
    const resultadoNivel = calcularNivel(pontuacao, totalPerguntas);
    
    rankEl.innerText = `Seu Nível: ${resultadoNivel.titulo}`;
    rankEl.className = `mt-3 text-center fw-bold display-6 ${resultadoNivel.cor}`;

    nextBtn.innerText = "Próxima Pergunta ➡️";
    nextBtn.onclick = proximaPergunta;
}

function reiniciarQuiz() {
    iniciarQuiz();
}