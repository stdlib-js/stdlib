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
var Float64Array = require( '@stdlib/array/float64' );
var uniform = require( '@stdlib/random/base/uniform' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var Geometric = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
	var dist;
	var len;
	var p;
	var i;

	len = 100;
	p = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		p[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist = new Geometric( p[ i % len ] );
		if ( !( dist instanceof Geometric ) ) {
			b.fail( 'should return a distribution instance' );
		}
	}
	b.toc();
	if ( !( dist instanceof Geometric ) ) {
		b.fail( 'should return a distribution instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::get:p', pkg ), function benchmark( b ) {
	var dist;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );

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
	var len;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	y = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		y[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = y[ i % len ];
		if ( dist.p !== y[ i % len ] ) {
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

bench( format( '%s:entropy', pkg ), function benchmark( b ) {
	var dist;
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var dist;
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var len;
	var x;
	var p;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dist.p = x[ i % len ];
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
	var len;
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 6 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.cdf( x[ i % len ] );
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
	var len;
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 8.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logcdf( x[ i % len ] );
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
	var len;
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 8 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.logpmf( x[ i % len ] );
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
	var len;
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, -ln( 1.0-p ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.mgf( x[ i % len ] );
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
	var len;
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = discreteUniform( 0, 8 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.pmf( x[ i % len ] );
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
	var len;
	var p;
	var x;
	var y;
	var i;

	p = 0.54;
	dist = new Geometric( p );
	len = 100;
	x = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		x[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = dist.quantile( x[ i % len ] );
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
