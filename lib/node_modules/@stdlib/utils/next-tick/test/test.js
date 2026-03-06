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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var nextTick = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nextTick, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function asynchronously invokes a callback', function test( t ) {
	var flg;

	t.strictEqual( flg, void 0, 'expected value' );

	nextTick( foo );
	t.strictEqual( flg, void 0, 'expected value' );

	function foo() {
		flg = true;
		t.ok( true, 'invokes callback' );
		t.end();
	}
});

tape( 'the function supports providing arguments to provide to the callback on invocation', function test( t ) {
	nextTick( foo, 1.0, 2.0, 3.0 );

	function foo( x, y, z ) {
		t.ok( true, 'invokes callback' );
		t.strictEqual( x, 1.0, 'provides expected value' );
		t.strictEqual( y, 2.0, 'provides expected value' );
		t.strictEqual( z, 3.0, 'provides expected value' );
		t.end();
	}
});
