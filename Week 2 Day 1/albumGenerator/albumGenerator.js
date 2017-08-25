const moment = require('moment');

function AlbumGenerator(args){
    const {artist, song, playTime } = args;
    // Properties:
    // artist(name) (string)
    let _artist = artist||'';
    // song(name) (string)
    let _song = song||'';
    // playtime (number)
    let _playTime = playTime||-1;
    // createdAt (Date)
    const createdAt = moment(Date.now()).format('LLL');
    

    // function(setArtist)
    const setArtist = (artist) =>{
        _artist = artist;
    };

    // function(getArtist)
    const getArtist = () =>{
        return _artist;
    };

    // function(setSong)
    const setSong = (song) =>{
        _song = song;
    };

    // function(getSong)
    const getSong = () =>{
        return _song;
    };
    
    // function(setPlayTime)
    const setPlayTime = (playTime) =>{
        _playtime = playTime;
    };

    // function(getPlayTime)
    const getPlayTime = () =>{
        return _playTime;
    };

    //function(getCreatedAt)
    const getCreatedAt = () =>{
        return createdAt;
    };

    // function toJSON
    const toJSON = function(){
        console.log({
            artist: _artist,
            song: _song,
            playTime: _playTime,
            createdAt,

        });
    }

    return{
        setArtist,
        getArtist,
        setSong,
        getSong,
        setPlayTime,
        getPlayTime,
        getCreatedAt,
        toJSON,
    };
};

module.exports = AlbumGenerator;