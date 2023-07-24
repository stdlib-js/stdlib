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
var Number = require( '@stdlib/number/ctor' );
var isEven = require( './../lib/primitive.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEven, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a primitive even number', function test( t ) {
	t.equal( isEven( -4.0 ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a number object, even if the number is even', function test( t ) {
	t.equal( isEven( new Number( 4.0 ) ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided an even number', function test( t ) {
	var values;
	var i;

	values = [
		'4',
		5.0,
		null,
		true,
		void 0,
		[],
		{},
		function noop() {},
		Number.POSITIVE_INFINITY,
		Number.NEGATIVE_INFINITY,
		NaN
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isEven( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
