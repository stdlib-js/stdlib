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
var Frechet = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var alpha;
	var dist;
	var s;
	var m;
	var i;

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		alpha = ( randu() * 10.0 ) + EPS;
		s = ( randu() * 10.0 ) + EPS;
		m = ( randu() * 10.0 ) - 20.0;
		dist = new Frechet( alpha, s, m );
		if ( !( dist instanceof Frechet ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof Frechet ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:alpha', function benchmark( bm ) {
	var alpha;
	var dist;
	var s;
	var m;
	var y;
	var i;

	alpha = 20.0;
	s = 40.0;
	m = 10.0;
	dist = new Frechet( alpha, s, m );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.alpha;
		if ( y !== alpha ) {
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

bench( pkg+'::set:alpha', function benchmark( bm ) {
	var alpha;
	var dist;
	var s;
	var m;
	var y;
	var i;

	alpha = 20.0;
	s = 10.0;
	m = -3.0;
	dist = new Frechet( alpha, s, m );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = ( 100.0*randu() ) + EPS;
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

bench( pkg+'::get:s', function benchmark( bm ) {
	var alpha;
	var dist;
	var s;
	var m;
	var y;
	var i;

	alpha = 20.0;
	s = 20.0;
	m = 30.0;
	dist = new Frechet( alpha, s, m );

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
	var alpha;
	var dist;
	var s;
	var m;
	var y;
	var i;

	alpha = 20.0;
	s = 20.0;
	m = 30.0;
	dist = new Frechet( alpha, s, m );

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

bench( pkg+'::get:m', function benchmark( bm ) {
	var alpha;
	var dist;
	var s;
	var m;
	var y;
	var i;

	alpha = 5.0;
	s = 5.0;
	m = 10.0;
	dist = new Frechet( alpha, s, m );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.m;
		if ( y !== m ) {
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

bench( pkg+'::set:m', function benchmark( bm ) {
	var alpha;
	var dist;
	var s;
	var m;
	var y;
	var i;

	alpha = 10.0;
	s = 10.0;
	m = 5.0;
	dist = new Frechet( alpha, s, m );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = randu() * 20.0;
		dist.c = y;
		if ( dist.c !== y ) {
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
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 100.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = randu() * c;
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
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 120.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = randu() * c;
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
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = randu() * c;
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
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = randu() * c;
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

bench( pkg+':skewness', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = randu() * c;
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
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 80.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = randu() * c;
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
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 80.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = randu() * c;
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
	var c;
	var x;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	c = 30.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu() * 60.0;
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

bench( pkg+':pdf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var c;
	var x;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	c = 30.0;
	dist = new Frechet( a, b, c );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu() * 60.0;
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
	var c;
	var x;
	var y;
	var i;

	a = 20.0;
	b = 40.0;
	c = 30.0;
	dist = new Frechet( a, b, c );

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
