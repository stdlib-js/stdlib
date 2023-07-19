/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var array = require( '@stdlib/ndarray/array' );
var random = require( './../lib/main.js' );


// VARIABLES //

var PARAM1 = 2.0;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof random, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a valid shape', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		null,
		true,
		false,
		void 0,
		NaN,
		[ -1 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, PARAM1 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a valid shape (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		null,
		true,
		false,
		void 0,
		NaN,
		[ -1 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, PARAM1, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a valid distribution parameter', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
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
			random( [ 3, 3 ], value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a valid distribution parameter (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
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
			random( [ 3, 3 ], value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( [ 3, 3 ], PARAM1, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
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
			random( [ 3, 3 ], PARAM1, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided distribution parameters and the output array shape are not broadcast compatible', function test( t ) {
	var values;
	var param1;
	var i;

	values = [
		[ 4, 4, 4 ],
		[ 3, 3, 3, 3 ],
		[ 1, 2, 3, 4 ],
		[ 10, 10 ]
	];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random( value, param1 );
		};
	}
});

tape( 'the function returns an ndarray containing pseudorandom numbers (default; scalar)', function test( t ) {
	var actual;
	var shape;
	var i;

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns an ndarray containing pseudorandom numbers (default; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64' );

	actual = random( shape, param1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns an ndarray containing pseudorandom numbers (default; ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function returns an ndarray containing pseudorandom numbers (default; broadcasted ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float64; scalar)', function test( t ) {
	var actual;
	var shape;
	var i;

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float64; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64' );

	actual = random( shape, param1, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float64; ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float64; broadcasted ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float32; scalar)', function test( t ) {
	var actual;
	var shape;
	var i;

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, {
		'dtype': 'float32'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float32', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float32; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float32' );

	actual = random( shape, param1, {
		'dtype': 'float32'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float32', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float32; ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'dtype': 'float32'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float32', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=float32; broadcasted ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'dtype': 'float32'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float32', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=generic; scalar)', function test( t ) {
	var actual;
	var shape;
	var i;

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'generic', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=generic; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'generic' );

	actual = random( shape, param1, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'generic', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=generic; ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'generic', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array data type (dtype=generic; broadcasted ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;
	var i;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'generic', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual.iget( i ), 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the output array order (row-major; scalar)', function test( t ) {
	var actual;
	var shape;

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, {
		'order': 'row-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.order, 'row-major', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output array order (row-major; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64' );

	actual = random( shape, param1, {
		'order': 'row-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.order, 'row-major', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output array order (row-major; ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'order': 'row-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.order, 'row-major', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output array order (column-major; scalar)', function test( t ) {
	var actual;
	var shape;

	shape = [ 3, 3 ];
	actual = random( shape, PARAM1, {
		'order': 'column-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.order, 'column-major', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output array order (column-major; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64' );

	actual = random( shape, param1, {
		'order': 'column-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.order, 'column-major', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the output array order (column-major; ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'order': 'column-major'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.order, 'column-major', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether the output array is read-only (scalar)', function test( t ) {
	var actual;
	var shape;

	shape = [ 3, 3 ];

	actual = random( shape, PARAM1, {
		'readonly': false
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.flags.READONLY, false, 'returns expected value' );

	actual = random( shape, PARAM1, {
		'readonly': true
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.flags.READONLY, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether the output array is read-only (zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [ 3, 3 ];
	param1 = scalar2ndarray( PARAM1, 'float64' );

	actual = random( shape, param1, {
		'readonly': false
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.flags.READONLY, false, 'returns expected value' );

	actual = random( shape, param1, {
		'readonly': true
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.flags.READONLY, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether the output array is read-only (ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [ 2, 2 ];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );

	actual = random( shape, param1, {
		'readonly': false
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.flags.READONLY, false, 'returns expected value' );

	actual = random( shape, param1, {
		'readonly': true
	});
	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.flags.READONLY, true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (default; scalar)', function test( t ) {
	var actual;
	var shape;

	shape = [];
	actual = random( shape, PARAM1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (default; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [];
	param1 = scalar2ndarray( PARAM1, 'float64' );
	actual = random( shape, param1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (dtype=float64; scalar)', function test( t ) {
	var actual;
	var shape;

	shape = [];
	actual = random( shape, PARAM1, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (dtype=float64; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [];
	param1 = scalar2ndarray( PARAM1, 'float64' );
	actual = random( shape, param1, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (dtype=float32; scalar)', function test( t ) {
	var actual;
	var shape;

	shape = [];
	actual = random( shape, PARAM1, {
		'dtype': 'float32'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float32', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (dtype=float32; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [];
	param1 = scalar2ndarray( PARAM1, 'float32' );
	actual = random( shape, param1, {
		'dtype': 'float32'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float32', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (dtype=generic; scalar)', function test( t ) {
	var actual;
	var shape;

	shape = [];
	actual = random( shape, PARAM1, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'generic', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty shape, the function returns a zero-dimensional ndarray (dtype=generic; zero-dimensional ndarray)', function test( t ) {
	var actual;
	var param1;
	var shape;

	shape = [];
	param1 = scalar2ndarray( PARAM1, 'generic' );
	actual = random( shape, param1, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'generic', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( typeof actual.get(), 'number', 'returns expected value' );
	t.end();
});

tape( 'if provided a shape having one or more dimensions of size zero, the function returns an empty array (default)', function test( t ) {
	var actual;
	var shape;

	shape = [ 2, 0, 2 ];
	actual = random( shape, PARAM1 );

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( actual.data.length, 0, 'returns expected value' );
	t.end();
});

tape( 'if provided a shape having one or more dimensions of size zero, the function returns an empty array (dtype=float64)', function test( t ) {
	var actual;
	var shape;

	shape = [ 2, 0, 2 ];
	actual = random( shape, PARAM1, {
		'dtype': 'float64'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float64', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( actual.data.length, 0, 'returns expected value' );
	t.end();
});

tape( 'if provided a shape having one or more dimensions of size zero, the function returns an empty array (dtype=float32)', function test( t ) {
	var actual;
	var shape;

	shape = [ 2, 0, 2 ];
	actual = random( shape, PARAM1, {
		'dtype': 'float32'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'float32', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( actual.data.length, 0, 'returns expected value' );
	t.end();
});

tape( 'if provided a shape having one or more dimensions of size zero, the function returns an empty array (dtype=generic)', function test( t ) {
	var actual;
	var shape;

	shape = [ 2, 0, 2 ];
	actual = random( shape, PARAM1, {
		'dtype': 'generic'
	});

	t.strictEqual( isndarrayLike( actual ), true, 'returns expected value' );
	t.strictEqual( actual.dtype, 'generic', 'returns expected value' );
	t.deepEqual( actual.shape, shape, 'returns expected value' );

	t.strictEqual( actual.data.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function supports setting the generator state', function test( t ) {
	var state;
	var arr1;
	var arr2;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( [ 2 ], PARAM1 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr1 = random( [ 10 ], PARAM1 );
	for ( i = 0; i < 100; i++ ) {
		random( [ 2 ], PARAM1 );
	}
	// Set the state:
	random.state = state;

	// Replay previously generated values:
	arr2 = random( [ 10 ], PARAM1 );
	t.deepEqual( arr2.data, arr1.data, 'returns expected value' );

	t.end();
});
