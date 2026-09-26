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
var isSameArray = require( '@stdlib/assert/is-same-array' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Int32Array = require( '@stdlib/array/int32' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var fillRange = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fillRange, 'function', 'main export is a function' );
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
			fillRange( value, 10.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (start)', function test( t ) {
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
			fillRange( value, 10.0, 0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (start, end)', function test( t ) {
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
			fillRange( value, 10.0, 0, 2 );
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
			fillRange( value, 10.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (start, options)', function test( t ) {
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
			fillRange( value, 10.0, 0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (start, end, options)', function test( t ) {
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
			fillRange( value, 10.0, 0, 2, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is a zero-dimensional ndarray', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 10.0 ),
		scalar2ndarray( -3.0 ),
		scalar2ndarray( 0.0 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( value, 10.0 );
		};
	}
});

tape( 'the function throws an error if provided a fill value which cannot be safely cast to the input ndarray data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'int32'
	});

	values = [
		'5',
		3.14,
		true,
		false,
		null,
		void 0,
		[],
		{},
		new Complex128( 10.0, 12.0 ),
		function noop() {},
		scalar2ndarray( 10.0, {
			'dtype': 'float64'
		}),
		scalar2ndarray( new Complex128( 10.0, 12.0 ), {
			'dtype': 'complex128'
		}),
		scalar2ndarray( new Complex128( 10.0, 12.0 ), {
			'dtype': 'complex64'
		}),
		scalar2ndarray( 10.0, {
			'dtype': 'generic'
		}),
		scalar2ndarray( true, {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, value );
		};
	}
});

tape( 'the function throws an error if provided a fill value which cannot be safely cast to the input ndarray data type (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'int32'
	});

	values = [
		'5',
		3.14,
		true,
		false,
		null,
		void 0,
		[],
		{},
		new Complex128( 10.0, 12.0 ),
		function noop() {},
		scalar2ndarray( 10.0, {
			'dtype': 'float64'
		}),
		scalar2ndarray( new Complex128( 10.0, 12.0 ), {
			'dtype': 'complex128'
		}),
		scalar2ndarray( new Complex128( 10.0, 12.0 ), {
			'dtype': 'complex64'
		}),
		scalar2ndarray( 10.0, {
			'dtype': 'generic'
		}),
		scalar2ndarray( true, {
			'dtype': 'bool'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a `start` argument which is not an ndarray-like object or an integer (end)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		3.14,
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
			fillRange( x, 10.0, value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a `start` argument which is not an ndarray-like object or an integer (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		3.14,
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
			fillRange( x, 10.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a `start` argument which is not an ndarray-like object or an integer (end, options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		3.14,
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
			fillRange( x, 10.0, value, 2, {} );
		};
	}
});

tape( 'the function throws an error if provided an `end` argument which is not an ndarray-like object or an integer (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
		3.14,
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
			fillRange( x, 10.0, 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a fill value ndarray which is not broadcast-compatible', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, value );
		};
	}
});

tape( 'the function throws an error if provided a fill value ndarray which is not broadcast-compatible (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a fill value ndarray which is not broadcast-compatible (dim)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, value, {
				'dim': 0
			});
		};
	}
});

tape( 'the function throws an error if provided a `start` argument which is not broadcast-compatible', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, value );
		};
	}
});

tape( 'the function throws an error if provided a `start` argument which is not broadcast-compatible (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an `end` argument which is not broadcast-compatible', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, 0, value );
		};
	}
});

tape( 'the function throws an error if provided an `end` argument which is not broadcast-compatible (options)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		zeros( [ 4 ], opts ),
		zeros( [ 2, 2, 2 ], opts ),
		zeros( [ 0 ], opts )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (start)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, 0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (start, end)', function test( t ) {
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
			fillRange( x, 10.0, 0, 2, value );
		};
	}
});

