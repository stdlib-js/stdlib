'use strict';

var Plot = require( '@stdlib/plot/ctor' );
var epsdiff = require( '@stdlib/math/base/utils/float64-epsilon-difference' );
var data = require( './../fixtures/sin/data.json' );
var rmse = require( './2.js' );

var delta;
var plot;
var opts;
var sin;
var x;
var i;

// Compute the sine of each x[i] using native methods...
x = data.x;
sin = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	sin[ i ] = Math.sin( x[i] );
}

// Plot the results...
opts = {
	'title': 'sin()',
	'xLabel': 'x',
	'yLabel': 'sine',
	'yMin': -1.1,
	'yMax': 1.1
};

plot = new Plot( [ x, x ], [ sin, data.expected ], opts );
plot.view( 'window' );

// Plot the deviations...
delta = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	delta[ i ] = epsdiff( data.expected[i], sin[i], 'x' );
}
opts = {
	'title': 'RMSE: '+rmse( data.expected, sin ),
	'xLabel': 'x',
	'yLabel': 'delta (eps)'
};
plot = new Plot( [x], [delta], opts );
plot.view( 'window' );
