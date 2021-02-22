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
var minmaxViewBufferIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minmaxViewBufferIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the minimum and maximum linear indices in an underlying array buffer which are accessible to an array view', function test( t ) {
	var strides;
	var offset;
	var shape;
	var idx;

	shape = [ 3, 2 ];

	strides = [ 2, 1 ];
	offset = 0;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	strides = [ -2, 1 ];
	offset = 4;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	strides = [ 2, -1 ];
	offset = 1;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	strides = [ -2, -1 ];
	offset = 5;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	strides = [ 1, 3 ];
	offset = 0;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	strides = [ -1, 3 ];
	offset = 2;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	strides = [ 1, -3 ];
	offset = 3;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	strides = [ -1, -3 ];
	offset = 5;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	// 3d array...
	shape = [ 2, 3, 10 ];

	strides = [ 30, 10, 1 ];
	offset = 0;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 59, 'returns expected value' );

	strides = [ 30, -10, 1 ];
	offset = 20;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 59, 'returns expected value' );

	t.end();
});

tape( 'the function computes the minimum and maximum linear indices in an underlying array buffer which are accessible to an array view (buffer offset)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var idx;

	shape = [ 3, 2 ];

	strides = [ 2, 1 ];
	offset = 10;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( idx[ 0 ], 10, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 15, 'returns expected value' );

	strides = [ -2, 1 ];
	offset = 14;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( idx[ 0 ], 10, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 15, 'returns expected value' );

	strides = [ 2, -1 ];
	offset = 11;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( idx[ 0 ], 10, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 15, 'returns expected value' );

	strides = [ -2, -1 ];
	offset = 15;
	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( idx[ 0 ], 10, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 15, 'returns expected value' );

	t.end();
});

tape( 'attached to the main function is a method which supports providing an output object', function test( t ) {
	var strides;
	var offset;
	var shape;
	var idx;
	var out;

	shape = [ 3, 2 ];

	out = [ 0, 0 ];
	strides = [ 2, 1 ];
	offset = 0;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ -2, 1 ];
	offset = 4;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ 2, -1 ];
	offset = 1;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ -2, -1 ];
	offset = 5;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ 1, 3 ];
	offset = 0;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ -1, 3 ];
	offset = 2;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ 1, -3 ];
	offset = 3;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ -1, -3 ];
	offset = 5;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 5, 'returns expected value' );

	// 3d array...
	shape = [ 2, 3, 10 ];

	out = [ 0, 0 ];
	strides = [ 30, 10, 1 ];
	offset = 0;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 59, 'returns expected value' );

	out = [ 0, 0 ];
	strides = [ 30, -10, 1 ];
	offset = 20;
	idx = minmaxViewBufferIndex.assign( shape, strides, offset, out );
	t.strictEqual( idx, out, 'returns expected value' );
	t.strictEqual( idx[ 0 ], 0, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 59, 'returns expected value' );

	t.end();
});

tape( 'the function computes the minimum and maximum linear indices in an underlying array buffer which are accessible to an array view (shape[k]=1)', function test( t ) {
	var strides;
	var offset;
	var shape;
	var idx;

	shape = [ 1, 1 ];

	strides = [ 0, 0 ];
	offset = 10;

	idx = minmaxViewBufferIndex( shape, strides, offset );
	t.strictEqual( isArray( idx ), true, 'returns an array' );
	t.strictEqual( idx[ 0 ], 10, 'returns expected value' );
	t.strictEqual( idx[ 1 ], 10, 'returns expected value' );

	t.end();
});
