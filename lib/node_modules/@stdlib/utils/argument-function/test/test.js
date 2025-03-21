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
var randu = require( '@stdlib/random/base/randu' );
var argumentFunction = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof argumentFunction, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an index argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3.14,
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			argumentFunction( value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	t.strictEqual( typeof argumentFunction( 1 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function always returns a specified argument', function test( t ) {
	var argn;
	var x;
	var y;
	var i;

	argn = argumentFunction( 2 );
	for ( i = 0; i < 100; i++ ) {
		x = randu();
		y = argn( i, i, x, i, i, i );
		t.strictEqual( y, x, 'returns expected value' );
	}
	t.end();
});

tape( 'if the returned function is invoked with fewer arguments than the specified argument index, the returned function returns `undefined`', function test( t ) {
	var argn;
	var x;
	var y;
	var i;

	argn = argumentFunction( 10 );
	for ( i = 0; i < 100; i++ ) {
		x = randu();
		y = argn( i, i, x );
		t.strictEqual( y, void 0, 'returns expected value' );
	}
	t.end();
});
