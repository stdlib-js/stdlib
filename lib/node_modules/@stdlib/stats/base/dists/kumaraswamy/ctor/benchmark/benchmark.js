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
var Kumaraswamy = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = uniform( 100, EPS, 10.0, opts );
	b = uniform( 100, EPS, 10.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist = new Kumaraswamy( a[ i % a.length ], b[ i % b.length ] );
		if ( !( dist instanceof Kumaraswamy ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof Kumaraswamy ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( format( '%s::get:a', pkg ), function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

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

bench( format( '%s::set:a', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = y[ i % y.length ];
		if ( dist.a !== y[ i % y.length ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( dist.a ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( format( '%s::get:b', pkg ), function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

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

bench( format( '%s::set:b', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.b = y[ i % y.length ];
		if ( dist.b !== y[ i % y.length ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( dist.b ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( format( '%s:kurtosis', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % x.length ];
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

bench( format( '%s:mean', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % x.length ];
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

bench( format( '%s:mode', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS + 1.0, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % x.length ];
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

bench( format( '%s:skewness', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % x.length ];
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

bench( format( '%s:stdev', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % x.length ];
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

bench( format( '%s:variance', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = x[ i % x.length ];
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

bench( format( '%s:cdf', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.cdf( x[ i % x.length ] );
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

bench( format( '%s:logcdf', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.logcdf( x[ i % x.length ] );
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

bench( format( '%s:logpdf', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.logpdf( x[ i % x.length ] );
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

bench( format( '%s:pdf', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.pdf( x[ i % x.length ] );
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

bench( format( '%s:quantile', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 100.56789;
	b = 55.54321;
	dist = new Kumaraswamy( a, b );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = dist.quantile( x[ i % x.length ] );
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
