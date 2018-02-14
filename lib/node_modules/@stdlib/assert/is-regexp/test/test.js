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
var hasToStringTag = require( '@stdlib/assert/has-tostringtag-support' );
var isRegExp = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isRegExp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a regular expression', function test( t ) {
	t.strictEqual( isRegExp( /\.+/ ), true, 'returns true' );
	t.strictEqual( isRegExp( new RegExp( '\\.+' ) ), true, 'returns true' );
	t.end();
});

tape( 'if `Symbol.toStringTag` is supported, the function guards against objects masquerading as regular expressions', opts, function test( t ) {
	var isRegExp;
	var mock;

	isRegExp = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	mock = {
		'toString': toString,
		'exec': exec
	};
	if ( hasToStringTag() ) {
		mock[ Symbol.toStringTag ] = 'RegExp';
	}
	t.strictEqual( isRegExp( mock ), false, 'returns false' );

	t.end();

	function detect() {
		return true;
	}
	function toString() {
		return '/beep/';
	}
	function exec() {
		return null;
	}
});

tape( 'if `Symbol.toStringTag` is supported, the function returns `true` if provided a regular expression', opts, function test( t ) {
	var isRegExp = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	t.strictEqual( isRegExp( /beep/ ), true, 'returns true' );

	t.end();

	function detect() {
		return true;
	}
});

tape( 'if `Symbol.toStringTag` is not supported, the function attempts to determine the native class', function test( t ) {
	var isRegExp = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	t.strictEqual( isRegExp( /beep/ ), true, 'returns true' );
	t.strictEqual( isRegExp( {} ), false, 'returns false' );

	t.end();

	function detect() {
		return false;
	}
});

tape( 'the function returns `false` if not provided a regular expression', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'/.+/',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRegExp( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
