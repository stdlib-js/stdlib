/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var BooleanArray = require( '@stdlib/array/bool' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var reinterpret = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reinterpret, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function reinterprets a boolean array', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new BooleanArray( 10 ),
		new BooleanArray( 5 ),
		new BooleanArray( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isUint8Array( v ), true, 'returns a Uint8Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length, 'has expected length' );
		t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a boolean array (byte offset)', function test( t ) {
	var values;
	var buf;
	var v;
	var i;

	buf = new ArrayBuffer( 1000 );
	values = [
		new BooleanArray( buf, 160, 10 ),
		new BooleanArray( buf, 16, 5 ),
		new BooleanArray( buf, 56, 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isUint8Array( v ), true, 'returns a Uint8Array' );
		t.strictEqual( v.buffer, buf, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length, 'has expected length' );
		t.strictEqual( v.byteOffset, values[ i ].byteOffset, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a boolean array (index offset)', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new BooleanArray( 10 ),
		new BooleanArray( 5 ),
		new BooleanArray( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 2 );
		t.strictEqual( isUint8Array( v ), true, 'returns a Uint8Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, (values[ i ].length-2), 'has expected length' );
		t.strictEqual( v.byteOffset, 2, 'has expected byte offset' );
	}
	t.end();
});
