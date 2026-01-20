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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isSameArray = require( '@stdlib/assert/is-same-array' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var zeros = require( '@stdlib/ndarray/zeros' );
var empty = require( '@stdlib/ndarray/empty' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var cusum = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cusum, 'function', 'main export is a function' );
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
			cusum( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial scalar)', function test( t ) {
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
			cusum( value, 10.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial ndarray)', function test( t ) {
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
			cusum( value, scalar2ndarray( 10.0 ) );
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
			cusum( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial scalar, options)', function test( t ) {
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
			cusum( value, 10.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object (initial ndarray, options)', function test( t ) {
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
			cusum( value, scalar2ndarray( 10.0 ), {} );
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
			cusum( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial scalar)', function test( t ) {
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
			cusum( value, 10.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial ndarray)', function test( t ) {
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
			cusum( value, scalar2ndarray( 10.0 ) );
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
			cusum( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial scalar, options)', function test( t ) {
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
			cusum( value, 10.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray-like object having a supported data type (initial ndarray, options)', function test( t ) {
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
			cusum( value, scalar2ndarray( 10.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not an ndarray-like object or a valid scalar', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not an ndarray-like object or a valid scalar (options)', function test( t ) {
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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not broadcast-compatible', function test( t ) {
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
			cusum( x, value );
		};
	}
});

tape( 'the function throws an error if provided an initial value which is not broadcast-compatible (options)', function test( t ) {
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
			cusum( x, value, {} );
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
			cusum( x, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (initial scalar)', function test( t ) {
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
			cusum( x, 10.0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			cusum( x, scalar2ndarray( 10.0, opts ), value );
		};
	}
});

tape( 'the function throws an error if provided a `dtype` option which is not a supported data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dtype` option which is not a supported data type (initial scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dtype` option which is not a supported data type (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), {
				'dtype': value
			});
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
			cusum( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (initial scalar)', function test( t ) {
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
			cusum( x, 10.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			cusum( x, scalar2ndarray( 10.0, opts ), {
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
		[ -10 ],
		[ 0, 20 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (initial scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	values = [
		[ -10 ],
		[ 0, 20 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, 10.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

	values = [
		[ -10 ],
		[ 0, 20 ],
		[ 20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, scalar2ndarray( 10.0, opts ), {
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
		[ 0, 1, 2 ],
		[ 0, 1, 2, 3 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cusum( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (initial scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
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
			cusum( x, 10.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			cusum( x, scalar2ndarray( 10.0, opts ), {
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
			cusum( x, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (initial scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
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
			cusum( x, 10.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (initial ndarray)', function test( t ) {
	var values;
	var opts;
	var x;
	var i;

	opts = {
		'dtype': 'generic'
	};
	x = zeros( [ 2, 2 ], opts );

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
			cusum( x, scalar2ndarray( 10.0, opts ), {
				'dims': value
			});
		};
	}
});

tape( 'the function computes the cumulative sum over elements in an ndarray (default, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x );
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (default, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x );
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, {
		'dims': [ 0, 1 ]
	});
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x, {
		'dims': [ 0, 1 ]
	});
	expected = [ -1.0, 1.0, -2.0, 2.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, {
		'dims': []
	});
	expected = [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum over elements in an ndarray (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x, {
		'dims': []
	});
	expected = [ [ -1.0, -3.0 ], [ 2.0, 4.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, {
		'dims': [ 0 ]
	});
	expected = [ [ -1.0, 2.0 ], [ -4.0, 6.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, {
		'dims': [ 1 ]
	});
	expected = [ [ -1.0, 1.0 ], [ -3.0, 1.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x, {
		'dims': [ 0 ]
	});
	expected = [ [ -1.0, -3.0 ], [ 1.0, 1.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x, {
		'dims': [ 1 ]
	});
	expected = [ [ -1.0, -4.0 ], [ 2.0, 6.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output array data type', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, {
		'dtype': 'float64'
	});
	expected = new Float64Array( [ -1.0, 1.0, -2.0, 2.0 ] );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x, {
		'dtype': 'float64'
	});
	expected = new Float64Array( [ -1.0, 1.0, -2.0, 2.0 ] );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'float64', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (scalar)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, 10.0 );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = cusum( x, 10.0 );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (scalar, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, 10.0, {} );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = cusum( x, 10.0, {} );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (0d ndarray)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, scalar2ndarray( 10.0, opts ) );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = cusum( x, scalar2ndarray( 10.0, opts ) );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (0d ndarray, options)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), {} );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), {} );
	expected = [ 9.0, 11.0, 8.0, 12.0 ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.strictEqual( isSameArray( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (scalar, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, 10.0, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 12.0 ], [ 6.0, 16.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x, 10.0, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 7.0 ], [ 11.0, 11.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), 'generic', 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (0d ndarray, broadcasted)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 12.0 ], [ 6.0, 16.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	actual = cusum( x, scalar2ndarray( 10.0, opts ), {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 7.0 ], [ 11.0, 11.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an initial value (ndarray)', function test( t ) {
	var expected;
	var initial;
	var actual;
	var xbuf;
	var ibuf;
	var opts;
	var x;

	opts = {
		'dtype': 'generic'
	};
	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	ibuf = [ 10.0, 20.0 ];
	initial = new ndarray( opts.dtype, ibuf, [ 2 ], [ 1 ], 0, 'row-major' );
	actual = cusum( x, initial, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 22.0 ], [ 6.0, 26.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
	x = new ndarray( opts.dtype, xbuf, [ 2, 2 ], [ 1, 2 ], 0, 'column-major' );

	ibuf = [ 10.0, 20.0 ];
	initial = new ndarray( opts.dtype, ibuf, [ 2 ], [ 1 ], 0, 'row-major' );
	actual = cusum( x, initial, {
		'dims': [ 0 ]
	});
	expected = [ [ 9.0, 17.0 ], [ 11.0, 21.0 ] ];

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( getDType( actual ), opts.dtype, 'returns expected value' );
	t.deepEqual( getShape( actual ), getShape( x ), 'returns expected value' );
	t.strictEqual( getOrder( actual ), getOrder( x ), 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
