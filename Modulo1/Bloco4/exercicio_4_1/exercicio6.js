let chess = 'Torre';
switch (chess.toLowerCase()) {
    case 'rei':
        console.log('Rei: move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.');
        break;
    case 'rainha':
        console.log('Rainha: Diagonal, horizontal e vertical, quantas casa quiser');
        break;
    case 'bispo':
        console.log('Bispo: Diagonais');
        break;
    case 'cavalo':
        console.log('Cavalo: movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.');
        break;
    case 'torre':
        console.log('Torre: vertical e horizontal');
        break;
    case 'peão':
        console.log('Peão: movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.');
        break;
    default:
        console.log('Peça invalida');
}