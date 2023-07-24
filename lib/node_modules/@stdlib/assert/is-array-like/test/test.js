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

/* eslint-disable object-curly-newline, no-unused-vars */

'use strict';

// MODULES //

var tape = require( 'tape' );
var MAX_ARRAY_LENGTH = require( '@stdlib/constants/array/max-array-length' );
var Float64Array = require( '@stdlib/array/float64' );
var isArrayLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isArrayLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an array-like value', function test( t ) {
	var values;
	var i;

	values = [
		[],
		{ 'length': 10 },
		new Float64Array( 10 ),
		'beep',
		arguments
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isArrayLike( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided an array-like value whose length exceeds the maximum array length', function test( t ) {
	var o = { 'length': MAX_ARRAY_LENGTH+1 };
	t.equal( isArrayLike( o ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided an array-like value whose length property is not an integer', function test( t ) {
	var o = { 'length': 3.14 };
	t.equal( isArrayLike( o ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided an array-like value whose length property is a negative integer', function test( t ) {
	var o = { 'length': -1 };
	t.equal( isArrayLike( o ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided an array-like value', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		void 0,
		NaN,
		true,
		false,
		{},
		function boop( a, b, c ) {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isArrayLike( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
