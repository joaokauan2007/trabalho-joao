const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre uma nova tecnologia para otimizar a produção agrícola. Qual seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é promissor!",
                afirmacao: "Você está animado com a possibilidade de aumentar a produtividade."
            },
            {
                texto: "Isso é arriscado!",
                afirmacao: "Você se preocupa com possíveis impactos negativos na agricultura tradicional."
            }
        ]
    },
    {
        enunciado: "Uma empresa propõe utilizar drones para monitorar as plantações. Qual é sua abordagem?",
        alternativas: [
            {
                texto: "Adota a tecnologia para melhorar o controle das plantações.",
                afirmacao: "Você vê potencial para otimizar o manejo e aumentar a eficiência."
            },
            {
                texto: "Prefere métodos tradicionais para garantir a segurança dos processos.",
                afirmacao: "Você acredita que o uso de tecnologia deve ser feito com cautela."
            }
        ]
    },
    {
        enunciado: "Durante um seminário sobre inovação no agronegócio, você é questionado sobre o impacto ambiental da tecnologia. O que você diz?",
        alternativas: [
            {
                texto: "A tecnologia pode ajudar a reduzir o impacto ambiental com práticas mais sustentáveis.",
                afirmacao: "Você defende o uso de tecnologias que promovem práticas agrícolas mais ecológicas."
            },
            {
                texto: "Devemos ser cautelosos e garantir que a tecnologia não cause danos ao meio ambiente.",
                afirmacao: "Você se preocupa com possíveis efeitos adversos e propõe uma abordagem mais cautelosa."
            }
        ]
    },
    {
        enunciado: "Ao criar um plano para implementar uma nova tecnologia agrícola, você decide usar:",
        alternativas: [
            {
                texto: "Um software de planejamento agrícola especializado.",
                afirmacao: "Você valoriza ferramentas avançadas para um planejamento mais preciso."
            },
            {
                texto: "Métodos manuais e consultas com especialistas do setor.",
                afirmacao: "Você prefere combinar conhecimento tradicional com novas tecnologias."
            }
        ]
    },
    {
        enunciado: "O trabalho em grupo para um projeto agrícola está atrasado. Como você contribui para resolver o problema?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de IA para acelerar a coleta de dados e análise.",
                afirmacao: "Você vê a IA como uma solução para ganhar eficiência e completar o projeto a tempo."
            },
            {
                texto: "Reorganiza o plano de trabalho e divide as tarefas de maneira mais eficaz.",
                afirmacao: "Você acredita que uma abordagem prática e bem organizada pode resolver os problemas mais rapidamente."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
