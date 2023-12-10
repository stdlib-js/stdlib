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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32' );
var Complex128 = require( '@stdlib/complex/float64' );
var FancyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FancyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (order=row-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'generic\', [ 3, 4, 5, 6 ], [ 2, 2 ], [ 2, 1 ], 0, \'row-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (order=column-major)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, -2 ];
	offset = 3;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'generic\', [ 4, 3, 2, 1 ], [ 2, 2 ], [ 1, 2 ], 0, \'column-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (complex type)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'complex64\', new Complex64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] ), [ 2, 2 ], [ 2, 1 ], 0, \'row-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (complex type)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex128';
	buffer = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'complex128\', new Complex128Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] ), [ 2, 2 ], [ 2, 1 ], 0, \'row-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (large array)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = new Array( 1e4 );
	shape = [ buffer.length ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	buffer[ 0 ] = 1.0;
	buffer[ 1 ] = 2.0;
	buffer[ 2 ] = 3.0;
	buffer[ buffer.length-3 ] = 4.0;
	buffer[ buffer.length-2 ] = 5.0;
	buffer[ buffer.length-1 ] = 6.0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'generic\', [ 1, 2, 3, ..., 4, 5, 6 ], [ 10000 ], [ 1 ], 0, \'row-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (large array; complex type)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( 1e4 );
	shape = [ buffer.length ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	buffer.set( new Complex64( 1.0, 1.0 ), 0 );
	buffer.set( new Complex64( 2.0, 2.0 ), 1 );
	buffer.set( new Complex64( 3.0, 3.0 ), 2 );
	buffer.set( new Complex64( 4.0, 4.0 ), buffer.length-3 );
	buffer.set( new Complex64( 5.0, 5.0 ), buffer.length-2 );
	buffer.set( new Complex64( 6.0, 6.0 ), buffer.length-1 );

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'complex64\', new Complex64Array( [ 1, 1, 2, 2, 3, 3, ..., 4, 4, 5, 5, 6, 6 ] ), [ 10000 ], [ 1 ], 0, \'row-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (large array; complex type)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex128';
	buffer = new Complex128Array( 1e4 );
	shape = [ buffer.length ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	buffer.set( new Complex128( 1.0, 1.0 ), 0 );
	buffer.set( new Complex128( 2.0, 2.0 ), 1 );
	buffer.set( new Complex128( 3.0, 3.0 ), 2 );
	buffer.set( new Complex128( 4.0, 4.0 ), buffer.length-3 );
	buffer.set( new Complex128( 5.0, 5.0 ), buffer.length-2 );
	buffer.set( new Complex128( 6.0, 6.0 ), buffer.length-1 );

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'complex128\', new Complex128Array( [ 1, 1, 2, 2, 3, 3, ..., 4, 4, 5, 5, 6, 6 ] ), [ 10000 ], [ 1 ], 0, \'row-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a custom `toString()` method (0d)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [];
	order = 'column-major';
	strides = [ 0 ];
	offset = 1;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'toString' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'toString' ), true, 'has property' );
	t.strictEqual( isFunction( arr.toString ), true, 'has method' );

	expected = 'ndarray( \'generic\', [ 2 ], [], [ 0 ], 0, \'column-major\' )';
	actual = arr.toString();
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
