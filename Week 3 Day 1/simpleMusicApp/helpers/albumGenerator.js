const albumGenerator = (quantity) => {
    let arr = [];
    let num;
    for(let i = 0; i < quantity; i+=1){
        num = i+1;
        arr.push({
            id: num,
            artist : `Artist Name ${num}`,
            album : `Album Name ${num}`,
            songs : songsGenerator(10)
        });
    }
    return arr;
}

const songsGenerator = (quantity) => {
    const arr = [];
    for(let i = 0; i < quantity; i+=1){
        arr.push({
            title : `Song #${i+1}`,
            duration : 240
        }); 
    }
    return arr;
};

module.exports = albumGenerator;