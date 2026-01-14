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

/* eslint-disable func-names */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Int8Array = require( '@stdlib/array/int8' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Fcn = require( '@stdlib/function/ctor' );
var reNativeFunction = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reNativeFunction, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression that matches native functions', function test( t ) {
	var values;
	var bool;
	var RE;
	var i;

	RE = reNativeFunction();

	values = [
		Date,
		Boolean,
		String,
		Number,
		Fcn,
		RegExp,
		Number,
		Int8Array,
		Math.sqrt, // eslint-disable-line stdlib/no-builtin-math
		Math.pow // eslint-disable-line stdlib/no-builtin-math
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = RE.test( values[ i ].toString() );
		t.strictEqual( bool, true, 'returns true for '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns a regular expression that does not match non-native functions', function test( t ) {
	var values;
	var bool;
	var RE;
	var i;

	RE = reNativeFunction();

	values = [
		function () {},
		function noop() {},
		test,
		tape,
		t.strictEqual,
		t.ok,
		t.fail,
		t.pass
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = RE.test( values[ i ].toString() );
		t.strictEqual( bool, false, 'returns false for '+values[ i ] );
	}
	t.end();
});
