var express = require('express');
var vidStreamer = require('vid-streamer');

var app = express();
app.get('/videos/', vidStreamer.settings({
    rootPath: '/videos/'
}));
app.use('/', express.static('.'));

app.listen(8080);