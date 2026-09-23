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
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var BooleanArray = require( '@stdlib/array/bool' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var zeros = require( '@stdlib/ndarray/zeros' );
var array = require( '@stdlib/ndarray/array' );
var assign = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof assign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (start=ndarray)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, scalar2ndarray( 1.0 ), 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (stop=ndarray)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, scalar2ndarray( 3.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (endpoint=scalar)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, 3.0, true );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (endpoint=ndarray)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, 3.0, scalar2ndarray( true ) );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (options)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, 3.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (start=ndarray, options)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, scalar2ndarray( 1.0 ), 3.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (stop=ndarray, options)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, scalar2ndarray( 3.0 ), {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (endpoint=scalar, options)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, 3.0, true, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an ndarray having a supported data type (endpoint=ndarray, options)', function test( t ) {
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
		function noop() {},
		scalar2ndarray( 1.0 ),
		array( new BooleanArray( [ true, false ] ) )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			assign( value, 1.0, 3.0, scalar2ndarray( true ), {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, value, 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (stop=ndarray)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, value, scalar2ndarray( 3.0 ) );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (endpoint=scalar)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, value, 3.0, true );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, value, 3.0, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number, complex number, or an ndarray having a supported data type (endpoint, options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, value, 3.0, true, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, 1.0, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (start=ndarray)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, scalar2ndarray( 1.0 ), value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (endpoint)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, 1.0, value, true );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, 1.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number, complex number, or an ndarray having a supported data type (endpoint, options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, 1.0, value, true, {} );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a boolean, an ndarray having a supported data type, or an options object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, 1.0, 3.0, value );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a boolean or an ndarray having a supported data type (options)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, 1.0, 3.0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

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
			assign( x, 1.0, 3.0, true, value );
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which is not an array-like object of integers (endpoint)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, true, {
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
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains out-of-bounds indices (endpoint)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, true, {
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
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains too many indices (endpoint)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, true, {
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
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `dims` option which contains duplicate indices (endpoint)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
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
			assign( x, 1.0, 3.0, true, {
				'dims': value
			});
		};
	}
});

tape( 'the function throws an error if provided a second argument which cannot be safely cast to an output data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});

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
			assign( x, value, 3.0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which cannot be safely cast to an output data type (endpoint)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});

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
			assign( x, value, 3.0, true );
		};
	}
});

tape( 'the function throws an error if provided a third argument which cannot be safely cast to an output data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});

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
			assign( x, 1.0, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which cannot be safely cast to an output data type (endpoint)', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( [ 2, 2 ], {
		'dtype': 'float32'
	});

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
			assign( x, 1.0, value, true );
		};
	}
});

tape( 'the function fills an ndarray with linearly spaced values (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	actual = assign( x, 1.0, 3.0 );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 1, 2 ], 0, 'column-major' );

	actual = assign( x, 1.0, 3.0 );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (start=0d)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	actual = assign( x, scalar2ndarray( 1.0 ), 3.0 );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (stop=0d)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	actual = assign( x, 1.0, scalar2ndarray( 3.0 ) );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (start/stop=ndarray)', function test( t ) {
	var endpoint;
	var expected;
	var actual;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});

	actual = assign( x, start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'row-major'
	});

	actual = assign( x, start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 1, 2 ], 0, 'column-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});

	actual = assign( x, start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 1, 2 ], 0, 'column-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'column-major'
	});

	actual = assign( x, start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 1, 2 ], 0, 'column-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});

	actual = assign( x, start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});

	actual = assign( x, start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'row-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'row-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'column-major'
	});

	actual = assign( x, start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	start = array( [ 1.0, 10.0 ], {
		'order': 'column-major'
	});
	end = array( [ 3.0, 30.0 ], {
		'order': 'column-major'
	});
	endpoint = array( new BooleanArray( [ true ] ), {
		'order': 'row-major'
	});

	actual = assign( x, start, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	// Type promotion semantics...

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	start = array( new Float32Array( [ 1.0, 10.0 ] ), {
		'order': 'row-major',
		'dtype': 'float32'
	});
	end = array( new Float32Array( [ 3.0, 30.0 ] ), {
		'order': 'row-major',
		'dtype': 'float32'
	});

	actual = assign( x, start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = new ndarray( 'float64', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	start = array( new Float32Array( [ 1.0, 10.0 ] ), {
		'order': 'row-major',
		'dtype': 'float32'
	});
	end = array( new Int32Array( [ 3, 30 ] ), {
		'order': 'row-major',
		'dtype': 'int32'
	});

	actual = assign( x, start, end );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 10.0, 20.0, 30.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (all dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	actual = assign( x, 1.0, 6.0, {
		'dims': [ 0, 1 ]
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (all dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 1, 2 ], 0, 'column-major' );

	actual = assign( x, 1.0, 6.0, {
		'dims': [ 0, 1 ]
	});
	expected = [ [ 1.0, 3.0, 5.0 ], [ 2.0, 4.0, 6.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (no dimensions, row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	actual = assign( x, 1.0, 3.0, {
		'dims': []
	});
	expected = [ [ 3.0, 3.0, 3.0 ], [ 3.0, 3.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills an ndarray with linearly spaced values (no dimensions, column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ -1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'column-major' );

	actual = assign( x, 1.0, 3.0, {
		'dims': []
	});
	expected = [ [ 3.0, 3.0, 3.0 ], [ 3.0, 3.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (row-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 3, 2 ], [ 2, 1 ], 0, 'row-major' );

	actual = assign( x, 1.0, 3.0, {
		'dims': [ 0 ]
	});
	expected = [ [ 1.0, 1.0 ], [ 2.0, 2.0 ], [ 3.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	actual = assign( x, 1.0, 3.0, {
		'dims': [ -1 ]
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying operation dimensions (column-major)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 3, 2 ], [ 2, 1 ], 0, 'column-major' );

	actual = assign( x, 1.0, 3.0, {
		'dims': [ 0 ]
	});
	expected = [ [ 1.0, 1.0 ], [ 2.0, 2.0 ], [ 3.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'column-major' );

	actual = assign( x, 1.0, 3.0, {
		'dims': [ -1 ]
	});
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to include the end of the interval in generated values (scalar)', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	actual = assign( x, 1.0, 3.0, true );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	actual = assign( x, 1.0, 4.0, false );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to include the end of the interval in generated values (ndarray)', function test( t ) {
	var endpoint;
	var expected;
	var actual;
	var xbuf;
	var end;
	var x;

	xbuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	x = new ndarray( 'generic', xbuf, [ 2, 3 ], [ 3, 1 ], 0, 'row-major' );

	end = array( [ 3.0, 4.0 ] );
	endpoint = array( new BooleanArray( [ true, false ] ) );

	actual = assign( x, 1.0, end, endpoint );
	expected = [ [ 1.0, 2.0, 3.0 ], [ 1.0, 2.0, 3.0 ] ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( ndarray2array( actual ), expected, 'returns expected value' );

	t.end();
});
