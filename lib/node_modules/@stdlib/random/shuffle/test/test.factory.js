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

/* eslint-disable object-curly-newline, object-curly-spacing, no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var constructorName = require( '@stdlib/utils/constructor-name' );
var Int32Array = require( '@stdlib/array/int32' );
var Number = require( '@stdlib/number/ctor' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		NaN,
		null,
		true,
		false,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'copy': value
			});
		};
	}
});

tape( 'the function allows setting a default `copy` option for created shuffle functions', function test( t ) {
	var expected;
	var shuffle;
	var actual;
	var arr;

	shuffle = factory({
		'copy': 'none',
		'seed': 867
	});

	// Created shuffle function mutates input array by default:
	arr = [ 1, 2, 3, 4, 5, 6 ];
	expected = [ 6, 2, 4, 5, 3, 1 ];
	actual = shuffle( arr );

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( arr, actual, 'mutates the input array' );

	arr = [ 'a', 'b', 'c' ];
	expected = [ 'b', 'c', 'a' ];
	actual = shuffle( arr );

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( arr, actual, 'mutates the input array' );

	// Default option can be overridden:
	arr = [ 1, 2, 3, 4 ];
	expected = [ 3, 4, 2, 1 ];
	actual = shuffle( arr, {
		'copy': 'shallow'
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual, arr, 'creates a copy' );

	t.end();
});

tape( 'the returned function throws an error if not provided an array-like object', function test( t ) {
	var sample;
	var values;
	var i;

	sample = factory();

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sample( value );
		};
	}
});

tape( 'the returned function throws an error if provided an invalid option', function test( t ) {
	var shuffle;
	var values;
	var i;

	shuffle = factory();

	values = [
		'abc',
		5,
		NaN,
		null,
		true,
		false,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			shuffle( [ 1, 2, 3 ], {
				'copy': value
			});
		};
	}
});

tape( 'attached to the returned function is the generator seed', function test( t ) {
	var shuffle = factory();
	t.equal( isUint32Array( shuffle.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var shuffle = factory();
	t.equal( typeof shuffle.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'the returned function shuffles the elements of an array (creating a shallow copy)', function test( t ) {
	var expected;
	var shuffle;
	var actual;
	var arr;

	shuffle = factory({
		'seed': 867
	});

	arr = [ 1, 2, 3, 4, 5, 6 ];
	expected = [ 6, 2, 4, 5, 3, 1 ];
	actual = shuffle( arr );

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual, arr, 'returns a copy' );

	arr = [
		{ 'a': 1 },
		{ 'b': new Number( 2 ) },
		{ 'c': [ 1, 2, 3 ] }
	];
	expected = [
		{ 'b': new Number( 2 ) },
		{ 'c': [ 1, 2, 3 ] },
		{ 'a': 1 }
	];
	actual = shuffle( arr, {
		'copy': 'shallow'
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual, arr, 'returns a copy' );
	t.equal( actual[ 1 ], arr[ 2 ], 'returns a shallow copy' );

	t.end();
});

tape( 'the returned function shuffles the elements of an array (returning deep copy)', function test( t ) {
	var expected;
	var shuffle;
	var actual;
	var arr;

	shuffle = factory({
		'seed': 867
	});

	arr = [
		{ 'a': 1 },
		{ 'b': new Number( 2 ) },
		{ 'c': [ 1, 2, 3 ] }
	];
	expected = [
		{ 'b': new Number( 2 ) },
		{ 'c': [ 1, 2, 3 ] },
		{ 'a': 1 }
	];
	actual = shuffle( arr, {
		'copy': 'deep'
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual, arr, 'returns a copy' );
	t.notEqual( actual[ 1 ], arr[ 2 ], 'returns a deep copy' );
	t.end();
});

tape( 'the returned function shuffles the elements of a string', function test( t ) {
	var expected;
	var shuffle;
	var actual;
	var str;

	shuffle = factory({
		'seed': 445
	});

	str = 'hello';
	expected = 'elohl';
	actual = shuffle( str );

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual, str, 'returns a copy' );
	t.end();
});

tape( 'the returned function shuffles the elements of a typed array', function test( t ) {
	var expected;
	var shuffle;
	var actual;
	var arr;

	shuffle = factory({
		'seed': 867
	});

	arr = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );
	expected = new Int32Array( [ 6, 2, 4, 5, 3, 1 ] );
	actual = shuffle( arr );

	t.equal( constructorName( actual ), 'Int32Array', 'returns a typed array' );
	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual, arr, 'returns a copy' );
	t.end();
});

tape( 'the returned function shuffles the elements of an array (in-place)', function test( t ) {
	var expected;
	var shuffle;
	var actual;
	var arr;

	shuffle = factory({
		'seed': 867
	});

	arr = [ 1, 2, 3, 4, 5, 6 ];
	expected = [ 6, 2, 4, 5, 3, 1 ];
	actual = shuffle( arr, {
		'copy': 'none'
	});

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( arr, actual, 'mutates the input array' );
	t.end();
});

tape( 'the returned function shuffles the elements of a typed array (in-place)', function test( t ) {
	var expected;
	var shuffle;
	var actual;
	var arr;

	shuffle = factory({
		'seed': 867
	});

	arr = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );
	expected = new Int32Array( [ 6, 2, 4, 5, 3, 1 ] );
	actual = shuffle( arr, {
		'copy': 'none'
	});

	t.equal( constructorName( actual ), 'Int32Array', 'returns a typed array' );
	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( arr, actual, 'mutates the input array' );
	t.end();
});
