/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var cdf = require( './../lib' );


// FIXTURES //

var PYTHON_DATA = require( './fixtures/python/data.json' );
var R_DATA = require( './fixtures/r/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = cdf( NaN, 3.0, 3.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = cdf( 1.0, NaN, 3.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = cdf( 1.0, 3.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `r < 2` or `v < 2`, the function returns `NaN`', function test( t ) {
	var y = cdf( 2.5, 1.0, 3.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = cdf( 2.5, 3.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'the function evaluates the cdf for `x` (matching R\'s implementation to the 3rd decimal place)', function test( t ) {
	var expected;
	var r;
	var v;
	var i;
	var x;
	var y;

	expected = R_DATA.expected;
	x = R_DATA.x;
	r = R_DATA.r;
	v = R_DATA.v;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], r[i], v[i] );
		t.equal( roundn( y, -2 ), roundn( expected[i], -2 ), 'x: '+x[i]+', r: '+r[i]+', v: '+v[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` (matching Python\'s implementation to the 3rd decimal place)', function test( t ) {
	var expected;
	var r;
	var v;
	var i;
	var x;
	var y;

	expected = PYTHON_DATA.expected;
	x = PYTHON_DATA.x;
	r = PYTHON_DATA.r;
	v = PYTHON_DATA.v;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], r[i], v[i] );
		t.equal( roundn( y, -2 ), roundn( expected[i], -2 ), 'x: '+x[i]+', r: '+r[i]+', v: '+v[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
