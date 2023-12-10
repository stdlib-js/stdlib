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
var Float64Array = require( '@stdlib/array/float64' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array of positive integers', function test( t ) {
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
		[],
		[ 3, 0 ],
		[ 3, -1 ],
		[ 3, null ],
		[ 3, 3.14 ],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if not provided an array of positive integers (options)', function test( t ) {
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
		[],
		[ 3, 0 ],
		[ 3, -1 ],
		[ 3, null ],
		[ 3, 3.14 ],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, {} );
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
			factory( [ 1, 2, 3 ], value );
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
			factory( [ 1, 2, 3 ], {
				'copy': value
			});
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var flattenArray;

	flattenArray = factory( [ 1, 2, 3 ] );
	t.equal( typeof flattenArray, 'function', 'returns a function' );

	flattenArray = factory( [ 1, 2, 3 ], {} );
	t.equal( typeof flattenArray, 'function', 'returns a function' );

	t.end();
});

tape( 'the returned function throws an error if not provided an array-like object', function test( t ) {
	var flattenArray;
	var values;
	var i;

	flattenArray = factory( [ 1, 1 ] );

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

tape( 'the returned function throws an error if not provided an array-like object (options)', function test( t ) {
	var flattenArray;
	var values;
	var i;

	flattenArray = factory( [ 1, 1 ], {
		'copy': true
	});

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

tape( 'the returned function flattens an array', function test( t ) {
	var flattenArray;
	var expected;
	var actual;
	var arr;

	arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ],
		[ 7, 8, 9 ]
	];

	flattenArray = factory( [ 3, 3 ] );
	actual = flattenArray( arr );
	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the returned function flattens an array (array-like objects)', function test( t ) {
	var flattenArray;
	var expected;
	var actual;
	var arr;

	arr = [
		new Float64Array( [ 1, 2, 3 ] ),
		new Float64Array( [ 4, 5, 6 ] ),
		new Float64Array( [ 7, 8, 9 ] )
	];

	flattenArray = factory( [ 3, 3 ] );
	actual = flattenArray( arr );
	expected = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the returned function supports deep copying a flattened array', function test( t ) {
	var flattenArray;
	var expected;
	var actual;
	var arr;

	arr = [
		[ 1, 2, 3 ],
		[ 4, { 'x': 5 }, 6 ],
		[ 7, 8, 9 ]
	];

	flattenArray = factory( [ 3, 3 ], {
		'copy': true
	});
	actual = flattenArray( arr );
	expected = [ 1, 2, 3, 4, { 'x': 5 }, 6, 7, 8, 9 ];

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( arr[ 1 ][ 1 ], actual[ 4 ], 'different references' );
	t.end();
});
