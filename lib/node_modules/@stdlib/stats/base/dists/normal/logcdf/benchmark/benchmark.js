/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var pkg = require( './../package.json' ).name;
var logcdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var sigma;
	var len;
	var mu;
	var x;
	var y;
	var i;

	len = 100;
	x = uniform( len, -100.0, 100.0 );
	mu = uniform( len, -50.0, 50.0 );
	sigma = uniform( len, EPS, 20.0 + EPS );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = logcdf( x[ i % len ], mu[ i % len ], sigma[ i % len ]);
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
	var mylogcdf;
	var sigma;
	var mu;
	var x;
	var y;
	var i;

	mu = 0.0;
	sigma = 1.5;
	mylogcdf = logcdf.factory( mu, sigma );
	x = uniform( 100, -3.0, 3.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mylogcdf( x[ i % x.length ] );
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
