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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var isFunction = require( '@stdlib/assert/is-function' );
var BigInt = require( '@stdlib/bigint/ctor' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var Uint64Array = require( './../lib' );


// VARIABLES //

var HAS_BIGINTS = hasBigIntSupport();
var opts = {
	'skip': !HAS_BIGINTS
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uint64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is an `indexOf` method', function test( t ) {
	t.strictEqual( hasOwnProp( Uint64Array.prototype, 'indexOf' ), true, 'has property' );
	t.strictEqual( isFunction( Uint64Array.prototype.indexOf ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a 64-bit unsigned integer array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Uint64Array( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.indexOf.call( value, new Uint64( 1 ) );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not either a 64-bit unsigned integer or a value which can be converted to a 64-bit unsigned integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Uint64Array( 5 );

	values = [
		'5',
		3.14,
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.indexOf( value );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Uint64Array( 10 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.indexOf( new Uint64( 1 ), value );
		};
	}
});

tape( 'the method returns `-1` if operating on an empty 64-bit unsigned integer array', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array();
	idx = arr.indexOf( new Uint64( 1 ) );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns `-1` if a 64-bit unsigned integer is not found', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( 10 );
	idx = arr.indexOf( new Uint64( 1 ) );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns the index of the first match if an array contains a specified 64-bit unsigned integer', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( [ 1, 2, 3, 2 ] );
	idx = arr.indexOf( new Uint64( 2 ) );

	t.strictEqual( idx, 1, 'returns expected value' );
	t.end();
});

tape( 'the method supports providing a search element which is a nonnegative integer', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( [ 1, 2, 3 ] );

	idx = arr.indexOf( 2 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( 4 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method supports providing a search element which is a bigint', opts, function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( [ 1, 2, 3 ] );

	idx = arr.indexOf( BigInt( 2 ) );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( BigInt( 4 ) );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns `-1` if provided a second argument which exceeds the input array length', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( 10 );
	idx = arr.indexOf( new Uint64( 0 ), 20 );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( [ 1, 2, 3, 2 ] );

	idx = arr.indexOf( new Uint64( 2 ), 0 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( new Uint64( 2 ), 2 );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = arr.indexOf( new Uint64( 3 ), 3 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index (negative)', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( [ 1, 2, 3, 2, 2 ] );

	idx = arr.indexOf( new Uint64( 2 ), -5 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( new Uint64( 2 ), -2 );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = arr.indexOf( new Uint64( 4 ), -2 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'when provided a starting index which resolves to an index which is less than zero, the method searches from the first array element', function test( t ) {
	var arr;
	var idx;

	arr = new Uint64Array( [ 1, 2, 3, 2, 2 ] );

	idx = arr.indexOf( new Uint64( 2 ), -10 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( new Uint64( 4 ), -10 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});
