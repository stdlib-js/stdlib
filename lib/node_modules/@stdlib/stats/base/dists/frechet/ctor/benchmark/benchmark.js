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
var Frechet = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var alpha;
	var dist;
	var len;
	var s;
	var m;
	var i;

	len = 100;
	alpha = new Float64Array( len );
	s = new Float64Array( len );
	m = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		alpha[ i ] = uniform( EPS, 10.0 );
		s[ i ] = uniform( EPS, 10.0 );
		m[ i ] = uniform( -20.0, -10.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist = new Frechet( alpha[ i % len ], s[ i % len ], m[ i % len ] );
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
	var len;
	var s;
	var m;
	var y;
	var i;

	alpha = 20.0;
	s = 10.0;
	m = -3.0;
	dist = new Frechet( alpha, s, m );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = y[ i % len ];
		if ( dist.a !== y[ i % len ] ) {
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
	var len;
	var s;
	var m;
	var y;
	var i;

	alpha = 20.0;
	s = 20.0;
	m = 30.0;
	dist = new Frechet( alpha, s, m );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( EPS, 100.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.b = y[ i % len ];
		if ( dist.b !== y[ i % len ] ) {
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
	var len;
	var s;
	var m;
	var y;
	var i;

	alpha = 10.0;
	s = 10.0;
	m = 5.0;
	dist = new Frechet( alpha, s, m );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( 0.0, 20.0 );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.c = y[ i % len ];
		if ( dist.c !== y[ i % len ] ) {
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
	var len;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 100.0;
	dist = new Frechet( a, b, c );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, c );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
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
	var len;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 120.0;
	dist = new Frechet( a, b, c );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, c );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
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
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, c );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
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
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, c );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
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
	var len;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, c );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
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
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 80.0;
	dist = new Frechet( a, b, c );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, c );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
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
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	a = 20.0;
	b = 10.0;
	c = 80.0;
	dist = new Frechet( a, b, c );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, c );
	}

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % len ];
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
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 60.0 );
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

bench( pkg+':pdf', function benchmark( bm ) {
	var dist;
	var len;
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
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 60.0 );
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
