const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.redirect('/dashboard');
})

router.get('/dashboard', (req, res, next) => {
    res.render('index', {
        page: {
            title: "smartOperator"
        }
    });
})




module.exports.router = router;