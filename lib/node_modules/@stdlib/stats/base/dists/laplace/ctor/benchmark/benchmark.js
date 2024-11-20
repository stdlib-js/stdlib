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
var Laplace = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var i;

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		mu = ( randu() * 10.0 ) + EPS;
		b = ( randu() * 10.0 ) + EPS;
		dist = new Laplace( mu, b );
		if ( !( dist instanceof Laplace ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof Laplace ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:mu', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.mu;
		if ( y !== mu ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::set:mu', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = ( 100.0*randu() ) + EPS;
		dist.mu = y;
		if ( dist.mu !== y ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:b', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.b;
		if ( y !== b ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::set:b', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = ( 100.0*randu() ) + EPS;
		dist.b = y;
		if ( dist.b !== y ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':entropy', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + EPS;
		y = dist.entropy;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':kurtosis', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + EPS;
		y = dist.kurtosis;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':mean', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + EPS;
		y = dist.mean;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':median', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + EPS;
		y = dist.median;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':mode', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + 1.0 + EPS;
		y = dist.mode;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':skewness', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + EPS;
		y = dist.skewness;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':stdev', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + EPS;
		y = dist.stdev;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':variance', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = ( 100.0*randu() ) + EPS;
		y = dist.variance;
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':cdf', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var x;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = ( randu()*6.0 ) - 3.0;
		y = dist.cdf( x );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':logcdf', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var x;
	var y;
	var i;

	mu = 1.0;
	b = 2.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = ( randu()*6.0 ) - 3.0;
		y = dist.logcdf( x );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':logpdf', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var x;
	var y;
	var i;

	mu = 1.0;
	b = 2.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = ( randu()*6.0 ) - 3.0;
		y = dist.logpdf( x );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':mgf', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var x;
	var y;
	var i;

	mu = 2.0;
	b = 0.2;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu();
		y = dist.mgf( x );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':pdf', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var x;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = ( randu()*6.0 ) - 3.0;
		y = dist.pdf( x );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+':quantile', function benchmark( bm ) {
	var dist;
	var mu;
	var b;
	var x;
	var y;
	var i;

	mu = 2.0;
	b = 3.0;
	dist = new Laplace( mu, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu();
		y = dist.quantile( x );
		if ( isnan( y ) ) {
			bm.fail( 'should not return NaN' );
		}
	}
	bm.toc();
	if ( isnan( y ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});
