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
var exp = require( '@stdlib/math/base/special/exp' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var small = require( './fixtures/julia/small.json' );
var medium = require( './fixtures/julia/medium.json' );
var large = require( './fixtures/julia/large.json' );


// VARIABLES //

var mgf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mgf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mgf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = mgf( NaN, 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = mgf( 0.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `lambda <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mgf( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mgf( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `+infinity` for `t` and a valid `lambda`, the function returns `+infinity`', opts, function test( t ) {
	var y = mgf( PINF, 0.5 );
	t.strictEqual( y, PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `t` and a valid `lambda`, the function returns `exp(-lambda)`', opts, function test( t ) {
	var y = mgf( NINF, 0.5 );
	t.strictEqual( y, exp(-0.5), 'returns exp(-lambda)' );
	t.end();
});

tape( 'the function evaluates the mgf for `t` given a small `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var values;
	var delta;
	var tol;
	var y;
	var i;

	expected = small.expected;
	values = small.x;
	lambda = small.lambda;
	for ( i = 0; i < values.length; i++ ) {
		y = mgf( values[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 't: ' + values[ i ] + ', lambda: ' + lambda[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. t: ' + values[ i ] + '. lambda: ' + lambda[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the mgf for `t` given a medium `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var values;
	var delta;
	var tol;
	var y;
	var i;

	expected = medium.expected;
	values = medium.x;
	lambda = medium.lambda;
	for ( i = 0; i < values.length; i++ ) {
		y = mgf( values[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 't: ' + values[ i ] + ', lambda: ' + lambda[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. t: ' + values[ i ] + '. lambda: ' + lambda[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the mgf for `t` given a large range `lambda`', opts, function test( t ) {
	var expected;
	var values;
	var lambda;
	var delta;
	var tol;
	var y;
	var i;

	expected = large.expected;
	values = large.x;
	lambda = large.lambda;
	for ( i = 0; i < values.length; i++ ) {
		y = mgf( values[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 't: ' + values[ i ] + ', lambda: ' + lambda[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. t: ' + values[ i ] + '. lambda: ' + lambda[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});
