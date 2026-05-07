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
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var unitspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unitspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
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
			unitspace( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (start=ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
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
			unitspace( value, scalar2ndarray( 1.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
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
			unitspace( value, 1.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type', function test( t ) {
	var values;
	var i;

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
			unitspace( [ 2, 2 ], value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var i;

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
			unitspace( [ 2, 2 ], value, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an object', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			unitspace( [ 2, 2 ], 1.0, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `dtype` option', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bool',
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
			unitspace( [ 2, 2 ], 1.0, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `order` option', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
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
			unitspace( [ 2, 2 ], 1.0, {
				'order': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			unitspace( [ 2, 2 ], 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var i;

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
			unitspace( [ 2, 2 ], 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var i;

	values = [
		[ 0, 1, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			unitspace( [ 2, 2 ], 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var i;

	values = [
		[ 0, 0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			unitspace( [ 2, 2 ], 1.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if a complex `start` value cannot be safely cast to a real-valued output data type', function test( t ) {
	t.throws( badValue, TypeError, 'throws an error' );
	t.end();

	function badValue() {
		unitspace( [ 4 ], new Complex128( 1.0, 2.0 ), {
			'dtype': 'float64'
		});
	}
});

tape( 'the function returns an ndarray containing linearly spaced values incrementing by 1 from a specified value', function test( t ) {
	var expected;
	var actual;

	expected = [ 1.0, 2.0, 3.0 ];
	actual = unitspace( 3, 1.0 );

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ 1.0, 2.0, 3.0 ];
	actual = unitspace( [ 3 ], 1.0 );

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 2.0, 3.0 ], [ 2.0, 3.0 ] ];
	actual = unitspace( [ 2, 2 ], 2.0 );

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `start` ndarray', function test( t ) {
	var expected;
	var actual;
	var start;

	start = array( [ 1.0, 5.0 ] );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 5.0, 6.0, 7.0 ] ];
	actual = unitspace( [ 2, 3 ], start );

	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = scalar2ndarray( 4.0 );
	expected = [ [ 4.0, 5.0, 6.0 ], [ 4.0, 5.0, 6.0 ] ];
	actual = unitspace( [ 2, 3 ], start );

	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an output data type', function test( t ) {
	var expected;
	var actual;

	expected = [ 1.0, 2.0, 3.0 ];
	actual = unitspace( [ 3 ], 1.0, {
		'dtype': 'float32'
	});

	t.strictEqual( String( getDType( actual ) ), 'float32', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ 1, 2, 3 ];
	actual = unitspace( [ 3 ], 1, {
		'dtype': 'int32'
	});

	t.strictEqual( String( getDType( actual ) ), 'int32', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an output array order', function test( t ) {
	var expected;
	var actual;

	expected = [ [ 2.0, 3.0 ], [ 2.0, 3.0 ] ];
	actual = unitspace( [ 2, 2 ], 2.0, {
		'order': 'row-major'
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 2.0, 3.0 ], [ 2.0, 3.0 ] ];
	actual = unitspace( [ 2, 2 ], 2.0, {
		'order': 'column-major'
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions', function test( t ) {
	var expected;
	var actual;

	expected = [ [ 1.0, 2.0 ], [ 1.0, 2.0 ] ];
	actual = unitspace( [ 2, 2 ], 1.0, {
		'dims': [ -1 ]
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 1.0, 1.0 ], [ 2.0, 2.0 ] ];
	actual = unitspace( [ 2, 2 ], 1.0, {
		'dims': [ 0 ]
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	actual = unitspace( [ 2, 2 ], 1.0, {
		'dims': [ 0, 1 ]
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	expected = [ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ];
	actual = unitspace( [ 2, 2 ], 1.0, {
		'dims': []
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 2 ], 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a complex `start` value', function test( t ) {
	var actual;
	var v;

	actual = unitspace( [ 3 ], new Complex128( 1.0, 2.0 ) );

	t.strictEqual( String( getDType( actual ) ), 'complex128', 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );

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

tape( 'the function supports specifying array index modes and submodes', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'mode': 'clamp',
		'submode': [ 'wrap' ]
	};
	actual = unitspace( [ 2, 2, 3 ], 1.0, opts );
	expected = [
		[
			[ 1.0, 2.0, 3.0 ],
			[ 1.0, 2.0, 3.0 ]
		],
		[
			[ 1.0, 2.0, 3.0 ],
			[ 1.0, 2.0, 3.0 ]
		]
	];
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	// Clamped:
	t.strictEqual( actual.iget( actual.length+10 ), 3.0, 'returns expected value' );
	actual.iset( actual.length+10, 10.0 );
	t.strictEqual( actual.iget( actual.length+10 ), 10.0, 'returns expected value' );

	// Wrapped:
	t.strictEqual( actual.get( 2, 2, 3 ), 1.0, 'returns expected value' );
	actual.set( 2, 2, 3, 30.0 );
	t.strictEqual( actual.get( 0, 0, 0 ), 30.0, 'returns expected value' );
	t.strictEqual( actual.get( 2, 2, 3 ), 30.0, 'returns expected value' );

	t.end();
});

tape( 'the function infers the output array order from a `start` ndarray (row-major)', function test( t ) {
	var actual;
	var start;

	start = array( [ 1.0, 5.0 ], {
		'order': 'row-major'
	});
	actual = unitspace( [ 2, 3 ], start );

	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.end();
});

tape( 'the function infers the output array order from a `start` ndarray (column-major)', function test( t ) {
	var actual;
	var start;

	start = array( [ 1.0, 5.0 ], {
		'order': 'column-major'
	});
	actual = unitspace( [ 2, 3 ], start );

	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.end();
});

tape( 'the function casts a `start` ndarray to the output data type', function test( t ) {
	var expected;
	var actual;
	var start;

	start = array( new Float32Array( [ 1.0, 5.0 ] ), {
		'dtype': 'float32'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 5.0, 6.0, 7.0 ] ];
	actual = unitspace( [ 2, 3 ], start, {
		'dtype': 'float64'
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( new Int32Array( [ 1, 5 ] ), {
		'dtype': 'int32'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 5.0, 6.0, 7.0 ] ];
	actual = unitspace( [ 2, 3 ], start, {
		'dtype': 'float64'
	});

	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function throws an error if a `start` ndarray cannot be safely cast to the output data type', function test( t ) {
	t.throws( badValue, TypeError, 'throws an error' );
	t.end();

	function badValue() {
		var start = array( new Complex128Array( [ 1.0, 2.0 ] ), {
			'dtype': 'complex128'
		});
		unitspace( [ 4 ], start, {
			'dtype': 'float64'
		});
	}
});
