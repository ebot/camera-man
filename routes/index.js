var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

/* Take picture and load home page */
router.get('/', function(req, res) {
  exec('raspistill -o public/images/fuel.jpg', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    res.render('index', { title: 'Camera Man' })
  });
});

module.exports = router;
