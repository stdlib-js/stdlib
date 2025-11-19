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
var pkg = require( './../package.json' ).name;
var quantile = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var alpha;
	var beta;
	var len;
	var p;
	var y;
	var i;

	len = 100;
	p = uniform( len, 0.0, 1.0 );
	alpha = uniform( len, 1.0, 100.0 );
	beta = uniform( len, 1.0, 100.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = quantile( p[ i % len ], alpha[ i % len ], beta[ i % len ] );
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
	var myquantile;
	var alpha;
	var beta;
	var len;
	var p;
	var y;
	var i;

	alpha = 100.56789;
	beta = 55.54321;
	myquantile = quantile.factory( alpha, beta );
	len = 100;
	p = uniform( len, 0.0, 1.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = myquantile( p[ i % len ] );
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
