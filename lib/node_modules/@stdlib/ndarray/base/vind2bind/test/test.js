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
var vind2bind = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof vind2bind, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 2;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 2;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, -1 ];
	offset = 1;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, 2 ];
	offset = 1;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, -1 ];
	offset = 3;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	t.end();
});

tape( 'the function converts a view linear index to a linear index in an underlying data buffer (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ -1, -2 ];
	offset = 3;

	idx = vind2bind( shape, strides, offset, order, 0, 'throw' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 1, 'throw' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 2, 'throw' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 3, 'throw' );
	t.strictEqual( idx, 0, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `throw`, the function throws if provided a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	t.throws( foo, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		vind2bind( shape, strides, offset, order, 999999, 'throw' );
	}
});

tape( 'if the `mode` is `throw`, the function throws if provided a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	t.throws( foo, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		vind2bind( shape, strides, offset, order, 999999, 'throw' );
	}
});

tape( 'if the `mode` is `normalize`, the function throws if provided a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		vind2bind( shape, strides, offset, order, 999999, 'normalize' );
	}

	function bar() {
		vind2bind( shape, strides, offset, order, -999999, 'normalize' );
	}
});

tape( 'if the `mode` is `normalize`, the function throws if provided a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );

	t.end();

	function foo() {
		vind2bind( shape, strides, offset, order, 999999, 'normalize' );
	}

	function bar() {
		vind2bind( shape, strides, offset, order, -999999, 'normalize' );
	}
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (offset=0,order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	idx = vind2bind( shape, strides, offset, order, 1, 'wrap' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 4, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -2, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 5, 'wrap' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -6, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 8, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -9, 'wrap' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -4, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 2;

	idx = vind2bind( shape, strides, offset, order, 1, 'wrap' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 4, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -2, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 5, 'wrap' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -6, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 8, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -9, 'wrap' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -4, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (offset=0,order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	idx = vind2bind( shape, strides, offset, order, 1, 'wrap' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 4, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -2, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 5, 'wrap' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -6, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 8, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -9, 'wrap' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -4, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `wrap`, the function wraps a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 2;

	idx = vind2bind( shape, strides, offset, order, 1, 'wrap' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 4, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -2, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 5, 'wrap' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -6, 'wrap' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 8, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -9, 'wrap' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -4, 'wrap' );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (offset=0,order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ 2, 1 ];
	offset = 0;

	idx = vind2bind( shape, strides, offset, order, 4, 'clamp' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 0, 'clamp' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'clamp' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -3, 'clamp' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 15, 'clamp' );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 2;

	idx = vind2bind( shape, strides, offset, order, 4, 'clamp' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 0, 'clamp' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'clamp' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -3, 'clamp' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 15, 'clamp' );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (offset=0,order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	idx = vind2bind( shape, strides, offset, order, 4, 'clamp' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 0, 'clamp' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'clamp' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -3, 'clamp' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 15, 'clamp' );
	t.strictEqual( idx, 3, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `clamp`, the function clamps a linear index which exceeds array dimensions (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 2;

	idx = vind2bind( shape, strides, offset, order, 4, 'clamp' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 0, 'clamp' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -8, 'clamp' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -3, 'clamp' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 15, 'clamp' );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative linear indices (order=row-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'row-major';
	strides = [ -2, 1 ];
	offset = 2;

	// Iteration order => [ 2, 3, 0, 1 ]

	idx = vind2bind( shape, strides, offset, order, 3, 'normalize' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 0, 'normalize' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -4, 'normalize' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -1, 'normalize' );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative linear indices (offset=0,order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, 2 ];
	offset = 0;

	// Iteration order => [ 0, 1, 2, 3 ]

	idx = vind2bind( shape, strides, offset, order, 3, 'normalize' );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 0, 'normalize' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -4, 'normalize' );
	t.strictEqual( idx, 0, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -3, 'normalize' );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'if the `mode` is `normalize`, the function normalizes negative linear indices (order=column-major)', function test( t ) {
	var strides;
	var offset;
	var order;
	var shape;
	var idx;

	shape = [ 2, 2 ];
	order = 'column-major';
	strides = [ 1, -2 ];
	offset = 2;

	// Iteration order => [ 2, 3, 0, 1 ]

	idx = vind2bind( shape, strides, offset, order, 3, 'normalize' );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, 0, 'normalize' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -4, 'normalize' );
	t.strictEqual( idx, 2, 'returns expected value' );

	idx = vind2bind( shape, strides, offset, order, -1, 'normalize' );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});
