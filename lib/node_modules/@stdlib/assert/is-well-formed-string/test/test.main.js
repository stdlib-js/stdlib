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
var isWellFormedString = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isWellFormedString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a well-formed string', function test( t ) {
	t.equal( isWellFormedString( '' ), true, 'returns true' );
	t.equal( isWellFormedString( new String( '' ) ), true, 'returns true' ); // eslint-disable-line no-new-wrappers
	t.end();
});

tape( 'the function returns `false` if not provided a well-formed string', function test( t ) {
	var strs;
	var i;

	strs = [
		'5\uDBFF',
		'\uDBFF\uDBFF',
		'Hello \uDBFFWorld',
		'\uDBFF',
		'\uDBFFFFF',
		'\uDC00\uDC00',
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < strs.length; i++ ) {
		t.equal( isWellFormedString( strs[i] ), false, 'returns false when provided '+strs[i] );
	}
	t.end();
});
