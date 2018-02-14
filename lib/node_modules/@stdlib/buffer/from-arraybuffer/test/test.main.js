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
var hasArrayBufferSupport = require( '@stdlib/assert/has-arraybuffer-support' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var hasFrom = require( './../lib/has_from.js' );
var NODE_VERSION = require( './../lib/node_version.js' );
var arraybuffer2buffer = require( './../lib/main.js' );


// VARIABLES //

var opts = {
	'skip': !hasFrom
};
var optsv0 = {
	'skip': !hasArrayBufferSupport() // FIXME: remove once an ArrayBuffer polyfill is written which works on Node v0.10.x
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof arraybuffer2buffer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an ArrayBuffer', optsv0, function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( value );
		};
	}
});

tape( 'the function throws an error if not provided an ArrayBuffer (byteOffset)', optsv0, function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( value, 0 );
		};
	}
});

tape( 'the function throws an error if not provided an ArrayBuffer (byteOffset, length)', optsv0, function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( value, 0, 1 );
		};
	}
});

tape( 'the function throws an error if provided a byte offset which is not a nonnegative integer', optsv0, function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( new ArrayBuffer( 10 ), value );
		};
	}
});

tape( 'the function throws an error if provided a byte offset which is not a nonnegative integer (length)', optsv0, function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( new ArrayBuffer( 10 ), value, 10 );
		};
	}
});

tape( 'the function throws an error if provided a byte offset which exceeds the number of bytes', optsv0, function test( t ) {
	var values;
	var ab;
	var i;

	ab = new ArrayBuffer( 10 );

	values = [
		ab.byteLength + 1,
		ab.byteLength * 10,
		ab.byteLength * 100,
		ab.byteLength * 1000,
		ab.byteLength * 10000
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( ab, value );
		};
	}
});

tape( 'the function throws an error if provided a byte offset which exceeds the number of bytes (length)', optsv0, function test( t ) {
	var values;
	var ab;
	var i;

	ab = new ArrayBuffer( 10 );

	values = [
		ab.byteLength + 1,
		ab.byteLength * 10,
		ab.byteLength * 100,
		ab.byteLength * 1000,
		ab.byteLength * 10000
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( ab, value, 1 );
		};
	}
});

tape( 'the function throws an error if provided a length which is not a nonnegative integer', optsv0, function test( t ) {
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
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( new ArrayBuffer( 10 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided a length which exceeds the number of bytes', optsv0, function test( t ) {
	var values;
	var ab;
	var i;

	ab = new ArrayBuffer( 10 );

	values = [
		ab.byteLength + 1,
		ab.byteLength * 10,
		ab.byteLength * 100,
		ab.byteLength * 1000,
		ab.byteLength * 10000
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arraybuffer2buffer( ab, 0, value );
		};
	}
});

tape( 'the function allocates a buffer from an ArrayBuffer', opts, function test( t ) {
	var buf;
	var ab;

	ab = new ArrayBuffer( 10 );
	buf = arraybuffer2buffer( ab );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, ab.byteLength, 'has expected length' );
	t.strictEqual( ArrayBuffer.isView( buf ), true, 'is a typed array view' );
	t.strictEqual( buf.buffer, ab, 'is a view' );

	t.end();
});

tape( 'the function supports specifying a byte offset to indicate the index of the first buffer byte', opts, function test( t ) {
	var expected;
	var view;
	var buf;
	var ab;
	var i;

	ab = new ArrayBuffer( 10 );
	view = new Uint8Array( ab );
	for ( i = 0; i < view.length; i++ ) {
		view[ i ] = i;
	}
	buf = arraybuffer2buffer( ab, 2 );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 8, 'has expected length' );
	t.strictEqual( ArrayBuffer.isView( buf ), true, 'is a typed array view' );
	t.strictEqual( buf.buffer, ab, 'is a view' );

	expected = [ 2, 3, 4, 5, 6, 7, 8, 9 ];
	for ( i = 0; i < buf.length; i++ ) {
		t.strictEqual( buf[ i ], expected[ i ], 'has expected value for element ' + i );
	}
	t.end();
});

tape( 'the function supports specifying a length to indicate the number of buffer bytes', opts, function test( t ) {
	var expected;
	var view;
	var buf;
	var ab;
	var i;

	ab = new ArrayBuffer( 10 );
	view = new Uint8Array( ab );
	for ( i = 0; i < view.length; i++ ) {
		view[ i ] = i;
	}
	buf = arraybuffer2buffer( ab, 2, 4 );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 4, 'has expected length' );
	t.strictEqual( ArrayBuffer.isView( buf ), true, 'is a typed array view' );
	t.strictEqual( buf.buffer, ab, 'is a view' );

	expected = [ 2, 3, 4, 5 ];
	for ( i = 0; i < buf.length; i++ ) {
		t.strictEqual( buf[ i ], expected[ i ], 'has expected value for element ' + i );
	}
	t.end();
});

tape( 'if provided an empty ArrayBuffer, the function returns an empty buffer', opts, function test( t ) {
	var buf;
	var ab;

	ab = new ArrayBuffer( 0 );
	buf = arraybuffer2buffer( ab );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 0, 'has expected length' );
	t.strictEqual( ArrayBuffer.isView( buf ), true, 'is a typed array view' );

	if ( NODE_VERSION >= 6 ) {
		t.strictEqual( buf.buffer, ab, 'is a view' );
	} else {
		t.notEqual( buf.buffer, ab, 'is not a view' );
	}
	t.end();
});

tape( 'if provided an empty ArrayBuffer, the function returns an empty buffer (Node <v6.x)', opts, function test( t ) {
	var arraybuffer2buffer;
	var buf;
	var ab;

	arraybuffer2buffer = proxyquire( './../lib/main.js', {
		'./node_version.js': 5
	});

	ab = new ArrayBuffer( 0 );
	buf = arraybuffer2buffer( ab );

	t.strictEqual( isBuffer( buf ), true, 'returns a buffer' );
	t.strictEqual( buf.length, 0, 'has expected length' );
	t.strictEqual( ArrayBuffer.isView( buf ), true, 'is a typed array view' );
	t.notEqual( buf.buffer, ab, 'is not a view' );

	t.end();
});
