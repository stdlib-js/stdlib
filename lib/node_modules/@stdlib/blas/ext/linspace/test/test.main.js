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
var isEqualDataType = require( '@stdlib/ndarray/base/assert/is-equal-data-type' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var BooleanArray = require( '@stdlib/array/bool' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var linspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof linspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (start=ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, scalar2ndarray( 1.0 ), 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (stop=ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, scalar2ndarray( 3.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (endpoint=scalar)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, 3.0, true );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (endpoint=ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, 3.0, scalar2ndarray( true ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, 3.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (start=ndarray, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, scalar2ndarray( 1.0 ), 3.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (stop=ndarray, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, scalar2ndarray( 3.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (endpoint=scalar, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, 3.0, true, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer or an array of nonnegative integers (endpoint=ndarray, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5.5,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( value, 1.0, 3.0, scalar2ndarray( true ), {} );
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
		[ '1' ],
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
			linspace( [ 4 ], value, 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (stop=ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], value, scalar2ndarray( 3.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (endpoint=scalar)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], value, 3.0, true );
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
		[ '1' ],
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
			linspace( [ 4 ], value, 3.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (endpoint, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], value, 3.0, true, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], 1.0, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (start=ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], scalar2ndarray( 1.0 ), value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (endpoint)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], 1.0, value, true );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], 1.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (endpoint, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[ '1' ],
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
			linspace( [ 4 ], 1.0, value, true, {} );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a boolean, an ndarray having a supported data type, or an options object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[ '1' ],
		function noop() {},
		scalar2ndarray( 3.14 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( [ 4 ], 1.0, 3.0, value );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a boolean or an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[ '1' ],
		{},
		function noop() {},
		scalar2ndarray( 3.14 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( [ 4 ], 1.0, 3.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		[ '1' ],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( [ 4 ], 1.0, 3.0, true, value );
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
			linspace( [ 4 ], 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (endpoint)', function test( t ) {
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
			linspace( [ 4 ], 1.0, 3.0, true, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices', function test( t ) {
	var values;
	var i;

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
			linspace( [ 4 ], 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (endpoint)', function test( t ) {
	var values;
	var i;

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
			linspace( [ 4 ], 1.0, 3.0, true, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices', function test( t ) {
	var values;
	var i;

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
			linspace( [ 2, 2 ], 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (endpoint)', function test( t ) {
	var values;
	var i;

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
			linspace( [ 2, 2 ], 1.0, 3.0, true, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices', function test( t ) {
	var values;
	var i;

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
			linspace( [ 2, 2 ], 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (endpoint)', function test( t ) {
	var values;
	var i;

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
			linspace( [ 2, 2 ], 1.0, 3.0, true, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `dtype` option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'foo',
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
			linspace( [ 4 ], 1.0, 3.0, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `dtype` option (endpoint)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'foo',
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
			linspace( [ 4 ], 1.0, 3.0, true, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `order` option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'foo',
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
			linspace( [ 4 ], 1.0, 3.0, {
				'order': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `order` option (endpoint)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'foo',
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
			linspace( [ 4 ], 1.0, 3.0, true, {
				'order': value
			});
		};
	}
});

tape( 'the function throws an error if provided a second argument which cannot be safely cast to an output data type', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 1, {
			'dtype': 'int32'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( [ 4 ], value, 3.0, {
				'dtype': 'float32'
			});
		};
	}
});

tape( 'the function throws an error if provided a second argument which cannot be safely cast to an output data type (endpoint)', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 1, {
			'dtype': 'int32'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( [ 4 ], value, 3.0, true, {
				'dtype': 'float32'
			});
		};
	}
});

tape( 'the function throws an error if provided a third argument which cannot be safely cast to an output data type', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 3, {
			'dtype': 'int32'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( [ 4 ], 1.0, value, {
				'dtype': 'float32'
			});
		};
	}
});

tape( 'the function throws an error if provided a third argument which cannot be safely cast to an output data type (endpoint)', function test( t ) {
	var values;
	var i;

	values = [
		scalar2ndarray( 3, {
			'dtype': 'int32'
		})
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( [ 4 ], 1.0, value, true, {
				'dtype': 'float32'
			});
		};
	}
});

tape( 'the function returns an ndarray containing linearly spaced values', function test( t ) {
	var expected;
	var actual;

	actual = linspace( 3, 1.0, 3.0 );
	expected = [ 1.0, 2.0, 3.0 ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = linspace( [ 3 ], 1.0, 3.0 );
	expected = [ 1.0, 2.0, 3.0 ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = linspace( [ 2, 3 ], 1.0, 3.0 );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (row-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 3.0, {
		'order': 'row-major'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (column-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 3.0, {
		'order': 'column-major'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (start=0d)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], scalar2ndarray( 1.0 ), 3.0 );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (stop=0d)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, scalar2ndarray( 3.0 ) );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (start/stop=ndarray)', function test( t ) {
	var endpoint;
	var expected;
	var actual;
	var start;
	var end;

	// Order inference...

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});

	actual = linspace( [ 2, 3 ], start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'row-major'
	});

	actual = linspace( [ 2, 3 ], start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});

	actual = linspace( [ 2, 3 ], start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'column-major'
	});

	actual = linspace( [ 2, 3 ], start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});

	actual = linspace( [ 2, 3 ], start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});

	actual = linspace( [ 2, 3 ], start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'column-major'
	});

	actual = linspace( [ 2, 3 ], start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'row-major'
	});

	actual = linspace( [ 2, 3 ], start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	// Type promotion semantics...

	start = array( new Float32Array( [ 1.0, 10.0 ] ), {
		'order': 'row-major',
		'dtype': 'float32'
	});
	end = array( new Float32Array( [ 3.0, 30.0 ] ), {
		'order': 'row-major',
		'dtype': 'float32'
	});

	actual = linspace( [ 2, 3 ], start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float32' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	start = array( new Float32Array( [ 1.0, 10.0 ] ), {
		'order': 'row-major',
		'dtype': 'float32'
	});
	end = array( new Int32Array( [ 3, 30 ] ), {
		'order': 'row-major',
		'dtype': 'int32'
	});

	actual = linspace( [ 2, 3 ], start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 6.0, {
		'dims': [ 0, 1 ]
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 6.0, {
		'dims': [ 0, 1 ],
		'order': 'column-major'
	});
	expected = [ [ 1.0, 3.0, 5.0 ], [ 2.0, 4.0, 6.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 3.0, {
		'dims': []
	});
	expected = [ [ 3.0, 3.0, 3.0 ], [ 3.0, 3.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an ndarray containing linearly spaced values (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 3.0, {
		'dims': [],
		'order': 'column-major'
	});
	expected = [ [ 3.0, 3.0, 3.0 ], [ 3.0, 3.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (row-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 3, 2 ], 1.0, 3.0, {
		'dims': [ 0 ]
	});
	expected = [ [ 1.0, 1.0 ], [ 2.0, 2.0 ], [ 3.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = linspace( [ 2, 3 ], 1.0, 3.0, {
		'dims': [ -1 ]
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (column-major)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 3, 2 ], 1.0, 3.0, {
		'dims': [ 0 ],
		'order': 'column-major'
	});
	expected = [ [ 1.0, 1.0 ], [ 2.0, 2.0 ], [ 3.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 3, 2 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = linspace( [ 2, 3 ], 1.0, 3.0, {
		'dims': [ -1 ],
		'order': 'column-major'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'column-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to include the end of the interval in generated values (scalar)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 3.0, true );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = linspace( [ 2, 3 ], 1.0, 4.0, false );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to include the end of the interval in generated values (scalar, options)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 3.0, true, {} );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = linspace( [ 2, 3 ], 1.0, 4.0, false, {} );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to include the end of the interval in generated values (ndarray)', function test( t ) {
	var endpoint;
	var expected;
	var actual;
	var end;

	end = array( [ 3.0, 4.0 ] );
	endpoint = array( new BooleanArray( [ true, false ] ) );

	actual = linspace( [ 2, 3 ], 1.0, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to include the end of the interval in generated values (ndarray, options)', function test( t ) {
	var endpoint;
	var expected;
	var actual;
	var end;

	end = array( [ 3.0, 4.0 ] );
	endpoint = array( new BooleanArray( [ true, false ] ) );

	actual = linspace( [ 2, 3 ], 1.0, end, endpoint, {} );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float64' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an output data type', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 3.0, {
		'dtype': 'float32'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float32' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an output data type (endpoint)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( [ 2, 3 ], 1.0, 4.0, false, {
		'dtype': 'float32'
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( isEqualDataType( getDType( actual ), 'float32' ), true, 'returns expected value' );
	t.deepEqual( getShape( actual ), [ 2, 3 ], 'returns expected value' );
	t.strictEqual( getOrder( actual ), 'row-major', 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

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
	actual = linspace( [ 2, 2, 3 ], 1.0, 3.0, opts );
	expected = [
		[
			// 0    1    2
			[ 1.0, 2.0, 3.0 ],

			// 3    4    5
			[ 1.0, 2.0, 3.0 ]
		],
		[
			// 6    7    8
			[ 1.0, 2.0, 3.0 ],

			// 9   10   11
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
