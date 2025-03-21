/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var last = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof last, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( last( '', 1 ), '', 'returns expected value' );
	t.strictEqual( last( '', 2 ), '', 'returns expected value' );
	t.strictEqual( last( '', 3 ), '', 'returns expected value' );
	t.strictEqual( last( '', 10 ), '', 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty string if provided zero as the second argument', function test( t ) {
	t.strictEqual( last( 'hello world', 0 ), '', 'returns expected value' );
	t.end();
});

tape( 'the function returns the last UTF-16 code unit of a provided string', function test( t ) {
	var s;

	s = last( 'hello world', 1 );
	t.strictEqual( s, 'd', 'returns expected value' );

	s = last( 'JavaScript', 1 );
	t.strictEqual( s, 't', 'returns expected value' );

	s = last( 'EVENING', 1 );
	t.strictEqual( s, 'G', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning the last `n` UTF-16 code units of a provided string', function test( t ) {
	var s;

	s = last( 'hello world', 1 );
	t.strictEqual( s, 'd', 'returns expected value' );

	s = last( 'hello world', 5 );
	t.strictEqual( s, 'world', 'returns expected value' );

	s = last( 'new', 3 );
	t.strictEqual( s, 'new', 'returns expected value' );

	s = last( '<--->', 2 );
	t.strictEqual( s, '->', 'returns expected value' );

	t.end();
});

tape( 'the function returns the original string if `n` is greater than the length of the string', function test( t ) {
	var s;

	s = last( 'hello world', 20 );
	t.strictEqual( s, 'hello world', 'returns expected value' );

	s = last( 'new', 5 );
	t.strictEqual( s, 'new', 'returns expected value' );

	s = last( 'green', 8 );
	t.strictEqual( s, 'green', 'returns expected value' );

	t.end();
});
