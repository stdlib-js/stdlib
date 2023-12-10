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
var Float64Array = require( '@stdlib/array/float64' );
var Complex64Array = require( '@stdlib/array/complex64' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var FancyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FancyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `byteLength` property specifying the size (in bytes) of the array (typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'byteLength' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.byteLength ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.byteLength, 8*buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `byteLength` property specifying the size (in bytes) of the array (typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'byteLength' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.byteLength ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.byteLength, 8*buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `byteLength` property specifying the size (in bytes) of the array (complex typed)', function test( t ) {
	var strides;
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

	t.strictEqual( hasOwnProp( arr, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'byteLength' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.byteLength ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.byteLength, 8*buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `byteLength` property specifying the size (in bytes) of the array (complex typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'byteLength' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.byteLength ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.byteLength, 8*buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `byteLength` property specifying the size (in bytes) of an array (generic)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'byteLength' ), true, 'has property' );
	t.strictEqual( arr.byteLength, null, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `byteLength` property specifying the size (in bytes) of an array (generic; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0 ];
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'byteLength' ), true, 'has property' );
	t.strictEqual( arr.byteLength, null, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `BYTES_PER_ELEMENT` property specifying the size (in bytes) of each array element (typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'BYTES_PER_ELEMENT' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( isPositiveInteger( arr.BYTES_PER_ELEMENT ), true, 'is a positive integer' );
	t.strictEqual( arr.BYTES_PER_ELEMENT, 8, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `BYTES_PER_ELEMENT` property specifying the size (in bytes) of each array element (typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'BYTES_PER_ELEMENT' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( isPositiveInteger( arr.BYTES_PER_ELEMENT ), true, 'is a positive integer' );
	t.strictEqual( arr.BYTES_PER_ELEMENT, 8, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `BYTES_PER_ELEMENT` property specifying the size (in bytes) of each array element (complex typed)', function test( t ) {
	var strides;
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

	t.strictEqual( hasOwnProp( arr, 'BYTES_PER_ELEMENT' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( isPositiveInteger( arr.BYTES_PER_ELEMENT ), true, 'is a positive integer' );
	t.strictEqual( arr.BYTES_PER_ELEMENT, 8, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `BYTES_PER_ELEMENT` property specifying the size (in bytes) of each array element (complex typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'BYTES_PER_ELEMENT' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( isPositiveInteger( arr.BYTES_PER_ELEMENT ), true, 'is a positive integer' );
	t.strictEqual( arr.BYTES_PER_ELEMENT, 8, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `BYTES_PER_ELEMENT` property specifying the size (in bytes) of each array element (generic)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0, 4.0 ];
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'BYTES_PER_ELEMENT' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( arr.BYTES_PER_ELEMENT, null, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `BYTES_PER_ELEMENT` property specifying the size (in bytes) of each array element (generic; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0 ];
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'BYTES_PER_ELEMENT' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( arr.BYTES_PER_ELEMENT, null, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `data` property pointing to the underlying data buffer', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'data' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'data' ), true, 'has property' );
	t.strictEqual( arr.data, buffer, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `data` property pointing to the underlying data buffer (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'data' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'data' ), true, 'has property' );
	t.strictEqual( arr.data, buffer, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `data` property pointing to the underlying data buffer (complex typed)', function test( t ) {
	var strides;
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

	t.strictEqual( hasOwnProp( arr, 'data' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'data' ), true, 'has property' );
	t.strictEqual( arr.data, buffer, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `data` property pointing to the underlying data buffer (complex typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'data' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'data' ), true, 'has property' );
	t.strictEqual( arr.data, buffer, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `dtype` property specifying the underlying data type', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'dtype' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'dtype' ), true, 'has property' );
	t.strictEqual( arr.dtype, dtype, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `dtype` property specifying the underlying data type (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'dtype' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'dtype' ), true, 'has property' );
	t.strictEqual( arr.dtype, dtype, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `dtype` property specifying the underlying data type (complex typed)', function test( t ) {
	var strides;
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

	t.strictEqual( hasOwnProp( arr, 'dtype' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'dtype' ), true, 'has property' );
	t.strictEqual( arr.dtype, dtype, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `dtype` property specifying the underlying data type (complex typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'dtype' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'dtype' ), true, 'has property' );
	t.strictEqual( arr.dtype, dtype, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `flags` property providing information regarding the memory layout of the array (row-major contiguous)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'flags' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'flags' ), true, 'has property' );
	t.strictEqual( isPlainObject( arr.flags ), true, 'is an object' );

	t.strictEqual( hasOwnProp( arr.flags, 'ROW_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.ROW_MAJOR_CONTIGUOUS, true, 'has expected value' );

	t.strictEqual( hasOwnProp( arr.flags, 'COLUMN_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.COLUMN_MAJOR_CONTIGUOUS, false, 'has expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `flags` property providing information regarding the memory layout of the array (column-major contiguous)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'flags' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'flags' ), true, 'has property' );
	t.strictEqual( isPlainObject( arr.flags ), true, 'is an object' );

	t.strictEqual( hasOwnProp( arr.flags, 'ROW_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.ROW_MAJOR_CONTIGUOUS, false, 'has expected value' );

	t.strictEqual( hasOwnProp( arr.flags, 'COLUMN_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.COLUMN_MAJOR_CONTIGUOUS, true, 'has expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `flags` property providing information regarding the memory layout of the array (row-major and column-major contiguous)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'flags' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'flags' ), true, 'has property' );
	t.strictEqual( isPlainObject( arr.flags ), true, 'is an object' );

	t.strictEqual( hasOwnProp( arr.flags, 'ROW_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.ROW_MAJOR_CONTIGUOUS, true, 'has expected value' );

	t.strictEqual( hasOwnProp( arr.flags, 'COLUMN_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.COLUMN_MAJOR_CONTIGUOUS, true, 'has expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `flags` property providing information regarding the memory layout of the array (row-major and column-major contiguous; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'flags' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'flags' ), true, 'has property' );
	t.strictEqual( isPlainObject( arr.flags ), true, 'is an object' );

	t.strictEqual( hasOwnProp( arr.flags, 'ROW_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.ROW_MAJOR_CONTIGUOUS, true, 'has expected value' );

	t.strictEqual( hasOwnProp( arr.flags, 'COLUMN_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.COLUMN_MAJOR_CONTIGUOUS, true, 'has expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `flags` property providing information regarding the memory layout the array (neither row-major nor column-major contiguous)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
	shape = [ 2, 2, 2 ];
	order = 'column-major';
	strides = [ 4, 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'flags' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'flags' ), true, 'has property' );
	t.strictEqual( isPlainObject( arr.flags ), true, 'is an object' );

	t.strictEqual( hasOwnProp( arr.flags, 'ROW_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.ROW_MAJOR_CONTIGUOUS, false, 'has expected value' );

	t.strictEqual( hasOwnProp( arr.flags, 'COLUMN_MAJOR_CONTIGUOUS' ), true, 'has own property' );
	t.strictEqual( arr.flags.COLUMN_MAJOR_CONTIGUOUS, false, 'has expected value' );

	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `length` property specifying the number of array elements', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'length' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'length' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.length ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.length, buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `length` property specifying the number of array elements (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'length' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'length' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.length ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.length, buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `length` property specifying the number of array elements (complex typed)', function test( t ) {
	var strides;
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

	t.strictEqual( hasOwnProp( arr, 'length' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'length' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.length ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.length, buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `length` property specifying the number of array elements (complex typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'length' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'length' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.length ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.length, buffer.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `ndims` property specifying the number of array dimensions', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'ndims' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'ndims' ), true, 'has property' );
	t.strictEqual( isPositiveInteger( arr.ndims ), true, 'is a positive integer' );
	t.strictEqual( arr.ndims, shape.length, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `ndims` property specifying the number of array dimensions (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'ndims' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'ndims' ), true, 'has property' );
	t.strictEqual( arr.ndims, 0, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `offset` property specifying the location of the first indexed element', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'offset' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'offset' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.offset ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.offset, offset, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `offset` property specifying the location of the first indexed element (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'offset' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'offset' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.offset ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.offset, offset, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `offset` property specifying the location of the first indexed element (complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] ); // eslint-disable-line max-len
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'offset' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'offset' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.offset ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.offset, offset, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `offset` property specifying the location of the first indexed element (complex typed; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 2;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'offset' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'offset' ), true, 'has property' );
	t.strictEqual( isNonNegativeInteger( arr.offset ), true, 'is a nonnegative integer' );
	t.strictEqual( arr.offset, offset, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `order` property specifying the array order (row-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'order' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'order' ), true, 'has property' );
	t.strictEqual( arr.order, order, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `order` property specifying the array order (row-major; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'order' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'order' ), true, 'has property' );
	t.strictEqual( arr.order, order, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `order` property specifying the array order (column-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'order' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'order' ), true, 'has property' );
	t.strictEqual( arr.order, order, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has an `order` property specifying the array order (column-major; 0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'column-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'order' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'order' ), true, 'has property' );
	t.strictEqual( arr.order, order, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `shape` property specifying the array shape (dimensions)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'shape' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'shape' ), true, 'has property' );
	t.notEqual( arr.shape, shape, 'returns a copy' );
	t.deepEqual( arr.shape, shape, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `shape` property specifying the array shape (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'column-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'shape' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'shape' ), true, 'has property' );
	t.notEqual( arr.shape, shape, 'returns a copy' );
	t.deepEqual( arr.shape, shape, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `strides` property specifying how to access array elements along corresponding dimensions', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'strides' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'strides' ), true, 'has property' );
	t.notEqual( arr.strides, strides, 'returns a copy' );
	t.deepEqual( arr.strides, strides, 'has expected value' );
	t.end();
});

tape( 'a FancyArray constructor returns an instance which has a `strides` property specifying how to access array elements along corresponding dimensions (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0 ] );
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( hasOwnProp( arr, 'strides' ), false, 'does not have own property' );
	t.strictEqual( hasProp( arr, 'strides' ), true, 'has property' );
	t.notEqual( arr.strides, strides, 'returns a copy' );
	t.deepEqual( arr.strides, strides, 'has expected value' );
	t.end();
});
