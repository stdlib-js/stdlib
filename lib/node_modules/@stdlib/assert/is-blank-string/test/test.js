/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var isBlankString = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBlankString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a blank string', function test( t ) {
	var values;
	var i;

	values = [
		'   ',
		'\t\t\t',
		'\r\n',
		''
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isBlankString( values[i] ), true, 'returns true' );
	}
	t.end();
});

tape( 'the function returns `false` if provided a `String` object, even if the value of the `String` object is a blank string', function test( t ) {
	t.equal( isBlankString( new String( ' ' ) ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a blank string', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'beep boop',
		'1010102',
		5,
		null,
		NaN,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isBlankString( values[i] ), false, 'returns false when provided ' + values[i] );
	}
	t.end();
});
