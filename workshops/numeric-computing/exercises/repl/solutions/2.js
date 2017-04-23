'use strict';

var linspace = require( '@stdlib/math/utils/linspace' );
var erf = require( '@stdlib/math/base/special/erf' );
var randu = require( '@stdlib/math/base/random/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var Plot = require( '@stdlib/plot/plot' );
var ColumnChart = require( '@stdlib/plot/sparklines/unicode/column' );

var plot;
var opts;
var x;
var y;
var i;

// Plotting...
x = linspace( -10.0, 10.0, 1003 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
	y[ i ] = erf( x[i] );
}

opts = {
	'title': 'erf',
	'xLabel': 'x',
	'yLabel': 'erf',
	'yMin': -1.1,
	'yMax': 1.1
};
plot = new Plot( [x], [y], opts );
plot.view( 'window' );


// Sparklines...
plot = new ColumnChart({
	'data': linspace( 0, 10, 11 )
});
console.log( plot.render() );

/**
* Provided an equally spaced edge vector, bins an input vector and returns the bin counts.
*
* @private
* @param {ArrayLike} x - input vector
* @param {ArrayLike} edges - edge vector
* @returns {Int32Array} bin counts
*/
function bin( x, edges ) {
	var counts;
	var idx;
	var N;
	var i;

	N = edges.length - 1;
	counts = new Int32Array( N );
	for ( i = 0; i < x.length; i++ ) {
		idx = floor( x[i]*N );
		counts[ idx ] += 1;
	}
	return counts;
} // end FUNCTION bin()

x = new Float64Array( 10000 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = randu();
}
y = bin( x, linspace( 0, 1, 101 ) );

plot = new ColumnChart({
	'data': y,
	'yMin': 0
});
console.log( plot.render() );
