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
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var pkg = require( './../package.json' ).name;
var copy = require( './../lib' );


// MAIN //

bench( pkg+':level=+infinity', function benchmark( b ) {
	var values;
	var out;
	var val;
	var i;

	values = [
		[
			{
				'x': new Date(),
				'y': [ randu(), randu() ],
				'z': new Int32Array( [ 1, 2, 3, 4 ] ),
				'label': 'Beep'
			},
			{
				'x': new Date(),
				'y': [ randu(), randu() ],
				'z': new Int32Array( [ 3, 1, 2, 4 ] ),
				'label': 'Boop'
			}
		],
		null,
		void 0,
		NaN,
		3.14,
		'boop',
		new Int8Array( [ 1, 2, 3, 4 ] ),
		new Uint8Array( [ 5, 6, 7, 8 ] ),
		new Uint8ClampedArray( [ 9, 10, 11, 12 ] ),
		new Int16Array( [ 256, 257, 258 ] ),
		new Uint16Array( [ 259, 260, 261 ] ),
		new Int32Array( [ 65537, 65538 ] ),
		new Uint32Array( [ 65539, 65540 ] ),
		new Float32Array( [ 3.14 ] ),
		new Float64Array( [ 3.14 ] ),
		new Error( 'beep' )
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		val = values[ i % values.length ];
		out = copy( val );
		if ( typeof out !== typeof val ) {
			b.fail( 'returns value of expected type' );
		}
	}
	b.toc();
	if ( out === val ) {
		b.fail( 'returns a copy of the input value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':level=1', function benchmark( b ) {
	var values;
	var out;
	var val;
	var i;

	values = [
		[
			{
				'x': new Date(),
				'y': [ randu(), randu() ],
				'z': new Int32Array( [ 1, 2, 3, 4 ] ),
				'label': 'Beep'
			},
			{
				'x': new Date(),
				'y': [ randu(), randu() ],
				'z': new Int32Array( [ 3, 1, 2, 4 ] ),
				'label': 'Boop'
			}
		],
		null,
		void 0,
		NaN,
		3.14,
		'boop',
		new Int8Array( [ 1, 2, 3, 4 ] ),
		new Uint8Array( [ 5, 6, 7, 8 ] ),
		new Uint8ClampedArray( [ 9, 10, 11, 12 ] ),
		new Int16Array( [ 256, 257, 258 ] ),
		new Uint16Array( [ 259, 260, 261 ] ),
		new Int32Array( [ 65537, 65538 ] ),
		new Uint32Array( [ 65539, 65540 ] ),
		new Float32Array( [ 3.14 ] ),
		new Float64Array( [ 3.14 ] ),
		new Error( 'beep' )
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		val = values[ i % values.length ];
		out = copy( val, 1 );
		if ( typeof out !== typeof val ) {
			b.fail( 'returns value of expected type' );
		}
	}
	b.toc();
	if ( typeof out !== typeof val ) {
		b.fail( 'returns value of expected type' );
	}
	if ( out === val ) {
		b.fail( 'returns a copy of the input value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':level=0', function benchmark( b ) {
	var values;
	var out;
	var val;
	var i;

	values = [
		[
			{
				'x': new Date(),
				'y': [ randu(), randu() ],
				'z': new Int32Array( [ 1, 2, 3, 4 ] ),
				'label': 'Beep'
			},
			{
				'x': new Date(),
				'y': [ randu(), randu() ],
				'z': new Int32Array( [ 3, 1, 2, 4 ] ),
				'label': 'Boop'
			}
		],
		null,
		void 0,
		NaN,
		3.14,
		'boop',
		new Int8Array( [ 1, 2, 3, 4 ] ),
		new Uint8Array( [ 5, 6, 7, 8 ] ),
		new Uint8ClampedArray( [ 9, 10, 11, 12 ] ),
		new Int16Array( [ 256, 257, 258 ] ),
		new Uint16Array( [ 259, 260, 261 ] ),
		new Int32Array( [ 65537, 65538 ] ),
		new Uint32Array( [ 65539, 65540 ] ),
		new Float32Array( [ 3.14 ] ),
		new Float64Array( [ 3.14 ] ),
		new Error( 'beep' )
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		val = values[ i % values.length ];
		out = copy( val, 0 );
		if ( typeof out !== typeof val ) {
			b.fail( 'returns value of expected type' );
		}
	}
	b.toc();
	if ( out !== val ) {
		b.fail( 'returns input value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
