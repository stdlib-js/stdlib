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
var pow = require( '@stdlib/math/base/special/pow' );
var uniform = require( '@stdlib/random/base/uniform' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var FLOAT64_SMALLEST_NORMAL = require( '@stdlib/constants/float64/smallest-normal' );
var FLOAT64_SMALLEST_SUBNORMAL = require( '@stdlib/constants/float64/smallest-subnormal' ); // eslint-disable-line id-length
var normalize = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof normalize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function normalizes a denormalized number, returning a normal number and an exponent', function test( t ) {
	var frac;
	var exp;
	var x1;
	var x;
	var v;
	var i;

	// Smallest denormalized number:
	v = normalize( FLOAT64_SMALLEST_SUBNORMAL );
	t.ok( v[ 0 ] >= FLOAT64_SMALLEST_NORMAL, 'returns a normal number' );
	t.strictEqual( v[ 0 ]*pow( 2, v[ 1 ] ), FLOAT64_SMALLEST_SUBNORMAL, 'x = y * 2^exp' );

	// Other subnormals...
	for ( i = 0; i < 1000; i++ ) {
		frac = uniform( 0.26, 10.0 ); // 0.26 prevents underflow
		exp = discreteUniform( -323, -309 );
		x = frac * pow( 10.0, exp );
		v = normalize( x );

		t.ok( v[ 0 ] >= FLOAT64_SMALLEST_NORMAL, 'returns a normal number ' + v[0] );

		x1 = v[ 0 ] * pow( 2.0, v[ 1 ] );
		t.strictEqual( x1, x, 'y*2^exp=x. y='+v[0]+', exp='+v[1]+', x='+x );
	}
	t.end();
});

tape( 'the function handles normalized numbers, returning a normal number and an exponent', function test( t ) {
	var frac;
	var exp;
	var x1;
	var x;
	var v;
	var i;

	for ( i = 0; i < 1000; i++ ) {
		frac = uniform( 0.0, 1.0 );
		exp = discreteUniform( 0, 308 );
		x = frac * pow( 10.0, exp );
		v = normalize( x );

		t.strictEqual( v[ 0 ], x, 'returns a normal number ' + v[0] );

		x1 = v[ 0 ] * pow( 2.0, v[ 1 ] );
		t.strictEqual( x1, x, 'y*2^exp=x. y='+v[0]+', exp='+v[1]+', x='+x );
	}
	t.end();
});

tape( 'the function returns `[0,0]` if provided a `0`', function test( t ) {
	var val = normalize( 0.0 );
	t.deepEqual( val, [0.0, 0], 'returns [0,0]' );
	t.end();
});

tape( 'the function returns `[+inf,0]` if provided a `+infinity`', function test( t ) {
	var val = normalize( PINF );
	t.deepEqual( val, [PINF, 0], 'returns [+inf,0]' );
	t.end();
});

tape( 'the function returns `[-inf,0]` if provided a `-infinity`', function test( t ) {
	var val = normalize( NINF );
	t.deepEqual( val, [NINF, 0], 'returns [-inf,0]' );
	t.end();
});

tape( 'the function returns `[NaN,0]` if provided a `NaN`', function test( t ) {
	var val = normalize( NaN );
	t.strictEqual( isnan( val[0] ), true, 'first element is NaN' );
	t.strictEqual( val[1], 0, 'second element is 0' );
	t.end();
});
