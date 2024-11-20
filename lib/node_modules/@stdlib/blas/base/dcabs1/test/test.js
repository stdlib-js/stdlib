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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var dcabs1 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcabs1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the sum of the absolute values of the real and imaginary components of a complex number', function test( t ) {
	var expected;
	var re;
	var im;
	var y;
	var i;

	re = new Float64Array( [ 5.0, -3.0, 0.0, 0.0, 3.0 ] );
	im = new Float64Array( [ 3.0, 4.0, 0.0, -0.0, 0.0 ] );
	expected = new Float64Array( [ 8.0, 7.0, 0.0, 0.0, 3.0 ] );

	for ( i = 0; i < re.length; i++ ) {
		y = dcabs1( new Complex128( re[ i ], im[ i ] ) );
		t.equal( y, expected[ i ], 'returns expected value. re: '+re[ i ]+'. im: '+im[ i ]+'. expected: '+expected[ i ]+'.' );
	}
	t.end();
});

tape( 'if either the real or imaginary component is `NaN`, the function returns `NaN`', function test( t ) {
	var v;

	v = dcabs1( new Complex128( NaN, 3.0 ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dcabs1( new Complex128( 5.0, NaN ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = dcabs1( new Complex128( NaN, NaN ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});
