const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('MapBot!')
});

//app.get('/videos', (req, res) => {
//  res.send('videoURL')
//});

app.post('/startVideo', function (req, res) {
  res.send('videoURL')
   //Push to websocket]
})

app.get('/', (req, res) => {
  res.send('MapBot!')
});

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});