'use strict';

var toHTML = require( 'vdom-to-html' );
var Plot = require( '@stdlib/plot/plot' );
var createRandu = require( '@stdlib/math/base/random/randu' ).factory;
var createRandn = require( '@stdlib/math/base/random/randn' ).factory;
var onlineRegression = require( '@stdlib/math/ml/online-sgd-regression' );
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
var y1;
var y2;
var y3;
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
	return m*x + b;
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
	'xMax': 100,
	'lineStyle': [
		'-',
		'none',
		'-'
	],
	'symbols': [
		'none',
		'open-circle',
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

// Noisy data...
sigma = 0.0;

x2 = new Float64Array( 100 );
y2 = new Float64Array( x2.length );
for ( i = 0; i < x2.length; i++ ) {
	x2[ i ] = randu() * opts.xMax;
	y2[ i ] = model( m, x2[i], b ) + randn()*sigma;
}

// Fit...
fit = onlineRegression({
	'lambda': 1e-4,
	'loss': 'squaredError',
	'intercept': true
});

x3 = new Float64Array( 2 );
x3[ 0 ] = opts.xMin;
x3[ 1 ] = opts.xMax;

html = '';
for ( i = 0; i < x2.length; i++ ) {
	fit.update( [ x2[i] ], y2[i] );
	y3 = new Float64Array( 2 );
	for ( j = 0; j < x3.length; j++ ) {
		y3[ j ] = fit.predict( [ x3[j] ] );
	}
	opts.title = 'Fit: '+i;
	plot = new Plot( [x1,x2,x3], [y1,y2,y3], opts );
	html += toHTML( plot.render() );
}

// View the plots...
httpServer({
	'html': html,
	'open': true
});
