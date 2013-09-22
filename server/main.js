var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('client'))

http.createServer(app).listen(4000);
