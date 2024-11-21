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
var sub2ind = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sub2ind, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts subscripts to a linear index (simple)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	mode = [ 'throw' ];

	idx = sub2ind( shape, strides, offset, 0, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 1, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ -2, 1 ];
	offset = 2;
	mode = [ 'throw' ];

	idx = sub2ind( shape, strides, offset, 0, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 1, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index (offset=0)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ -2, 1 ];
	offset = 0;
	mode = [ 'throw' ];

	idx = sub2ind( shape, strides, offset, 0, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 1, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ 2, -1 ];
	offset = 1;
	mode = [ 'throw' ];

	idx = sub2ind( shape, strides, offset, 0, 0, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 1, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 1, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index (offset=0)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ 2, -1 ];
	offset = 0;
	mode = [ 'throw' ];

	idx = sub2ind( shape, strides, offset, 0, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 1, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ -2, -1 ];
	offset = 3;
	mode = [ 'throw' ];

	idx = sub2ind( shape, strides, offset, 0, 0, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 1, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 1, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	t.end();
});

tape( 'the function converts subscripts to a linear index (offset=0)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ -2, -1 ];
	offset = 0;
	mode = [ 'throw' ];

	idx = sub2ind( shape, strides, offset, 0, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 1, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if a dimension index `mode` is `throw`, the function throws if provided a subscript which exceeds array dimensions', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;

	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	mode = [ 'throw' ];

	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		sub2ind( shape, strides, offset, 999999, 1, mode );
	}

	function bar() {
		sub2ind( shape, strides, offset, 1, 999999, mode );
	}
});

tape( 'if a dimension index `mode` is `wrap`, the function wraps a subscript which exceeds array dimensions', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	mode = [ 'wrap' ];

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 2, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 3, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -3, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 5, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 4, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, -4, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'if a dimension index `mode` is `wrap`, the function wraps a subscript which exceeds array dimensions (offset=0)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ -2, 1 ];
	offset = 0;
	mode = [ 'wrap' ];

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 2, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 3, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -3, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 5, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 4, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, -4, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'if a dimension index `mode` is `clamp`, the function clamps a subscript which exceeds array dimensions', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	mode = [ 'clamp' ];

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 2, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 3, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -3, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 5, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if a dimension index `mode` is `clamp`, the function clamps a subscript which exceeds array dimensions (offset=0)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ -2, 1 ];
	offset = 0;
	mode = [ 'clamp' ];

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 2, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, 3, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -3, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 1, 5, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if a dimension index `mode` is `normalize`, the function normalizes negative subscripts', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	mode = [ 'normalize' ];

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, -1, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -2, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -1, -1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if a dimension index `mode` is `normalize`, the function normalizes negative subscripts (offset=0)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2 ];
	strides = [ -2, 1 ];
	offset = 0;
	mode = [ 'normalize' ];

	idx = sub2ind( shape, strides, offset, 1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -1, 0, mode );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, 0, -1, mode );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -2, 0, mode );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = sub2ind( shape, strides, offset, -1, -1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing mixed modes', function test( t ) {
	var strides;
	var offset;
	var shape;
	var mode;
	var idx;

	shape = [ 2, 2, 2 ];
	strides = [ 4, 2, 1 ];
	offset = 0;
	mode = [ 'wrap', 'clamp' ];

	idx = sub2ind( shape, strides, offset, -2, 10, -1, mode );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});
