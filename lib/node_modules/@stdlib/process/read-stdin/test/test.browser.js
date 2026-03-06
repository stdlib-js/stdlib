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
var stdin = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stdin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws if provided a `callback` argument which is not a function', function test( t ) {
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
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws TypeError when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			stdin( value );
		};
	}
});

tape( 'the function throws if provided a `callback` argument which is not a function (encoding)', function test( t ) {
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
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws TypeError when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			stdin( 'utf8', value );
		};
	}
});

tape( 'the function invokes a provided callback with an error argument', function test( t ) {
	stdin( clbk );

	function clbk( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.end();
	}
});

tape( 'the function invokes a provided callback with an error argument (encoding)', function test( t ) {
	stdin( 'utf8', clbk );

	function clbk( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.end();
	}
});
