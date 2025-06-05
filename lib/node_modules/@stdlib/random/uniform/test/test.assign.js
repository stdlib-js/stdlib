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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var random = require( './../lib' );


// VARIABLES //

var PARAM1 = 0.0;
var PARAM2 = 1.0;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof random, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `assign` method', function test( t ) {
	t.strictEqual( typeof random.assign, 'function', 'returns expected value' );
	t.end();
});

tape( 'the `assign` method throws an error if provided a third argument which is not an ndarray', function test( t ) {
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
			random.assign( PARAM1, PARAM2, value );
		};
	}
});

tape( 'the `assign` method throws an error if provided distribution parameters and the output array are not broadcast compatible', function test( t ) {
	var values;
	var param1;
	var param2;
	var i;

	values = [
		zeros( [ 4, 4, 4 ] ),
		zeros( [ 3, 3, 3, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 10, 10 ] )
	];
	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random.assign( param1, param2, value );
		};
	}
});

tape( 'the `assign` method throws an error if provided a read-only output array', function test( t ) {
	var values;
	var i;

	values = [
		zeros( [ 3, 3 ], {
			'readonly': true
		})
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random.assign( PARAM1, PARAM2, value );
		};
	}
});

tape( 'the `assign` method fills an ndarray with pseudorandom numbers (scalar)', function test( t ) {
	var original;
	var actual;
	var out;

	out = zeros( [ 3, 3 ], {
		'dtype': 'float64'
	});
	original = zeros( [ 3, 3 ], {
		'dtype': 'float64'
	});
	actual = random.assign( PARAM1, PARAM2, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), getData( original ) ), false, 'returns expected value' );

	t.end();
});

tape( 'the `assign` method fills an ndarray with pseudorandom numbers (zero-dimensional ndarray)', function test( t ) {
	var original;
	var actual;
	var param1;
	var param2;
	var out;

	param1 = scalar2ndarray( PARAM1, 'float64', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'float64', 'row-major' );
	out = zeros( [ 3, 3 ], {
		'dtype': 'float64'
	});
	original = zeros( [ 3, 3 ], {
		'dtype': 'float64'
	});

	actual = random.assign( param1, param2, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), getData( original ) ), false, 'returns expected value' );

	t.end();
});

tape( 'the `assign` method fills an ndarray with pseudorandom numbers (ndarray)', function test( t ) {
	var original;
	var actual;
	var param1;
	var param2;
	var out;

	param1 = array( [ [ PARAM1, PARAM1 ], [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ], [ PARAM2, PARAM2 ] ] );

	out = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	original = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	actual = random.assign( param1, param2, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), getData( original ) ), false, 'returns expected value' );

	t.end();
});

tape( 'the `assign` method fills an ndarray with pseudorandom numbers (broadcasted ndarray)', function test( t ) {
	var original;
	var actual;
	var param1;
	var param2;
	var out;

	param1 = array( [ [ PARAM1, PARAM1 ] ] );
	param2 = array( [ [ PARAM2, PARAM2 ] ] );

	out = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	original = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	actual = random.assign( param1, param2, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), getData( original ) ), false, 'returns expected value' );

	t.end();
});

tape( 'the `assign` method supports filling a zero-dimensional ndarray (scalar)', function test( t ) {
	var original;
	var actual;
	var out;

	out = zeros( [], {
		'dtype': 'float64'
	});
	original = zeros( [], {
		'dtype': 'float64'
	});

	actual = random.assign( PARAM1, PARAM2, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), getData( original ) ), false, 'returns expected value' );

	t.end();
});

tape( 'the `assign` method supports filling a zero-dimensional ndarray (ndarray)', function test( t ) {
	var original;
	var actual;
	var param1;
	var param2;
	var out;

	param1 = scalar2ndarray( PARAM1, 'float64', 'row-major' );
	param2 = scalar2ndarray( PARAM2, 'float64', 'row-major' );
	out = zeros( [], {
		'dtype': 'float64'
	});
	original = zeros( [], {
		'dtype': 'float64'
	});

	actual = random.assign( param1, param2, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), getData( original ) ), false, 'returns expected value' );

	t.end();
});

tape( 'if an output array has one or more dimensions of size zero, the `assign` method returns the output array unchanged', function test( t ) {
	var original;
	var actual;
	var out;

	out = zeros( [ 2, 0, 2 ], {
		'dtype': 'float64'
	});
	original = zeros( [ 2, 0, 2 ], {
		'dtype': 'float64'
	});

	actual = random.assign( PARAM1, PARAM2, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( actual ), getData( original ) ), true, 'returns expected value' );

	t.end();
});
