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
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tryRequire = require( '@stdlib/utils/try-require' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


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
	var v = mode( NaN, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mode( 10.0, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `alpha <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mode( -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `beta <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = mode( 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mode( NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the mode of a beta prime distribution', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var i;
	var y;

	for ( i = 0; i < 100; i++ ) {
		alpha = ( randu() * 10.0 ) + EPS;
		beta = ( randu() * 10.0 ) + EPS;
		y = mode( alpha, beta );
		expected = ( alpha >= 1.0 ) ? ( alpha-1.0 ) / ( beta+1.0 ) : 0.0;
		t.strictEqual( y, expected, 'returns mode' );
	}
	t.end();
});
