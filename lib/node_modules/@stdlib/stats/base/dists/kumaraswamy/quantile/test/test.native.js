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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/base/randu' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// VARIABLES //

var quantile = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( quantile instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( NaN, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = quantile( 0.2, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = quantile( 0.2, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a valid `a` and `b`, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( 1.1, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = quantile( -0.1, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `a`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = quantile( 0.2, 0.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, NINF, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, NINF, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `b`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = quantile( 0.2, 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, 2.0, -1/0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.2, NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the quantile function of a Kumaraswamy\'s double bounded distribution', opts, function test( t ) {
	var a;
	var b;
	var p;
	var y;
	var i;

	// TODO: Add fixtures
	for ( i = 0; i < 100; i++ ) {
		p = randu();
		a = ( randu()*5.0 ) + EPS;
		b = ( randu()*5.0 ) + EPS;
		y = quantile( p, a, b );
		t.strictEqual( isNumber( y ), true, 'returns expected value' );
	}
	t.end();
});
