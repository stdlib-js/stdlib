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
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var F = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = uniform( 100, EPS, 10.0, opts );
	d2 = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new F( d1[ i % d1.length ], d2[ i % d2.length ] );
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

bench( format( '%s::get:d1', pkg ), function benchmark( b ) {
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

bench( format( '%s::set:d1', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	y = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = y[ i % y.length ];
		if ( dist.d1 !== y[ i % y.length ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( dist.d1 ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:d2', pkg ), function benchmark( b ) {
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

bench( format( '%s::set:d2', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	y = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d2 = y[ i % y.length ];
		if ( dist.d2 !== y[ i % y.length ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( dist.d2 ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:entropy', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = x[ i % x.length ];
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

bench( format( '%s:kurtosis', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 8.54;
	dist = new F( d1, d2 );
	x = uniform( 100, EPS + 8.0, 20.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = x[ i % x.length ];
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

bench( format( '%s:mean', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = x[ i % x.length ];
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

bench( format( '%s:mode', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, EPS + 2.0, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = x[ i % x.length ];
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

bench( format( '%s:skewness', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 6.54;
	dist = new F( d1, d2 );
	x = uniform( 100, EPS + 6.0, 20.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = x[ i % x.length ];
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

bench( format( '%s:stdev', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, EPS + 1.0, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = x[ i % x.length ];
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

bench( format( '%s:variance', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, EPS + 1.0, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.d1 = x[ i % x.length ];
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

bench( format( '%s:cdf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, 0.0, 1.0, opts );

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

bench( format( '%s:pdf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, 0.0, 1.0, opts );

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

bench( format( '%s:quantile', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	d1 = 10.56;
	d2 = 5.54;
	dist = new F( d1, d2 );
	x = uniform( 100, 0.0, 1.0, opts );

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
