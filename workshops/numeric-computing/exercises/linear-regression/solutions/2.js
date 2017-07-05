'use strict';

var toHTML = require( 'vdom-to-html' );
var Plot = require( '@stdlib/plot/ctor' );
var createRandu = require( '@stdlib/math/base/random/randu' ).factory;
var createRandn = require( '@stdlib/math/base/random/randn' ).factory;
var onlineRegression = require( '@stdlib/ml/online-sgd-regression' );
var httpServer = require( '@stdlib/tools/disposable-http-server' );

var sigma;
var randn;
var randu;
var html;
var plot;
var opts;
var fit;
var x1;
var x2;
var x3;
var x4;
var y1;
var y2;
var y3;
var y4;
var N;
var m;
var b;
var i;
var j;

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
		'none',
		'none',
		'-'
	],
	'symbols': [
		'none',
		'open-circle',
		'closed-circle',
		'none'
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

// Noisy data + fit...
sigma = 2.5;
N = 100;

fit = onlineRegression({
	'lambda': 1e-4,
	'loss': 'squaredError',
	'intercept': true
});

x2 = [];
y2 = [];

x4 = new Float64Array( 2 );
x4[ 0 ] = opts.xMin;
x4[ 1 ] = opts.xMax;

html = '';
for ( i = 0; i < N; i++ ) {
	// Generate a new data point:
	x3 = randu() * opts.xMax;
	x2.push( x3 );

	y3 = model( m, x3, b ) + (randn()*sigma);
	y2.push( y3 );

	// Update the model:
	fit.update( [ x3 ], y3 );
	y4 = new Float64Array( 2 );
	for ( j = 0; j < x4.length; j++ ) {
		y4[ j ] = fit.predict( [ x4[j] ] );
	}

	// Generate a plot:
	opts.title = 'Fit: '+i;
	plot = new Plot( [ x1, x2, [x3], x4 ], [ y1, y2, [y3], y4 ], opts );
	html += toHTML( plot.render() );
}

// View the plots...
httpServer({
	'html': html,
	'open': true
});
