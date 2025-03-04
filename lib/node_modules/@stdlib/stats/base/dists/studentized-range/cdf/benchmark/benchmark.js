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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var uniform = require( '@stdlib/random/base/uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var cdf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var len;
	var v;
	var r;
	var q;
	var y;
	var i;

	len = 100;
	q = new Float64Array( len );
	r = new Float64Array( len );
	v = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		q[ i ] = uniform( 0.0, 12.0 );
		r[ i ] = uniform( 2.0, 20.0 );
		v[ i ] = uniform( 2.0, 20.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = cdf( q[ i % len ], r[ i % len ], v[ i % len ] );
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
	var mycdf;
	var len;
	var r;
	var q;
	var v;
	var y;
	var i;

	len = 100;
	v = 5.0;
	r = 3.0;
	q = new Float64Array( len );
	mycdf = cdf.factory( v, r );
	for ( i = 0; i < len; i++ ) {
		q[ i ] = uniform( 0.0, 1.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mycdf( q[ i % len ] );
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
