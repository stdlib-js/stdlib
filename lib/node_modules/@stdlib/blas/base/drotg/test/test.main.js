/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var drotg = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof drotg, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 2', function test( t ) {
	t.strictEqual( drotg.length, 2, 'arity of 2' );
	t.end();
});

tape( 'the function computes a Givens plane rotation', function test( t ) {
	var expected;
	var values;
	var delta;
	var tol;
	var out;
	var i;
	var j;
	var e;

	expected = [
		[ 0.5, 1.0 / 0.6, 0.6, 0.8 ],
		[ 0.5, 0.6, 0.8, 0.6 ],
		[ 0.5, -1.0 / 0.6, -0.6, 0.8 ],
		[ -0.5, -0.6, 0.8, -0.6 ],
		[ -0.5, 1.0 / 0.6, 0.6, 0.8 ],
		[ 0.0, 0.0, 1.0, 0.0 ],
		[ 1.0, 1.0, 0.0, 1.0 ],
		[ 1.0, 0.0, 1.0, 0.0 ]
	];
	values = [
		[ 0.3, 0.4 ],
		[ 0.4, 0.3 ],
		[ -0.3, 0.4 ],
		[ -0.4, 0.3 ],
		[ -0.3, -0.4 ],
		[ 0.0, 0.0 ],
		[ 0.0, 1.0 ],
		[ 1.0, 0.0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		e = new Float64Array( expected[i] );
		out = drotg( values[i][0], values[i][1] );
		for ( j = 0; j < out.length; j++ ) {
			if ( out[j] === expected[j] ) {
				t.strictEqual( out[j], e[j], 'returns expected value' );
			} else {
				delta = abs( out[j] - e[j] );
				tol = 1.5 * EPS * abs( e[j] );
				t.ok( delta <= tol, 'within tolerance. out: '+out[j]+'. expected: '+e[j]+'. delta: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function returns an array of NaNs if provided a rotational elimination parameter equal to NaN', function test( t ) {
	var actual;
	var i;

	actual = drotg( NaN, 1.0 );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[i] ), true, 'returns expected value' );
	}

	actual = drotg( 1.0, NaN );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[i] ), true, 'returns expected value' );
	}

	actual = drotg( NaN, NaN );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[i] ), true, 'returns expected value' );
	}
	t.end();
});
