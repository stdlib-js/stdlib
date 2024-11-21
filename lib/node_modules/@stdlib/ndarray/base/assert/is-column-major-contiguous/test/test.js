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
var isColumnMajorContiguous = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isColumnMajorContiguous, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if an array is column-major contiguous', function test( t ) {
	var strides;
	var offset;
	var shape;
	var bool;

	shape = [ 3, 2 ];
	strides = [ 1, 3 ];
	offset = 0;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, true, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ 1, 3 ];
	offset = 999999;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, true, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ -1, -3 ];
	offset = 4;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, true, 'returns expected value' );

	shape = [ 2, 1, 1, 1 ];
	strides = [ 1, 2, 2, 2 ];
	offset = 0;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, true, 'returns expected value' );

	shape = [ 2, 3, 10 ];
	strides = [ 1, 2, 6 ];
	offset = 99999;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if an array is not column-major contiguous', function test( t ) {
	var strides;
	var offset;
	var shape;
	var bool;

	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 0;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	offset = 99999;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ -2, -1 ];
	offset = 3;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 2, 2 ];
	strides = [ -2, 1 ];
	offset = 2;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 2, 2 ];
	strides = [ 2, -1 ];
	offset = 1;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 2, 2 ];
	strides = [ -1, 3 ];
	offset = 1;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 2, 2 ];
	strides = [ 1, -3 ];
	offset = 3;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 1, 1, 1, 2 ];
	strides = [ 2, 2, 2, 2 ];
	offset = 0;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 2, 3, 10 ];
	strides = [ 1, -2, 6 ];
	offset = 4;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 10 ];
	strides = [ 3 ];
	offset = 0;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 2, 2 ];
	strides = [ 2, 2 ];
	offset = 0;
	bool = isColumnMajorContiguous( shape, strides, offset );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if an array has 0 elements', function test( t ) {
	var bool = isColumnMajorContiguous( [ 2, 0 ], [ 0, 2 ], 0 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});
