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

var tape = require( 'tape' );
var Buffer = require( '@stdlib/buffer/ctor' );
var Uint8Array = require( '@stdlib/array/uint8' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var array2buffer = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2buffer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array-like object', function test( t ) {
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
		{},
		Array,
		Buffer,
		Uint8Array,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			array2buffer( value );
		};
	}
});

tape( 'the function allocates a buffer using an octet array (array)', function test( t ) {
	var buf;
	var arr;
	var i;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( buf[ i ], arr[ i ], 'returns expected value for element ' + i );
	}
	t.end();
});

tape( 'the function allocates a buffer using an octet array (typed array)', function test( t ) {
	var buf;
	var arr;
	var i;

	arr = new Uint8Array( [ 1, 2, 3, 4 ] );
	buf = array2buffer( arr );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( buf[ i ], arr[ i ], 'returns expected value for element ' + i );
	}
	t.end();
});

tape( 'the function allocates a buffer using an octet array (array-like)', function test( t ) {
	var buf;
	var arr;
	var i;

	arr = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	buf = array2buffer( arr );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );

	for ( i = 0; i < arr.length; i++ ) {
		t.strictEqual( buf[ i ], arr[ i ], 'returns expected value for element ' + i );
	}
	t.end();
});

tape( 'if provided an empty array, the function returns an empty buffer', function test( t ) {
	var buf = array2buffer( [] );
	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 0, 'has expected length' );
	t.end();
});
