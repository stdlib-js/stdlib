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
var isSafeIntegerArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSafeIntegerArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only safe integer values', function test( t ) {
	var arr;

	arr = [ 5, new Number( 5 ), -3 ]; // eslint-disable-line no-new-wrappers
	t.equal( isSafeIntegerArray( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': 2,
		'1': 1
	};
	t.equal( isSafeIntegerArray( arr ), true, 'returns true' );

	arr = [ 1e100, 2e200, 3e300 ];
	t.equal( isSafeIntegerArray( arr ), false, 'returns false' );

	arr = [ 5.0, 2.3, 11.1 ];
	t.equal( isSafeIntegerArray( arr ), false, 'returns false' );

	arr = [ 5.0, '3', null ];
	t.equal( isSafeIntegerArray( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only primitive safe integer values', function test( t ) {
	var arr;

	arr = [ 5, -0, 0 ];
	t.equal( isSafeIntegerArray.primitives( arr ), true, 'returns true' );

	arr = [ 1e100, 2e200, 3e300 ];
	t.equal( isSafeIntegerArray.primitives( arr ), false, 'returns false' );

	arr = {
		'length': 2,
		'0': 1,
		'1': -3
	};
	t.equal( isSafeIntegerArray.primitives( arr ), true, 'returns true' );

	arr = [ new Number( 5 ), 1, 1 ]; // eslint-disable-line no-new-wrappers
	t.equal( isSafeIntegerArray.primitives( arr ), false, 'returns false' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object containing only `Number` objects having safe integer values', function test( t ) {
	var arr;

	arr = [ new Number( 5 ), new Number( -0 ), new Number( 0 ) ]; // eslint-disable-line no-new-wrappers
	t.equal( isSafeIntegerArray.objects( arr ), true, 'returns true' );

	arr = {
		'length': 2,
		'0': new Number( 2 ), // eslint-disable-line no-new-wrappers
		'1': new Number( -3 ) // eslint-disable-line no-new-wrappers
	};
	t.equal( isSafeIntegerArray.objects( arr ), true, 'returns true' );

	arr = [ new Number( 1e100 ), new Number( 2e200 ), new Number( 3e300 ) ]; // eslint-disable-line no-new-wrappers
	t.equal( isSafeIntegerArray.objects( arr ), false, 'returns false' );

	arr = [ new Number( 5 ), 1, 1 ]; // eslint-disable-line no-new-wrappers
	t.equal( isSafeIntegerArray.objects( arr ), false, 'returns false' );

	arr = [ -5, 1, 1 ];
	t.equal( isSafeIntegerArray.objects( arr ), false, 'returns false' );

	t.end();
});
