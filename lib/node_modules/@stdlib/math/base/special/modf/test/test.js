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
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var modf = require( './../lib' );


// FIXTURES //

var subnormal = require( './fixtures/julia/subnormal.json' );
var small = require( './fixtures/julia/small.json' );
var medium = require( './fixtures/julia/medium.json' );
var large = require( './fixtures/julia/large.json' );
var huge = require( './fixtures/julia/huge.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof modf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (small values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = small.integral;
	frac = small.frac;
	x = small.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (medium values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = medium.integral;
	frac = medium.frac;
	x = medium.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (large values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = large.integral;
	frac = large.frac;
	x = large.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (huge values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = huge.integral;
	frac = huge.frac;
	x = huge.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'the function decomposes a number into integral and fractional parts (subnormal values)', function test( t ) {
	var integral;
	var parts;
	var frac;
	var x;
	var i;

	integral = subnormal.integral;
	frac = subnormal.frac;
	x = subnormal.x;
	for ( i = 0; i < x.length; i++ ) {
		parts = modf( x[ i ] );
		t.strictEqual( parts[0], integral[i], 'returns integral part' );
		t.strictEqual( parts[1], frac[i], 'returns fractional part' );
	}
	t.end();
});

tape( 'if provided `+0`, the function returns `[+0,+0]`', function test( t ) {
	var parts = modf( +0.0 );
	t.strictEqual( isPositiveZero( parts[0] ), true, 'returns +0' );
	t.strictEqual( isPositiveZero( parts[1] ), true, 'returns +0' );
	t.end();
});

tape( 'if provided `-0`, the function returns `[-0,-0]`', function test( t ) {
	var parts = modf( -0.0 );
	t.strictEqual( isNegativeZero( parts[0] ), true, 'returns -0' );
	t.strictEqual( isNegativeZero( parts[1] ), true, 'returns -0' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `[+infinity,+0]`', function test( t ) {
	var parts = modf( PINF );
	t.strictEqual( parts[0], PINF, 'returns +infinity' );
	t.strictEqual( isPositiveZero( parts[1] ), true, 'returns +0' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `[-infinity,-0]`', function test( t ) {
	var parts = modf( NINF );
	t.strictEqual( parts[0], NINF, 'returns -infinity' );
	t.strictEqual( isNegativeZero( parts[1] ), true, 'returns -0' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `[NaN,NaN]`', function test( t ) {
	var parts = modf( NaN );
	t.strictEqual( isnan( parts[0] ), true, 'returns NaN' );
	t.strictEqual( isnan( parts[1] ), true, 'returns NaN' );
	t.end();
});

tape( 'the function supports providing an output array', function test( t ) {
	var parts;
	var out;

	out = [ 0.0, 0.0 ];
	parts = modf( out, 3.14 );

	t.strictEqual( parts, out, 'returns output array' );
	t.strictEqual( parts[ 0 ], 3.0, 'has expected first element' );
	t.strictEqual( parts[ 1 ], 0.14000000000000012, 'has expected second element' );

	t.end();
});

tape( 'the function supports providing an output typed array', function test( t ) {
	var parts;
	var out;

	out = new Float64Array( 2 );
	parts = modf( out, 3.14 );

	t.strictEqual( parts, out, 'returns output typed array' );
	t.strictEqual( parts[ 0 ], 3.0, 'has expected first element' );
	t.strictEqual( parts[ 1 ], 0.14000000000000012, 'has expected second element' );

	t.end();
});

tape( 'the function supports providing an output object', function test( t ) {
	var parts;
	var out;

	out = {
		'length': 2,
		'0': 0.0,
		'1': 0.0
	};
	parts = modf( out, 3.14 );

	t.strictEqual( parts, out, 'returns output object' );
	t.strictEqual( parts[ 0 ], 3.0, 'has expected first element' );
	t.strictEqual( parts[ 1 ], 0.14000000000000012, 'has expected second element' );

	t.end();
});
