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
var imuldw = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/c/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof imuldw, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v;

	v = imuldw( NaN, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = imuldw( 1, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = imuldw( NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the double word product of two (signed) words', function test( t ) {
	var expected;
	var actual;
	var a;
	var b;
	var i;

	a = data.a;
	b = data.b;
	expected = data.expected;
	for ( i = 0; i < expected.length; i++ ) {
		actual = imuldw( a[ i ], b[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. a: '+a[i]+'. b: '+b[i]+'. expected: ['+expected[i].join(',')+']' );

		actual = imuldw( b[ i ], a[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. a: '+b[i]+'. b: '+a[i]+'. expected: ['+expected[i].join(',')+']' );
	}
	t.end();
});
