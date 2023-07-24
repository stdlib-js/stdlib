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
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var Fcn = require( '@stdlib/function/ctor' );
var Object = require( '@stdlib/object/ctor' );
var getPrototypeOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getPrototypeOf, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `null` if provided either `null` or `undefined`', function test( t ) {
	var proto;

	proto = getPrototypeOf( null );
	t.equal( proto, null, 'returns `null` when provided `null`' );

	proto = getPrototypeOf( void 0 );
	t.equal( proto, null, 'returns `null` when provided `undefined`' );

	t.end();
});

tape( 'the function returns the prototype of a provided value', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		'beep',
		new String( 'boop' ), // eslint-disable-line no-new-wrappers
		5,
		new Number( 3.14 ), // eslint-disable-line no-new-wrappers
		true,
		new Boolean( false ), // eslint-disable-line no-new-wrappers
		[],
		{},
		function foo() {},
		new Date(),
		/.*/,
		new RegExp( '.*' ) // eslint-disable-line prefer-regex-literals
	];

	expected = [
		String.prototype,
		String.prototype,
		Number.prototype,
		Number.prototype,
		Boolean.prototype,
		Boolean.prototype,
		Array.prototype,
		Object.prototype,
		Fcn.prototype,
		Date.prototype,
		RegExp.prototype,
		RegExp.prototype
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = getPrototypeOf( values[i] );
		t.equal( actual, expected[i], 'returns expected prototype when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided an object created via `Object.create( null )`', function test( t ) {
	var proto = getPrototypeOf( Object.create( null ) );
	t.equal( proto, null, 'returns null' );
	t.end();
});