tape( 'the function throws an error if provided a `dim` option which is not an integer', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
			fillRange( x, 10.0, {
				'dim': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dim` option which is not an integer (start, end)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'5',
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
			fillRange( x, 10.0, 0, 2, {
				'dim': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dim` option which is out-of-bounds', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		-10,
		20
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, {
				'dim': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dim` option which is out-of-bounds (start, end)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		-10,
		20
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fillRange( x, 10.0, 0, 2, {
				'dim': value
			});
		};
	}
});

tape( 'the function fills an input ndarray with a specified value (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0 );
	expected = [ 10.0, 10.0, 10.0, 10.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills an input ndarray with a specified value (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = fillRange( x, 10.0 );
	expected = [ 10.0, 10.0, 10.0, 10.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills an input ndarray with a specified value (default, float64)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0 );
	expected = new Float64Array( [ 10.0, 10.0, 10.0, 10.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills an input ndarray with a specified value (default, complex128)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( 'complex128', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, new Complex128( 10.0, 12.0 ) );
	expected = new Complex128Array( [ 10.0, 12.0, 10.0, 12.0, 10.0, 12.0, 10.0, 12.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'complex128', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports downcasting a floating-point fill value to an input ndarray data type of the same kind (float32)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = new ndarray( 'float32', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0 );
	expected = new Float32Array( [ 10.0, 10.0, 10.0, 10.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'float32', 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports downcasting a floating-point fill value ndarray to an input ndarray data type of the same kind (float32)', function test( t ) {
	var expected;
	var actual;
	var value;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	x = new ndarray( 'float32', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	value = scalar2ndarray( 10.0, {
		'dtype': 'float64'
	});

	actual = fillRange( x, value );
	expected = new Float32Array( [ 10.0, 10.0, 10.0, 10.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'float32', 'returns expected value' );
	t.strictEqual( isSameFloat32Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports downcasting a floating-point fill value to an input ndarray data type of the same kind (complex64)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( 'complex64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, new Complex128( 10.0, 12.0 ) );
	expected = new Complex64Array( [ 10.0, 12.0, 10.0, 12.0, 10.0, 12.0, 10.0, 12.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'complex64', 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports downcasting a floating-point fill value ndarray to an input ndarray data type of the same kind (complex64)', function test( t ) {
	var expected;
	var actual;
	var value;
	var xbuf;
	var x;

	xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( 'complex64', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	value = scalar2ndarray( new Complex128( 10.0, 12.0 ), {
		'dtype': 'complex128'
	});

	actual = fillRange( x, value );
	expected = new Complex64Array( [ 10.0, 12.0, 10.0, 12.0, 10.0, 12.0, 10.0, 12.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'complex64', 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports promoting a real-valued fill value when an input ndarray has a complex data type', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( 'complex128', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0 );
	expected = new Complex128Array( [ 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'complex128', 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports promoting a real-valued fill value ndarray when an input ndarray has a complex data type', function test( t ) {
	var expected;
	var actual;
	var value;
	var xbuf;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = new ndarray( 'complex128', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	value = scalar2ndarray( 10.0, {
		'dtype': 'float64'
	});

	actual = fillRange( x, value );
	expected = new Complex128Array( [ 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'complex128', 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged if provided an empty ndarray', function test( t ) {
	var actual;
	var x;

	x = zeros( [ 0 ], {
		'dtype': 'float64'
	});

	actual = fillRange( x, 10.0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getData( actual ).length, 0, 'returns expected value' );

	x = zeros( [ 0, 3 ], {
		'dtype': 'float64'
	});

	actual = fillRange( x, 10.0, {
		'dim': 0
	});

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( getData( actual ).length, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the operation dimension (row-major)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 0, 1, {
		'dim': 0
	});
	expected = [ [ 10.0, 10.0 ], [ 3.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 0, 1, {
		'dim': 1
	});
	expected = [ [ 10.0, 2.0 ], [ 10.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 0, 1, {
		'dim': -2
	});
	expected = [ [ 10.0, 10.0 ], [ 3.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the operation dimension (column-major)', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = fillRange( x, 10.0, 0, 1, {
		'dim': 0
	});
	expected = [ [ 10.0, 10.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = fillRange( x, 10.0, 0, 1, {
		'dim': 1
	});
	expected = [ [ 10.0, 3.0 ], [ 10.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = fillRange( x, 10.0, 0, 1, {
		'dim': -2
	});
	expected = [ [ 10.0, 10.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a starting index', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 2 );
	expected = [ 1.0, 2.0, 10.0, 10.0, 10.0, 10.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'column-major' );

	actual = fillRange( x, 10.0, 2 );
	expected = [ 1.0, 2.0, 10.0, 10.0, 10.0, 10.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an ending index', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 1, 4 );
	expected = [ 1.0, 10.0, 10.0, 10.0, 5.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'column-major' );

	actual = fillRange( x, 10.0, 1, 4 );
	expected = [ 1.0, 10.0, 10.0, 10.0, 5.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( String( getDType( actual ) ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing negative indices', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, -2 );
	expected = [ 1.0, 2.0, 3.0, 4.0, 10.0, 10.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 0, -2 );
	expected = [ 10.0, 10.0, 10.0, 10.0, 5.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, -3, -1 );
	expected = [ 1.0, 2.0, 3.0, 10.0, 10.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function clamps out-of-bounds indices', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 10, 3 );
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, 0, 100 );
	expected = [ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, -100, 2 );
	expected = [ 10.0, 10.0, 3.0, 4.0, 5.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing index arguments as zero-dimensional ndarrays', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	opts = {
		'dtype': 'int32'
	};
	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, scalar2ndarray( 1, opts ), scalar2ndarray( 4, opts ) ); // eslint-disable-line max-len
	expected = [ 1.0, 10.0, 10.0, 10.0, 5.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing index arguments as zero-dimensional ndarrays (broadcasted)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	opts = {
		'dtype': 'int32'
	};
	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, scalar2ndarray( 2, opts ), {
		'dim': 1
	});
	expected = [ [ 1.0, 2.0, 10.0, 10.0 ], [ 5.0, 6.0, 10.0, 10.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing index arguments as ndarrays', function test( t ) {
	var expected;
	var actual;
	var start;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	start = new ndarray( 'int32', new Int32Array( [ 0, 2 ] ), [ 2 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, start, 4, {
		'dim': 1
	});
	expected = [ [ 10.0, 10.0, 10.0, 10.0 ], [ 5.0, 6.0, 10.0, 10.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing index arguments as ndarrays containing negative indices', function test( t ) {
	var expected;
	var actual;
	var start;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	start = new ndarray( 'int32', new Int32Array( [ -2, 0 ] ), [ 2 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 10.0, start, {
		'dim': 1
	});
	expected = [ [ 1.0, 2.0, 10.0, 10.0 ], [ 10.0, 10.0, 10.0, 10.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a fill value as a zero-dimensional ndarray', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], [ 6 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, scalar2ndarray( 10.0, opts ), 1, 4 );
	expected = [ 1.0, 10.0, 10.0, 10.0, 5.0, 6.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a fill value as an ndarray (broadcasted)', function test( t ) {
	var expected;
	var actual;
	var value;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ], [ 2, 4 ], [ 4, 1 ], 0, 'row-major' );

	value = new ndarray( 'generic', [ 10.0, 20.0 ], [ 2 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, value, {
		'dim': 1
	});
	expected = [ [ 10.0, 10.0, 10.0, 10.0 ], [ 20.0, 20.0, 20.0, 20.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports filling an input ndarray with non-numeric values', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new ndarray( 'generic', [ 1.0, 2.0, 3.0, 4.0 ], [ 4 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, 'beep', 1, 3 );
	expected = [ 1.0, 'beep', 'beep', 4.0 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	x = new ndarray( 'generic', [ false, false, false, false ], [ 4 ], [ 1 ], 0, 'row-major' );

	actual = fillRange( x, true );
	expected = [ true, true, true, true ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});
