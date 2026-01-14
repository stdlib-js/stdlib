/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var Uint8Array = require( '@stdlib/array/uint8' );
var ind2sub = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ind2sub, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an output argument which is not an array, typed array, or object', function test( t ) {
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
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ind2sub( [ 3, 3, 3 ], 0, value );
		};
	}
});

tape( 'the function throws an error if not provided an output argument which is not an array, typed array, or object (options)', function test( t ) {
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
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ind2sub( [ 3, 3, 3 ], 0, {}, value );
		};
	}
});

tape( 'the function throws an error if not provided an array-like object containing nonnegative integers as the shape argument', function test( t ) {
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
		[],
		[ 1, 2, null ],
		[ 1, 2, 3.14 ],
		[ 1, 2, NaN ],
		[ 1, 2, '3' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ind2sub( value, 0, [ 0, 0 ] );
		};
	}
});

tape( 'the function throws an error if not provided an array-like object containing nonnegative integers as the shape argument (options)', function test( t ) {
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
		[],
		[ 1, 2, null ],
		[ 1, 2, 3.14 ],
		[ 1, 2, NaN ],
		[ 1, 2, '3' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ind2sub( value, 0, {}, [ 0, 0 ] );
		};
	}
});

tape( 'the function throws an error if provided a linear index argument which is not an integer value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-0.14,
		0.14,
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
			ind2sub( [ 3, 3, 3 ], value, [ 0, 0, 0 ] );
		};
	}
});

tape( 'the function throws an error if provided a linear index argument which is not an integer value (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-0.14,
		0.14,
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
			ind2sub( [ 3, 3, 3 ], value, {}, [ 0, 0, 0 ] );
		};
	}
});

tape( 'the function throws an error if not provided an object for the options argument', function test( t ) {
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ind2sub( [ 3, 3, 3 ], 0, value, [ 0, 0, 0 ] );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'boop',
		'foo',
		'bar',
		5,
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
			var opts = {
				'mode': value
			};
			ind2sub( [ 3, 3, 3 ], 0, opts, [ 0, 0, 0 ] );
		};
	}
});

tape( 'the function converts a linear index to an array of subscripts (2d)', function test( t ) {
	var shape;
	var out;
	var s;

	shape = [ 2, 2 ];

	out = [ 0, 0 ];
	s = ind2sub( shape, 0, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.strictEqual( out, s, 'returns output array' );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	out = [ 0, 0 ];
	s = ind2sub( shape, 1, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.strictEqual( out, s, 'returns output array' );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	out = [ 0, 0 ];
	s = ind2sub( shape, 2, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.strictEqual( out, s, 'returns output array' );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	out = [ 0, 0 ];
	s = ind2sub( shape, 3, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.strictEqual( out, s, 'returns output array' );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (2d; typed array)', function test( t ) {
	var shape;
	var out;
	var s;

	shape = [ 2, 2 ];

	out = new Uint8Array( shape.length );
	s = ind2sub( shape, 0, out );
	t.strictEqual( out, s, 'returns output array' );
	t.strictEqual( s[ 0 ], 0, 'returns expected value' );
	t.strictEqual( s[ 1 ], 0, 'returns expected value' );

	out = new Uint8Array( shape.length );
	s = ind2sub( shape, 1, out );
	t.strictEqual( out, s, 'returns output array' );
	t.strictEqual( s[ 0 ], 0, 'returns expected value' );
	t.strictEqual( s[ 1 ], 1, 'returns expected value' );

	out = new Uint8Array( shape.length );
	s = ind2sub( shape, 2, out );
	t.strictEqual( out, s, 'returns output array' );
	t.strictEqual( s[ 0 ], 1, 'returns expected value' );
	t.strictEqual( s[ 1 ], 0, 'returns expected value' );

	out = new Uint8Array( shape.length );
	s = ind2sub( shape, 3, out );
	t.strictEqual( out, s, 'returns output array' );
	t.strictEqual( s[ 0 ], 1, 'returns expected value' );
	t.strictEqual( s[ 1 ], 1, 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (2d; order=row-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'order': 'row-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 0, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 1, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, 2, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 3, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (2d; order=column-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'order': 'column-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 0, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 1, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 2, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, 3, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (3d)', function test( t ) {
	var shape;
	var out;
	var s;

	shape = [ 3, 3, 3 ];
	out = [ 0, 0, 0 ];

	s = ind2sub( shape, 17, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 2, 2 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (3d; order=row-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 3, 3, 3 ];
	opts = {
		'order': 'row-major'
	};
	out = [ 0, 0, 0 ];

	s = ind2sub( shape, 17, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 2, 2 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (3d; order=column-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 3, 3, 3 ];
	opts = {
		'order': 'column-major'
	};
	out = [ 0, 0, 0 ];

	s = ind2sub( shape, 17, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 2, 2, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (order=row-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'order': 'row-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 0, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 1, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, 2, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 3, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (order=column-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'order': 'column-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 0, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 1, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 2, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, 3, opts, out );
	t.strictEqual( s, out, 'returns expected value' );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `throw`, the function throws if provided a linear index which exceeds array dimensions (default)', function test( t ) {
	t.throws( foo, RangeError, 'throws a range error' );
	t.end();

	function foo() {
		ind2sub( [ 2, 2 ], 999999, [ 0, 0 ] );
	}
});

tape( 'if the `mode` is `throw`, the function throws if provided a linear index which exceeds array dimensions (option)', function test( t ) {
	var opts = {
		'mode': 'throw'
	};

	t.throws( foo, RangeError, 'throws a range error' );
	t.end();

	function foo() {
		ind2sub( [ 2, 2 ], 999999, opts, [ 0, 0 ] );
	}
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'wrap'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 4, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 5, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, -8, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 13, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, -5, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -7, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'wrap',
		'order': 'row-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 4, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 5, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, -8, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 13, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, -5, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -7, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'wrap',
		'order': 'column-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, 4, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 5, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, -8, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 13, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, -5, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -7, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'clamp'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 4, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, 5, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -8, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 13, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -5, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -7, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'clamp',
		'order': 'row-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 4, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, 5, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -8, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 13, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -5, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -7, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'clamp',
		'order': 'column-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, 4, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, 5, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -8, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, 13, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -5, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -7, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalize negative linear indices', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'normalize'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 3, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -1, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -4, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -3, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalize negative linear indices (order=row-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'normalize',
		'order': 'row-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, 3, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -1, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -4, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -3, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalize negative linear indices (order=column-major)', function test( t ) {
	var shape;
	var opts;
	var out;
	var s;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'normalize',
		'order': 'column-major'
	};
	out = [ 0, 0 ];

	s = ind2sub( shape, 2, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	s = ind2sub( shape, 3, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -1, opts, out );
	t.deepEqual( s, [ 1, 1 ], 'returns expected value' );

	s = ind2sub( shape, -4, opts, out );
	t.deepEqual( s, [ 0, 0 ], 'returns expected value' );

	s = ind2sub( shape, -3, opts, out );
	t.deepEqual( s, [ 1, 0 ], 'returns expected value' );

	s = ind2sub( shape, -2, opts, out );
	t.deepEqual( s, [ 0, 1 ], 'returns expected value' );

	t.end();
});
