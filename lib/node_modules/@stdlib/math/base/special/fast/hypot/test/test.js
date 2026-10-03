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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var hypot = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hypot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the hypotenuse', function test( t ) {
	var expected;
	var h;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		h = hypot( x[ i ], y[ i ] );
		t.strictEqual( isAlmostSameValue( h, expected[ i ], 1 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the hypotenuse (canonical inputs)', function test( t ) {
	var h;

	h = hypot( 3.0, 4.0 );
	t.strictEqual( h, 5.0, 'returns expected value' );

	h = hypot( 6.0, 8.0 );
	t.strictEqual( h, 10.0, 'returns expected value' );

	h = hypot( 5.0, 12.0 );
	t.strictEqual( h, 13.0, 'returns expected value' );

	t.end();
});

tape( 'the function can overflow', function test( t ) {
	var h = hypot( 1.0e308, 1.0e308 );
	t.strictEqual( h, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function can underflow', function test( t ) {
	var h = hypot( 1.0e-200, 1.0e-200 );
	t.strictEqual( h, 0.0, 'returns expected value' );
	t.end();
});
