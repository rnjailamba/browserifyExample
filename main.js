var dom = require('./dom');
var outliner = require('./libs/outliner');

module.exports = function (n) { 
	return n * 111 
}

 
dom.get('body').style.backgroundColor = 'whiteSmoke';
outliner.heading(dom.get('h1'));
