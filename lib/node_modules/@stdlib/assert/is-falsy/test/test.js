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
var isFalsy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isFalsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a "falsy" value', function test( t ) {
	t.strictEqual( isFalsy( false ), true, 'returns expected value' );
	t.strictEqual( isFalsy( '' ), true, 'returns expected value' );
	t.strictEqual( isFalsy( 0 ), true, 'returns expected value' );
	t.strictEqual( isFalsy( NaN ), true, 'returns expected value' );
	t.strictEqual( isFalsy( null ), true, 'returns expected value' );
	t.strictEqual( isFalsy( void 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a "falsy" value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		[],
		{},
		function noop() {},
		new Date(),
		/.*/
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isFalsy( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
