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
var isBufferLengthCompatibleShape = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBufferLengthCompatibleShape, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if a buffer length is compatible with a provided shape array', function test( t ) {
	var shape;
	var bool;

	shape = [ 3, 2 ];
	bool = isBufferLengthCompatibleShape( 10, shape );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isBufferLengthCompatibleShape( 6, shape );
	t.strictEqual( bool, true, 'returns expected value' );

	shape = [ 1, 1, 1, 2 ];
	bool = isBufferLengthCompatibleShape( 2, shape );
	t.strictEqual( bool, true, 'returns expected value' );

	shape = [ 2, 3, 10 ];
	bool = isBufferLengthCompatibleShape( 60, shape );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = isBufferLengthCompatibleShape( 100, shape );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if a buffer length is incompatible with a provided shape array', function test( t ) {
	var shape;
	var bool;

	shape = [ 1, 1, 1, 2 ];
	bool = isBufferLengthCompatibleShape( 1, shape );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 10 ];
	bool = isBufferLengthCompatibleShape( 9, shape );
	t.strictEqual( bool, false, 'returns expected value' );

	shape = [ 2, 2 ];
	bool = isBufferLengthCompatibleShape( 3, shape );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});
