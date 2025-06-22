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
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var variance = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( variance instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof variance, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for the parameter, the function returns `NaN`', opts, function test( t ) {
	var y = variance( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `v <= 1`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = variance( 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = variance( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = variance( -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `1 < v <= 2`, the function returns `Infinity`', opts, function test( t ) {
	var y;

	y = variance( 2.0 );
	t.equal( y, PINF, 'returns Infinity' );

	y = variance( 1.5 );
	t.equal( y, PINF, 'returns Infinity' );

	y = variance( 1.1 );
	t.equal( y, PINF, 'returns Infinity' );

	t.end();
});

tape( 'the function evaluates the variance for a Student\'s t-distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var v;
	var y;
	var i;

	expected = data.expected;
	v = data.v;
	for ( i = 0; i < v.length; i++ ) {
		y = variance( v[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'v: ' + v[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. v: ' + v[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});
