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
var ceil = require( '@stdlib/math/base/special/ceil' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var Binomial = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		n = ceil( ( randu() * 50.0 ) + EPS );
		p = randu() + EPS;
		dist = new Binomial( n, p );
		if ( !( dist instanceof Binomial ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Binomial ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:n', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.n;
		if ( y !== n ) {
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

bench( pkg+'::set:n', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ceil( ( randu() * 50.0 ) + EPS );
		dist.n = y;
		if ( dist.n !== y ) {
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

bench( pkg+'::get:p', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.p;
		if ( y !== p ) {
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

bench( pkg+'::set:p', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = randu() + EPS;
		dist.p = y;
		if ( dist.p !== y ) {
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

bench( pkg+':kurtosis', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( ( 100.0*randu() ) + EPS );
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
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( ( 100.0*randu() ) + EPS );
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
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( ( 100.0*randu() ) + EPS );
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
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( ( 100.0*randu() ) + EPS );
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
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( ( 100.0*randu() ) + EPS );
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
	var n;
	var p;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( ( 100.0*randu() ) + EPS );
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
	var n;
	var p;
	var x;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

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

bench( pkg+':logpmf', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var x;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu() * n );
		y = dist.logpmf( x );
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

bench( pkg+':mgf', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var x;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu();
		y = dist.mgf( x );
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

bench( pkg+':pmf', function benchmark( b ) {
	var dist;
	var n;
	var p;
	var x;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = ceil( randu() * n );
		y = dist.pmf( x );
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
	var n;
	var p;
	var x;
	var y;
	var i;

	n = 40;
	p = 0.6;
	dist = new Binomial( n, p );

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
