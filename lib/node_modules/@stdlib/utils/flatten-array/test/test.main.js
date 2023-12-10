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
var Float64Array = require( '@stdlib/array/float64' );
var flattenArray = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flattenArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenArray( value );
		};
	}
});

tape( 'the function throws an error if not provided an array-like object (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenArray( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			flattenArray( [], value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
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
			flattenArray( [], {
				'copy': value
			});
		};
	}
});

tape( 'if the `depth` option is `0`, the function returns the input array', function test( t ) {
	var expected;
	var actual;
	var arr;

	expected = [ 1, [ 2, [ 3 ], 4 ], 5 ];
	arr = [ 1, [ 2, [ 3 ], 4 ], 5 ];
	actual = flattenArray( arr, {
		'depth': 0
	});

	t.equal( arr, actual, 'same reference' );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'if the `depth` option is `0` and the `copy` option is `true`, the function returns a deep copy of the input array', function test( t ) {
	var expected;
	var actual;
	var arr;

	expected = [ 1, [ 2, [ 3 ], 4 ], 5 ];
	arr = [ 1, [ 2, [ 3 ], 4 ], 5 ];
	actual = flattenArray( arr, {
		'depth': 0,
		'copy': true
	});

	t.notEqual( arr, actual, 'different reference' );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function flattens an array', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

	actual = flattenArray( arr );
	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function flattens an array (array-like objects)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ 1, [2, [3, [4, new Float64Array( [ 5 ] ), 6], 7], 8], 9 ];

	actual = flattenArray( arr );
	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function flattens an array to a specified depth', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

	actual = flattenArray( arr, {
		'depth': 2
	});
	expected = [ 1, 2, 3, [4, [ 5 ], 6], 7, 8, 9 ];

	t.deepEqual( actual, expected, 'deep equal' );
	t.equal( arr[ 1 ][ 1 ][ 1 ], actual[ 3 ], 'same reference' );
	t.end();
});

tape( 'the function supports flattening an array to a specified depth with deep copying', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];

	actual = flattenArray( arr, {
		'depth': 2,
		'copy': true
	});
	expected = [ 1, 2, 3, [4, [ 5 ], 6], 7, 8, 9 ];

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( arr[ 1 ][ 1 ][ 1 ], actual[ 3 ], 'different references' );
	t.end();
});
