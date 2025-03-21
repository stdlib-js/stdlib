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
var allocUnsafe = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof allocUnsafe, 'function', 'main export is a function' );
	t.end();
});

tape( 'in older environments, the main export is a polyfill', function test( t ) {
	var allocUnsafe = proxyquire( './../lib', {
		'./has_alloc_unsafe.js': false
	});
	t.strictEqual( allocUnsafe, polyfill, 'returns polyfill' );
	t.end();
});

tape( 'in newer environments, the main export is not a polyfill', function test( t ) {
	var allocUnsafe = proxyquire( './../lib', {
		'./has_alloc_unsafe.js': true
	});
	t.strictEqual( allocUnsafe, nonPolyfill, 'does not return polyfill' );
	t.end();
});

tape( 'the function throws an error if not provided a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
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
			allocUnsafe( value );
		};
	}
});

tape( 'the function (unsafely) allocates a buffer having a specified number of bytes', function test( t ) {
	var buf = allocUnsafe( 1000 );
	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 1000, 'has expected length' );
	t.end();
});
