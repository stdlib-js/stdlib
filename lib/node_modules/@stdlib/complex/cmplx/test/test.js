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
var instanceOf = require( '@stdlib/assert/instance-of' );
var complex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof complex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'complex',
		'int32',
		'uint32',
		'int16',
		'uint16',
		'int8',
		'uint8',
		'uint8',
		'Float64',
		'Float32',
		'FLOAT64',
		'FLOAT32',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			complex( 5.0, 3.0, value );
		};
	}
});

tape( 'the function returns a complex number (default)', function test( t ) {
	var z = complex( 3.14, -3.14 );
	t.strictEqual( instanceOf( z, Complex128 ), true, 'returns expected value' );
	t.strictEqual( z.re, 3.14, 'returns expected value' );
	t.strictEqual( z.im, -3.14, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number (float64)', function test( t ) {
	var z = complex( 3.14, -3.14, 'float64' );
	t.strictEqual( instanceOf( z, Complex128 ), true, 'returns expected value' );
	t.strictEqual( z.re, 3.14, 'returns expected value' );
	t.strictEqual( z.im, -3.14, 'returns expected value' );
	t.end();
});

tape( 'the function returns a complex number (float32)', function test( t ) {
	var z = complex( 3.14, -3.14, 'float32' );
	t.strictEqual( instanceOf( z, Complex64 ), true, 'returns expected value' );
	t.strictEqual( z.re, 3.140000104904175, 'returns expected value' );
	t.strictEqual( z.im, -3.140000104904175, 'returns expected value' );
	t.end();
});
