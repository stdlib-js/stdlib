/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/* eslint-disable no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var noop = require( '@stdlib/utils/noop' );
var pkg = require( './../package.json' ).name;
var isComplexTypedArrayLike = require( './../lib' );


// MAIN //

bench( pkg+'::false', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Date()
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isComplexTypedArrayLike( values[ i%values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::true', function benchmark( b ) {
	var values;
	var bool;
	var arr;
	var i;

	arr = {};
	arr.BYTES_PER_ELEMENT = 4;
	arr.length = 10;
	arr.byteOffset = 0;
	arr.byteLength = 10;
	arr.get = noop;
	arr.set = noop;

	values = [
		arr,
		new Complex64Array( 10 ),
		new Complex128Array( 10 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isComplexTypedArrayLike( values[ i%values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
