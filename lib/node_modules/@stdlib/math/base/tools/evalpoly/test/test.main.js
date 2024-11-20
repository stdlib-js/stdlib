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
var evalpoly = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.true( typeof evalpoly, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an empty coefficient array, the function returns `0`', function test( t ) {
	var v = evalpoly( [], 10.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided only 1 coefficient, the function returns that coefficient', function test( t ) {
	var v = evalpoly( [ 1.0 ], 10.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );
	t.end();
});

tape( 'if the value at which to evaluate a polynomial is `0`, the function returns the first coefficient', function test( t ) {
	var v = evalpoly( [ 3.0, 2.0, 1.0 ], 0.0 );
	t.strictEqual( v, 3.0, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a polynomial', function test( t ) {
	var c;
	var v;

	c = [ 4.0, 5.0 ];
	v = evalpoly( c, 6.0 );
	t.strictEqual( v, 34.0, 'returns expected value' );

	c = [ -4.0, -5.0 ];
	v = evalpoly( c, 6.0 );
	t.strictEqual( v, -34.0, 'returns expected value' );

	c = [ -19.0, 7.0, -4.0, 6.0 ];
	v = evalpoly( c, 3.0 );
	t.strictEqual( v, 128.0, 'returns expected value' );

	t.end();
});
