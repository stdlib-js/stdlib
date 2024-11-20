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
var randu = require( '@stdlib/random/base/randu' );
var asum = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof asum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( asum.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function computes the sum of absolute values', function test( t ) {
	var x;
	var y;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];

	y = asum( x.length, x, 1, 0 );

	t.strictEqual( y, 15.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var x;
	var y;
	var N;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	N = 3;

	y = asum( N, x, 2, 0 );

	t.strictEqual( y, 9.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var x;
	var y;
	var N;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	N = 3;

	y = asum( N, x, 1, 2 );

	t.strictEqual( y, 12.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var x;
	var y;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];

	y = asum( -1, x, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = asum( 0, x, 1, 0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var x;
	var y;
	var N;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	N = 2;

	y = asum( N, x, -2, x.length-2 );

	t.strictEqual( y, 6.0, 'returns expected value' );
	t.end();
});

tape( 'if the stride equals `1`, the function efficiently sums the absolute values', function test( t ) {
	var sign;
	var N;
	var x;
	var y;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * (i+1);
	}

	y = asum( x.length, x, 1, 0 );

	// Compare to closed-form formula:
	t.strictEqual( y, x.length*(x.length+1)/2, 'returns expected value' );

	x = new Array( 240 );
	for ( i = 0; i < x.length; i++ ) {
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * (i-5);
	}

	N = x.length - 6;
	y = asum( N, x, 1, 6 );

	// Compare to closed-form formula:
	t.strictEqual( y, N*(N+1)/2, 'returns expected value' );

	t.end();
});
