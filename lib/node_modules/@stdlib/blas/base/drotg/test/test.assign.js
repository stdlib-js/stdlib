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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var drotg = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof drotg, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( drotg.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function computes a Givens plane rotation', function test( t ) {
	var expected;
	var values;
	var out;
	var e;
	var i;
	var j;

	expected = [
		[ 0.5, 1.0/0.6, 0.6, 0.8 ],
		[ 0.5, 0.6, 0.8, 0.6 ],
		[ 0.5, -1.0/0.6, -0.6, 0.8 ],
		[ -0.5, -0.6, 0.8, -0.6 ],
		[ -0.5, 1.0/0.6, 0.6, 0.8 ],
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
		e = new Float64Array( expected[ i ] );
		out = new Float64Array( 4 );
		drotg( values[i][0], values[i][1], out, 1, 0 );
		for ( j = 0; j < out.length; j++ ) {
			t.strictEqual( isAlmostSameValue( out[ j ], e[ j ], 2 ), true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an array of NaNs if provided a rotation elimination parameter equal to NaN', function test( t ) {
	var actual;
	var i;

	actual = drotg( NaN, 1.0, new Float64Array( 4 ), 1, 0 );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value' );
	}

	actual = drotg( 1.0, NaN, new Float64Array( 4 ), 1, 0 );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value' );
	}

	actual = drotg( NaN, NaN, new Float64Array( 4 ), 1, 0 );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports providing a positive stride', function test( t ) {
	var expected;
	var actual;
	var out;
	var i;

	expected = new Float64Array( [ 0.5, 0.0, 1.0/0.6, 0.0, 0.6, 0.0, 0.8 ] );
	out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = drotg( 0.3, 0.4, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	for ( i = 0; i < out.length; i++ ) {
		t.strictEqual( isAlmostSameValue( out[ i ], expected[ i ], 2 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports providing a negative stride', function test( t ) {
	var expected;
	var actual;
	var out;
	var i;

	expected = new Float64Array( [ 0.8, 0.0, 0.6, 0.0, 1.0/0.6, 0.0, 0.5 ] );
	out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = drotg( 0.3, 0.4, out, -2, 6 );
	t.strictEqual( actual, out, 'returns expected value' );
	for ( i = 0; i < out.length; i++ ) {
		t.strictEqual( isAlmostSameValue( out[ i ], expected[ i ], 2 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports providing a positive offset', function test( t ) {
	var expected;
	var actual;
	var out;
	var i;

	expected = new Float64Array( [ 0.0, 0.5, 1.0/0.6, 0.6, 0.8 ] );
	out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = drotg( 0.3, 0.4, out, 1, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	for ( i = 0; i < out.length; i++ ) {
		t.strictEqual( isAlmostSameValue( out[ i ], expected[ i ], 2 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports providing both a stride and offset', function test( t ) {
	var expected;
	var actual;
	var out;
	var i;

	expected = new Float64Array( [ 0.0, 0.0, 0.5, 0.0, 1.0/0.6, 0.0, 0.6, 0.0, 0.8 ] ); // eslint-disable-line max-len
	out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = drotg( 0.3, 0.4, out, 2, 2 );
	t.strictEqual( actual, out, 'returns expected value' );
	for ( i = 0; i < out.length; i++ ) {
		t.strictEqual( isAlmostSameValue( out[ i ], expected[ i ], 2 ), true, 'returns expected value' );
	}
	t.end();
});
