/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var scale = require( './../lib/strided.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scale, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function scales a complex number', function test( t ) {
	var expected;
	var out;
	var z1;
	var v;

	z1 = new Float64Array( [ 5.0, 3.0 ] );
	out = new Float64Array( 2 );
	v = scale( 5.0, z1, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 25.0, 15.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	z1 = new Float64Array( [ 5.0, 0.0, 3.0, 0.0 ] );
	out = new Float64Array( 4 );
	v = scale( 5.0, z1, 2, 0, out, 2, 0 );

	expected = new Float64Array( [ 25.0, 0.0, 15.0, 0.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	z1 = new Float64Array( [ 3.0, 5.0 ] );
	out = new Float64Array( 4 );
	v = scale( 5.0, z1, -1, 1, out, -2, 3 );

	expected = new Float64Array( [ 0.0, 15.0, 0.0, 25.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, the respective component is `NaN`', function test( t ) {
	var expected;
	var out;
	var z1;
	var v;

	z1 = new Float64Array( [ NaN, 3.0 ] );
	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, 15.0 ] );

	v = scale( 5.0, z1, 1, 0, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	z1 = new Float64Array( [ 5.0, NaN ] );
	out = new Float64Array( 2 );
	expected = new Float64Array( [ 25.0, NaN ] );

	v = scale( 5.0, z1, 1, 0, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	z1 = new Float64Array( [ 5.0, 3.0 ] );
	out = new Float64Array( 2 );
	expected = new Float64Array( [ NaN, NaN ] );

	v = scale( NaN, z1, 1, 0, out, 1, 0 );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});
