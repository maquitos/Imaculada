// Mostra a data formatada em português
const dataEl = document.getElementById("dataHoje");
const hoje = new Date();
dataEl.textContent = hoje.toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

// URLs das APIs
const API_URLS = [
  "https://liturgia.up.railway.app/v2/",
  "https://api-liturgia-diaria.vercel.app/?date=" + hoje.toISOString().slice(0, 10)
];

const leitura1El = document.getElementById("leitura1");
const salmoEl = document.getElementById("salmo");
const evangelhoEl = document.getElementById("evangelho");
const fonteEl = document.getElementById("fonte");

// Tenta buscar da API
async function carregarLeituras() {
  for (const url of API_URLS) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Erro HTTP " + res.status);
      const data = await res.json();
      console.log("Dados recebidos:", data);

      // Pega os textos (varia dependendo da API)
      const leitura1 = data.leitura1?.texto || data.leitura?.primeira || data.leituras?.[0]?.texto;
      const salmo = data.salmo?.texto || data.salmo?.ref || data.salmo;
      const evangelho = data.evangelho?.texto || data.leituras?.find(l => /evangelho/i.test(l.tipo))?.texto;

      if (leitura1 || salmo || evangelho) {
        leitura1El.textContent = leitura1 || "Não disponível";
        salmoEl.textContent = salmo || "Não disponível";
        evangelhoEl.textContent = evangelho || "Não disponível";
        fonteEl.textContent = "Fonte: " + url;
        return; // sucesso → para aqui
      }
    } catch (err) {
      console.warn("Erro ao carregar da API:", err.message);
    }
  }

  // Se nenhuma API funcionou, tenta o JSON local
  try {
    const local = await fetch("leituras.json");
    const data = await local.json();
    const hojeISO = new Date().toISOString().slice(0, 10);
    const leitura = data[hojeISO];
    if (leitura) {
      leitura1El.textContent = leitura.primeiraLeitura;
      salmoEl.textContent = leitura.salmo;
      evangelhoEl.textContent = leitura.evangelho;
      fonteEl.textContent = "Fonte: arquivo local (offline)";
    } else {
      throw new Error("Data não encontrada no JSON local");
    }
  } catch (err) {
    leitura1El.textContent = "Não foi possível carregar as leituras.";
    salmoEl.textContent = "";
    evangelhoEl.textContent = "";
    fonteEl.textContent = "Erro ao buscar leituras.";
  }
}

// Executa ao abrir a página
carregarLeituras();
