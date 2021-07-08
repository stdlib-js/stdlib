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
var Float64Array = require( '@stdlib/array/float64' );
var every = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof every, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			every( value );
		};
	}
});

tape( 'if provided an empty collection, the function returns `true`', function test( t ) {
	var bool;
	var arr;

	arr = [];
	bool = every( arr );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if all elements are truthy (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ 1, 1, 1, 1, 1 ];
	bool = every( arr );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if at least one element is falsy (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ 1, 1, 0 ];
	bool = every( arr );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if all elements are truthy (array-like object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 4,
		'0': {},
		'1': [],
		'2': true,
		'3': 'beep'
	};

	bool = every( arr );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if at least one element is falsy (array-like object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 3,
		'0': {},
		'1': [],
		'2': null
	};

	bool = every( arr );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if all elements are truthy (typed array)', function test( t ) {
	var bool;
	var arr;

	arr = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );
	bool = every( arr );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if at least one element is falsy (typed array)', function test( t ) {
	var bool;
	var arr;

	arr = new Float64Array( [ 1.0, 0.0, 1.0 ] );
	bool = every( arr );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});
