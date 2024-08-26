const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de comprar sua primeira moto e está se acostumando com a nova tecnologia. Qual é a sua primeira impressão?",
        alternativas: [
            {
                texto: "Estou um pouco nervoso, é muita tecnologia nova para mim.",
                afirmacao: "Você se sente um pouco inseguro com a nova tecnologia, mas está disposto a aprender."
            },
            {
                texto: "Estou animado! Mal posso esperar para explorar todas as funcionalidades da moto.",
                afirmacao: "Você está empolgado e quer aproveitar ao máximo as novas tecnologias da sua moto."
            }
        ]
    },
    {
        enunciado: "Durante uma aula de segurança de motocicletas, o instrutor pede que você escreva um relatório sobre as melhores práticas para manutenção de motos. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Usa um aplicativo de manutenção de motos que sugere dicas e orientações específicas para a sua moto.",
                afirmacao: "Você utilizou tecnologia para obter informações detalhadas e precisas para seu relatório."
            },
            {
                texto: "Baseia o relatório nas dicas que você já conhece, conversas com outros motociclistas e pesquisas na internet.",
                afirmacao: "Você preferiu usar seus conhecimentos e recursos disponíveis para criar um relatório com um toque pessoal."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do relatório, o instrutor realiza uma discussão sobre como a tecnologia das motos pode influenciar o futuro da pilotagem. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a tecnologia das motos pode levar a inovações incríveis e tornar a pilotagem mais segura.",
                afirmacao: "Você está otimista quanto às futuras inovações tecnológicas nas motos e acredita que isso melhorará a segurança e a experiência de pilotagem."
            },
            {
                texto: "Estou preocupado com a possibilidade de que a tecnologia possa substituir a experiência pessoal e a habilidade dos motociclistas.",
                afirmacao: "Você teme que a tecnologia possa desumanizar a pilotagem e impactar negativamente a conexão pessoal que os motociclistas têm com suas motos."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem digital que represente o que você pensa sobre a evolução das motos. Como você faz isso?",
        alternativas: [
            {
                texto: "Cria uma imagem utilizando um software de design gráfico como o Adobe Illustrator.",
                afirmacao: "Você escolheu utilizar ferramentas avançadas de design para criar uma imagem detalhada e profissional."
            },
            {
                texto: "Usa um gerador de imagens por IA para criar uma imagem rapidamente.",
                afirmacao: "Você optou por uma solução rápida e tecnológica para criar sua imagem, aproveitando a eficiência dos geradores de imagem por IA."
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de grupo sobre o impacto da tecnologia nas motos e um dos membros do grupo utilizou a IA para gerar o texto do projeto. O problema é que o texto parece genérico e pouco original. O que você faz?",
        alternativas: [
            {
                texto: "Acredita que usar a IA para gerar conteúdo é aceitável e decide entregar o texto como está.",
                afirmacao: "Você começou a depender demais da IA para criar conteúdo e está se acostumando a não revisar o trabalho."
            },
            {
                texto: "A IA pode ajudar, mas é crucial revisar e personalizar o conteúdo para refletir o ponto de vista do grupo.",
                afirmacao: "Você reconhece que a IA deve servir como um auxílio e não como substituto completo do trabalho criativo, e decide revisar e melhorar o texto gerado."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um futuro próximo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
