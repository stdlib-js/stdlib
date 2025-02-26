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
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pkg = require( './../package.json' ).name;
var mgf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var mode;
	var min;
	var max;
	var len;
	var t;
	var y;
	var i;

	len = 100;
	t = new Float64Array( len );
	min = new Float64Array( len );
	max = new Float64Array( len );
	mode = new Float64Array( len );

	for ( i = 0; i < len; i++ ) {
		t[ i ] = randu() * 5.0;
		min[ i ] = randu() * 10.0;
		max[ i ] = min[ i ] + ( randu() * 40.0 ) + EPS;
		mode[ i ] = min[ i ] + ( ( max[ i ] - min[ i ] ) * randu() );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mgf( t[ i%len ], min[ i%len ], max[ i%len ], mode[ i%len ] );
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

bench( pkg+':factory', function benchmark( b ) {
	var mymgf;
	var mode;
	var min;
	var max;
	var t;
	var y;
	var i;

	min = -1.5;
	max = 1.5;
	mode = 0.5;
	mymgf = mgf.factory( min, max, mode );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		t = randu() * 5.0;
		y = mymgf( t );
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
