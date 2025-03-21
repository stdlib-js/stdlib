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

/* eslint-disable no-new-wrappers */

// MODULES //

var tape = require( 'tape' );
var Boolean = require( '@stdlib/boolean/ctor' );
var isBooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only booleans', function test( t ) {
	var arr;

	arr = [ true, new Boolean( true ), false, new Boolean( false ) ];
	t.equal( isBooleanArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': true,
		'1': false
	};
	t.equal( isBooleanArray( arr ), true, 'returns true' );

	arr = [ true, 'true', null ];
	t.equal( isBooleanArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only boolean primitives', function test( t ) {
	var arr;

	arr = [ true, false, true, false ];
	t.equal( isBooleanArray.primitives( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': false,
		'1': true
	};
	t.equal( isBooleanArray.primitives( arr ), true, 'returns true' );

	arr = [ new Boolean( true ), false, false ];
	t.equal( isBooleanArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only `Boolean` objects', function test( t ) {
	var arr;

	arr = [ new Boolean( true ), new Boolean( false ), new Boolean( true ) ];
	t.equal( isBooleanArray.objects( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': new Boolean( true ),
		'1': new Boolean( true )
	};
	t.equal( isBooleanArray.objects( arr ), true, 'returns true' );

	arr = [ new Boolean( true ), false, false ];
	t.equal( isBooleanArray.objects( arr ), false, 'returns false' );

	t.end();
});
