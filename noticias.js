var http = require('http');

var server = http.createServer(function(req, res){

	var categoria = req.url;

	if (categoria == '/tecnologia') {

		res.end("<html><body>Portal de tecnologia/html>");

	} else if (categoria == '/moda') {

		res.end("<html><body>Portal de moda</html>");

	} else if (categoria == '/beleza') {

		res.end("<html><body>Portal de beleza</html>");

	}else {

		res.end("<html><body>Portal de notícias</html>");

	}

});

server.listen(3000);