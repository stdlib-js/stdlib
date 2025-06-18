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
var papply = require( './../lib' );


// FUNCTIONS //

function add( x, y ) {
	return x + y;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof papply, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			papply( value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var fcn = papply( add, 2 );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );
	t.notEqual( fcn, add, 'returns a new function' );
	t.end();
});

tape( 'the function partially applies function arguments', function test( t ) {
	var fcn = papply( add, 2 );

	t.strictEqual( fcn( 3 ), 5, 'returned function returns partial application results' );

	t.strictEqual( fcn( 5 ), 7, 'returned function returns partial application results' );

	t.strictEqual( fcn( 17 ), 19, 'returned function returns partial application results' );

	t.strictEqual( fcn( -10 ), -8, 'returned function returns partial application results' );

	t.end();
});

tape( 'the function does not require function arguments to partially apply', function test( t ) {
	var fcn = papply( add );
	t.strictEqual( typeof fcn, 'function', 'returns a function' );
	t.notEqual( fcn, add, 'returns a new function' );
	t.strictEqual( fcn( 2, 3 ), 5, 'returns expected value' );
	t.strictEqual( fcn( 5, 7 ), 12, 'returns expected value' );
	t.end();
});
