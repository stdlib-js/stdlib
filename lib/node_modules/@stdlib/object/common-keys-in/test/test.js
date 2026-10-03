/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var commonKeysIn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof commonKeysIn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided insufficient arguments', function test( t ) {
	t.throws( foo, Error, 'throws error' );
	t.throws( bar, Error, 'throws error' );
	t.end();
	function foo() {
		commonKeysIn();
	}
	function bar() {
		commonKeysIn( {} );
	}
});

tape( 'the function returns an array of common property names (two objects)', function test( t ) {
	var expected;
	var actual;
	var obj1;
	var obj2;
	var obj3;

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4
	};
	obj2 = {
		'a': 1,
		'b': 2,
		'c': 3
	};
	obj3 = {
		'c': 3,
		'd': 4
	};

	actual = commonKeysIn( obj1, obj2 );
	expected = [ 'a', 'b', 'c' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj1, obj3 );
	expected = [ 'c', 'd' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj2, obj3 );
	expected = [ 'c' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	t.end();
});

tape( 'the function returns an array of common property names (multiple objects)', function test( t ) {
	var expected;
	var actual;
	var obj1;
	var obj2;
	var obj3;
	var obj4;

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5,
		'f': 6
	};
	obj2 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'f': 6
	};
	obj3 = {
		'a': 1,
		'c': 3,
		'd': 4
	};
	obj4 = {
		'a': 1,
		'b': 2
	};

	actual = commonKeysIn( obj1, obj2, obj3, obj4 );
	expected = [ 'a' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj2, obj3, obj4 );
	expected = [ 'a' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj3, obj2, obj1 );
	expected = [ 'a', 'c', 'd' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj4, obj2, obj1 );
	expected = [ 'a', 'b' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj2, obj1, obj3 );
	expected = [ 'a', 'c', 'd' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	t.end();
});

tape( 'the function returns an array of common property names (arrays, strings)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
	y = [ 5, 6, 7, 8, 9 ];
	expected = [ '0', '1', '2', '3', '4' ];
	actual = commonKeysIn( x, y );
	t.deepEqual( actual, expected, 'returns expected keys' );

	x = {
		'0': 0,
		'2': 2
	};
	y = [ 0, 1, 2 ];
	expected = [ '0', '2' ];
	actual = commonKeysIn( x, y );
	t.deepEqual( actual, expected, 'returns expected keys' );

	x = 'abcd';
	y = 'abcdef';
	expected = [ '0', '1', '2', '3' ];
	actual = commonKeysIn( x, y );
	t.deepEqual( actual, expected, 'returns expected keys' );

	t.end();
});

tape( 'the function returns an array of common property names (inherited properties)', function test( t ) {
	var expected;
	var actual;
	var obj1;
	var obj2;
	var obj3;

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4
	};
	obj2 = Object.create( obj1 );
	obj2.e = 5;
	obj2.f = 6;
	obj3 = Object.create( obj2 );
	obj3.g = 7;
	obj3.h = 8;

	actual = commonKeysIn( obj1, obj2, obj3 );
	expected = [ 'a', 'b', 'c', 'd' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj2, obj3 );
	expected = [ 'e', 'f', 'a', 'b', 'c', 'd' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	actual = commonKeysIn( obj3, obj3 );
	expected = [ 'g', 'h', 'e', 'f', 'a', 'b', 'c', 'd' ];
	t.deepEqual( actual, expected, 'returns expected keys' );

	t.end();
});
