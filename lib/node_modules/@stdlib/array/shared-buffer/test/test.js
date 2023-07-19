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
var hasSharedArrayBufferSupport = require( '@stdlib/assert/has-sharedarraybuffer-support' ); // eslint-disable-line id-length
var isFunction = require( '@stdlib/assert/is-function' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var polyfill = require( './../lib/polyfill.js' );
var Ctor = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSharedArrayBufferSupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports `SharedArrayBuffer`, the export is an alias for `SharedArrayBuffer`', function test( t ) {
	var Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-sharedarraybuffer-support': isTrue,
		'./main.js': Mock
	});
	t.strictEqual( Foo, Mock, 'returns built-in' );

	if ( !opts.skip ) {
		t.strictEqual( Ctor, SharedArrayBuffer, 'is alias' ); // eslint-disable-line stdlib/require-globals, no-undef
	}

	t.end();

	function Mock() {
		return this;
	}

	function isTrue() {
		return true;
	}
});

tape( 'if an environment does not support `SharedArrayBuffer`, the export is a polyfill', function test( t ) {
	var Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-sharedarraybuffer-support': isFalse
	});

	t.strictEqual( Foo, polyfill, 'returns polyfill' );
	t.end();

	function isFalse() {
		return false;
	}
});

tape( 'the main export is a constructor', opts, function test( t ) {
	var buf = new Ctor( 10 );
	t.strictEqual( instanceOf( buf, Ctor ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor length is equal to `1`', opts, function test( t ) {
	t.strictEqual( Ctor.length, 1, 'returns expected value' );
	t.end();
});

tape( 'the constructor throws an error if provided a value exceeding `2^53-1`', opts, function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		return new Ctor( MAX_SAFE_INTEGER+1 );
	}
});

tape( 'the constructor returns a `SharedArrayBuffer` instance having a `byteLength` property, which returns the number of bytes in a `SharedArrayBuffer`', opts, function test( t ) {
	var buf;

	t.strictEqual( hasOwnProp( Ctor.prototype, 'byteLength' ), true, 'has prototype property' );

	buf = new Ctor( 10 );
	t.strictEqual( hasOwnProp( buf, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( buf, 'byteLength' ), true, 'has property' );
	t.strictEqual( buf.byteLength, 10, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a `SharedArrayBuffer` instance having a `slice` method, which copies the bytes of a `SharedArrayBuffer` to a new `SharedArrayBuffer`', opts, function test( t ) {
	var b1;
	var b2;

	t.strictEqual( hasOwnProp( Ctor.prototype, 'slice' ), true, 'has prototype property' );
	t.strictEqual( isFunction( Ctor.prototype.slice ), true, 'has method' );

	b1 = new Ctor( 10 );
	t.strictEqual( hasOwnProp( b1, 'slice' ), false, 'does not have own property' );
	t.strictEqual( hasProp( b1, 'slice' ), true, 'has property' );

	b2 = b1.slice();
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, b1.byteLength, 'has same number of bytes' );

	b2 = b1.slice( 2 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 8, 'has expected number of bytes' );

	b2 = b1.slice( b1.byteLength + 10 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 0, 'has expected number of bytes' );

	b2 = b1.slice( -2 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 2, 'has expected number of bytes' );

	b2 = b1.slice( -100 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 10, 'has expected number of bytes' );

	b2 = b1.slice( 0, 6 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 6, 'has expected number of bytes' );

	b2 = b1.slice( 2, 6 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 4, 'has expected number of bytes' );

	b2 = b1.slice( 0, -2 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 8, 'has expected number of bytes' );

	b2 = b1.slice( 0, -100 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 0, 'has expected number of bytes' );

	b2 = b1.slice( -4, -2 );
	t.strictEqual( instanceOf( b2, Ctor ), true, 'returns an instance' );
	t.notEqual( b2, b1, 'returns a new reference' );
	t.strictEqual( b2.byteLength, 2, 'has expected number of bytes' );

	t.end();
});

// TODO: add tests testing shared memory semantics/behavior
