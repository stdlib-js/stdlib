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
var resolveToken = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolveToken, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function resolves a valid numeric token to an integer for arrays', function test( t ) {
	var arr;

	arr = [ 10, 20, 30 ];

	t.strictEqual( resolveToken( arr, '0' ), 0, 'returns expected value' );
	t.strictEqual( resolveToken( arr, '1' ), 1, 'returns expected value' );
	t.strictEqual( resolveToken( arr, '2' ), 2, 'returns expected value' );
	t.strictEqual( resolveToken( arr, '10' ), 10, 'returns expected value' );
	t.strictEqual( resolveToken( arr, '100' ), 100, 'returns expected value' );
	t.end();
});

tape( 'the function resolves the `-` token to the array length for arrays', function test( t ) {
	t.strictEqual( resolveToken( [], '-' ), 0, 'returns expected value' );
	t.strictEqual( resolveToken( [ 1 ], '-' ), 1, 'returns expected value' );
	t.strictEqual( resolveToken( [ 1, 2, 3 ], '-' ), 3, 'returns expected value' );
	t.strictEqual( resolveToken( [ 1, 2, 3, 4, 5 ], '-' ), 5, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error for invalid array tokens', function test( t ) {
	var values;
	var arr;
	var i;

	arr = [ 1, 2, 3 ];
	values = [
		'foo',
		'-1',
		'01',
		'00',
		'1.5',
		'',
		' ',
		' 0',
		'0 ',
		'NaN',
		'null',
		'undefined',
		'--'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolveToken( arr, value );
		};
	}
});

tape( 'the function returns the token as-is for objects', function test( t ) {
	var obj;

	obj = {
		'foo': 1,
		'bar': 2,
		'0': 3,
		'-': 4
	};

	t.strictEqual( resolveToken( obj, 'foo' ), 'foo', 'returns expected value' );
	t.strictEqual( resolveToken( obj, 'bar' ), 'bar', 'returns expected value' );
	t.strictEqual( resolveToken( obj, '0' ), '0', 'returns expected value' );
	t.strictEqual( resolveToken( obj, '-' ), '-', 'returns expected value' );
	t.strictEqual( resolveToken( obj, 'missing' ), 'missing', 'returns expected value' );
	t.end();
});
