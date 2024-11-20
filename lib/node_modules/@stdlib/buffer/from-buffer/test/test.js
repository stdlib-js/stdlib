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
var Buffer = require( '@stdlib/buffer/ctor' );
var Uint8Array = require( '@stdlib/array/uint8' );
var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var polyfill = require( './../lib/polyfill.js' );
var nonPolyfill = require( './../lib/main.js' );
var copyBuffer = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof copyBuffer, 'function', 'main export is a function' );
	t.end();
});

tape( 'in older environments, the main export is a polyfill', function test( t ) {
	var copyBuffer = proxyquire( './../lib', {
		'./has_from.js': false
	});
	t.strictEqual( copyBuffer, polyfill, 'returns polyfill' );
	t.end();
});

tape( 'in newer environments, the main export is not a polyfill', function test( t ) {
	var copyBuffer = proxyquire( './../lib', {
		'./has_from.js': true
	});
	t.strictEqual( copyBuffer, nonPolyfill, 'does not return polyfill' );
	t.end();
});

tape( 'the function throws an error if not provided a Buffer instance', function test( t ) {
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
		[ 1, 2, 3, 4 ],
		new Uint8Array( 10 ),
		{},
		Buffer,
		Uint8Array,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			copyBuffer( value );
		};
	}
});

tape( 'the function copies buffer data to a new Buffer instance', function test( t ) {
	var b1;
	var b2;
	var i;

	b1 = allocUnsafe( 10 );
	b2 = copyBuffer( b1 );

	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.length, b1.length, 'has same length' );

	for ( i = 0; i < b2.length; i++ ) {
		t.strictEqual( b2[ i ], b1[ i ], 'returns expected value for element ' + i );
	}
	t.end();
});
