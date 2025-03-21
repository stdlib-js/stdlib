/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isTriangularNumber = require( './../lib/object.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isTriangularNumber, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a number object having a triangular number', function test( t ) {
	t.equal( isTriangularNumber( new Number( 36.0 ) ), true, 'returns true' ); // eslint-disable-line no-new-wrappers
	t.end();
});

tape( 'the function returns `false` if provided a primitive triangular number', function test( t ) {
	t.equal( isTriangularNumber( 36.0 ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a triangular number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		new Number( 5.0 ), // eslint-disable-line no-new-wrappers
		null,
		true,
		NaN,
		void 0,
		[],
		{},
		new Date(),
		/./,
		new RegExp( '.' ), // eslint-disable-line prefer-regex-literals
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isTriangularNumber( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
