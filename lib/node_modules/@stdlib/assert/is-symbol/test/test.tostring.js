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
var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
var toStr = require( './../lib/tostring.js' );


// VARIABLES //

var opts1 = {
	'skip': !hasSymbols()
};
var opts2 = {
	'skip': hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toStr, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports symbols, the function returns the result of `Symbol.prototype.toString`', opts1, function test( t ) {
	var s = Symbol( 'beep' );
	t.strictEqual( toStr( s ), s.toString(), 'returns expected result' );
	t.strictEqual( toStr( s ), Symbol.prototype.toString.call( s ), 'returns expected result' );
	t.end();
});

tape( 'if an environment does not support symbols, the function throws an error', opts2, function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		toStr( 'foo' );
	}
});
