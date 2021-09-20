/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var Symbol = require( '@stdlib/symbol/ctor' );
var isPropertyKey = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPropertyKey, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a string', function test( t ) {
	t.strictEqual( isPropertyKey( 'beep' ), true, 'returns true' );
	t.strictEqual( isPropertyKey( new String( 'beep' ) ), true, 'returns true' ); // eslint-disable-line no-new-wrappers
	t.end();
});

tape( 'the function returns `true` if provided a symbol', function test( t ) {
	t.strictEqual( isPropertyKey( Symbol( 'beep' ) ), true, 'returns true' );
	t.strictEqual( isPropertyKey( Symbol.iterator ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a non-negative integer', function test( t ) {
	t.strictEqual( isPropertyKey( 0 ), true, 'returns true' );
	t.strictEqual( isPropertyKey( 1 ), true, 'returns true' );
	t.strictEqual( isPropertyKey( 139 ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a string, symbol, or non-negative integer', function test( t ) {
	var values;
	var i;

	values = [
		-13,
		0.1,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isPropertyKey( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});
