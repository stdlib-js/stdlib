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
var isColumnMajor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isColumnMajor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean indicating if an array is column-major based on a provided stride array', function test( t ) {
	var strides;
	var bool;

	strides = [ 2, 1 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, false, 'returns expected value' );

	strides = [ -2, 1 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, false, 'returns expected value' );

	strides = [ 2, -1 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, false, 'returns expected value' );

	strides = [ -2, -1 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, false, 'returns expected value' );

	strides = [ 1, 3 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	strides = [ -1, 3 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	strides = [ 1, -3 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	strides = [ -1, -3 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	strides = [ 1, 2, 2, 2 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	strides = [ 2, 2, 2, 2 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	strides = [ 1, 10, 30 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	strides = [ 1, -10, 30 ];
	bool = isColumnMajor( strides );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided an empty stride array', function test( t ) {
	var bool = isColumnMajor( [] );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});
