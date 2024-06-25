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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/realf' );
var Complex64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `of` method for creating a complex number array from a variable number of arguments', function test( t ) {
	var arr;

	t.strictEqual( hasOwnProp( Complex64Array, 'of' ), true, 'has property' );
	t.strictEqual( isFunction( Complex64Array.of ), true, 'has method' );

	arr = Complex64Array.of();
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a constructor', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex64Array.of.call( value, 1.0, 1.0 );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex array constructor', function test( t ) {
	var values;
	var i;

	values = [
		Complex64,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex64Array.of.call( value, 1.0, 1.0 );
		};
	}
});

tape( 'the method returns a complex number array', function test( t ) {
	var arr;
	var z;
	var v;

	// No arguments:
	arr = Complex64Array.of();
	t.strictEqual( arr instanceof Complex64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	// Interleaved real and imaginary components:
	arr = Complex64Array.of( 1.0, 2.0, 3.0, 4.0 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	// Complex numbers:
	z = new Complex64( 1.0, 1.0 );
	arr = Complex64Array.of( z, z, z, z, z );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 5, 'returns expected value' );

	// Mixed arguments:
	z = new Complex64( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = Complex64Array.of( z, 1.0 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	z = new Complex64( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = Complex64Array.of( 1.0, z );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	t.end();

	function valueOf( z ) {
		return function valueOf() {
			return realf( z );
		};
	}
});
