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
var ranks = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ranks, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ranks( value, [1, 2, 3] );
		};
	}
});

tape( 'the function throws an error if `options` is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ranks( [ 1, 2, 3, 4, 5 ], value );
		};
	}
});

tape( 'the function calculates the ranks for a simple array without missing values', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ 2, 1, 4, 3 ];
	actual = ranks( data );
	expected = [ 2, 1, 4, 3 ];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function calculates the ranks for an array with tied values using the default method (=average)', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ 2, 2, 1, 4, 3 ];
	actual = ranks( data );
	expected = [ 2.5, 2.5, 1, 5, 4 ];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function calculates the ranks for an array with tied values and missing values', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ null, 2, 2, 1, 4, 3, NaN, NaN ];
	actual = ranks( data );
	expected = [ 6, 2.5, 2.5, 1, 5, 4, 7, 8 ];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function calculates the ranks for an array with tied values using a chosen method', function test( t ) {
	var expected;
	var actual;
	var data;

	// `max` method:
	data = [ 2, 2, 1, 4, 3 ];
	actual = ranks( data, {
		'method': 'max'
	});
	expected = [ 3, 3, 1, 5, 4 ];
	t.deepEqual( actual, expected );

	// `min` method:
	data = [ 2, 2, 1, 4, 3 ];
	actual = ranks( data, {
		'method': 'min'
	});
	expected = [ 2, 2, 1, 5, 4 ];
	t.deepEqual( actual, expected );

	// `ordinal` method:
	data = [ 2, 2, 1, 4, 3 ];
	actual = ranks( data, {
		'method': 'ordinal'
	});
	expected = [ 2, 3, 1, 5, 4 ];
	t.deepEqual( actual, expected );

	// `dense` method:
	data = [ 2, 2, 1, 4, 3 ];
	actual = ranks( data, {
		'method': 'dense'
	});
	expected = [ 2, 2, 1, 4, 3 ];
	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function calculates the ranks for an array with tied values (putting missing values in front)', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ NaN, 2, 2, 1, 4, 3, null, null ];
	actual = ranks( data, {
		'missing': 'first'
	});
	expected = [ 1, 5.5, 5.5, 4, 8, 7, 2, 3 ];
	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function calculates the ranks for an array with tied values (putting missing  values last)', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ NaN, 2, 2, 1, 4, 3, null, null ];
	actual = ranks( data, {
		'missing': 'last'
	});
	expected = [ 6, 2.5, 2.5, 1, 5, 4, 7, 8 ];
	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function calculates the ranks for an array with tied values (removing missing values)', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ NaN, 2, 2, 1, 4, 3, null, null ];
	actual = ranks( data, {
		'missing': 'remove'
	});
	expected = [ 2.5, 2.5, 1, 5, 4 ];
	t.deepEqual( actual, expected );
	t.end();
});
