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
var instanceOf = require( '@stdlib/assert/instance-of' );
var Complex64Array = require( '@stdlib/array/complex64' );
var FancyArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FancyArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
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

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});

tape( 'the function is a constructor (complex dtype)', function test( t ) {
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

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});

tape( 'the function is a constructor (0d)', function test( t ) {
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

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});

tape( 'the function is a constructor (0d; complex dtype)', function test( t ) {
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

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});

tape( 'the function is a constructor (options)', function test( t ) {
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

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, {} );

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});

tape( 'the function is a constructor (0d; options)', function test( t ) {
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

	arr = new FancyArray( dtype, buffer, shape, strides, offset, order, {} );

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var ndarray;
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

	ndarray = FancyArray;
	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (options)', function test( t ) {
	var ndarray;
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

	ndarray = FancyArray;
	arr = ndarray( dtype, buffer, shape, strides, offset, order, {} );

	t.strictEqual( instanceOf( arr, FancyArray ), true, 'returns an instance' );
	t.end();
});
