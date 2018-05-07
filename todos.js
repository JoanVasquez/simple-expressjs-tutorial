var express = require('express');
var router = express.Router();

var todoItems = [
    {id: 1, desc: 'foo'},
    {id: 2, desc: 'bar'},
    {id: 3, desc: 'baz'}
  ];

router.get('/', (res, resp) => {
  resp.render('index', {
    title: 'My App',
    items: todoItems
  });
});

router.post('/add', (req, resp) => {
  var newItem = req.body.newItem;
  todoItems.push({
    id: todoItems.length + 1,
    desc: newItem
  });

  resp.redirect('/');
});

module.exports = router;
