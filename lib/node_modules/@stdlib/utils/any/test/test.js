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
var any = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof any, 'function', 'main export is a function' );
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
			any( value );
		};
	}
});

tape( 'if provided an empty collection, the function returns `false`', function test( t ) {
	var bool;
	var arr;

	arr = [];
	bool = any( arr );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ 0, 0, 0, 0, 1 ];
	bool = any( arr );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ 0, 0, 0 ];
	bool = any( arr );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (array-like object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 4,
		'0': false,
		'1': false,
		'2': false,
		'3': true
	};

	bool = any( arr );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (array-like object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 3,
		'0': null,
		'1': null,
		'2': null
	};

	bool = any( arr );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if at least one element is truthy (typed array)', function test( t ) {
	var bool;
	var arr;

	arr = new Float64Array( [ 0.0, 0.0, 2.0, 0.0 ] );
	bool = any( arr );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if all elements are falsy (typed array)', function test( t ) {
	var bool;
	var arr;

	arr = new Float64Array( 3 );
	bool = any( arr );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});
