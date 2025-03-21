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
var PINF = require( '@stdlib/constants/float64/pinf' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var PYTHON_DATA = require( './fixtures/python/data.json' );
var R_DATA = require( './fixtures/r/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var cdf = factory( 2.0, 2.0 );
	t.equal( typeof cdf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 2.5, 3.0 );
	y = cdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	cdf = factory( NaN, 3.0 );
	y = cdf( 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	cdf = factory( 3.0, NaN );
	y = cdf( 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	cdf = factory( NaN, NaN );
	y = cdf( 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	cdf = factory( NaN, NaN );
	y = cdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `r < 2` or `v < 2`, the created function returns `NaN`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 1.5, 2.0 );
	y = cdf( 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	cdf = factory( 2.0, 1.5 );
	y = cdf( 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	cdf = factory( 1.5, 1.5 );
	y = cdf( 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided valid parameters, the function returns a function which returns `+infinity` when provided `1`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 3.0, 2.0 );
	y = cdf( 1.0 );
	t.equal( y, PINF, 'returns +infinitt' );

	t.end();
});

tape( 'if provided valid parameters, the function returns a function which returns `0` when provided `0`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 3.0, 2.0 );
	y = quantile( 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided valid parameters, the function returns a function which returns `NaN` when provided a number outside `[0,1]` for `p`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 3.0, 3.0 );
	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the quantile function (matching Python\'s implementation to the 3rd decimal place)', function test( t ) {
	var expected;
	var quantile;
	var r;
	var v;
	var i;
	var p;
	var y;

	expected = PYTHON_DATA.expected;
	p = PYTHON_DATA.p;
	r = PYTHON_DATA.r;
	v = PYTHON_DATA.v;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( r[ i ], v[ i ] );
		y = quantile( p[i] );
		t.equal( roundn( y, -2 ), roundn( expected[i], -2 ), 'p: '+p[i]+', r: '+r[i]+', v: '+v[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the created function evaluates the quantile function (matching R\'s implementation to the 3rd decimal place)', function test( t ) {
	var expected;
	var quantile;
	var r;
	var v;
	var i;
	var p;
	var y;

	expected = R_DATA.expected;
	p = R_DATA.p;
	r = R_DATA.r;
	v = R_DATA.v;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( r[ i ], v[ i ] );
		y = quantile( p[i] );
		t.equal( roundn( y, -2 ), roundn( expected[i], -2 ), 'p: '+p[i]+', r: '+r[i]+', v: '+v[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
