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
var bifurcate = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bifurcate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection (first argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcate( value, [ 1, 2, 3 ] );
		};
	}
});

tape( 'the function throws an error if not provided a filter collection (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcate( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if not provided a filter collection (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcate( [ 1, 2, 3 ], {}, value );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcate( [ 1, 2, 3 ], value, [ 1, 1, 1 ] );
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
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'returns': value
			};
			bifurcate( [ 1, 2, 3 ], opts, [ 1, 1, 1 ] );
		};
	}
});

tape( 'the function throws an error if provided collections of different lengths', function test( t ) {
	t.throws( badValues, RangeError, 'throws a range error' );
	t.end();

	function badValues() {
		bifurcate( [ 1, 2, 3 ], [ true, false ] );
	}
});

tape( 'the function splits collection elements into two groups (arrays)', function test( t ) {
	var expected;
	var out;
	var arr;
	var f;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	f = [ true, true, false, true ];

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcate( arr, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function splits collection elements into two groups (arrays, values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var f;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	f = [ true, true, false, true ];

	opts = {
		'returns': 'values'
	};
	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcate( arr, opts, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function splits collection elements into two groups (arrays, indices)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var f;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	f = [ true, true, false, true ];

	opts = {
		'returns': 'indices'
	};
	expected = [
		[ 0, 1, 3 ],
		[ 2 ]
	];
	out = bifurcate( arr, opts, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function splits collection elements into two groups (arrays, pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var f;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	f = [ true, true, false, true ];

	opts = {
		'returns': '*'
	};
	expected = [
		[ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		[ [ 2, 'foo' ] ]
	];
	out = bifurcate( arr, opts, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function splits collection elements into two groups (array, typed array)', function test( t ) {
	var expected;
	var out;
	var arr;
	var f;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	f = new Float64Array( [ 1, 1, 0, 1 ] );

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcate( arr, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function splits collection elements into two groups (typed arrays)', function test( t ) {
	var expected;
	var out;
	var arr;
	var f;

	arr = new Float64Array( [ 3.14, 4.2, -1.0, -10.2 ] );
	f = new Float64Array( [ 0, 0, 1, 1 ] );

	expected = [
		[ -1.0, -10.2 ],
		[ 3.14, 4.2 ]
	];
	out = bifurcate( arr, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function splits collection elements into two groups (array-like objects)', function test( t ) {
	var expected;
	var out;
	var arr;
	var f;

	arr = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};
	f = {
		'length': 4,
		'0': true,
		'1': true,
		'2': false,
		'3': true
	};

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcate( arr, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array', function test( t ) {
	var expected;
	var out;
	var arr;
	var f;

	arr = [];
	f = [];

	expected = [];
	out = bifurcate( arr, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var f;

	arr = [];
	f = [];

	opts = {
		'returns': 'values'
	};

	expected = [];
	out = bifurcate( arr, opts, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array (indices)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var f;

	arr = [];
	f = [];

	opts = {
		'returns': 'indices'
	};

	expected = [];
	out = bifurcate( arr, opts, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var f;

	arr = [];
	f = [];

	opts = {
		'returns': '*'
	};

	expected = [];
	out = bifurcate( arr, opts, f );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});
