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
var ifelse = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ifelse, 'function', 'main export is a function' );
	t.end();
});

tape( 'if a condition is truthy, the function returns the second argument', function test( t ) {
	var z;

	z = ifelse( true, 'beep', 'boop' );
	t.strictEqual( z, 'beep', 'returns expected value' );

	z = ifelse( [], 'beep', 'boop' );
	t.strictEqual( z, 'beep', 'returns expected value' );

	z = ifelse( 'woot', 'beep', 'boop' );
	t.strictEqual( z, 'beep', 'returns expected value' );

	z = ifelse( {}, 'beep', 'boop' );
	t.strictEqual( z, 'beep', 'returns expected value' );

	t.end();
});

tape( 'if a condition is falsy, the function returns the third argument', function test( t ) {
	var z;

	z = ifelse( false, 'beep', 'boop' );
	t.strictEqual( z, 'boop', 'returns expected value' );

	z = ifelse( '', 'beep', 'boop' );
	t.strictEqual( z, 'boop', 'returns expected value' );

	z = ifelse( null, 'beep', 'boop' );
	t.strictEqual( z, 'boop', 'returns expected value' );

	z = ifelse( void 0, 'beep', 'boop' );
	t.strictEqual( z, 'boop', 'returns expected value' );

	t.end();
});
