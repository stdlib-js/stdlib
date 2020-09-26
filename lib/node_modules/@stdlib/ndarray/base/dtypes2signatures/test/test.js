/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var dtypes2signatures = require( './../lib' );


// FIXTURES //

var dtypes = require( './fixtures/types.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtypes2signatures, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a first argument which is an array-like object containing strings', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'float64', 2 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtypes2signatures( value, 1, 1 );
		};
	}
});

tape( 'the function throws an error if not provided a second argument which is a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtypes2signatures( [ 'float64', 'float64' ], value, 1 );
		};
	}
});

tape( 'the function throws an error if not provided a third argument which is a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtypes2signatures( [ 'float64', 'float64' ], 1, value );
		};
	}
});

tape( 'the function throws an error if not provided a first argument which is compatible with the second and third arguments', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 'float64' ],
		[ 'float64', 'float64' ],
		[ 'float64', 'float64', 'float64', 'float64' ],
		[ 'float64', 'float64', 'float64', 'float64', 'float64' ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dtypes2signatures( value, 2, 1 );
		};
	}
});

tape( 'the function transforms a list of array argument data types into a list of signatures (1 in, 1 out)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'(float64) => (float64)',
		'(float64) => (generic)',

		'(float32) => (float32)',
		'(float32) => (float64)',
		'(float32) => (generic)',

		'(generic) => (generic)',

		'(int32) => (int32)',
		'(int32) => (uint32)',
		'(int32) => (float64)',
		'(int32) => (generic)',

		'(int16) => (int16)',
		'(int16) => (int32)',
		'(int16) => (uint16)',
		'(int16) => (uint32)',
		'(int16) => (float32)',
		'(int16) => (float64)',
		'(int16) => (generic)',

		'(int8) => (int8)',
		'(int8) => (int16)',
		'(int8) => (int32)',
		'(int8) => (uint8)',
		'(int8) => (uint8c)',
		'(int8) => (uint16)',
		'(int8) => (uint32)',
		'(int8) => (float32)',
		'(int8) => (float64)',
		'(int8) => (generic)',

		'(uint32) => (uint32)',
		'(uint32) => (float64)',
		'(uint32) => (generic)',

		'(uint16) => (int32)',
		'(uint16) => (uint16)',
		'(uint16) => (uint32)',
		'(uint16) => (float32)',
		'(uint16) => (float64)',
		'(uint16) => (generic)',

		'(uint8) => (int16)',
		'(uint8) => (int32)',
		'(uint8) => (uint8)',
		'(uint8) => (uint8c)',
		'(uint8) => (uint16)',
		'(uint8) => (uint32)',
		'(uint8) => (float32)',
		'(uint8) => (float64)',
		'(uint8) => (generic)',

		'(uint8c) => (int16)',
		'(uint8c) => (int32)',
		'(uint8c) => (uint8)',
		'(uint8c) => (uint8c)',
		'(uint8c) => (uint16)',
		'(uint8c) => (uint32)',
		'(uint8c) => (float32)',
		'(uint8c) => (float64)',
		'(uint8c) => (generic)'
	];
	actual = dtypes2signatures( dtypes, 1, 1 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (2 in, 0 out)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'(float64, float64) => ()',
		'(float64, generic) => ()',

		'(float32, float32) => ()',
		'(float32, float64) => ()',
		'(float32, generic) => ()',

		'(generic, generic) => ()',

		'(int32, int32) => ()',
		'(int32, uint32) => ()',
		'(int32, float64) => ()',
		'(int32, generic) => ()',

		'(int16, int16) => ()',
		'(int16, int32) => ()',
		'(int16, uint16) => ()',
		'(int16, uint32) => ()',
		'(int16, float32) => ()',
		'(int16, float64) => ()',
		'(int16, generic) => ()',

		'(int8, int8) => ()',
		'(int8, int16) => ()',
		'(int8, int32) => ()',
		'(int8, uint8) => ()',
		'(int8, uint8c) => ()',
		'(int8, uint16) => ()',
		'(int8, uint32) => ()',
		'(int8, float32) => ()',
		'(int8, float64) => ()',
		'(int8, generic) => ()',

		'(uint32, uint32) => ()',
		'(uint32, float64) => ()',
		'(uint32, generic) => ()',

		'(uint16, int32) => ()',
		'(uint16, uint16) => ()',
		'(uint16, uint32) => ()',
		'(uint16, float32) => ()',
		'(uint16, float64) => ()',
		'(uint16, generic) => ()',

		'(uint8, int16) => ()',
		'(uint8, int32) => ()',
		'(uint8, uint8) => ()',
		'(uint8, uint8c) => ()',
		'(uint8, uint16) => ()',
		'(uint8, uint32) => ()',
		'(uint8, float32) => ()',
		'(uint8, float64) => ()',
		'(uint8, generic) => ()',

		'(uint8c, int16) => ()',
		'(uint8c, int32) => ()',
		'(uint8c, uint8) => ()',
		'(uint8c, uint8c) => ()',
		'(uint8c, uint16) => ()',
		'(uint8c, uint32) => ()',
		'(uint8c, float32) => ()',
		'(uint8c, float64) => ()',
		'(uint8c, generic) => ()'
	];
	actual = dtypes2signatures( dtypes, 2, 0 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (0 in, 2 out)', function test( t ) {
	var expected;
	var actual;

	expected = [
		'() => (float64, float64)',
		'() => (float64, generic)',

		'() => (float32, float32)',
		'() => (float32, float64)',
		'() => (float32, generic)',

		'() => (generic, generic)',

		'() => (int32, int32)',
		'() => (int32, uint32)',
		'() => (int32, float64)',
		'() => (int32, generic)',

		'() => (int16, int16)',
		'() => (int16, int32)',
		'() => (int16, uint16)',
		'() => (int16, uint32)',
		'() => (int16, float32)',
		'() => (int16, float64)',
		'() => (int16, generic)',

		'() => (int8, int8)',
		'() => (int8, int16)',
		'() => (int8, int32)',
		'() => (int8, uint8)',
		'() => (int8, uint8c)',
		'() => (int8, uint16)',
		'() => (int8, uint32)',
		'() => (int8, float32)',
		'() => (int8, float64)',
		'() => (int8, generic)',

		'() => (uint32, uint32)',
		'() => (uint32, float64)',
		'() => (uint32, generic)',

		'() => (uint16, int32)',
		'() => (uint16, uint16)',
		'() => (uint16, uint32)',
		'() => (uint16, float32)',
		'() => (uint16, float64)',
		'() => (uint16, generic)',

		'() => (uint8, int16)',
		'() => (uint8, int32)',
		'() => (uint8, uint8)',
		'() => (uint8, uint8c)',
		'() => (uint8, uint16)',
		'() => (uint8, uint32)',
		'() => (uint8, float32)',
		'() => (uint8, float64)',
		'() => (uint8, generic)',

		'() => (uint8c, int16)',
		'() => (uint8c, int32)',
		'() => (uint8c, uint8)',
		'() => (uint8c, uint8c)',
		'() => (uint8c, uint16)',
		'() => (uint8c, uint32)',
		'() => (uint8c, float32)',
		'() => (uint8c, float64)',
		'() => (uint8c, generic)'
	];
	actual = dtypes2signatures( dtypes, 0, 2 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (2 in, 1 out)', function test( t ) {
	var expected;
	var actual;
	var dtypes;

	dtypes = [ 'float64', 'float64', 'generic' ];
	expected = [ '(float64, float64) => (generic)' ];

	actual = dtypes2signatures( dtypes, 2, 1 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (3 in, 0 out)', function test( t ) {
	var expected;
	var actual;
	var dtypes;

	dtypes = [ 'float64', 'float64', 'generic' ];
	expected = [ '(float64, float64, generic) => ()' ];

	actual = dtypes2signatures( dtypes, 3, 0 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (1 in, 2 out)', function test( t ) {
	var expected;
	var actual;
	var dtypes;

	dtypes = [ 'float64', 'float64', 'generic' ];
	expected = [ '(float64) => (float64, generic)' ];

	actual = dtypes2signatures( dtypes, 1, 2 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (0 in, 3 out)', function test( t ) {
	var expected;
	var actual;
	var dtypes;

	dtypes = [ 'float64', 'float64', 'generic' ];
	expected = [ '() => (float64, float64, generic)' ];

	actual = dtypes2signatures( dtypes, 0, 3 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (1 in, 0 out)', function test( t ) {
	var expected;
	var actual;
	var dtypes;

	dtypes = [ 'float64' ];
	expected = [ '(float64) => ()' ];

	actual = dtypes2signatures( dtypes, 1, 0 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function transforms a list of array argument data types into a list of signatures (0 in, 1 out)', function test( t ) {
	var expected;
	var actual;
	var dtypes;

	dtypes = [ 'float64' ];
	expected = [ '() => (float64)' ];

	actual = dtypes2signatures( dtypes, 0, 1 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
