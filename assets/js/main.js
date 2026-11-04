// ---------- Ano atual no rodapé ----------
document.getElementById('ano').textContent = new Date().getFullYear();

// ---------- Efeito de digitação na capa ----------
const alvo = document.querySelector('.digitando');
const palavras = alvo.dataset.palavras.split('|');
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const VEL_DIGITAR = 90;   // ms por letra digitada
const VEL_APAGAR = 45;    // ms por letra apagada
const PAUSA_CHEIA = 1600; // tempo com a palavra completa
const PAUSA_VAZIA = 400;  // tempo antes de começar a próxima

let indice = 0;
let letras = 0;
let apagando = false;

function digitar() {
  const palavra = palavras[indice];

  if (reduzirMovimento) {
    // Sem animação: troca a palavra inteira de tempos em tempos
    alvo.textContent = palavra;
    indice = (indice + 1) % palavras.length;
    setTimeout(digitar, PAUSA_CHEIA + 800);
    return;
  }

  letras += apagando ? -1 : 1;
  alvo.textContent = palavra.slice(0, letras);

  let espera = apagando ? VEL_APAGAR : VEL_DIGITAR;

  if (!apagando && letras === palavra.length) {
    apagando = true;
    espera = PAUSA_CHEIA;
  } else if (apagando && letras === 0) {
    apagando = false;
    indice = (indice + 1) % palavras.length;
    espera = PAUSA_VAZIA;
  }

  setTimeout(digitar, espera);
}

digitar();

// ---------- Destaca no menu a seção que está na tela ----------
const links = document.querySelectorAll('.nav ul a');
const secoes = [...links].map((a) => document.querySelector(a.getAttribute('href')));

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('ativo', a.getAttribute('href') === '#' + entrada.target.id));
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

secoes.forEach((secao) => secao && observer.observe(secao));
