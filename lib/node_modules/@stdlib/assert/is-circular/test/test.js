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
var isCircular = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isCircular, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided an object-like value', function test( t ) {
	var values;
	var i;
	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircular( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `false` if provided an object not containing a circular reference', function test( t ) {
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
		obj3,
		new Date(),
		new RegExp( '[0-9]' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircular( values[i] ), false, 'returns false' );
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
		t.equal( isCircular( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `false` if provided a function not containing a circular reference', function test( t ) {
	var values;
	var i;

	function fcn1() {}

	function fcn2() {}
	fcn2.other = fcn1;

	function fcn3() {}
	fcn3.arr = [
		fcn1
	];

	values = [
		fcn1,
		fcn2,
		fcn3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircular( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `true` if provided an object containing a circular reference', function test( t ) {
	var values;
	var date;
	var obj1;
	var obj2;
	var obj3;
	var re;
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

	re = new RegExp( '[0-9]' );
	re.self = re;

	date = new Date();
	date.self = date;

	values = [
		obj1,
		obj2,
		obj3,
		re,
		date
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircular( values[i] ), true, 'returns true' );
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
		t.equal( isCircular( values[i] ), true, 'returns true' );
	}
	t.end();
});

tape( 'the function returns `true` if provided a function containing a circular reference', function test( t ) {
	var values;
	var i;

	function fcn1() {}
	fcn1.self = fcn1;

	function fcn2() {}
	fcn2.other = fcn1;
	fcn2.other.self = fcn2;

	function fcn3() {}
	fcn3.arr = [
		fcn3
	];

	values = [
		fcn1,
		fcn2,
		fcn3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCircular( values[i] ), true, 'returns true' );
	}
	t.end();
});
