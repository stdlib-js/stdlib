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
var isCircularPlainObject = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isCircularPlainObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided a plain object', function test( t ) {
	var values;
	var i;
	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		[],
		new Date(),
		new RegExp( '[0-9]' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircularPlainObject( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `false` if provided a plain object not containing a circular reference', function test( t ) {
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
		{},
		obj1,
		obj2,
		obj3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircularPlainObject( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `true` if provided a plain object containing a circular reference', function test( t ) {
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
	obj1.b.self = obj1;

	obj2 = {
		'a': {},
		'b': obj1
	};

	obj3 = {};
	obj3.self = obj3;

	values = [
		obj1,
		obj2,
		obj3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircularPlainObject( values[i] ), true, 'returns true' );
	}
	t.end();
});
