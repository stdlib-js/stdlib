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

var skewness = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( skewness instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof skewness, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = skewness( NaN, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( 10.0, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `a`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = skewness( 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `b`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = skewness( 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( 2.0, -1/0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = skewness( NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the skewness of a Kumaraswamy\'s double bounded distribution', opts, function test( t ) {
	var a;
	var b;
	var i;
	var y;

	// TODO: Add fixtures
	for ( i = 0; i < 100; i++ ) {
		a = ( randu()*5.0 ) + EPS;
		b = ( randu()*5.0 ) + EPS;
		y = skewness( a, b );
		t.equal( isNumber( y ), true, 'returns a number' );
	}
	t.end();
});
