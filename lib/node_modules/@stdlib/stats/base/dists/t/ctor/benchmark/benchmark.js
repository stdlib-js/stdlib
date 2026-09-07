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
var T = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	v = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new T( v[ i % v.length ] );
		if ( !( dist instanceof T ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof T ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:v', pkg ), function benchmark( b ) {
	var dist;
	var y;
	var i;
	var v;

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.v;
		if ( y !== v ) {
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

bench( format( '%s::set:v', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, EPS, 10.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = y[ i % y.length ];
		if ( dist.v !== y[ i % y.length ] ) {
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

bench( format( '%s:entropy', pkg ), function benchmark( b ) {
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, EPS, 10.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
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
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, 2.0 + EPS, 12.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
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
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, 1.0 + EPS, 11.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
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

bench( format( '%s:median', pkg ), function benchmark( b ) {
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, EPS, 10.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
		y = dist.median;
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
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, 1.0 + EPS, 11.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
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
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, 3.0 + EPS, 13.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
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
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, 1.0 + EPS, 11.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
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
	var array;
	var dist;
	var opts;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	array = uniform( 100, 1.0 + EPS, 11.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.v = array[ i % array.length ];
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
	var x;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	v = 5.54;
	dist = new T( v );

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

bench( format( '%s:logcdf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var x;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logcdf( x[ i % x.length ] );
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

bench( format( '%s:logpdf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var x;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	v = 5.54;
	dist = new T( v );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logpdf( x[ i % x.length ] );
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
	var x;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	v = 5.54;
	dist = new T( v );

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
	var x;
	var y;
	var i;
	var v;

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	v = 5.54;
	dist = new T( v );

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
