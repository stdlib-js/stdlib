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
var proxyquire = require( 'proxyquire' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var polyfill = require( './../lib/polyfill.js' );
var nonPolyfill = require( './../lib/main.js' );
var string2buffer = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof string2buffer, 'function', 'main export is a function' );
	t.end();
});

tape( 'in older environments, the main export is a polyfill', function test( t ) {
	var string2buffer = proxyquire( './../lib', {
		'./has_from.js': false
	});
	t.strictEqual( string2buffer, polyfill, 'returns polyfill' );
	t.end();
});

tape( 'in newer environments, the main export is not a polyfill', function test( t ) {
	var string2buffer = proxyquire( './../lib', {
		'./has_from.js': true
	});
	t.strictEqual( string2buffer, nonPolyfill, 'does not return polyfill' );
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
	t.strictEqual( isBuffer( buf ), true, 'returns expected value' );
	t.strictEqual( buf.length, 9, 'has expected length' );
	t.strictEqual( buf.toString(), 'beep boop', 'returns expected value' );
	t.end();
});

tape( 'the function allocates a buffer containing a provided string (encoding)', function test( t ) {
	var buf = string2buffer( '7468697320697320612074c3a97374', 'hex' );
	t.strictEqual( isBuffer( buf ), true, 'returns expected value' );
	t.strictEqual( buf.length, 15, 'has expected length' );
	t.strictEqual( buf.toString(), 'this is a tést', 'returns expected value' );
	t.end();
});
