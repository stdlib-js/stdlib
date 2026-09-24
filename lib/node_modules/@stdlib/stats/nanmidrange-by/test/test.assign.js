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
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var emptyLike = require( '@stdlib/ndarray/empty-like' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var nanmidrangeBy = require( './../lib' ).assign;


// FUNCTIONS //

/**
* Callback function.
*
* @private
* @param {number} value - input value
* @returns {number} accessed value
*/
function clbk( value ) {
	return value * 10.0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanmidrangeBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( value, out, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (thisArg)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( value, out, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( value, out, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options, thisArg)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( value, out, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object (thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, value, {}, clbk );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an ndarray-like object (options, thisArg)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, value, {}, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, out, value, clbk );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (thisArg)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, out, value, clbk, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, out, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (thisArg)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, out, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, out, {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options, thisArg)', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmidrangeBy( x, out, {}, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'a' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			nanmidrangeBy( x, out, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [ 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ -10 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			nanmidrangeBy( x, out, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			nanmidrangeBy( x, out, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	out = zeros( [], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 0 ],
		[ 1, 1 ],
		[ 0, 1, 0 ],
		[ 1, 0, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'dims': value
			};
			nanmidrangeBy( x, out, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (default)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var out = zeros( value, {
				'dtype': 'generic'
			});
			nanmidrangeBy( x, out, clbk );
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (all dimensions)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 2, 2 ],
		[ 2 ],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts;
			var out;

			out = zeros( value, {
				'dtype': 'generic'
			});
			opts = {
				'dims': [ 0, 1 ]
			};
			nanmidrangeBy( x, out, opts, clbk );
		};
	}
});

tape( 'the function throws an error if provided an output array which has an invalid shape (some dimensions)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[],
		[ 4, 4 ],
		[ 4 ],
		[ 1 ],
		[ 1, 1 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts;
			var out;

			out = zeros( value, {
				'dtype': 'generic'
			});
			opts = {
				'dims': [ 0 ]
			};
			nanmidrangeBy( x, out, opts, clbk );
		};
	}
});

tape( 'the function performs a reduction on an ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': []
	});

	actual = nanmidrangeBy( x, out, clbk );
	expected = 15.0;

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': []
	});

	actual = nanmidrangeBy( x, out, clbk );
	expected = 15.0;

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': []
	});

	opts = {
		'dims': [ 0, 1 ]
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = 15.0;

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': []
	});

	opts = {
		'dims': [ 0, 1 ]
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = 15.0;

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': [ 2, 2 ]
	});

	opts = {
		'dims': []
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = [ [ -10.0, 20.0 ], [ NaN, 40.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ], 'returns expected value' );
	t.strictEqual( actual[ 0 ][ 1 ], expected[ 0 ][ 1 ], 'returns expected value' );
	t.notEqual( actual[ 1 ][ 0 ], actual[ 1 ][ 0 ], 'returns expected value' ); // NaN check
	t.strictEqual( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': [ 2, 2 ]
	});

	opts = {
		'dims': []
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = [ [ -10.0, NaN ], [ 20.0, 40.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ], 'returns expected value' );
	t.notEqual( actual[ 0 ][ 1 ], actual[ 0 ][ 1 ], 'returns expected value' ); // NaN check
	t.strictEqual( actual[ 1 ][ 0 ], expected[ 1 ][ 0 ], 'returns expected value' );
	t.strictEqual( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	opts = {
		'dims': [ 0 ]
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = [ -10.0, 30.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	opts = {
		'dims': [ 1 ]
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = [ 5.0, 40.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	opts = {
		'dims': [ 0 ]
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = [ 5.0, 40.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	opts = {
		'dims': [ 1 ]
	};
	actual = nanmidrangeBy( x, out, opts, clbk );
	expected = [ -10.0, 30.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the callback execution context (row-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var xbuf;
	var ctx;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': []
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = nanmidrangeBy( x, out, fcn, ctx );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = 15.0;
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	expected = [
		-1.0,
		2.0,
		NaN,
		4.0
	];
	t.strictEqual( values[ 0 ], expected[ 0 ], 'returns expected value' );
	t.strictEqual( values[ 1 ], expected[ 1 ], 'returns expected value' );
	t.notEqual( values[ 2 ], values[ 2 ], 'returns expected value' ); // NaN check
	t.strictEqual( values[ 3 ], expected[ 3 ], 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 0, 1 ],
		[ 1, 0 ],
		[ 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function fcn( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value * 10.0;
	}
});

tape( 'the function supports specifying the callback execution context (column-major)', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var xbuf;
	var ctx;
	var out;
	var x;

	xbuf = [ -1.0, 2.0, NaN, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': []
	});

	indices = [];
	values = [];
	arrays = [];

	ctx = {
		'count': 0
	};
	actual = nanmidrangeBy( x, out, fcn, ctx );

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = 15.0;
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	expected = [
		-1.0,
		2.0,
		NaN,
		4.0
	];
	t.strictEqual( values[ 0 ], expected[ 0 ], 'returns expected value' );
	t.strictEqual( values[ 1 ], expected[ 1 ], 'returns expected value' );
	t.notEqual( values[ 2 ], values[ 2 ], 'returns expected value' ); // NaN check
	t.strictEqual( values[ 3 ], expected[ 3 ], 'returns expected value' );

	expected = [
		[ 0, 0 ],
		[ 1, 0 ],
		[ 0, 1 ],
		[ 1, 1 ]
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		x,
		x,
		x,
		x
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function fcn( value, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( value );
		indices.push( idx );
		arrays.push( arr );
		return value * 10.0;
	}
});
