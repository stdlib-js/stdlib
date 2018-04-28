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
var Number = require( '@stdlib/number/ctor' );
var isNumber = require( './../lib/object.js' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNumber, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a number object', function test( t ) {
	t.strictEqual( isNumber( new Number( 5 ) ), true, 'returns true' );
	t.strictEqual( isNumber( new Number( NaN ) ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a primitive number', function test( t ) {
	t.strictEqual( isNumber( 3.14 ), false, 'returns false' );
	t.strictEqual( isNumber( NaN ), false, 'returns false' );
	t.end();
});

tape( 'if `Symbol.toStringTag` is supported, the function guards against objects masquerading as `Number` objects', opts, function test( t ) {
	var isNumber;
	var mock;

	isNumber = proxyquire( './../lib/object.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	mock = {
		'toString': toString,
		'valueOf': valueOf
	};
	if ( hasToStringTag() ) {
		mock[ Symbol.toStringTag ] = 'Number';
	}
	t.strictEqual( isNumber( mock ), false, 'returns false' );
	t.end();

	function detect() {
		return true;
	}
	function toString() {
		return '999';
	}
	function valueOf() {
		return 999;
	}
});

tape( 'if `Symbol.toStringTag` is not supported, the function attempts to determine the native class', function test( t ) {
	var isNumber = proxyquire( './../lib/object.js', {
		'@stdlib/assert/has-tostringtag-support': detect
	});

	t.strictEqual( isNumber( new Number( 5 ) ), true, 'returns true' );
	t.strictEqual( isNumber( {} ), false, 'returns false' );

	t.end();

	function detect() {
		return false;
	}
});

tape( 'the function returns `false` if not provided a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		void 0,
		[],
		{},
		new Date(),
		/./,
		new RegExp( '.' ),
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isNumber( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
