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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var smallC = require( './fixtures/python/small_c.json' );
var mediumC = require( './fixtures/python/medium_c.json' );
var largeC = require( './fixtures/python/large_c.json' );


// VARIABLES //

var pdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pdf( NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 0.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `c <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pdf( 0.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 0.5, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pdf( 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a number outside [0,1] for `x` and a valid `c`, the function returns `0`', opts, function test( t ) {
	var y;

	y = pdf( 2.0, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( -0.5, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( NINF, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( PINF, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the pdf for `x` given small parameter `c`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var c;
	var y;
	var i;

	expected = smallC.expected;
	x = smallC.x;
	c = smallC.c;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], c[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.strictEqual( y, expected[i], 'x: '+x[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[i] );
				tol = 2.2 * EPS * abs( expected[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the pdf for `x` given medium parameter `c`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var c;
	var y;
	var i;

	expected = mediumC.expected;
	x = mediumC.x;
	c = mediumC.c;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], c[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.strictEqual( y, expected[i], 'x: '+x[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[i] );
				tol = 2.2 * EPS * abs( expected[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the pdf for `x` given large parameter `c`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var c;
	var y;
	var i;

	expected = largeC.expected;
	x = largeC.x;
	c = largeC.c;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], c[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.strictEqual( y, expected[i], 'x: '+x[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[i] );
				tol = 2.2 * EPS * abs( expected[i] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});
