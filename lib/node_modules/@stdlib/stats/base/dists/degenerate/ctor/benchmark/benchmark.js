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
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var Degenerate = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var i;

	opts = {
		'dtype': 'float64'
	};
	mu = uniform( 100, 0.0, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new Degenerate( mu[ i % mu.length ] );
		if ( !( dist instanceof Degenerate ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Degenerate ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:mu', pkg ), function benchmark( b ) {
	var dist;
	var mu;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.mu;
		if ( y !== mu ) {
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

bench( format( '%s::set:mu', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	y = uniform( 100, 0.0, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = y[ i % y.length ];
		if ( dist.mu !== y[ i % y.length ] ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( isnan( dist.mu ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:entropy', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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

bench( format( '%s:mode', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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

bench( format( '%s:mean', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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

bench( format( '%s:stdev', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 1.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 6.0, opts );

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
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 6.0, opts );

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
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 6.0, opts );

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

bench( format( '%s:logpmf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 6.0, opts );

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

bench( format( '%s:mgf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 10.0, opts );

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

bench( format( '%s:pdf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = uniform( 100, 0.0, 6.0, opts );

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

bench( format( '%s:pmf', pkg ), function benchmark( b ) {
	var dist;
	var opts;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

	opts = {
		'dtype': 'float64'
	};
	x = discreteUniform( 100, 0, 8, opts );

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
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	dist = new Degenerate( mu );

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
