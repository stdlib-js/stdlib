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
var sub2ind = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sub2ind, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array-like object containing nonnegative integers as the first argument', function test( t ) {
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
			sub2ind( value, 0, 0, 0 );
		};
	}
});

tape( 'the function throws an error if provided a subscript argument which is not an integer value', function test( t ) {
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
			sub2ind( [ 3, 3, 3 ], value, 0, 0 );
		};
	}
});

tape( 'the function throws an error if provided a subscript argument which is not an integer value', function test( t ) {
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
			sub2ind( [ 3, 3, 3 ], 0, value, 0 );
		};
	}
});

tape( 'the function throws an error if provided a subscript argument which is not an integer value', function test( t ) {
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
			sub2ind( [ 3, 3, 3 ], 0, 0, value );
		};
	}
});

tape( 'the function throws an error if provided a subscript argument which is not an integer value (options)', function test( t ) {
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
			sub2ind( [ 3, 3, 3 ], value, 0, 0, {} );
		};
	}
});

tape( 'the function throws an error if provided a subscript argument which is not an integer value (options)', function test( t ) {
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
			sub2ind( [ 3, 3, 3 ], 0, value, 0, {} );
		};
	}
});

tape( 'the function throws an error if provided a subscript argument which is not an integer value (options)', function test( t ) {
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
			sub2ind( [ 3, 3, 3 ], 0, 0, value, {} );
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
			sub2ind( [ 3, 3, 3 ], 0, 0, 0, value );
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
		'clips',
		'throws',
		'wraps',
		'clamps',
		'normalizes',
		'clip',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 'wrap', 'clamp', 'throw', 'normalize', 'foo' ],
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
			sub2ind( [ 3, 3, 3 ], 0, 0, 0, opts );
		};
	}
});

tape( 'the function throws an error if provided fewer subscripts than array dimensions', function test( t ) {
	t.throws( foo, RangeError, 'throws an error' );
	t.end();

	function foo() {
		sub2ind( [ 3, 3, 3 ], 0, 0 );
	}
});

tape( 'the function throws an error if provided more subscripts than array dimensions', function test( t ) {
	t.throws( foo, RangeError, 'throws an error' );
	t.throws( bar, TypeError, 'throws an error' );
	t.end();

	function foo() {
		sub2ind( [ 3, 3, 3 ], 0, 0, 0, 0, {} );
	}

	function bar() {
		sub2ind( [ 3, 3, 3 ], 0, 0, 0, 0 );
	}
});

tape( 'the function converts subscripts to a linear index (2d)', function test( t ) {
	var shape;
	var idx;

	shape = [ 2, 2 ];

	idx = sub2ind( shape, 0, 0 );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, 0, 1 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, 1, 0 );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 1, 1 );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index (3d)', function test( t ) {
	var shape;
	var idx;

	shape = [ 3, 3, 3 ];

	idx = sub2ind( shape, 1, 2, 2 );
	t.strictEqual( idx, 17, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index (row-major)', function test( t ) {
	var shape;
	var opts;
	var idx;

	shape = [ 2, 2 ];
	opts = {
		'order': 'row-major'
	};

	idx = sub2ind( shape, 0, 0, opts );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, 0, 1, opts );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, 1, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 1, 1, opts );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index (column-major)', function test( t ) {
	var shape;
	var opts;
	var idx;

	shape = [ 2, 2 ];
	opts = {
		'order': 'column-major'
	};

	idx = sub2ind( shape, 0, 0, opts );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, 0, 1, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 1, 0, opts );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, 1, 1, opts );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `throw`, the function throws if provided a subscript which exceeds array dimensions (default)', function test( t ) {
	var shape = [ 2, 2 ];

	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		sub2ind( shape, 999999, 1 );
	}

	function bar() {
		sub2ind( shape, 1, 999999 );
	}
});

tape( 'if the `mode` is `throw`, the function throws if provided a subscript which exceeds array dimensions (option)', function test( t ) {
	var shape;
	var opts;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'throw'
	};

	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		sub2ind( shape, 999999, 1, opts );
	}

	function bar() {
		sub2ind( shape, 1, 999999, opts );
	}
});

tape( 'if the `mode` is `normalize`, the function throws if provided a subscript which exceeds array dimensions', function test( t ) {
	var shape;
	var opts;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'normalize'
	};

	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		sub2ind( shape, 999999, 1, opts );
	}

	function bar() {
		sub2ind( shape, 1, -999999, opts );
	}
});

tape( 'if the `mode` is `wrap`, the function wraps subscripts which exceed array dimensions', function test( t ) {
	var shape;
	var opts;
	var idx;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'wrap'
	};

	idx = sub2ind( shape, 1, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 2, 0, opts );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, 0, 3, opts );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, -1, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, -3, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 1, 5, opts );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = sub2ind( shape, 1, 4, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 1, -4, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps subscripts which exceed array dimensions', function test( t ) {
	var shape;
	var opts;
	var idx;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'clamp'
	};

	idx = sub2ind( shape, 1, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 2, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 0, 3, opts );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, -3, 0, opts );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, 1, 5, opts );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative subscripts', function test( t ) {
	var shape;
	var opts;
	var idx;

	shape = [ 2, 2 ];
	opts = {
		'mode': 'normalize'
	};

	idx = sub2ind( shape, 1, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, -1, 0, opts );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, 0, -1, opts );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, -2, -2, opts );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, -1, -1, opts );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing mixed modes', function test( t ) {
	var shape;
	var opts;
	var idx;

	shape = [ 2, 2, 2 ];
	opts = {
		'mode': [ 'wrap', 'clamp' ]
	};

	idx = sub2ind( shape, -2, 10, -1, opts );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});
