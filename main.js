var dom = require('./dom');
var outliner = require('./libs/outliner');
 
dom.get('body').style.backgroundColor = 'whiteSmoke';
outliner.heading(dom.get('h1'));
