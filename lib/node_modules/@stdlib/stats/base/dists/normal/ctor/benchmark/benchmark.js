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
var Normal = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var opts;
	var mu;
	var i;

	opts = {
		'dtype': 'float64'
	};
	mu = uniform( 100, EPS, 10.0, opts );
	sigma = uniform( 100, EPS, 10.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new Normal( mu[ i % mu.length ], sigma[ i % sigma.length ] );
		if ( !( dist instanceof Normal ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Normal ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:mu', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = x[ i % x.length ];
		dist.mu = y;
		if ( dist.mu !== y ) {
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

bench( format( '%s::get:sigma', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.sigma;
		if ( y !== sigma ) {
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

bench( format( '%s::set:sigma', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = x[ i % x.length ];
		dist.sigma = y;
		if ( dist.sigma !== y ) {
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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

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

bench( format( '%s:kurtosis', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

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

bench( format( '%s:mode', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS + 1.0, 100.0, {
		'dtype': 'float64'
	});

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

bench( format( '%s:skewness', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.mu = x[ i % x.length ];
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

bench( format( '%s:variance', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, EPS, 100.0, {
		'dtype': 'float64'
	});

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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, -3.0, 3.0, {
		'dtype': 'float64'
	});

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

bench( format( '%s:logpdf', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, -3.0, 3.0, {
		'dtype': 'float64'
	});

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

bench( format( '%s:mgf', pkg ), function benchmark( b ) {
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 0.2;
	dist = new Normal( mu, sigma );

	x = uniform( 100, 0.0, 1.0, {
		'dtype': 'float64'
	});

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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, -3.0, 3.0, {
		'dtype': 'float64'
	});

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
	var sigma;
	var dist;
	var mu;
	var x;
	var y;
	var i;

	mu = 2.0;
	sigma = 3.0;
	dist = new Normal( mu, sigma );

	x = uniform( 100, 0.0, 1.0, {
		'dtype': 'float64'
	});

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
