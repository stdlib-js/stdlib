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
var Chi = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var len;
	var i;
	var k;

	len = 100;
	k = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		k[ i ] = uniform( EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new Chi( k[ i % len ] );
		if ( !( dist instanceof Chi ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Chi ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:k', function benchmark( b ) {
	var dist;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.k;
		if ( y !== k ) {
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

bench( pkg+'::set:k', function benchmark( b ) {
	var dist;
	var len;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = y[ i % len ];
		if ( dist.k !== y[ i % len ] ) {
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % len ];
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 1.0 + EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % len ];
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % len ];
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

bench( pkg+':mode', function benchmark( b ) {
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 1.0 + EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % len ];
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 1.0 + EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % len ];
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

bench( pkg+':stdev', function benchmark( b ) {
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 1.0 + EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % len ];
		y = dist.stdev;
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 1.0 + EPS, 10.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % len ];
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.cdf( x[ i % len ] );
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logpdf( x[ i % len ] );
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.pdf( x[ i % len ] );
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
	var dist;
	var len;
	var x;
	var y;
	var i;
	var k;

	k = 5.54;
	dist = new Chi( k );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.quantile( x[ i % len ] );
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
