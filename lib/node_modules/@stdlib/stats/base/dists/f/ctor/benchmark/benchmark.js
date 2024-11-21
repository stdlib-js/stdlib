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
var F = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var d1;
	var d2;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		d1 = ( randu() * 10.0 ) + EPS;
		d2 = ( randu() * 10.0 ) + EPS;
		dist = new F( d1, d2 );
		if ( !( dist instanceof F ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof F ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:d1', function benchmark( b ) {
	var dist;
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.d1;
		if ( y !== d1 ) {
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

bench( pkg+'::set:d1', function benchmark( b ) {
	var dist;
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ( 10.0*randu() ) + EPS;
		dist.d1 = y;
		if ( dist.d1 !== y ) {
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

bench( pkg+'::get:d2', function benchmark( b ) {
	var dist;
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.d2;
		if ( y !== d2 ) {
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

bench( pkg+'::set:d2', function benchmark( b ) {
	var dist;
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ( 10.0*randu() ) + EPS;
		dist.d2 = y;
		if ( dist.d2 !== y ) {
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
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = ( 10.0*randu() ) + EPS;
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
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 8.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = ( 10.0*randu() ) + 8.0 + EPS;
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
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = ( 10.0*randu() ) + EPS;
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
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = ( 10.0*randu() ) + 2.0 + EPS;
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
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 6.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = ( 10.0*randu() ) + 6.0 + EPS;
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
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = ( 10.0*randu() ) + 1.0 + EPS;
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
	var d1;
	var d2;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = ( 10.0*randu() ) + 1.0 + EPS;
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
	var d1;
	var d2;
	var x;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
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

bench( pkg+':pdf', function benchmark( b ) {
	var dist;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
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
	var dist;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );

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
