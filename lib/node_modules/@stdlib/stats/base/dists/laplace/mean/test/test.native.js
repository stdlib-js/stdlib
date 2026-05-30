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


// VARIABLES //

var mean = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( mean instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mean, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = mean( NaN, 1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = mean( 1.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `b`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mean( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the expected value of a Laplace distribution', opts, function test( t ) {
	var expected;
	var mu;
	var b;
	var i;
	var y;

	expected = data.expected;
	b = data.b;
	mu = data.mu;
	for ( i = 0; i < expected.length; i++ ) {
		y = mean( mu[i], b[i] );
		t.strictEqual( y, expected[i], 'mu: '+mu[i]+', b: '+b[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
