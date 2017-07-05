'use strict';

var Plot = require( '@stdlib/plot/ctor' );
var createRandu = require( '@stdlib/math/base/random/randu' ).factory;
var createRandn = require( '@stdlib/math/base/random/randn' ).factory;

var sigma;
var randn;
var randu;
var plot;
var opts;
var x1;
var x2;
var y1;
var y2;
var m;
var b;
var i;

/**
* Simple linear model.
*
* @private
* @param {number} m - slope
* @param {number} x - predictor
* @param {number} b - y-intercept
* @returns {number} prediction
*/
function model( m, x, b ) {
	return (m*x) + b;
}

// Create seeded PRNGs:
randu = createRandu({
	'seed': 123456
});
randn = createRandn({
	'seed': 123456
});

opts = {
	'title': 'y = mx + b',
	'xLabel': 'x',
	'yLabel': 'y',
	'xMin': 0,
	'xMax': 1,
	'lineStyle': [
		'-',
		'none'
	],
	'symbols': [
		'none',
		'open-circle'
	],
	'autoRender': false,
	'viewer': 'browser'
};

m = 5.0;
b = 3.0;

x1 = new Float64Array( 2 );
x1[ 0 ] = opts.xMin;
x1[ 1 ] = opts.xMax;

y1 = new Float64Array( x1.length );
for ( i = 0; i < y1.length; i++ ) {
	y1[ i ] = model( m, x1[i], b );
}

// Noisy data...
sigma = 2.5;

x2 = new Float64Array( 100 );
y2 = new Float64Array( x2.length );
for ( i = 0; i < x2.length; i++ ) {
	x2[ i ] = randu() * opts.xMax;
	y2[ i ] = model( m, x2[i], b ) + (randn()*sigma);
}

plot = new Plot( [ x1, x2 ], [ y1, y2 ], opts );
plot.view();
