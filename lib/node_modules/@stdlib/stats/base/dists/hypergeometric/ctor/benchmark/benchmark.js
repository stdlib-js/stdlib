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
var Hypergeometric = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		N = ceil( ( randu() * 50.0 ) + EPS );
		K = ceil( randu() * N );
		n = ceil( randu() * N );
		dist = new Hypergeometric( N, K, n );
		if ( !( dist instanceof Hypergeometric ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Hypergeometric ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:N', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.N;
		if ( y !== N ) {
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

bench( pkg+'::set:N', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ceil( ( randu()*100.0 ) + K );
		dist.N = y;
		if ( dist.N !== y ) {
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

bench( pkg+'::get:K', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.K;
		if ( y !== K ) {
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

bench( pkg+'::set:K', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ceil( randu()*N );
		dist.K = y;
		if ( dist.K !== y ) {
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

bench( pkg+'::get:n', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

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
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = ceil( randu()*N );
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

bench( pkg+':kurtosis', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( 20.0*randu() );
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
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( 20.0*randu() );
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
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( 20.0*randu() );
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
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.N = ceil( randu()*50.0 ) + K;
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
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( 20.0*randu() );
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
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = ceil( 20.0*randu() );
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 20.0;
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

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

bench( pkg+':pmf', function benchmark( b ) {
	var dist;
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	dist = new Hypergeometric( N, K, n );

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
