const express = require('express');
const router = express.Router();
const albumGenerator = require('../helpers/albumGenerator');

const _albums = albumGenerator(25);


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('albums_list',{
        data: _albums
    });
    
});

router.get('/:albumId', function(req, res, next){
    const id = parseInt(req.params.albumId); 
    if(typeof id === 'number'){
        const albumIndex = id - 1;
        res.render('albums_details', {
            data: _albums[albumIndex]
            });
    }
});

router.get('/:albumId/edit', function(req, res, next){
    const {albumId, artist, album} = req.params;
    const id = parseInt(req.params.albumId);
    if(id) {
        const albumIndex = id - 1;

        res.render('albums_details', {
            data: _albums[albumIndex]
            });
    }
});

router.post('/:albumId/edit', function(req, res, next){
    const {albumId, artist, album} = req.params;
    const id = parseInt(req.params.albumId);
    if(id) {
        const albumIndex = id - 1;
        const album = _albums[albumIndex];
        album.artist = artist;
        album.album = album;

        res.render('albums_edit', {
            data: _albums[albumIndex]
            });
    }
});

module.exports = router;
