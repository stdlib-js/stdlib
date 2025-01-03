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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var smallP = require( './fixtures/julia/small_p.json' );
var largeP = require( './fixtures/julia/large_p.json' );


// VARIABLES //

var pmf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pmf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pmf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = pmf( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = pmf( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a valid `p`, the function returns `0`', opts, function test( t ) {
	var y = pmf( PINF, 0.01 );
	t.equal( y, 0.0, 'returns 0' );
	t.end();
});

tape( 'if provided a negative integer for `x` and a valid `p`, the function returns `0`', opts, function test( t ) {
	var y = pmf( -20.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -4.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( -1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a non-integer for `x` and a valid `p`, the function returns `0`', opts, function test( t ) {
	var y = pmf( -1.3, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 2.4, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pmf( 0.5, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function always returns `NaN`', opts, function test( t ) {
	var y;

	y = pmf( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pmf( 0.0, 1.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the pmf for `x` given small parameter `p`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var p;
	var y;
	var i;

	expected = smallP.expected;
	x = smallP.x;
	p = smallP.p;
	for ( i = 0; i < x.length; i++ ) {
		y = pmf( x[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. p:'+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pmf for `x` given large parameter `p`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var p;
	var y;
	var i;

	expected = largeP.expected;
	x = largeP.x;
	p = largeP.p;
	for ( i = 0; i < x.length; i++ ) {
		y = pmf( x[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.5 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
