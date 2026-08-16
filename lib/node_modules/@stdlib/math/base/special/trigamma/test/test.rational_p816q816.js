/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var evalrational = require( './../lib/rational_p816q816.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof evalrational, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates a rational function for x = 0', function test( t ) {
	var v = evalrational( 0.0 );
	t.strictEqual( v, -1.848283152741466e-20, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a rational function for negative values', function test( t ) {
	var v;

	v = evalrational( -0.5 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = evalrational( -1.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	v = evalrational( -2.0 );
	t.strictEqual( isNumber( v ), true, 'returns expected value' );

	t.end();
});
