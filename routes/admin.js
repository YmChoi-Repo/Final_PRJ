const express = require('express')
const router = express.Router()
// express 패키지의 Router를 가져온다.

router.get('/', (req, res) => {
    res.send('admin 이후 url');
})

// router.get('/products', (req, res) => {
//     res.send('admin products');
// })

router.get('/admin', (req, res) => {
    res.render('admin/admin.html', {
        message: "hello!!!!!!!!",
        online: "online now"
    })
});

module.exports = router;