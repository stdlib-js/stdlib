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
var pkg = require( './../package.json' ).name;
var DiscreteUniform = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var i;

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		a = round( randu() * 10.0 );
		b = round( ( randu() * 10.0 ) + a );
		dist = new DiscreteUniform( a, b );
		if ( !( dist instanceof DiscreteUniform ) ) {
			bm.fail( 'should return a distribution instance' );
		}
	}
	bm.toc();
	if ( !( dist instanceof DiscreteUniform ) ) {
		bm.fail( 'should return a distribution instance' );
	}
	bm.pass( 'benchmark finished' );
	bm.end();
});

bench( pkg+'::get:a', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

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

bench( pkg+'::set:a', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 120;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = round( 100.0*randu() );
		dist.a = y;
		if ( dist.a !== y ) {
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

bench( pkg+'::get:b', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

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

bench( pkg+'::set:b', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		y = round( ( 100.0*randu() ) + a );
		dist.b = y;
		if ( dist.b !== y ) {
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

bench( pkg+':entropy', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = round( 100.0*randu() );
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

bench( pkg+':kurtosis', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = round( 100.0*randu() );
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

bench( pkg+':mean', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = round( 100.0*randu() );
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

bench( pkg+':median', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = round( randu()*100.0 );
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

bench( pkg+':skewness', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = round( randu()*100.0 );
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

bench( pkg+':stdev', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = round( randu()*100.0 );
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

bench( pkg+':variance', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var y;
	var i;

	a = 20;
	b = 140;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		dist.a = round( randu()*100.0 );
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

bench( pkg+':cdf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu() * 60.0;
		y = dist.cdf( x );
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

bench( pkg+':logcdf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu() * 60.0;
		y = dist.logcdf( x );
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

bench( pkg+':logpmf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = round( randu() * 60.0 );
		y = dist.logpmf( x );
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

bench( pkg+':mgf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu();
		y = dist.mgf( x );
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

bench( pkg+':pmf', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = round( randu() * 60.0 );
		y = dist.pmf( x );
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

bench( pkg+':quantile', function benchmark( bm ) {
	var dist;
	var a;
	var b;
	var x;
	var y;
	var i;

	a = 20;
	b = 40;
	dist = new DiscreteUniform( a, b );

	bm.tic();
	for ( i = 0; i < bm.iterations; i++ ) {
		x = randu();
		y = dist.quantile( x );
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
