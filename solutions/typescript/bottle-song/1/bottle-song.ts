const lyrics : string[] = [
    `Ten green bottles hanging on the wall,`,
    `Ten green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be nine green bottles hanging on the wall.`,
    ``,
    `Nine green bottles hanging on the wall,`,
    `Nine green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be eight green bottles hanging on the wall.`,
    ``,
    `Eight green bottles hanging on the wall,`,
    `Eight green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be seven green bottles hanging on the wall.`,
    ``,
    `Seven green bottles hanging on the wall,`,
    `Seven green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be six green bottles hanging on the wall.`,
    ``,
    `Six green bottles hanging on the wall,`,
    `Six green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be five green bottles hanging on the wall.`,
    ``,
    `Five green bottles hanging on the wall,`,
    `Five green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be four green bottles hanging on the wall.`,
    ``,
    `Four green bottles hanging on the wall,`,
    `Four green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be three green bottles hanging on the wall.`,
    ``,
    `Three green bottles hanging on the wall,`,
    `Three green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be two green bottles hanging on the wall.`,
    ``,
    `Two green bottles hanging on the wall,`,
    `Two green bottles hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be one green bottle hanging on the wall.`,
    ``,
    `One green bottle hanging on the wall,`,
    `One green bottle hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be no green bottles hanging on the wall.`,
];

export const recite = (
  initialBottleCount: number,
  takeDownCount: number
): string[] => {
    const startIndex: number = getStartIndex(initialBottleCount);
    const finalIdex: number = getFinalIndex(startIndex, takeDownCount);
    return lyrics.slice(startIndex, finalIdex);
}

function getStartIndex(initialBottleCount: number) {
    let index: number = 0;
    switch(initialBottleCount){
        case 1:
            index = 45;
            break;
        case 2:
            index = 40;
            break;
        case 3:
            index = 35;
            break;
        case 4:
            index = 30;
            break;
        case 5:
            index = 25;
            break;
        case 6:
            index = 20;
            break;
        case 7:
            index = 15;
            break;
        case 8:
            index = 10;
            break;
        case 9:
            index = 5;
            break;
        case 10:
            index = 0;
            break;

    }
    return index;
}

function getFinalIndex(startIndex: number, takeDownCount: number) {
    const finalIndex: number = startIndex == 1 ? 48 : (startIndex + takeDownCount*5 - 1);
    return finalIndex;
}