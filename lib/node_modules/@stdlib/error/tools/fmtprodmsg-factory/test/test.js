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
var fmtprodmsgFactory = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fmtprodmsgFactory, 'function', 'export is a function' );
	t.end();
});

tape( 'if provided an `options` argument which is not an object, the function will throw a type error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fmtprodmsgFactory( value );
		};
	}
});

tape( 'if provided an invalid option, the function will throw a type error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		NaN,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fmtprodmsgFactory({
				'message': value
			});
		};
	}
});

tape( 'the function returns an error message function', function test( t ) {
	var formatProdErrorMessage;
	var opts;
	var str;

	opts = {};
	formatProdErrorMessage = fmtprodmsgFactory( opts );
	str = formatProdErrorMessage( '6', 'boop' );

	t.equal( typeof formatProdErrorMessage, 'function', 'returns a function' );
	t.equal( typeof str, 'string', 'returned function returns a string' );
	t.end();
});
