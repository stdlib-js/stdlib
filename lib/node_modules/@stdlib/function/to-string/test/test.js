/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var function2string = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof function2string, 'function', 'main export is a function' );
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
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			function2string( value );
		};
	}
});

tape( 'the function returns a string', function test( t ) {
	var fcns;
	var str;
	var i;

	fcns = [
		tape,
		function2string,
		add
	];

	for ( i = 0; i < fcns.length; i++ ) {
		str = function2string( fcns[ i ] );

		// NOTE: cannot perform more stringent tests, as pre-ES2018 environments were not required to return the exact source code as the original function declaration...
		t.strictEqual( typeof str, 'string', 'returns expected value' );
	}
	t.end();

	function add( x, y ) {
		return x + y;
	}
});
