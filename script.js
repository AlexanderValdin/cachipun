let jugadas = parseInt(prompt('Indique el número de veces que desea jugar'));

for (let i=1; i<=jugadas; i++) {
  let usuario = parseInt(prompt('Escoja 1-tijera, 2-papel o 3-piedra'));
  let pc = Math.floor(Math.random()*3+1)

  switch (usuario) {

    case 1:

       switch (pc) {
         case 1:
              alert('la computadora también escogió tijera, es un empate');
           break;
        case 2:
              alert('la computadora escogió papel, has ganado');
            break;
        case 3:
              alert('la computadora escogió piedra, has perdido');
            break;

       }

      break;

      case 2:

      switch (pc) {
        case 1:
             alert('la computadora escogió tijera, has perdido');
          break;
       case 2:
             alert('la computadora también escogió papel, es un empate');
           break;
       case 3:
             alert('la computadora escogió piedra,has ganado');
           break;
      }
        break;

        case 3:
        switch (pc) {
          case 1:
               alert('la computadora escogió tijera, has ganado');
            break;
         case 2:
               alert('la computadora escogió papel, has perdido');
             break;
         case 3:
               alert('la computadora  también escogió piedra, es un empate');
             break;
        }
          break;
    default:

  }
}
