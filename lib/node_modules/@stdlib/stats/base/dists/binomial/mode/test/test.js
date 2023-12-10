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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var mode = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mode, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var v = mode( NaN, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( 10, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( NaN, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var v;

	v = mode( 1.5, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( -2, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( -1, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( 2.5, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( PINF, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', function test( t ) {
	var v;

	v = mode( 20, -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( 20, 1.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( 20, NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( 20, PINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the mode of a binomial distribution', function test( t ) {
	var n;
	var p;
	var y;
	var i;

	for ( i = 0; i < 10; i++ ) {
		n = floor( randu() * 100.0 );
		p = randu();
		y = mode( n, p );
		t.equal( y, floor( ( n+1 ) * p ), 'returns mode' );
	}
	t.end();
});
