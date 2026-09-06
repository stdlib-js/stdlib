/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var chebyshevSeries = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof chebyshevSeries, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an empty coefficient array, the function returns `0.0`', function test( t ) {
	var v = chebyshevSeries( 1.0, [] );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided only one coefficient, the function returns the coefficient divided by two', function test( t ) {
	var v = chebyshevSeries( 1.0, [ 2.0 ] );
	t.strictEqual( v, 1.0, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a Chebyshev series', function test( t ) {
	var c;
	var v;

	c = [ 0.5, 1.0 ];
	v = chebyshevSeries( 1.0, c );
	t.strictEqual( v, 0.75, 'returns expected value' );

	v = chebyshevSeries( 2.0, c );
	t.strictEqual( v, 1.0, 'returns expected value' );

	c = [ 1.0, 0.0, 0.0 ];
	v = chebyshevSeries( 2.0, c );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = chebyshevSeries( 0.0, c );
	t.strictEqual( v, -1.0, 'returns expected value' );

	t.end();
});
