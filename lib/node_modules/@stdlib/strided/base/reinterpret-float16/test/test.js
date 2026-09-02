/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var Float16Array = require( '@stdlib/array/float16' );
var isUint16Array = require( '@stdlib/assert/is-uint16array' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var reinterpret = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reinterpret, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function reinterprets a half-precision floating-point number array', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new Float16Array( 10 ),
		new Float16Array( 5 ),
		new Float16Array( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isUint16Array( v ), true, 'returns a Uint16Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length, 'has expected length' );
		t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a half-precision floating-point number array (byte offset)', function test( t ) {
	var values;
	var buf;
	var v;
	var i;

	buf = new ArrayBuffer( 1000 );
	values = [
		new Float16Array( buf, 160, 10 ),
		new Float16Array( buf, 16, 8 ),
		new Float16Array( buf, 56, 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isUint16Array( v ), true, 'returns a Uint16Array' );
		t.strictEqual( v.buffer, buf, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length, 'has expected length' );
		t.strictEqual( v.byteOffset, values[ i ].byteOffset, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a half-precision floating-point number array (index offset)', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new Float16Array( 10 ),
		new Float16Array( 5 ),
		new Float16Array( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 2 );
		t.strictEqual( isUint16Array( v ), true, 'returns a Uint16Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, (values[ i ].length-2), 'has expected length' );
		t.strictEqual( v.byteOffset, 4, 'has expected byte offset' );
	}
	t.end();
});
