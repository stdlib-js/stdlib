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
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var data1 = require( './fixtures/julia/data1.json' );
var data2 = require( './fixtures/julia/data2.json' );


// VARIABLES //

var median = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( median instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof median, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = median( NaN, 1.0, 0.5 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = median( 0.0, NaN, 0.5 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = median( 0.0, 10.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided parameters not satisfying `a <= c <= b`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = median( -1.0, -1.1, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = median( 3.0, 2.0, 2.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = median( 0.0, 1.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = median( 0.0, 1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the median of a triangular distribution if provided parameters satisfy `c < (a + b) / 2`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var i;
	var y;

	expected = data1.expected;
	a = data1.a;
	b = data1.b;
	c = data1.c;
	for ( i = 0; i < expected.length; i++ ) {
		y = median( a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns the median of a triangular distribution if provided parameters satisfy `c >= (a + b) / 2`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var i;
	var y;

	expected = data2.expected;
	a = data2.a;
	b = data2.b;
	c = data2.c;
	for ( i = 0; i < expected.length; i++ ) {
		y = median( a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
