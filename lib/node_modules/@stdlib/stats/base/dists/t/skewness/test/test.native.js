/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var NINF = require( '@stdlib/constants/float64/ninf' );


// VARIABLES //

var skewness = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( skewness instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof skewness, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `v`, the function returns `NaN`', opts, function test( t ) {
	var v = skewness( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a degrees of freedom `v <= 3`, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = skewness( 3.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( 2.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( 1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( 0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = skewness( NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the skewness of a Student\'s t distribution', opts, function test( t ) {
	var expected;
	var v;
	var i;
	var y;

	expected = data.expected;
	v = data.v;
	for ( i = 0; i < expected.length; i++ ) {
		y = skewness( v[i] );
		t.equal( y, expected[i], 'v: '+v[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
