/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var tryRequire = require( '@stdlib/utils/try-require' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

var variance = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( variance instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof variance, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = variance( NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = variance( 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = variance( NaN, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `mu`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = variance( 0.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `lambda`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = variance( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the variance of a Wald distribution', opts, function test( t ) {
	var expected;
	var lambda;
	var mu;
	var y;
	var i;

	expected = data.expected;
	mu = data.mu;
	lambda = data.lambda;
	for ( i = 0; i < mu.length; i++ ) {
		y = variance( mu[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'mu:'+mu[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 20 ), 'within tolerance. mu: '+mu[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});
