/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isSameValue = require( '@stdlib/assert/is-same-value' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var empty = require( '@stdlib/ndarray/empty' );
var emptyLike = require( '@stdlib/ndarray/empty-like' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var nanmean = require( './../lib' ).assign;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanmean, 'function', 'main export is a function' );
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
			nanmean( value, out );
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
			nanmean( value, out, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmean( value, out );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (options)', function test( t ) {
	var values;
	var out;
	var i;

	out = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		empty( [ 2, 2 ], {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmean( value, out, {} );
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
			nanmean( x, value );
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
			nanmean( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an object', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanmean( x, out, value );
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
			nanmean( x, out, {
				'dims': value
			});
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
			nanmean( x, out, {
				'dims': value
			});
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
			nanmean( x, out, {
				'dims': value
			});
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
			nanmean( x, out, {
				'dims': value
			});
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
			nanmean( x, out );
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
			var out = zeros( value, {
				'dtype': 'generic'
			});
			nanmean( x, out, {
				'dims': [ 0, 1 ]
			});
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
			var out = zeros( value, {
				'dtype': 'generic'
			});
			nanmean( x, out, {
				'dims': [ 0 ]
			});
		};
	}
});

tape( 'the function performs a reduction on an ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': []
	});

	actual = nanmean( x, out );
	expected = 1.0;

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

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': []
	});

	actual = nanmean( x, out );
	expected = 1.0;

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': []
	});

	actual = nanmean( x, out, {
		'dims': [ 0, 1 ]
	});
	expected = 1.0;

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': []
	});

	actual = nanmean( x, out, {
		'dims': [ 0, 1 ]
	});
	expected = 1.0;

	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.get(), expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': [ 2, 2 ]
	});

	actual = nanmean( x, out, {
		'dims': []
	});
	expected = [ [ 1.0, NaN ], [ -2.0, 4.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( isSameValue( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 0 ][ 1 ], expected[ 0 ][ 1 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 0 ], expected[ 1 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs a reduction on an ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': [ 2, 2 ]
	});

	actual = nanmean( x, out, {
		'dims': []
	});
	expected = [ [ 1.0, -2.0 ], [ NaN, 4.0 ] ];

	t.strictEqual( actual, out, 'returns expected value' );

	actual = ndarray2array( actual );
	t.strictEqual( isSameValue( actual[ 0 ][ 0 ], expected[ 0 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 0 ][ 1 ], expected[ 0 ][ 1 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 0 ], expected[ 1 ][ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isSameValue( actual[ 1 ][ 1 ], expected[ 1 ][ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	actual = nanmean( x, out, {
		'dims': [ 0 ]
	});
	expected = [ -0.5, 4.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	actual = nanmean( x, out, {
		'dims': [ 1 ]
	});
	expected = [ 1.0, 1.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying reduction dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var out;
	var x;

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	actual = nanmean( x, out, {
		'dims': [ 0 ]
	});
	expected = [ 1.0, 1.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 1.0, NaN, -2.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	out = emptyLike( x, {
		'shape': [ 2 ]
	});

	actual = nanmean( x, out, {
		'dims': [ 1 ]
	});
	expected = [ -0.5, 4.0 ];

	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
