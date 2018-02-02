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
var Complex128 = require( '@stdlib/complex/float64' );
var Complex64 = require( '@stdlib/complex/float32' );
var conj = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof conj, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the complex conjugate of a complex number', function test( t ) {
	var v;
	var z;

	z = new Complex128( 3.14, -3.14 );
	v = conj( z );
	t.strictEqual( v.re, 3.14, 'returns expected value' );
	t.strictEqual( v.im, 3.14, 'returns expected value' );

	z = new Complex64( 3.14, -3.14 );
	v = conj( z );
	t.strictEqual( v.re, 3.140000104904175, 'returns expected value' );
	t.strictEqual( v.im, 3.140000104904175, 'returns expected value' );

	t.end();
});
