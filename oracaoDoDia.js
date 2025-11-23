// Mostrar data por extenso
document.getElementById("dataHoje").textContent =
  new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

// Seletores
const refLeitura1El = document.getElementById("refLeitura1");
const leitura1El = document.getElementById("leitura1");

const tituloSegundaLeitura = document.getElementById("tituloSegundaLeitura");
const refSegundaLeituraEl = document.getElementById("refSegundaLeitura");
const segundaLeituraEl = document.getElementById("segundaLeitura");

const refSalmoEl = document.getElementById("refSalmo");
const salmoEl = document.getElementById("salmo");

const refEvangelhoEl = document.getElementById("refEvangelho");
const evangelhoEl = document.getElementById("evangelho");

const fonteEl = document.getElementById("fonte");

// Função para deixar números em negrito
function formatarTexto(txt) {
  if (!txt) return "";
  return txt.replace(/(\d+)(?!\s)/g, "<strong>$1</strong> ");
}

// Carrega a liturgia
async function carregarLeituras() {
  try {
    const res = await fetch("https://liturgia.up.railway.app/v2/");
    const data = await res.json();

    console.log("Recebido:", data);

    const L = data.leituras || {};

    // Primeira leitura
    refLeitura1El.innerHTML = L.primeiraLeitura?.[0]?.referencia || "—";
    leitura1El.innerHTML = formatarTexto(L.primeiraLeitura?.[0]?.texto) || "—";

    // Segunda leitura (opcional — domingo)
    if (L.segundaLeitura?.length > 0) {
      tituloSegundaLeitura.style.display = "block";
      refSegundaLeituraEl.style.display = "block";
      segundaLeituraEl.style.display = "block";

      refSegundaLeituraEl.innerHTML = L.segundaLeitura?.[0]?.referencia || "—";
      segundaLeituraEl.innerHTML = formatarTexto(L.segundaLeitura?.[0]?.texto) || "—";
    } else {
      // Ocultar quando não houver
      tituloSegundaLeitura.style.display = "none";
      refSegundaLeituraEl.style.display = "none";
      segundaLeituraEl.style.display = "none";
    }

    // Salmo
    refSalmoEl.innerHTML = L.salmo?.[0]?.referencia || "—";
    salmoEl.innerHTML = formatarTexto(L.salmo?.[0]?.texto) || "—";

    // Evangelho
    refEvangelhoEl.innerHTML = L.evangelho?.[0]?.referencia || "—";
    evangelhoEl.innerHTML = formatarTexto(L.evangelho?.[0]?.texto) || "—";

    fonteEl.textContent = "Fonte: liturgia.up.railway.app";

  } catch (erro) {
    console.error("Erro:", erro);
    leitura1El.textContent = "Não foi possível carregar as leituras.";
    fonteEl.textContent = "Erro ao buscar leituras.";
  }
}

carregarLeituras();
