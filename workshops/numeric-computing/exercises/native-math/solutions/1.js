'use strict';

var TWO_PI = require( '@stdlib/math/constants/float64-two-pi' );
var linspace = require( '@stdlib/math/utils/linspace' );
var Plot = require( '@stdlib/plot/plot' );

var plot;
var opts;
var sin;
var cos;
var x;
var i;

// Create a linearly spaced vector:
x = linspace( 0.0, TWO_PI, 1000 );

// Compute the sine and cosine of each x[i] using native methods...
sin = new Float64Array( x.length );
cos = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	sin[ i ] = Math.sin( x[i] );
	cos[ i ] = Math.cos( x[i] );
}

// Plot the results...
opts = {
	'title': 'Math.sin()',
	'xLabel': 'x',
	'yLabel': 'sine',
	'yMin': -1.1,
	'yMax': 1.1
};

plot = new Plot( [x], [sin], opts );
plot.view( 'window' );

opts.title = 'Math.cos()';
opts.yLabel = 'cosine';
opts.y = [ cos ];

plot = new Plot( [x], [cos], opts );
plot.view( 'window' );


