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
var uniform = require( '@stdlib/random/base/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var Arcsine = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var i;

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		a = uniform( EPS, 10.0 );
		b = uniform( a + EPS, a + 10.0 + EPS );
		dist = new Arcsine( a, b );
		if ( !( dist instanceof Arcsine ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof Arcsine ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:a', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.a;
		if ( y !== a ) {
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

bench( pkg+'::set:a', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 120.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = uniform( EPS, 100.0 + EPS );
		dist.a = y;
		if ( dist.a !== y ) {
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	dist = new Arcsine( a, b );

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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = uniform( a + EPS, a + 100.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( EPS, 100.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( EPS, 100.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( EPS, 100.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( EPS, 100.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( 1.0 + EPS, 101.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( EPS, 100.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( EPS, 100.0 + EPS );
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
	var a;
	var b;
	var y;
	var i;

	a = 20.0;
	b = 140.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = uniform( EPS, 100.0 + EPS );
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
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu();
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

bench( pkg+':logpdf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu();
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

bench( pkg+':pdf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	dist = new Arcsine( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu();
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
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	dist = new Arcsine( a, b );

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
