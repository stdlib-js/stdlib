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
var Number = require( '@stdlib/number/ctor' );
var isNonNegativeFinite = require( './../lib/primitive.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNonNegativeFinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a primitive number having a nonnegative finite value', function test( t ) {
	t.equal( isNonNegativeFinite( 3.0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided a number object, even if the number has a nonnegative finite value', function test( t ) {
	t.equal( isNonNegativeFinite( new Number( 5.0 ) ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided positive infinity (primitive)', function test( t ) {
	t.equal( isNonNegativeFinite( 1.0/0.0 ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if provided positive infinity (object)', function test( t ) {
	t.equal( isNonNegativeFinite( new Number( 1.0/0.0 ) ), false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a nonnegative finite number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		new Number( -1.0 ),
		-3.14,
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isNonNegativeFinite( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});
