/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var Uint8Array = require( '@stdlib/array/uint8' );
var pkg = require( './../package.json' ).name;
var fromInt64Bytes = require( './../lib' );


// MAIN //

bench( pkg+'::contiguous', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] ),
		new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = fromInt64Bytes( values[ i%values.length ], 1, 0 );
		if ( isnan( v ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::non-contiguous', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ),
		new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] ) // eslint-disable-line max-len
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = fromInt64Bytes( values[ i%values.length ], 2, 1 );
		if ( isnan( v ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
