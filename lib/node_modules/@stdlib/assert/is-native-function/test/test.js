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
var isNativeFunction = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNativeFunction, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a native function', function test( t ) {
	t.strictEqual( isNativeFunction( Date ), true, 'returns true' );
	t.strictEqual( isNativeFunction( Math.sqrt ), true, 'returns true' ); // eslint-disable-line stdlib/no-builtin-math
	t.strictEqual( isNativeFunction( RegExp ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a non-native function', function test( t ) {
	function beep() {
		return 'boop';
	}
	t.strictEqual( isNativeFunction( beep ), false, 'returns false' );
	t.strictEqual( isNativeFunction( test ), false, 'returns false' );
	t.strictEqual( isNativeFunction( tape ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		undefined,
		true,
		false,
		null,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isNativeFunction( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
