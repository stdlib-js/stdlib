'use strict';

var Plot = require( '@stdlib/plot/ctor' );

// To create a `plot` instance:
var plot = new Plot({
	'x': [ [ 1, 2, 3 ] ],
	'y': [ [ 1, 0, 1 ] ]
});

// To set properties:
plot.xLabel = 'index';
plot.yLabel = 'value';
plot.title = 'Pretty plot';
plot.symbols = 'closed-circle';

// If provided an invalid property value, an `error` is thrown.
try {
	plot.x = null;
	console.error( 'Something went wrong. Should not reach this line.' );
} catch ( err ) {
	console.log( err.message );
}
