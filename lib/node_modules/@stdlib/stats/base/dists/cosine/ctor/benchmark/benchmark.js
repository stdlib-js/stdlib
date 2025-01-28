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
var Float64Array = require( '@stdlib/array/float64' );
var uniform = require( '@stdlib/random/base/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var Cosine = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var dist;
	var len;
	var mu;
	var s;
	var i;

	len = 100;
	mu = new Float64Array( len );
	s = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		mu[ i ] = uniform( EPS, 10.0 );
		s[ i ] = uniform( EPS, 10.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist = new Cosine( mu[ i % len ], s[ i % len ] );
		if ( !( dist instanceof Cosine ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof Cosine ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:mu', function benchmark( bm ) {
	var dist;
	var mu;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

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
	var len;
	var mu;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = y[ i % len ];
		if ( dist.mu !== y[ i % len ] ) {
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

bench( pkg+'::get:s', function benchmark( bm ) {
	var dist;
	var mu;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.s;
		if ( y !== s ) {
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

bench( pkg+'::set:s', function benchmark( bm ) {
	var dist;
	var len;
	var mu;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.s = y[ i % len ];
		if ( dist.s !== y[ i % len ] ) {
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

bench( pkg+':kurtosis', function benchmark( bm ) {
	var dist;
	var len;
	var mu;
	var x;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % len ];
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
	var len;
	var mu;
	var x;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % len ];
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
	var len;
	var mu;
	var x;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % len ];
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
	var len;
	var mu;
	var x;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 1.0 + EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % len ];
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
	var len;
	var mu;
	var x;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % len ];
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
	var len;
	var mu;
	var x;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % len ];
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
	var len;
	var mu;
	var x;
	var s;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.mu = x[ i % len ];
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
	var len;
	var mu;
	var s;
	var x;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( -3.0, 3.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.cdf( x[ i % len ] );
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
	var len;
	var mu;
	var s;
	var x;
	var y;
	var i;

	mu = 1.0;
	s = 2.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( -3.0, 3.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.logpdf( x[ i % len ] );
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
	var len;
	var mu;
	var s;
	var x;
	var y;
	var i;

	mu = 2.0;
	s = 0.2;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.mgf( x[ i % len ] );
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
	var len;
	var mu;
	var s;
	var x;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( -3.0, 3.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.pdf( x[ i % len ] );
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
	var len;
	var mu;
	var s;
	var x;
	var y;
	var i;

	mu = 2.0;
	s = 3.0;
	dist = new Cosine( mu, s );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.quantile( x[ i % len ] );
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
