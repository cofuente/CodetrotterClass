const expect = require('chai').expect;
const albumGenerator = require('../helpers/albumGenerator');

describe('#albumGenerator', function(){
    it('should generate a given amount of music albums', function(){
        const albums = albumGenerator(5);
        expect(albums).to.have.lengthOf(5);


    });

    it('should contain the correct properties', function(){
        const albums = albumGenerator(5);

        albums.forEach((album) => {
            expect(album).to.be.an('object');
            expect(album).to.have.property('artist');
            expect(album).to.have.property('album');
            expect(album).to.have.property('songs');
        });
    });

    it('songs property should contain an array with objects', function(){
        const albums = albumGenerator(5);

        albums.forEach(({songs}) => {
            songs.forEach((song) => {
                expect(song).to.be.an('object');
                expect(song).to.have.property('title');
                expect(song).to.have.property('duration');
            })
        })
    });
});