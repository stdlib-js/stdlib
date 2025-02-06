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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var Hypergeometric = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var len;
	var N;
	var K;
	var n;
	var i;

	len = 100;
	N = new Float64Array( len );
	K = new Float64Array( len );
	n = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		N[ i ] = discreteUniform( 1, 100 );
		K[ i ] = discreteUniform( 1, N[ i ] );
		n[ i ] = discreteUniform( 1, N[ i ] );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new Hypergeometric( N[ i % len ], K[ i % len ], n[ i % len ] );
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
	var len;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = discreteUniform( K, 100 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.N = y[ i % len ];
		if ( dist.N !== y[ i % len ] ) {
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
	var len;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = discreteUniform( 1, N );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.K = y[ i % len ];
		if ( dist.K !== y[ i % len ] ) {
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
	var len;
	var N;
	var K;
	var n;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = discreteUniform( 1, N );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = y[ i % len ];
		if ( dist.n !== y[ i % len ] ) {
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
	var len;
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, 20 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = x[ i % len ];
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, 20 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = x[ i % len ];
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, 20 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = x[ i % len ];
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( K + 1, 50 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.N = x[ i % len ];
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, 20 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = x[ i % len ];
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, 20 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.n = x[ i % len ];
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 20.0 );
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

bench( pkg+':logpmf', function benchmark( b ) {
	var dist;
	var len;
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, n );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logpmf( x[ i % len ] );
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
	var len;
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 1, n );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.pmf( x[ i % len ] );
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
	var N;
	var K;
	var n;
	var x;
	var y;
	var i;

	N = 20;
	K = 10;
	n = 5;
	len = 100;
	dist = new Hypergeometric( N, K, n );
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
