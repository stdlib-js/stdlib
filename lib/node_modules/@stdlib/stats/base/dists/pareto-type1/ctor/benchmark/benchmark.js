/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var Pareto1 = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		alpha = ( randu() * 10.0 ) + EPS;
		beta = ( randu() * 10.0 ) + EPS;
		dist = new Pareto1( alpha, beta );
		if ( !( dist instanceof Pareto1 ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Pareto1 ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:alpha', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.alpha;
		if ( y !== alpha ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set:alpha', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ( 100.0*randu() ) + EPS;
		dist.alpha = y;
		if ( dist.alpha !== y ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:beta', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.beta;
		if ( y !== beta ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set:beta', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ( 100.0*randu() ) + EPS;
		dist.beta = y;
		if ( dist.beta !== y ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':entropy', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.alpha = ( 100.0*randu() ) + EPS;
		y = dist.entropy;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':kurtosis', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.alpha = ( 100.0*randu() ) + 5.0 + EPS;
		y = dist.kurtosis;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mean', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.alpha = ( 100.0*randu() ) + EPS;
		y = dist.mean;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':median', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.alpha = ( 100.0*randu() ) + EPS;
		y = dist.median;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.alpha = ( 100.0*randu() ) + 1.0 + EPS;
		y = dist.mode;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':skewness', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.alpha = ( 100.0*randu() ) + 3.0 + EPS;
		y = dist.skewness;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':variance', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.alpha = ( 100.0*randu() ) + EPS;
		y = dist.variance;
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':cdf', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var x;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 100.0;
		y = dist.cdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':logcdf', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var x;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 100.0;
		y = dist.logcdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':logpdf', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var x;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 100.0;
		y = dist.logpdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':pdf', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var x;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 100.0;
		y = dist.pdf( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':quantile', function benchmark( b ) {
	var alpha;
	var beta;
	var dist;
	var x;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	dist = new Pareto1( alpha, beta );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.quantile( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
