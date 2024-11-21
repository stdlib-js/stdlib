/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isArray = require( '@stdlib/assert/is-array' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ind2sub = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ind2sub, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (0d; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (0d; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [];
	order = 'column-major';
	strides = [ 0 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (1d; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (1d; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (2d; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (2d; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (3d; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2, 2 ];
	order = 'row-major';
	strides = [ 4, 2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 4, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 5, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 6, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 7, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (3d; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2, 4 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 4, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 5, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 6, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 7, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (3d; order=row-major; negative strides)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2, 2 ];
	order = 'row-major';
	strides = [ 4, -2, 1 ];
	offset = 2;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 4, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 5, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 6, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 7, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 2;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 2;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; offset=0; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; offset=0; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, -1 ];
	offset = 1;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, 2 ];
	offset = 1;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; offset=0; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, -1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; offset=0; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, 2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, -1 ];
	offset = 3;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, -2 ];
	offset = 3;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; offset=0; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, -1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'the function converts a linear index to an array of subscripts (negative strides; offset=0; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, -2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( isArray( out ), true, 'returns an array' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is a method which supports providing an output object', function test( t ) {
	var strides;
	var actual;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	out = [ 0, 0 ];
	actual = ind2sub.assign( shape, strides, offset, order, 0, 'throw', out );
	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual, out, 'returns output array' );
	t.deepEqual( actual, [ 0, 0 ], 'returns expected value' );

	out = [ 0, 0 ];
	actual = ind2sub.assign( shape, strides, offset, order, 1, 'throw', out );
	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual, out, 'returns output array' );
	t.deepEqual( actual, [ 0, 1 ], 'returns expected value' );

	out = [ 0, 0 ];
	actual = ind2sub.assign( shape, strides, offset, order, 2, 'throw', out );
	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual, out, 'returns output array' );
	t.deepEqual( actual, [ 1, 0 ], 'returns expected value' );

	out = [ 0, 0 ];
	actual = ind2sub.assign( shape, strides, offset, order, 3, 'throw', out );
	t.strictEqual( isArray( actual ), true, 'returns an array' );
	t.strictEqual( actual, out, 'returns output array' );
	t.deepEqual( actual, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is a method which supports providing an output object (typed array)', function test( t ) {
	var strides;
	var actual;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	out = new Uint8Array( shape.length );
	actual = ind2sub.assign( shape, strides, offset, order, 0, 'throw', out );
	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual[ 0 ], 0, 'returns expected value' );
	t.deepEqual( actual[ 1 ], 0, 'returns expected value' );

	out = new Uint8Array( shape.length );
	actual = ind2sub.assign( shape, strides, offset, order, 1, 'throw', out );
	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual[ 0 ], 0, 'returns expected value' );
	t.deepEqual( actual[ 1 ], 1, 'returns expected value' );

	out = new Uint8Array( shape.length );
	actual = ind2sub.assign( shape, strides, offset, order, 2, 'throw', out );
	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual[ 0 ], 1, 'returns expected value' );
	t.deepEqual( actual[ 1 ], 0, 'returns expected value' );

	out = new Uint8Array( shape.length );
	actual = ind2sub.assign( shape, strides, offset, order, 3, 'throw', out );
	t.strictEqual( actual, out, 'returns output array' );
	t.strictEqual( actual[ 0 ], 1, 'returns expected value' );
	t.deepEqual( actual[ 1 ], 1, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `throw`, the function throws if provided a linear index which exceeds array dimensions', function test( t ) {
	var offset;
	var shape;

	shape = [ 2, 2 ];
	offset = 0;

	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		var strides = [ 2, 1 ];
		ind2sub( shape, strides, offset, 'row-major', 999999, 'throw' );
	}

	function bar() {
		var strides = [ 1, 2 ];
		ind2sub( shape, strides, offset, 'column-major', 999999, 'throw' );
	}
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'wrap' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'wrap' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -8, 'wrap' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -10, 'wrap' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 5, 'wrap' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 8, 'wrap' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'wrap' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'wrap' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'wrap' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -8, 'wrap' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -10, 'wrap' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 5, 'wrap' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 8, 'wrap' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'wrap' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (offset=0; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'wrap' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'wrap' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'wrap' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (offset=0; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'wrap' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'wrap' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'wrap' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'clamp' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'clamp' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'clamp' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'clamp' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'clamp' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'clamp' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (offset=0; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'clamp' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'clamp' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'clamp' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (offset=0; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'clamp' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'clamp' );
	t.deepEqual( out, [ 0, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, 10, 'clamp' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative indices (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'normalize' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'normalize' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -3, 'normalize' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative indices (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'normalize' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'normalize' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -3, 'normalize' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative indices (offset=0; order=row-major)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'normalize' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'normalize' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -3, 'normalize' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative indices (offset=0; order=column-major)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 0;

	out = ind2sub( shape, strides, offset, order, 2, 'normalize' );
	t.deepEqual( out, [ 0, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -1, 'normalize' );
	t.deepEqual( out, [ 1, 1 ], 'returns expected value' );

	out = ind2sub( shape, strides, offset, order, -3, 'normalize' );
	t.deepEqual( out, [ 1, 0 ], 'returns expected value' );

	t.end();
});
