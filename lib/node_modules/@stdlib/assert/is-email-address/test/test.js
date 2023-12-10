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
var isEmail = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isEmail, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` when provided an email address (equals a string including the `@` character)', function test( t ) {
	t.equal( isEmail( 'beep@boop.com' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` when not provided an email address', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'beep/boop',
		'beep.com',
		5,
		null,
		void 0,
		NaN,
		true,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isEmail( values[ i ] ), false, 'returns false' );
	}
	t.end();
});
