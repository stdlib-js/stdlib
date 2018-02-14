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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
var hasToStringTag = require( '@stdlib/assert/has-tostringtag-support' );
var isDateObject = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isDateObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a `Date` object', function test( t ) {
	t.strictEqual( isDateObject( new Date() ), true, 'returns true' );
	t.end();
});

tape( 'if `Symbol.toStringTag` is supported, the function guards against objects masquerading as `Date` objects', opts, function test( t ) {
	var isDateObject;
	var mock;

	isDateObject = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	mock = {
		'toString': toString,
		'getDay': getDay
	};
	if ( hasToStringTag() ) {
		mock[ Symbol.toStringTag ] = 'Date';
	}
	t.strictEqual( isDateObject( mock ), false, 'returns false' );

	t.end();

	function detect() {
		return true;
	}
	function toString() {
		return 'a';
	}
	function getDay() {
		return 'a';
	}
});

tape( 'if `Symbol.toStringTag` is supported, the function returns `true` if provided a `Date` object', opts, function test( t ) {
	var isDateObject = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	t.strictEqual( isDateObject( new Date() ), true, 'returns true' );

	t.end();

	function detect() {
		return true;
	}
});

tape( 'if `Symbol.toStringTag` is not supported, the function attempts to determine the native class', function test( t ) {
	var isDateObject = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	t.strictEqual( isDateObject( new Date() ), true, 'returns true' );
	t.strictEqual( isDateObject( {} ), false, 'returns false' );

	t.end();

	function detect() {
		return false;
	}
});

tape( 'the function returns `false` if not provided a `Date` object', function test( t ) {
	var values;
	var i;

	values = [
		'2017-01-01',
		new String( '2017-01-01' ),
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{},
		/./,
		new RegExp( '.' ),
		function noop() {},
		function Date() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isDateObject( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
