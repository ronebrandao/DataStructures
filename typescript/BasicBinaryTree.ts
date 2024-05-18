interface Celula {
  chave: number;
  esquerda?: Celula;
  direita?: Celula;
}

function newNode(key: number): Celula {
  return {
    chave: key,
    esquerda: undefined,
    direita: undefined,
  } as Celula;
}

const arvore: Celula = {
  chave: 1,
  esquerda: undefined,
  direita: undefined,
};

arvore.esquerda = newNode(2);
arvore.direita = newNode(3);

arvore.esquerda.esquerda = newNode(4);
arvore.esquerda.direita = newNode(5);

arvore.direita.esquerda = newNode(6);
arvore.direita.direita = newNode(7);

function tamanho(arvore?: Celula): number {
  if (arvore === undefined) {
    return 0;
  }

  return tamanho(arvore.esquerda) + 1 + tamanho(arvore.direita);
}

console.log(tamanho(arvore));
