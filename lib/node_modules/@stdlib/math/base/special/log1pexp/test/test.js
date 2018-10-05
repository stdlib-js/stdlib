/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var EPS = require( '@stdlib/constants/math/float64-eps' );
var log1pexp = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/r/data.json' );
var expected = require( './fixtures/r/expected.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof log1pexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = log1pexp( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'the function computes the natural logarithm of `1+exp(x)` (`x <= -37`)', function test( t ) {
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = -37.0 - ( randu()*100.0 );
		x = log1pexp( v );
		y = exp( v );
		t.strictEqual( x, y, 'returns '+y+' when provided '+v );
	}
	t.end();
});

tape( 'the function computes the natural logarithm of `1+exp(x)` (`x > 33.3`)', function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = 33.3 + EPS + ( randu()*100.0 );
		x = log1pexp( v );
		t.strictEqual( x, v, 'returns '+v+' when provided '+v );
	}
	t.end();
});

tape( 'the function accurately computes the natural logarithm of `1+exp(x)`', function test( t ) {
	var actual;
	var delta;
	var tol;
	var i;

	for ( i = 0; i < data.length; i++ ) {
		actual = log1pexp( data[ i ] );
		if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected[ i ], 'returns '+actual+' when provided ' + data[ i ]);
		} else {
			delta = abs( actual - expected[ i ] );
			tol = 85.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+data[ i ]+'. actual: '+actual+'. expected: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
