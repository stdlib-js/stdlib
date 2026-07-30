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


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var kurtosis = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kurtosis instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kurtosis, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for the parameter, the function returns `NaN`', opts, function test( t ) {
	var y = kurtosis( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a non-positive `k`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = kurtosis( -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = kurtosis( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the excess kurtosis of a chi distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var k;
	var i;
	var y;

	expected = data.expected;
	k = data.k;
	for ( i = 0; i < expected.length; i++ ) {
		y = kurtosis( k[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'k:'+k[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1e-8 * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. k: '+k[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
