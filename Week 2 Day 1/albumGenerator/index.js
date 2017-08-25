const AlbumGenerator = require('./albumGenerator');

const myAlbum = new AlbumGenerator({
    artist:'Juan',
    song: 'Roll Up',
    playTime : 180
});

myAlbum.toJSON();