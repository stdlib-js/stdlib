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
var Float32Array = require( '@stdlib/array/float32' );
var Complex128Array = require( '@stdlib/array/complex128' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var empty = require( '@stdlib/ndarray/empty' );
var array = require( '@stdlib/ndarray/array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
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
			assign( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (start=ndarray)', function test( t ) {
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
			assign( value, scalar2ndarray( 1.0 ) );
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
			assign( value, 1.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 1.0 ),
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
			assign( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (start=ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 1.0 ),
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
			assign( value, scalar2ndarray( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 1.0 ),
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
			assign( value, 1.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		scalar2ndarray( true )
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

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		scalar2ndarray( true )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an object', function test( t ) {
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
			assign( x, 1.0, value );
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
			assign( x, 1.0, {
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
			assign( x, 1.0, {
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
			assign( x, 1.0, {
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
			assign( x, 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if a complex `start` value cannot be safely cast to the output data type', function test( t ) {
	var x;

	x = zeros( [ 4 ], {
		'dtype': 'float64'
	});
	t.throws( badValue, TypeError, 'throws an error' );
	t.end();

	function badValue() {
		assign( x, new Complex128( 1.0, 2.0 ) );
	}
});

tape( 'the function fills an ndarray with linearly spaced values incrementing by 1 from a specified value', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	expected = [ 1.0, 2.0, 3.0 ];

	actual = assign( x, 1.0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 2.0, 3.0 ], [ 2.0, 3.0 ] ];

	actual = assign( x, 2.0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 2.0, 3.0 ], [ 2.0, 3.0 ] ];

	actual = assign( x, 2.0 );

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
	expected = [ [ 1.0, 2.0 ], [ 1.0, 2.0 ] ];

	actual = assign( x, 1.0, {
		'dims': [ -1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 1.0, 1.0 ], [ 2.0, 2.0 ] ];

	actual = assign( x, 1.0, {
		'dims': [ 0 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];

	actual = assign( x, 1.0, {
		'dims': [ 0, 1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	expected = [ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ];

	actual = assign( x, 1.0, {
		'dims': []
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
	expected = [ [ 1.0, 2.0 ], [ 1.0, 2.0 ] ];

	actual = assign( x, 1.0, {
		'dims': [ -1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 1.0, 1.0 ], [ 2.0, 2.0 ] ];

	actual = assign( x, 1.0, {
		'dims': [ 0 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 1.0, 3.0 ], [ 2.0, 4.0 ] ];

	actual = assign( x, 1.0, {
		'dims': [ 0, 1 ]
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );
	expected = [ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ];

	actual = assign( x, 1.0, {
		'dims': []
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `start` ndarray', function test( t ) {
	var expected;
	var actual;
	var start;
	var x;

	x = zeros( [ 2, 3 ], {
		'dtype': 'float64'
	});
	start = array( [ 1.0, 5.0 ] );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 5.0, 6.0, 7.0 ] ];

	actual = assign( x, start );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	x = zeros( [ 2, 3 ], {
		'dtype': 'float64'
	});
	start = scalar2ndarray( 4.0 );
	expected = [ [ 4.0, 5.0, 6.0 ], [ 4.0, 5.0, 6.0 ] ];

	actual = assign( x, start );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a complex `start` value', function test( t ) {
	var actual;
	var v;
	var x;

	x = zeros( [ 3 ], {
		'dtype': 'complex128'
	});
	actual = assign( x, new Complex128( 1.0, 2.0 ) );

	t.strictEqual( actual, x, 'returns expected value' );

	v = actual.iget( 0 );
	t.strictEqual( real( v ), 1.0, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );

	v = actual.iget( 1 );
	t.strictEqual( real( v ), 2.0, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );

	v = actual.iget( 2 );
	t.strictEqual( real( v ), 3.0, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function casts a `start` ndarray to the output data type', function test( t ) {
	var expected;
	var actual;
	var start;
	var x;

	x = zeros( [ 2, 3 ], {
		'dtype': 'float64'
	});
	start = array( new Float32Array( [ 1.0, 5.0 ] ), {
		'dtype': 'float32'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 5.0, 6.0, 7.0 ] ];

	actual = assign( x, start );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function throws an error if a `start` ndarray cannot be safely cast to the output data type', function test( t ) {
	var x;

	x = zeros( [ 4 ], {
		'dtype': 'float64'
	});
	t.throws( badValue, TypeError, 'throws an error' );
	t.end();

	function badValue() {
		var start = array( new Complex128Array( [ 1.0, 2.0 ] ), {
			'dtype': 'complex128'
		});
		assign( x, start );
	}
});
