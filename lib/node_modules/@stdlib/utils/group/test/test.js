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
var group = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof group, 'function', 'main export is a function' );
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
			group( value, [ 1, 2, 3 ] );
		};
	}
});

tape( 'the function throws an error if not provided a groups collection (no options)', function test( t ) {
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
			group( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if not provided a groups collection (options)', function test( t ) {
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
			group( [ 1, 2, 3 ], {}, value );
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
			group( [ 1, 2, 3 ], value, [ 1, 1, 1 ] );
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
			group( [ 1, 2, 3 ], opts, [ 1, 1, 1 ] );
		};
	}
});

tape( 'the function throws an error if provided collections of different lengths', function test( t ) {
	t.throws( badValues, RangeError, 'throws a range error' );
	t.end();

	function badValues() {
		group( [ 1, 2, 3 ], [ 'a', 'b' ] );
	}
});

tape( 'the function groups collection elements as lists associated with distinct keys (arrays)', function test( t ) {
	var expected;
	var out;
	var arr;
	var g;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	g = [ 'b', 'b', 'f', 'b' ];

	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = group( arr, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups collection elements as lists associated with distinct keys (arrays, values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var g;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	g = [ 'b', 'b', 'f', 'b' ];

	opts = {
		'returns': 'values'
	};
	expected = {
		'b': [ 'beep', 'boop', 'bar' ],
		'f': [ 'foo' ]
	};
	out = group( arr, opts, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups collection elements as lists associated with distinct keys (arrays, indices)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var g;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	g = [ 'b', 'b', 'f', 'b' ];

	opts = {
		'returns': 'indices'
	};
	expected = {
		'b': [ 0, 1, 3 ],
		'f': [ 2 ]
	};
	out = group( arr, opts, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups collection elements as lists associated with distinct keys (arrays, pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var g;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	g = [ 'b', 'b', 'f', 'b' ];

	opts = {
		'returns': '*'
	};
	expected = {
		'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		'f': [ [ 2, 'foo' ] ]
	};
	out = group( arr, opts, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups collection elements as lists associated with distinct keys (array, typed array)', function test( t ) {
	var expected;
	var out;
	var arr;
	var g;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	g = new Float64Array( [ 1, 1, 2, 1 ] );

	expected = {
		'1': [ 'beep', 'boop', 'bar' ],
		'2': [ 'foo' ]
	};
	out = group( arr, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups collection elements as lists associated with distinct keys (typed arrays)', function test( t ) {
	var expected;
	var out;
	var arr;
	var g;

	arr = new Float64Array( [ 3.14, 4.2, -1.0, -10.2 ] );
	g = new Float64Array( [ 2, 2, 1, 1 ] );

	expected = {
		'1': [ -1.0, -10.2 ],
		'2': [ 3.14, 4.2 ]
	};
	out = group( arr, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups collection elements as lists associated with distinct keys (array-like objects)', function test( t ) {
	var expected;
	var out;
	var arr;
	var g;

	arr = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};
	g = {
		'length': 4,
		'0': 'be',
		'1': 'bo',
		'2': 'fo',
		'3': 'ba'
	};

	expected = {
		'be': [ 'beep' ],
		'bo': [ 'boop' ],
		'fo': [ 'foo' ],
		'ba': [ 'bar' ]
	};
	out = group( arr, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function groups collection elements as lists associated with distinct keys (string serialization)', function test( t ) {
	var expected;
	var out;
	var arr;
	var g;

	arr = [ 'beep', 'boop', 'foo', 'bar' ];
	g = [ {}, {}, {}, {} ];

	expected = {
		'[object Object]': [ 'beep', 'boop', 'foo', 'bar' ]
	};
	out = group( arr, g );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty object', function test( t ) {
	var expected;
	var out;
	var arr;
	var g;

	arr = [];
	g = [];

	expected = {};
	out = group( arr, g );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty object (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var g;

	arr = [];
	g = [];

	opts = {
		'returns': 'values'
	};

	expected = {};
	out = group( arr, opts, g );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty object (indices)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var g;

	arr = [];
	g = [];

	opts = {
		'returns': 'indices'
	};

	expected = {};
	out = group( arr, opts, g );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty object (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;
	var g;

	arr = [];
	g = [];

	opts = {
		'returns': '*'
	};

	expected = {};
	out = group( arr, opts, g );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});
