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
var wrap = require( './../lib/wrap.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wrap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function wraps a code string similar to how `require` wraps module code', function test( t ) {
	var expected;
	var actual;

	expected = '(function(require,__filename,__dirname){var beep;});';
	actual = wrap( 'var beep;' );

	t.strictEqual( actual, expected, 'returns a wrapped code string' );
	t.end();
});
