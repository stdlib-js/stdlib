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
var uniform = require( '@stdlib/random/array/uniform' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var pdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var min;
	var max;
	var x;
	var y;
	var i;

	len = 100;
	x = uniform(len, -10.0, 10.0);
	min = uniform(len, -20.0, 0.0);
	max = new Float64Array(len);
	for ( i = 0; i < len; i++ ) {
		max[i] = uniform(1, min[i], min[i] + 40.0)[0];
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = pdf( x[ i % len ], min[ i % len ], max[ i % len ] );
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
	var mypdf;
	var min;
	var max;
	var x;
	var y;
	var i;

	min = -1.5;
	max = 1.5;
	mypdf = pdf.factory( min, max );
	x = uniform( 100, -2.0, 2.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mypdf( x[ i % x.length ] );
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
