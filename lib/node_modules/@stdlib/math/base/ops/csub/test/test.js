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
var csub = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof csub, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function subtracts two complex numbers', function test( t ) {
	var expected;
	var v;

	v = csub( 5.0, 3.0, -2.0, 1.0 );
	expected = [ 7.0, 2.0 ];

	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function subtracts two complex numbers (output array)', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Array( 2 );
	v = csub( out, 5.0, 3.0, -2.0, 1.0 );

	expected = [ 7.0, 2.0 ];

	t.deepEqual( v, expected, 'returns expected value' );
	t.strictEqual( v, out, 'returns output value' );

	t.end();
});

tape( 'the function subtracts two complex numbers (output typed array)', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float64Array( 2 );
	v = csub( out, 5.0, 3.0, -2.0, 1.0 );

	expected = new Float64Array( [ 7.0, 2.0 ] );

	t.deepEqual( v, expected, 'returns expected value' );
	t.strictEqual( v, out, 'returns output value' );

	t.end();
});

tape( 'the function subtracts two complex numbers (output object)', function test( t ) {
	var expected;
	var out;
	var v;

	out = {};
	v = csub( out, 5.0, 3.0, -2.0, 1.0 );

	expected = {
		'0': 7.0,
		'1': 2.0
	};

	t.deepEqual( v, expected, 'returns expected value' );
	t.strictEqual( v, out, 'returns output value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, the resulting component is `NaN`', function test( t ) {
	var v;

	v = csub( NaN, 3.0, -2.0, 1.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( v[ 1 ], 2.0, 'returns expected value' );

	v = csub( 5.0, NaN, -2.0, 1.0 );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.strictEqual( v[ 0 ], 7.0, 'returns expected value' );

	v = csub( 5.0, 3.0, NaN, 1.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( v[ 1 ], 2.0, 'returns expected value' );

	v = csub( 5.0, 3.0, -2.0, NaN );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.strictEqual( v[ 0 ], 7.0, 'returns expected value' );

	v = csub( 5.0, 3.0, NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = csub( NaN, NaN, -2.0, 1.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = csub( NaN, NaN, NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	t.end();
});
