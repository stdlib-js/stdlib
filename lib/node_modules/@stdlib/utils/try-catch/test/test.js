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
var trycatch = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof trycatch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
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
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			trycatch( value, 1.0 );
		};
	}
});

tape( 'if a function does not throw, the function returns the return value of the provided function', function test( t ) {
	var z;

	function x() {
		return 'beep';
	}

	z = trycatch( x, 'boop' );
	t.strictEqual( z, 'beep', 'returns expected value' );

	t.end();
});

tape( 'if a provided function throws, the function returns the second argument', function test( t ) {
	var z;

	function x() {
		throw new Error( 'beep' );
	}

	z = trycatch( x, 'boop' );
	t.strictEqual( z, 'boop', 'returns expected value' );

	t.end();
});
