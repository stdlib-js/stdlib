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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var mode = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mode instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mode, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = mode( NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = mode( 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `sigma`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mode( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mode( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mode( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mode( 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mode( PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mode( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mode( NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the mode of a normal distribution', opts, function test( t ) {
	var expected;
	var sigma;
	var mu;
	var y;
	var i;

	expected = data.expected;
	mu = data.mu;
	sigma = data.sigma;
	for ( i = 0; i < mu.length; i++ ) {
		y = mode( mu[i], sigma[i] );
		t.strictEqual( y, expected[i], 'mu:'+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
