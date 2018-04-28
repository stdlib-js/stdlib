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
var Number = require( '@stdlib/number/ctor' );
var isNumberArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNumberArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only numbers', function test( t ) {
	var arr;

	arr = [ 1, new Number( 2 ), 3, new Number( 4 ) ];
	t.strictEqual( isNumberArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': 1,
		'1': 2
	};
	t.strictEqual( isNumberArray( arr ), true, 'returns true' );

	arr = [ 1, '2', 3 ];
	t.strictEqual( isNumberArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only number primitives', function test( t ) {
	var arr;

	arr = [ 1, 2, 3, 4 ];
	t.strictEqual( isNumberArray.primitives( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': 1,
		'1': 2
	};
	t.strictEqual( isNumberArray.primitives( arr ), true, 'returns true' );

	arr = [ new Number( 1 ), 2, 3 ];
	t.strictEqual( isNumberArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only `Number` objects', function test( t ) {
	var arr;

	arr = [ new Number( 1 ), new Number( 2 ), new Number( 3 ) ];
	t.strictEqual( isNumberArray.objects( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': new Number( 1 ),
		'1': new Number( 2 )
	};
	t.strictEqual( isNumberArray.objects( arr ), true, 'returns true' );

	arr = [ new Number( 1 ), 2, 3 ];
	t.strictEqual( isNumberArray.objects( arr ), false, 'returns false' );

	t.end();
});
