class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
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
                ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Função para criar um herói com base na escolha do usuário
function criarHeroi() {
    const nome = prompt('Digite o nome do herói:');
    const idade = prompt('Digite a idade do herói:');
    const tipo = prompt('Digite o tipo do herói (guerreiro, mago, monge ou ninja):');

    const heroi = new Hero(nome, idade, tipo);
    heroi.atacar();
}

// Exemplo de uso:
criarHeroi();
