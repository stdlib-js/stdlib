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
var indexOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof indexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		void 0,
		{}, // not array-like, as no `length` property
		function noop() {} // has `length` property, but is a function
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( value, 3 );
		};
	}
});

tape( 'if provided a `fromIndex`, which is not an integer, the function throws a type error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.234,
		NaN,
		true,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			indexOf( [ 1, 2, 3 ], 3, value );
		};
	}
});

tape( 'if provided an array-like object having length `0`, the function always returns `-1`', function test( t ) {
	var idx = indexOf( [], 5 );
	t.equal( idx, -1, 'returns -1' );
	t.end();
});

tape( 'if provided a `fromIndex` which exceeds the input array length, the function always returns `-1`', function test( t ) {
	var idx = indexOf( [ 1, 2, 3 ], 2, 999999999999 );
	t.equal( idx, -1, 'returns -1' );
	t.end();
});

tape( 'the function returns the first index at which a given element can be found', function test( t ) {
	var idx = indexOf( [ 1, 1, 1, 2, 2, 3, 3 ], 2 );
	t.equal( idx, 3, 'returns first occurrence index' );
	t.end();
});

tape( 'the function supports finding `NaN` elements', function test( t ) {
	var idx = indexOf( [ 1, 1, 1, 2, NaN, 2, 3, NaN, 3 ], NaN );
	t.equal( idx, 4, 'returns first occurrence index' );
	t.end();
});

tape( 'if a search element is not present, the function returns `-1`', function test( t ) {
	var idx = indexOf( [ 1, 2, 3 ], 4 );
	t.equal( idx, -1, 'returns -1' );
	t.end();
});

tape( 'the function supports specifying a `fromIndex`', function test( t ) {
	var arr;
	var idx;

	arr = [ 1, 1, 2, 1, 2, 2, 3, 2, 3 ];

	idx = indexOf( arr, 2 );
	t.equal( idx, 2, 'returns first occurrence index' );

	idx = indexOf( arr, 2, idx+1 );
	t.equal( idx, 4, 'returns second occurrence index' );

	idx = indexOf( arr, 2, idx+1 );
	t.equal( idx, 5, 'returns third occurrence index' );

	idx = indexOf( arr, 2, idx+1 );
	t.equal( idx, 7, 'returns fourth occurrence index' );

	idx = indexOf( arr, 2, idx+1 );
	t.equal( idx, -1, 'returns -1' );

	t.end();
});

tape( 'if provided a `fromIndex` which is less than `0`, the function determines a start index relative to the last array element', function test( t ) {
	var arr;
	var idx;

	arr = [ 1, 1, 2, 1, 2, 2, 3, 2, 3 ];

	idx = indexOf( arr, 3, -1 );
	t.equal( idx, 8, 'returns last element index' );

	idx = indexOf( arr, 2, -1 );
	t.equal( idx, -1, 'returns -1' );

	idx = indexOf( arr, 2, -2 );
	t.equal( idx, 7, 'returns second to last element index' );

	idx = indexOf( arr, 2, -3 );
	t.equal( idx, 7, 'returns second to last element index' );

	idx = indexOf( arr, 2, -4 );
	t.equal( idx, 5, 'returns 5' );

	t.end();
});

tape( 'if provided a `fromIndex` which is less than `0` and whose absolute value exceeds the array length, the function starts searching from the first array element', function test( t ) {
	var arr;
	var idx;

	arr = [ 1, 1, 2, 1, 2, 2, 3, 2, 3 ];

	idx = indexOf( arr, 2, -99999999999999 );
	t.equal( idx, 2, 'returns first occurrence index' );

	idx = indexOf( arr, 1, -99999999999999 );
	t.equal( idx, 0, 'returns first occurrence index' );

	t.end();
});

tape( 'the function supports searching `strings`', function test( t ) {
	var str;
	var idx;

	str = 'bebop';
	idx = indexOf( str, 'o' );

	t.equal( idx, 3, 'returns first occurrence index' );
	t.end();
});

tape( 'the function supports array-like `objects`', function test( t ) {
	var obj;
	var idx;

	obj = {
		'0': 'beep',
		'1': 'boop',
		'2': 'bap',
		'3': 'bop',
		'length': 4
	};

	idx = indexOf( obj, 'bap' );

	t.equal( idx, 2, 'returns first occurrence index' );
	t.end();
});

tape( 'the function does not guarantee that only "own" properties are searched', function test( t ) {
	var foo;
	var idx;

	function Foo() {
		this[ 0 ] = 'beep';
		this[ 1 ] = 'boop';
		this[ 2 ] = 'woot';
		this[ 3 ] = 'bop';
		this.length = 4;
		return this;
	}
	Foo.prototype[ 2 ] = 'bap';

	foo = new Foo();

	idx = indexOf( foo, 'bap' );
	t.equal( idx, -1, 'returns -1' );

	delete foo[ 2 ];

	idx = indexOf( foo, 'bap' );
	t.equal( idx, 2, 'returns property on prototype' );

	t.end();
});
