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
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var ChiSquare = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var opts;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	k = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new ChiSquare( k[ i % k.length ] );
		if ( !( dist instanceof ChiSquare ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof ChiSquare ) ) {
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
	dist = new ChiSquare( k );

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
	var opts;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = y[ i % y.length ];
		if ( dist.k !== y[ i % y.length ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( dist.k ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':entropy', function benchmark( b ) {
	var dist;
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % x.length ];
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 1.0 + EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % x.length ];
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % x.length ];
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 1.0 + EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % x.length ];
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 1.0 + EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % x.length ];
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 1.0 + EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % x.length ];
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 1.0 + EPS, 10.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.k = x[ i % x.length ];
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.cdf( x[ i % x.length ] );
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 0.5, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.mgf( x[ i % x.length ] );
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.pdf( x[ i % x.length ] );
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
	var opts;
	var x;
	var y;
	var i;
	var k;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	k = 5.54;
	dist = new ChiSquare( k );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.quantile( x[ i % x.length ] );
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
