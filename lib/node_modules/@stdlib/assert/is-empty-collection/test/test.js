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

var tape = require( 'tape' );
var constructorName = require( '@stdlib/utils/constructor-name' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var isEmptyCollection = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEmptyCollection, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an empty collection', function test( t ) {
	var values;
	var i;

	values = [
		[],
		{ 'length': 0 }, // eslint-disable-line object-curly-newline
		new Float64Array( [] ),
		new Float32Array( [] ),
		new Int32Array( [] ),
		new Uint32Array( [] ),
		new Int16Array( [] ),
		new Uint16Array( [] ),
		new Int8Array( [] ),
		new Uint8Array( [] ),
		new Uint8ClampedArray( [] ),
		allocUnsafe( 0 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isEmptyCollection( values[i] ), true, 'returns true when provided '+constructorName( values[i] ) );
	}
	t.end();
});

tape( 'the function returns `false` if not provided an empty collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 1, 2, 3 ],
		new Array( 10 ),
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isEmptyCollection( values[i] ), false, 'returns false for when provided ' + values[i] );
	}
	t.end();
});
