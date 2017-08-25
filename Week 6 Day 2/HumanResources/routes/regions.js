var express = require('express');
var router = express.Router();
var {Region} = require('../models/regions');

/* GET home page. */
router.get('/', function(req, res, next) {
    Region.findAll().then((regions)=>{
        res.render('regions', {data: regions});
    });
});

router.post('/', (req, res, next)=>{
    const regionName = req.body.regionName;
    Region.create({name: regionName}).then(()=>{
        res.send("Added");
    });
});


router.delete('/delete/:id', (req, res, next)=>{
    const _id = parseInt(req.params.id);
    Region.destroy({where: {id: _id}}).then(()=>{
        res.send("Deleted");
    });
});

router.get('/edit/:id', (req, res, next)=>{
    const _id = req.params.id;
    Region.findById(_id).then((region)=>{
        res.render('regions_edit', {data: region});
    });
    
});

router.put('/edit/:id', (req, res, next)=>{
    const _res = res; 
    const _id = parseInt(req.params.id);
    const _name = req.body.name;
    Region.findById(_id).then((region)=>{
        region.update({name: _name}).then(()=>{
            _res.send("Updated");
        });
    });
});

module.exports = router;
