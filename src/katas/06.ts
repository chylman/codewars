function abbrevName(name){
    const namesArray = name.split(' ');
    const firstLetter = namesArray[0].slice(0, 1).toUpperCase();
    const secondLetter = namesArray[1].slice(0, 1).toUpperCase();
    return `${firstLetter}.${secondLetter}`;
}