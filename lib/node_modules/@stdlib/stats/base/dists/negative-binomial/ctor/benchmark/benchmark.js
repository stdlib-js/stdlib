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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var NegativeBinomial = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var r;
	var p;
	var i;

	opts = {
		'dtype': 'float64'
	};
	r = discreteUniform( 100, 1, 50, opts );
	p = uniform( 100, EPS, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new NegativeBinomial( r[ i % r.length ], p[ i % p.length ] );
		if ( !( dist instanceof NegativeBinomial ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof NegativeBinomial ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:r', pkg ), function benchmark( b ) {
	var dist;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.r;
		if ( y !== r ) {
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

bench( format( '%s::set:r', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	y = discreteUniform( 100, 1, 50, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.r = y[ i % y.length ];
		if ( dist.r !== y[ i % y.length ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( dist.r ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:p', pkg ), function benchmark( b ) {
	var dist;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

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

bench( format( '%s::set:p', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, EPS, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = y[ i % y.length ];
		if ( dist.p !== y[ i % y.length ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( dist.p ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:kurtosis', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var x;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 1, 100, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.r = x[ i % x.length ];
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
	var x;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 1, 100, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.r = x[ i % x.length ];
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
	var x;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 1, 100, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.r = x[ i % x.length ];
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
	var x;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 1, 100, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.r = x[ i % x.length ];
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
	var x;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 1, 100, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.r = x[ i % x.length ];
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
	var x;
	var r;
	var p;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 1, 100, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.r = x[ i % x.length ];
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
	var r;
	var p;
	var x;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
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

bench( format( '%s:logpmf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var r;
	var p;
	var x;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 0, r, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logpmf( x[ i % x.length ] );
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

bench( format( '%s:pmf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var r;
	var p;
	var x;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 0, r, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.pmf( x[ i % x.length ] );
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
	var r;
	var p;
	var x;
	var y;
	var i;

	r = 40;
	p = 0.6;
	dist = new NegativeBinomial( r, p );

	opts = {
		'dtype': 'float64'
	};
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
