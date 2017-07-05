'use strict';

var randn = require( '@stdlib/math/base/random/randn' );
var Plot = require( '@stdlib/plot/ctor' );

var plot;
var opts;
var x;
var y;

// Single line:
opts = {
	'title': 'Single Line'
};
plot = new Plot( [ [1, 2, 3] ], [ [1, 0, 1] ], opts );
plot.view( 'browser' );
plot.view( 'window' );


// Scatter plot:
x = [ [randn(), randn(), randn()] ];
y = [ [randn(), randn(), randn()] ];
opts = {
	'title': 'Scatter',
	'lineStyle': 'none',
	'symbols': 'closed-circle',
	'xMin': -5.0,
	'xMax': 5.0,
	'yMin': -5.0,
	'yMax': 5.0
};
plot = new Plot( x, y, opts );
plot.view( 'browser' );
plot.view( 'window' );


// Multiple lines:
x = [ [1, 2, 3], [1, 2, 3] ];
y = [ [1, 0, 1], [0, 1, 0] ];
opts = {
	'title': 'Multiple Lines',
	'lineStyle': [ '-', ':' ],
	'lineOpacity': [ 0.9, 0.3 ],
	'colors': [ 'red', 'green' ]
};
plot = new Plot( x, y, opts );
plot.view( 'browser' );
plot.view( 'window' );


// Line + scatter:
x = [ [1, 2, 3], [1, 2, 3] ];
y = [ [1, 0, 1], [0, 1, 0] ];
opts = {
	'title': 'Line + Scatter',
	'lineStyle': [ '-', ':' ],
	'symbols': [ 'closed-circle', 'open-circle' ]
};
plot = new Plot( x, y, opts );
plot.view( 'browser' );
plot.view( 'window' );


// Scatter + rug:
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
plot = new Plot( x, y, opts );
plot.view( 'browser' );
plot.view( 'window' );
