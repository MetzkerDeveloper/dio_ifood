// Definindo a classe Heroi
class Heroi {
  // Construtor da classe
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  // Método de ataque
  atacar() {
      let ataque;

      // Determinando o ataque com base no tipo
      switch (this.tipo) {
          case 'mago':
              ataque = 'magia';
              break;
          case 'guerreiro':
              ataque = 'espada';
              break;
          case 'monge':
              ataque = 'artes marciais';
              break;
          case 'ninja':
              ataque = 'shuriken';
              break;
          default:
              ataque = 'um ataque genérico';
      }

      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome}, atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Heroi
let heroi1 = new Heroi('Waleriano', 30, 'guerreiro');
heroi1.atacar();

let heroi2 = new Heroi('Felipao', 25, 'mago');
heroi2.atacar();
