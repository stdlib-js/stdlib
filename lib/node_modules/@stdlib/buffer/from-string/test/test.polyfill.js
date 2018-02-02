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
var isBuffer = require( '@stdlib/assert/is-buffer' );
var string2buffer = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof string2buffer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 1, 2, 3, 4 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			string2buffer( value );
		};
	}
});

tape( 'the function throws an error if not provided a string (encoding)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 1, 2, 3, 4 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			string2buffer( value, 'utf8' );
		};
	}
});

tape( 'the function throws an error if not provided a valid encoding argument', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'bop',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		[ 1, 2, 3, 4 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			string2buffer( 'beep', value );
		};
	}
});

tape( 'the function allocates a buffer containing a provided string', function test( t ) {
	var buf = string2buffer( 'beep boop' );
	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 9, 'has expected length' );
	t.strictEqual( buf.toString(), 'beep boop', 'returns expected value' );
	t.end();
});

tape( 'the function allocates a buffer containing a provided string (encoding)', function test( t ) {
	var buf = string2buffer( '7468697320697320612074c3a97374', 'hex' );
	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 15, 'has expected length' );
	t.strictEqual( buf.toString(), 'this is a tést', 'returns expected value' );
	t.end();
});
