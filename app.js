const container = document.querySelector('.container');

// Genero stampa dei numeri da 1 a 100

for ( let i = 1; i < 101 ; i++) {

    const squares = document.createElement('div');
    squares.classList.add('square-wrapper');
    container.append('squares');

    squares.append(i);
}
