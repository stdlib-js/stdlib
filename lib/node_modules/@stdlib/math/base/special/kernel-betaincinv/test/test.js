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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var kernelBetaincinv = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/cpp/output.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelBetaincinv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function', function test( t ) {
	var expected;
	var y;
	var i;
	var a;
	var b;
	var p;

	p = data.p;
	a = data.a;
	b = data.b;
	expected = data.y;
	for ( i = 0; i < p.length; i++ ) {
		y = kernelBetaincinv( a[i], b[i], p[i], 1.0-p[i] )[ 0 ];
		t.strictEqual( isAlmostSameValue( y, expected[ i ], 20 ), true, 'returns expected value' );
	}
	t.end();
});
