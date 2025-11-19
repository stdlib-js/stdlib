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
var Float64Array = require( '@stdlib/array/float64' );
var umuldw = require( './../lib/assign.js' );


// FIXTURES //

var data = require( './fixtures/c/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof umuldw, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var out;
	var v;

	out = [ 0, 0 ];
	v = umuldw( NaN, 1, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );

	out = [ 0, 0 ];
	v = umuldw( 1, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );

	out = [ 0, 0 ];
	v = umuldw( NaN, NaN, out, 1, 0 );
	t.strictEqual( v, out, 'returns output array' );
	t.strictEqual( isnan( v[0] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[1] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the double word product of two (unsigned) words', function test( t ) {
	var expected;
	var actual;
	var out;
	var a;
	var b;
	var i;

	a = data.a;
	b = data.b;
	expected = data.expected;
	for ( i = 0; i < expected.length; i++ ) {
		out = [ 0, 0 ];
		actual = umuldw( a[ i ], b[ i ], out, 1, 0 );
		t.strictEqual( actual, out, 'returns output array' );
		t.deepEqual( actual, expected[ i ], 'returns expected value. a: '+a[i]+'. b: '+b[i]+'. expected: ['+expected[i].join(',')+']');
	}
	t.end();
});

tape( 'the function supports providing an output array', function test( t ) {
	var parts;
	var out;

	out = [ 0, 0 ];
	parts = umuldw( 3, 5, out, 1, 0 );

	t.strictEqual( parts, out, 'returns output array' );
	t.strictEqual( parts[ 0 ], 0, 'has expected first element' );
	t.strictEqual( parts[ 1 ], 15, 'has expected second element' );

	t.end();
});

tape( 'the function supports providing an output typed array', function test( t ) {
	var parts;
	var out;

	out = new Float64Array( 2 );
	parts = umuldw( 3, 5, out, 1, 0 );

	t.strictEqual( parts, out, 'returns output typed array' );
	t.strictEqual( parts[ 0 ], 0, 'has expected first element' );
	t.strictEqual( parts[ 1 ], 15, 'has expected second element' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = umuldw( 3, 5, out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], 15, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = umuldw( 3, 5, out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.strictEqual( val[ 3 ], 15, 'returns expected value' );

	t.end();
});
