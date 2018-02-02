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
var MAX_ARRAY_LENGTH = require( '@stdlib/constants/array/max-array-length' );
var isArrayLength = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isArrayLength, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a valid array length', function test( t ) {
	t.strictEqual( isArrayLength( 0 ), true, 'returns true' );
	t.strictEqual( isArrayLength( 10 ), true, 'returns true' );
	t.strictEqual( isArrayLength( MAX_ARRAY_LENGTH ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a valid array length', function test( t ) {
	t.strictEqual( isArrayLength( MAX_ARRAY_LENGTH+1 ), false, 'returns false' );
	t.strictEqual( isArrayLength( -1 ), false, 'returns false' );
	t.strictEqual( isArrayLength( 3.14 ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		null,
		true,
		false,
		undefined,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isArrayLength( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
