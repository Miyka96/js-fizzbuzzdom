const list = document.getElementById('list');

// Genero stampa dei numeri da 1 a 100

for ( let i = 1; i < 101 ; i++) {
    console.log (i);

    const squares = document.createElement('li');
    squares.classList.add('square-wrapper');
    list.append(squares);

    if (i %15 ===0){
        squares.classList.add('fizz-buzz-box');
        squares.append('fizzbuzz');
    }
    else if  (i %3 === 0) {
        squares.classList.add('fizz-box');
        squares.append('fizz')    
    }
    else if (i %5 ===0){
        squares.classList.add('buzz-box');
        squares.append('buzz');
    }
    else{
        squares.append(i);
    }
}


