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
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var assign = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof assign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (options)', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type', function test( t ) {
	var values;
	var i;

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
			assign( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (options)', function test( t ) {
	var values;
	var i;

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
			assign( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 5 ],
		[ -5 ],
		[ 2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 1, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ 0, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from zero', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	expected = [ 0.0, 1.0, 2.0 ];

	actual = assign( x );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from zero (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];

	actual = assign( x );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from zero (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];

	actual = assign( x );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from zero (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 0.0, 1.0 ], [ 2.0, 3.0 ] ];

	actual = assign( x, {
		'dims': [ 0, 1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from zero (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 0.0, 2.0 ], [ 1.0, 3.0 ] ];

	actual = assign( x, {
		'dims': [ 0, 1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from zero (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	actual = assign( x, {
		'dims': []
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from zero (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	actual = assign( x, {
		'dims': []
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 0.0, 0.0 ], [ 1.0, 1.0 ] ];

	actual = assign( x, {
		'dims': [ 0 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];

	actual = assign( x, {
		'dims': [ 1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 0.0, 0.0 ], [ 1.0, 1.0 ] ];

	actual = assign( x, {
		'dims': [ 0 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 0.0, 1.0 ], [ 0.0, 1.0 ] ];

	actual = assign( x, {
		'dims': [ 1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
