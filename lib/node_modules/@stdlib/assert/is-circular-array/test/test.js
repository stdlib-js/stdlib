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
var isCircularArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isCircularArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided an array', function test( t ) {
	var values;
	var obj1;
	var obj2;
	var obj3;
	var i;

	obj1 = {
		'a': 'beep',
		'b': {
			'c': 'boop'
		}
	};

	obj2 = {
		'a': obj1,
		'b': obj1
	};

	obj3 = {};
	obj3.self = obj1;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		{},
		obj1,
		obj2,
		obj3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircularArray( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `false` if provided an array not containing a circular reference', function test( t ) {
	var values;
	var arr1;
	var arr2;
	var arr3;
	var i;

	arr1 = [ 'beep', 'boop' ];

	arr2 = [ arr1, arr1 ];

	arr3 = [
		{
			'self': arr1
		}
	];

	values = [
		[],
		arr1,
		arr2,
		arr3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircularArray( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `true` if provided an array containing a circular reference', function test( t ) {
	var values;
	var arr1;
	var arr2;
	var arr3;
	var i;

	arr1 = [ 'beep', 'boop' ];
	arr1.push( arr1 );

	arr2 = [ arr1, arr1 ];

	arr3 = [
		{
			'self': arr1
		}
	];

	values = [
		arr1,
		arr2,
		arr3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircularArray( values[i] ), true, 'returns true' );
	}
	t.end();
});
