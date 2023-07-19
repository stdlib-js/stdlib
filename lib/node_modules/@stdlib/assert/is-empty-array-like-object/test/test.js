/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var isEmptyArrayLikeObject = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEmptyArrayLikeObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an empty array-like object', function test( t ) {
	var values;
	var i;

	values = [
		[],
		{ 'length': 0 }, // eslint-disable-line object-curly-newline
		new Float64Array( [] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isEmptyArrayLikeObject( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a non-empty array-like object', function test( t ) {
	var values;
	var i;

	values = [
		[ 1.0, 2.0, 3.0 ],
		{ 'length': 10 }, // eslint-disable-line object-curly-newline
		new Float64Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isEmptyArrayLikeObject( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		5,
		null,
		void 0,
		NaN,
		true,
		false,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isEmptyArrayLikeObject( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
