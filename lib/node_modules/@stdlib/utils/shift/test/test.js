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

/* eslint-disable object-curly-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var shift = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof shift, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided either an array, typed array, or an array-like object', function test( t ) {
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
		function noop() {},
		new Date(),
		new RegExp( '.+' ),  // eslint-disable-line prefer-regex-literals
		{},
		{ 'length': null },
		{ 'length': -1 },
		{ 'length': 3.14 }
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			shift( value );
		};
	}
});

tape( 'the function returns a two-element array', function test( t ) {
	var out;
	var arr;

	arr = [ 1.0, 2.0, 3.0 ];
	out = shift( arr );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.strictEqual( out.length, 2, 'output array has length 2' );

	arr = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = shift( arr );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.strictEqual( out.length, 2, 'output array has length 2' );

	arr = {
		'length': 3,
		'0': 1.0,
		'1': 2.0,
		'2': 3.0
	};
	out = shift( arr );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.strictEqual( out.length, 2, 'output array has length 2' );

	t.end();
});

tape( 'if provided an empty collection, the element value is `undefined`', function test( t ) {
	var out;
	var arr;

	arr = [];
	out = shift( arr );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.strictEqual( out.length, 2, 'output array has length 2' );
	t.strictEqual( out[ 1 ], void 0, 'element is `undefined`' );

	arr = new Float32Array();
	out = shift( arr );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.strictEqual( out.length, 2, 'output array has length 2' );
	t.strictEqual( out[ 1 ], void 0, 'element is `undefined`' );

	arr = {
		'length': 0
	};
	out = shift( arr );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.strictEqual( out.length, 2, 'output array has length 2' );
	t.strictEqual( out[ 1 ], void 0, 'element is `undefined`' );

	t.end();
});

tape( 'the function removes and returns the first element of an array', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = shift( arr );

	t.strictEqual( out[ 0 ], arr, 'returns input array' );
	t.strictEqual( out[ 1 ], 1.0, 'returns first value' );

	t.end();
});

tape( 'the function removes and returns the first element of an array-like object', function test( t ) {
	var arr;
	var out;

	arr = {
		'length': 3,
		'0': 1.0,
		'1': 2.0,
		'2': 3.0
	};
	out = shift( arr );

	t.strictEqual( out[ 0 ], arr, 'returns input collection' );
	t.strictEqual( out[ 1 ], 1.0, 'returns first value' );
	t.strictEqual( arr[ 2 ], void 0, 'removes last value' );

	t.end();
});

tape( 'the function removes and returns the first element of a typed array', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = shift( arr );

	t.notEqual( out[ 0 ], arr, 'does not return input array (new view)' );
	t.strictEqual( out[ 0 ].buffer, arr.buffer, 'same underlying buffer' );
	t.strictEqual( out[ 1 ], 1.0, 'returns the first element' );

	t.end();
});

tape( 'the function removes and returns the first element of a typed array (offset view)', function test( t ) {
	var arr;
	var buf;
	var out;

	buf = new ArrayBuffer( 32 );
	arr = new Float64Array( buf, 2*8, 2 ); // 8 bytes per double

	arr[ 0 ] = 3.0;
	arr[ 1 ] = 4.0;

	out = shift( arr );

	t.notEqual( out[ 0 ], arr, 'does not return input array (new view)' );
	t.strictEqual( out[ 0 ].buffer, arr.buffer, 'same underlying buffer' );
	t.strictEqual( out[ 1 ], 3.0, 'returns first element' );

	arr = out[ 0 ];
	out = shift( arr );

	t.notEqual( out[ 0 ], arr, 'does not return input array (new view)' );
	t.strictEqual( out[ 0 ].buffer, arr.buffer, 'same underlying buffer' );
	t.strictEqual( out[ 1 ], 4.0, 'returns first element' );

	arr = out[ 0 ];
	out = shift( arr );

	t.strictEqual( out[ 0 ], arr, 'return input array (same view)' );
	t.strictEqual( out[ 0 ].buffer, arr.buffer, 'same underlying buffer' );
	t.strictEqual( out[ 1 ], void 0, 'returns `undefined`' );

	t.end();
});
