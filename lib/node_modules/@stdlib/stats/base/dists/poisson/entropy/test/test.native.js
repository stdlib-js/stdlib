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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

var entropy = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( entropy instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof entropy, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `lambda`, the function returns `NaN`', opts, function test( t ) {
	var v = entropy( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a mean parameter `lambda` that is not a nonnegative number, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = entropy( -1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = entropy( NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `lambda` equal to `0`, the function returns `0`', opts, function test( t ) {
	var v;

	v = entropy( 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the entropy of a Poisson distribution', opts, function test( t ) {
	var expected;
	var lambda;
	var y;
	var i;

	expected = data.expected;
	lambda = data.lambda;
	for ( i = 0; i < expected.length; i++ ) {
		y = entropy( lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 20 ), 'within tolerance. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});
