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
var isStringArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isStringArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array of `string` values', function test( t ) {
	var arr;

	arr = [ 'a', new String( 'b' ) ]; // eslint-disable-line no-new-wrappers
	t.equal( isStringArray( arr ), true, 'returns true' );

	arr = [ 'a', 5, null ];
	t.equal( isStringArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array of `string` primitives', function test( t ) {
	var arr;

	arr = [ 'a', 'b' ];
	t.equal( isStringArray.primitives( arr ), true, 'returns true' );

	arr = [ new String( 'a' ), 'b' ]; // eslint-disable-line no-new-wrappers
	t.equal( isStringArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array of `String` objects', function test( t ) {
	var arr;

	arr = [ new String( 'a' ), new String( 'b' ) ]; // eslint-disable-line no-new-wrappers
	t.equal( isStringArray.objects( arr ), true, 'returns true' );

	arr = [ 'a', 'b' ];
	t.equal( isStringArray.objects( arr ), false, 'returns false' );

	t.end();
});
