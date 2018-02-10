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
var proxyquire = require( 'proxyquire' );
var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
var detect = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'detection result is a boolean' );
	t.end();
});

tape( 'if `Symbols` are not supported, detection result is `false`', function test( t ) {
	var detect = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-symbol-support': hasSupport
	});

	t.strictEqual( detect(), false, 'detection result is `true`' );
	t.end();

	function hasSupport() {
		return false;
	}
});

tape( 'if `toStringTag` is supported, detection result is `true`', opts, function test( t ) {
	if ( typeof Symbol.toStringTag === 'symbol' ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	t.end();
});

tape( 'if `toStringTag` is not supported, the function guards against non-symbol `toStringTag` properties and the detection result is `false`', opts, function test( t ) {
	if ( typeof Symbol.toStringTag === 'symbol' ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		Symbol.toStringTag = 'beep';
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	t.end();
});
