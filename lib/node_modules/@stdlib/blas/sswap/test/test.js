/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var Int16Array = require( '@stdlib/array/int16' );
var array = require( '@stdlib/ndarray/array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var scopy = require( '@stdlib/blas/base/scopy' ).ndarray;
var sswap = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sswap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 2', function test( t ) {
	t.strictEqual( sswap.length, 2, 'has expected arity' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a 1-dimensional ndarray containing single-precision floating-point numbers', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		array( new Int16Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var y = array( new Float32Array( 10 ) );

		return function badValue() {
			sswap( value, y );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a 1-dimensional ndarray containing single-precision floating-point numbers', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		array( new Int16Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float32Array( 10 ) );

		return function badValue() {
			sswap( x, value );
		};
	}
});

tape( 'the function throws an error if provided unequal length vectors', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		var x = array( new Float32Array( 10 ) );
		var y = array( new Float32Array( 100 ) );
		sswap( x, y );
	}
});

tape( 'the function interchanges vectors `x` and `y`', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	xe = new Float32Array( y.length );
	scopy( y.length, y, 1, 0, xe, 1, 0 );

	ye = new Float32Array( x.length );
	scopy( x.length, x, 1, 0, ye, 1, 0 );

	x = array( x );
	y = array( y );

	sswap( x, y );

	t.deepEqual( x.data, xe, 'deep equal' );
	t.notEqual( x.data, xe, 'different references' );

	t.deepEqual( y.data, ye, 'deep equal' );
	t.notEqual( y.data, ye, 'different references' );

	t.end();
});

tape( 'the function supports a strided vector for the first argument', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0  // 2
	]);

	xe = new Float32Array( [ 6.0, 2.0, 7.0, 4.0, 8.0 ] );
	ye = new Float32Array( [ 1.0, 3.0, 5.0 ] );

	x = ndarray( 'float32', x, [ 3 ], [ 2 ], 0, 'row-major' );
	y = ndarray( 'float32', y, [ 3 ], [ 1 ], 0, 'row-major' );

	sswap( x, y );

	t.deepEqual( x.data, xe, 'deep equal' );
	t.notEqual( x.data, xe, 'different references' );

	t.deepEqual( y.data, ye, 'deep equal' );
	t.notEqual( y.data, ye, 'different references' );

	t.end();
});

tape( 'the function supports a strided vector for the second argument', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	y = new Float32Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);

	xe = new Float32Array( [ 6.0, 8.0, 10.0 ] );
	ye = new Float32Array( [ 1.0, 7.0, 2.0, 9.0, 3.0 ] );

	x = ndarray( 'float32', x, [ 3 ], [ 1 ], 0, 'row-major' );
	y = ndarray( 'float32', y, [ 3 ], [ 2 ], 0, 'row-major' );

	sswap( x, y );

	t.deepEqual( x.data, xe, 'deep equal' );
	t.notEqual( x.data, xe, 'different references' );

	t.deepEqual( y.data, ye, 'deep equal' );
	t.notEqual( y.data, ye, 'different references' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0  // 0
	]);

	xe = new Float32Array( [ 6.0, 2.0, 7.0, 4.0, 8.0 ] );
	ye = new Float32Array( [ 1.0, 3.0, 5.0 ] );

	x = ndarray( 'float32', x, [ 3 ], [ -2 ], x.length-1, 'row-major' );
	y = ndarray( 'float32', y, [ 3 ], [ -1 ], y.length-1, 'row-major' );

	sswap( x, y );

	t.deepEqual( x.data, xe, 'deep equal' );
	t.notEqual( x.data, xe, 'different references' );

	t.deepEqual( y.data, ye, 'deep equal' );
	t.notEqual( y.data, ye, 'different references' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float32Array([
		7.0, // 2
		8.0, // 1
		9.0  // 0
	]);

	xe = new Float32Array( [ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ] );
	ye = new Float32Array( [ 5.0, 3.0, 1.0 ] );

	x = ndarray( 'float32', x, [ 3 ], [ 2 ], 0, 'row-major' );
	y = ndarray( 'float32', y, [ 3 ], [ -1 ], y.length-1, 'row-major' );

	sswap( x, y );

	t.deepEqual( x.data, xe, 'deep equal' );
	t.notEqual( x.data, xe, 'different references' );

	t.deepEqual( y.data, ye, 'deep equal' );
	t.notEqual( y.data, ye, 'different references' );

	t.end();
});

tape( 'the function supports strided vectors having offsets', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y = new Float32Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	xe = new Float32Array( [ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ] );
	ye = new Float32Array( [ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ] );

	x = ndarray( 'float32', x, [ 3 ], [ -2 ], x.length-1, 'row-major' );
	y = ndarray( 'float32', y, [ 3 ], [ 1 ], 3, 'row-major' );

	sswap( x, y );

	t.deepEqual( x.data, xe, 'deep equal' );
	t.notEqual( x.data, xe, 'different references' );

	t.deepEqual( y.data, ye, 'deep equal' );
	t.notEqual( y.data, ye, 'different references' );

	t.end();
});

tape( 'the function supports underlying data buffers with view offsets', function test( t ) {
	var x0;
	var y0;
	var x1;
	var y1;
	var xe;
	var ye;

	x0 = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y0 = new Float32Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 );

	xe = new Float32Array( [ 1.0, 10.0, 3.0, 11.0, 5.0, 12.0 ] );
	ye = new Float32Array( [ 7.0, 8.0, 9.0, 2.0, 4.0, 6.0 ] );

	x1 = ndarray( 'float32', x1, [ 3 ], [ 2 ], 0, 'row-major' );
	y1 = ndarray( 'float32', y1, [ 3 ], [ 1 ], 0, 'row-major' );

	sswap( x1, y1 );

	t.deepEqual( x0, xe, 'deep equal' );
	t.notEqual( x0, xe, 'different references' );

	t.deepEqual( y0, ye, 'deep equal' );
	t.notEqual( y0, ye, 'different references' );

	t.end();
});

tape( 'the function returns a reference to the second input array', function test( t ) {
	var out;
	var x;
	var y;

	x = array( new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	y = array( new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	out = sswap( x, y );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});
