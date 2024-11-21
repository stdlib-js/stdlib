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
var strides2offset = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strides2offset, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function determines an index offset based on a stride array', function test( t ) {
	var strides;
	var shape;
	var o;

	// 2-d, row major...
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 0, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ -2, 1 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 4, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ 2, -1 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 1, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ -2, -1 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 5, 'returns expected value' );

	// 2-d, column major...
	shape = [ 3, 2 ];
	strides = [ 1, 3 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 0, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ -1, 3 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 2, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ 1, -3 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 3, 'returns expected value' );

	shape = [ 3, 2 ];
	strides = [ -1, -3 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 5, 'returns expected value' );

	// 3-d, row major...
	shape = [ 2, 3, 10 ];
	strides = [ 30, 10, 1 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 0, 'returns expected value' );

	shape = [ 2, 3, 10 ];
	strides = [ 30, -10, 1 ];

	o = strides2offset( shape, strides );
	t.strictEqual( o, 20, 'returns expected value' );

	t.end();
});
