import * as readline from "node:readline/promises";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const niveis = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante",
];

let nome = "";
let xp = 0;
let repetir = false;

function traduzirInputBooleano(input) {
  input = input.toUpperCase();

  switch(input) {
    case 'S': return true;
    case 'N': return false;
    default: return false;
  }
}

function classificar(xp) {
  if(xp <= 1000) return niveis[0];
  if(xp <= 2000) return niveis[1];
  if(xp <= 5000) return niveis[2];
  if(xp <= 7000) return niveis[3];
  if(xp <= 8000) return niveis[4];
  if(xp <= 9000) return niveis[5];
  if(xp <= 10000) return niveis[6];
  
  return niveis[7];
}

async function receberInput(msg) {
  let resposta = await input.question(msg);

  while(!resposta) {
    console.log("Resposta inválida!");
    resposta = await input.question(msg);
  }

  return resposta;
}

async function main() {
  do {
    nome = await receberInput("Qual é o seu nome, herói? 😇 ");

    xp = await receberInput("Quanta experiência você tem? NÃO MINTA PARA MIM! 👿 ");

    console.log(`O Herói de nome ${nome} está no nível de ${classificar(xp)}`);

    console.log("");
    repetir = traduzirInputBooleano(
      await receberInput("Deseja repetir? 🤔 (S/ N) ")
    );
    console.log("");
  } while(repetir);

  input.close();
};

main();
