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
var dtypes = require( '@stdlib/ndarray/dtypes' );
var bufferCtors = require( '@stdlib/ndarray/base/buffer-ctors' );
var isFunction = require( '@stdlib/assert/is-function' );
var dtype = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtype, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the data type for ndarray data buffers', function test( t ) {
	var DTYPES;
	var ctor;
	var buf;
	var dt;
	var i;

	DTYPES = dtypes();

	for ( i = 0; i < DTYPES.length; i++ ) {
		ctor = bufferCtors( DTYPES[ i ] );
		if ( DTYPES[ i ] === 'binary' && isFunction( ctor.alloc ) ) {
			buf = ctor.alloc( 10 );
		} else {
			buf = new ctor( 10 );
		}
		dt = dtype( buf );
		t.strictEqual( dt, DTYPES[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports generic objects', function test( t ) {
	var buf;
	var dt;

	buf = {
		'length': 10
	};
	dt = dtype( buf );
	t.strictEqual( dt, 'generic', 'returns expected value' );
	t.end();
});

tape( 'if provided an ndarray data buffer having an unknown/unsupported data type, the function returns `null`', function test( t ) {
	var buffers;
	var i;

	buffers = [
		'beep',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		function noop() {}
	];
	for ( i = 0; i < buffers.length; i++ ) {
		t.strictEqual( dtype( buffers[i] ), null, 'returns expected value for ' + buffers[ i ] );
	}
	t.end();
});
