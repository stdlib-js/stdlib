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
var noop = require( '@stdlib/utils/noop' );
var trycatchAsync = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof trycatchAsync, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			trycatchAsync( value, -1.0, noop );
		};
	}
});

tape( 'the function throws an error if provided a last argument which is not a function', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			trycatchAsync( noop, -1.0, value );
		};
	}
});

tape( 'if a provided function does not return an error, the function invokes a callback with the function result', function test( t ) {
	trycatchAsync( x, 'boop', done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( null, 'beep' );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( result, 'beep', 'returns expected value' );
		}
		t.end();
	}
});

tape( 'if a provided function returns an error, the function returns the error and a provided value', function test( t ) {
	trycatchAsync( x, 'boop', done );

	function x( clbk ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			clbk( new Error( 'oops' ) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.strictEqual( error.message, 'oops', 'returns expected value' );
		}
		t.strictEqual( result, 'boop', 'returns expected value' );
		t.end();
	}
});

tape( 'the function does not guarantee asynchronous execution', function test( t ) {
	var i = 0;
	trycatchAsync( x, 'boop', done );
	i = 1;

	function x( clbk ) {
		clbk( null, 'beep' );
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( result, 'beep', 'returns expected value' );
		}
		t.strictEqual( i, 0, 'releases the zalgo' );
		t.end();
	}
});
