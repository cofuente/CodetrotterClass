const AlbumGenerator = require('../albumGenerator');
const expect = require('chai').expect;

const params = {
            artist: "Artist",
            song: "Song",
            playTime: 180,
        };

// When class instantiated with parameters, the values
// should be saved as part of the class.
describe('AlbumGenerator', function(){
    describe('#instantiation', function(){
        it('should have all the values saved', function(){

        const myAlbum = new AlbumGenerator(params);

        expect(myAlbum.getArtist()).to.equal(params.artist);
        expect(myAlbum.getSong()).to.equal(params.song);
        expect(myAlbum.getPlayTime()).to.equal(params.playTime);
        expect(myAlbum.getCreatedAt()).to.exist;
        });
    });
});
// When setArtist is invoked, the ending value should be
// different from the initial value, and it should be a string.
// When setSong is invoked, the ending value should be
// different from the initial value, and it should be a string.
// When setPlaytime is invoked, the ending value should be
// different from the initial value, and it should be a number.
describe('AlbumGenerator', function(){
    describe('#setters', function(){
            it('should be different from the initial value and be the correct type', function(){
                
                const myAlbum = new AlbumGenerator(params);
                myAlbum.setArtist("Another Artist");
                expect(myAlbum.getArtist()).to.change;
                expect(myAlbum.getArtist()).to.be.a('string');
                myAlbum.setSong("Another Song");
                expect(myAlbum.getSong()).to.change;
                expect(myAlbum.getSong()).to.be.a('string');
                myAlbum.setPlayTime("300");
                expect(myAlbum.getPlayTime()).to.change;
                expect(myAlbum.getPlayTime()).to.be.a('number');
            });
    });
 });

describe('AlbumGenerator', function(){
    describe('#getters', function(){
            it('should return the correct value', function(){

                const myAlbum = new AlbumGenerator(params);
                expect(myAlbum.getArtist()).to.equal('Artist');
                expect(myAlbum.getSong()).to.equal('Song');
                expect(myAlbum.getPlayTime()).to.equal(180);
                expect(myAlbum.getPlayTime()).to.exist();
            });
    });
 });
