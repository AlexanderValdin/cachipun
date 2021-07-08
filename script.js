let jugadas = parseInt(prompt('Indique el número de veces que desea jugar'));

for (let i=1; i<=jugadas; i++) {
  let usuario = parseInt(prompt('Escoja 1-tijera, 2-papel o 3-piedra'));
  let pc = Math.floor(Math.random()*3+1)

  switch (usuario) {
    case 1:
       if (pc!==1) {
         if(pc==2){
           alert('Como el computador escogió papel, has ganado');
         }
         else {
           alert('Como el computador escogió piedra, has perdido');
         }
       }
       else {
         alert('Has escogido tijera como la computadora, es un empate');
       }
      break;
      case 2:
         if (pc!==2) {
           if(pc==1){
             alert('Como el computador escogió tijera, has perdido');
           }
           else {
             alert('Como el computador escogió piedra, has ganado');
           }
         }
         else {
           alert('Has escogido papel como el computador, es un empate');
         }
        break;
        case 3:
           if (pc!==3) {
             if(pc==1){
               alert('El computador ha elegido tijera, has ganado');
             }
             else {
               alert('El computador ha elegido papel, has perdido');
             }
           }
           else {
             alert('Has elegido piedra al igual que el computador, es un empate');
           }
          break;
    default:

  }
}
