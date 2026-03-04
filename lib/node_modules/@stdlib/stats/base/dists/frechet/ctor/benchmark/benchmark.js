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
var Frechet = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( bm ) {
	var alpha;
	var dist;
	var opts;
	var s;
	var m;
	var i;

	opts = {
		'dtype': 'float64'
	};
	alpha = uniform( 100, EPS, 10.0, opts );
	m = uniform( 100, -20.0, -10.0, opts );
	s = uniform( 100, EPS, 10.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist = new Frechet( alpha[ i % alpha.length ], s[ i % s.length ], m[ i % m.length ] );
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

bench( format( '%s::get:alpha', pkg ), function benchmark( bm ) {
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

bench( format( '%s::set:alpha', pkg ), function benchmark( bm ) {
	var alpha;
	var dist;
	var opts;
	var s;
	var m;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	alpha = 20.0;
	s = 10.0;
	m = -3.0;
	dist = new Frechet( alpha, s, m );
	y = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = y[ i % y.length ];
		if ( dist.alpha !== y[ i % y.length ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( dist.alpha ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( format( '%s::get:s', pkg ), function benchmark( bm ) {
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

bench( format( '%s::set:s', pkg ), function benchmark( bm ) {
	var alpha;
	var dist;
	var opts;
	var s;
	var m;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	alpha = 20.0;
	s = 20.0;
	m = 30.0;
	dist = new Frechet( alpha, s, m );
	y = uniform( 100, EPS, 100.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.s = y[ i % y.length ];
		if ( dist.s !== y[ i % y.length ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( dist.s ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( format( '%s::get:m', pkg ), function benchmark( bm ) {
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

bench( format( '%s::set:m', pkg ), function benchmark( bm ) {
	var alpha;
	var dist;
	var opts;
	var s;
	var m;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	alpha = 10.0;
	s = 10.0;
	m = 5.0;
	dist = new Frechet( alpha, s, m );
	y = uniform( 100, 0.0, 20.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.m = y[ i % y.length ];
		if ( dist.m !== y[ i % y.length ] ) {
			bm.fail( 'should return set value' );
		}
	}
	bm.toc();
	if ( isnan( dist.m ) ) {
		bm.fail( 'should not return NaN' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( format( '%s:entropy', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 10.0;
	c = 100.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, c, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
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

bench( format( '%s:kurtosis', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 10.0;
	c = 120.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, c, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
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
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, c, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
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

bench( format( '%s:median', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, c, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
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

bench( format( '%s:skewness', pkg ), function benchmark( bm ) {
	var dist;
	var opts;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 10.0;
	c = 110.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, c, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
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
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 10.0;
	c = 80.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, c, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
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
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 10.0;
	c = 80.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, c, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
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
	var c;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 40.0;
	c = 30.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, 60.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
		y = dist.cdf;
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
	var c;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 40.0;
	c = 30.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, 60.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
		y = dist.pdf;
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
	var c;
	var x;
	var y;
	var i;

	opts = {
		'dtype': 'float64'
	};
	a = 20.0;
	b = 40.0;
	c = 30.0;
	dist = new Frechet( a, b, c );
	x = uniform( 100, 0.0, 1.0, opts );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.alpha = x[ i % x.length ];
		y = dist.quantile;
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
