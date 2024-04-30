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

async function main() {
  do {
    nome = await input.question("Qual é o seu nome, herói? 😇");

    xp = await input.question("Quanta experiência você tem? NÃO MINTA PARA MIM! 👿");

    console.log(`O Herói de nome ${nome} está no nível de ${classificar(xp)}`);

    repetir = await input.question("Deseja repetir? 🤔");
  } while(repetir);
};

main();
