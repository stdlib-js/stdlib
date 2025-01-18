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
var Float32Array = require( '@stdlib/array/float32' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var srotg = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof srotg, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 2', function test( t ) {
	t.strictEqual( srotg.length, 2, 'returns expected value' );
	t.end();
});

tape( 'the function computes a Givens plane rotation', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	expected = [
		[ 0.5, 1.6666666, 0.6, 0.8 ],
		[ 0.5, 0.6, 0.8, 0.6 ],
		[ 0.5, -1.6666666, -0.6, 0.8 ],
		[ -0.5, -0.6, 0.8, -0.6 ],
		[ -0.5, 1.6666666, 0.6, 0.8 ],
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
		expected[i] = new Float32Array( expected[i] );
		out = srotg( float64ToFloat32( values[i][0] ), float64ToFloat32( values[i][1] ) ); // eslint-disable-line max-len
		t.deepEqual( out, expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array of NaNs if provided a rotational elimination parameter equal to NaN', function test( t ) {
	var actual;
	var i;

	actual = srotg( NaN, 1.0 );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnanf( actual[i] ), true, 'returns expected value' );
	}

	actual = srotg( 1.0, NaN );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnanf( actual[i] ), true, 'returns expected value' );
	}

	actual = srotg( NaN, NaN );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnanf( actual[i] ), true, 'returns expected value' );
	}
	t.end();
});
