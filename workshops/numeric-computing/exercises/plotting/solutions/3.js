'use strict';

var toHTML = require( 'vdom-to-html' );
var httpServer = require( '@stdlib/tools/disposable-http-server' );
var randn = require( '@stdlib/math/base/random/randn' );
var Plot = require( '@stdlib/plot/ctor' );

var plot1;
var plot2;
var opts;
var x;
var y;

// Plot 1:
x = [ [1, 2, 3], [1, 2, 3] ];
y = [ [1, 0, 1], [0, 1, 0] ];
opts = {
	'title': 'Multiple Lines',
	'lineStyle': [ '-', ':' ],
	'lineOpacity': [ 0.9, 0.3 ],
	'colors': [ 'red', 'green' ]
};
plot1 = new Plot( x, y, opts );


// Plot 2:
x = [ [randn(), randn(), randn()] ];
y = [ [randn(), randn(), randn()] ];
opts = {
	'title': 'Scatter + Rug',
	'lineStyle': 'none',
	'symbols': 'closed-circle',
	'xRug': true,
	'yRug': true,
	'xMin': -5.0,
	'xMax': 5.0,
	'yMin': -5.0,
	'yMax': 5.0,
	'xRugOpacity': 1.0,
	'yRugOpacity': 1.0
};
plot2 = new Plot( x, y, opts );


// Generate a combined view:
opts = {
	'html': toHTML( plot1.render() ) + toHTML( plot2.render() ),
	'open': true
};

httpServer( opts );
