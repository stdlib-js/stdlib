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
var round = require( '@stdlib/math/base/special/round' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var pkg = require( './../package.json' ).name;
var Bernoulli = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var dist;
	var p;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = randu();
		dist = new Bernoulli( p );
		if ( !( dist instanceof Bernoulli ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Bernoulli ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:p', function benchmark( b ) {
	var dist;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

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

bench( pkg+'::set:p', function benchmark( b ) {
	var dist;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = randu();
		dist.p = y;
		if ( dist.p !== y ) {
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

bench( pkg+':entropy', function benchmark( b ) {
	var dist;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = randu();
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
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = randu();
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
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = randu();
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

bench( pkg+':median', function benchmark( b ) {
	var dist;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = randu();
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

bench( pkg+':skewness', function benchmark( b ) {
	var dist;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = randu();
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
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = randu();
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
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = randu();
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
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * 6.0;
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

bench( pkg+':mgf', function benchmark( b ) {
	var dist;
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = randu() * ( -ln( 1.0-p ) );
		y = dist.mgf( x );
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
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = round( randu() * 8.0 );
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
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Bernoulli( p );

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
