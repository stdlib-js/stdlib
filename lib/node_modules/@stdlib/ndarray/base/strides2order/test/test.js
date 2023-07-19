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
var strides2order = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strides2order, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function determines the array order based on a provided stride array', function test( t ) {
	var strides;
	var o;

	// 1-d, both row-major and column-major
	strides = [ 1 ];
	o = strides2order( strides );
	t.strictEqual( o, 3, 'returns expected value' );

	strides = [ 10 ];
	o = strides2order( strides );
	t.strictEqual( o, 3, 'returns expected value' );

	strides = [ -1 ];
	o = strides2order( strides );
	t.strictEqual( o, 3, 'returns expected value' );

	strides = [ -10 ];
	o = strides2order( strides );
	t.strictEqual( o, 3, 'returns expected value' );

	// 2-d, row-major...
	strides = [ 2, 1 ];
	o = strides2order( strides );
	t.strictEqual( o, 1, 'returns expected value' );

	strides = [ -2, 1 ];
	o = strides2order( strides );
	t.strictEqual( o, 1, 'returns expected value' );

	strides = [ 2, -1 ];
	o = strides2order( strides );
	t.strictEqual( o, 1, 'returns expected value' );

	strides = [ -2, -1 ];
	o = strides2order( strides );
	t.strictEqual( o, 1, 'returns expected value' );

	// 2-d, column-major...
	strides = [ 1, 3 ];
	o = strides2order( strides );
	t.strictEqual( o, 2, 'returns expected value' );

	strides = [ -1, 3 ];
	o = strides2order( strides );
	t.strictEqual( o, 2, 'returns expected value' );

	strides = [ 1, -3 ];
	o = strides2order( strides );
	t.strictEqual( o, 2, 'returns expected value' );

	strides = [ -1, -3 ];
	o = strides2order( strides );
	t.strictEqual( o, 2, 'returns expected value' );

	// 3-d, row-major...
	strides = [ 30, 10, 1 ];
	o = strides2order( strides );
	t.strictEqual( o, 1, 'returns expected value' );

	strides = [ 30, -10, 1 ];
	o = strides2order( strides );
	t.strictEqual( o, 1, 'returns expected value' );

	// 3-d, column-major...
	strides = [ 1, 10, 30 ];
	o = strides2order( strides );
	t.strictEqual( o, 2, 'returns expected value' );

	strides = [ 1, -10, 30 ];
	o = strides2order( strides );
	t.strictEqual( o, 2, 'returns expected value' );

	// 3-d, neither row-major nor column-major...
	strides = [ 30, 1, 10 ];
	o = strides2order( strides );
	t.strictEqual( o, 0, 'returns expected value' );

	strides = [ 2, 3, 1 ];
	o = strides2order( strides );
	t.strictEqual( o, 0, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty stride array, the function returns `0` (none)', function test( t ) {
	var o = strides2order( [] );
	t.strictEqual( o, 0, 'returns expected value' );
	t.end();
});
