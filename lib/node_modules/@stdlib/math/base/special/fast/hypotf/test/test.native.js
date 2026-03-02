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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var hypotf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( hypotf instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hypotf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the hypotenuse', opts, function test( t ) {
	var expected;
	var h;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = f32( x[ i ] );
		y[ i ] = f32( y[ i ] );
		expected[ i ] = f32( expected[ i ] );
		h = hypotf( x[ i ], y[ i ] );
		t.strictEqual( ulpdiff( h, expected[ i ] ) <= 1, true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the hypotenuse (canonical inputs)', opts, function test( t ) {
	var h;

	h = hypotf( f32( 3.0 ), f32( 4.0 ) );
	t.strictEqual( h, f32( 5.0 ), 'returns expected value' );

	h = hypotf( f32( 6.0 ), f32( 8.0 ) );
	t.strictEqual( h, f32( 10.0 ), 'returns expected value' );

	h = hypotf( f32( 5.0 ), f32( 12.0 ) );
	t.strictEqual( h, f32( 13.0 ), 'returns expected value' );

	t.end();
});

tape( 'the function can overflow', opts, function test( t ) {
	var h = hypotf( f32( 1.0e38 ), f32( 1.0e38 ) );
	t.strictEqual( h, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function can underflow', opts, function test( t ) {
	var h = hypotf( f32( 1.0e-45 ), f32( 1.0e-45 ) );
	t.strictEqual( h, f32( 0.0 ), 'returns expected value' );
	t.end();
});
