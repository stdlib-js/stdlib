/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var hasDataViewSupport = require( '@stdlib/assert/has-dataview-support' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasProp = require( '@stdlib/assert/has-property' );
var NODE_VERSION = require( '@stdlib/process/node-version' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var polyfill = require( './../lib/polyfill.js' );
var Ctor = require( './../lib' );


// VARIABLES //

var FLG = hasDataViewSupport();
var opts = {
	'skip': ( NODE_VERSION && NODE_VERSION.slice( 0, 4 ) === '0.10' ) // FIXME: remove once polyfill is written
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports `DataView`, the export is an alias for `DataView`', function test( t ) {
	var Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-dataview-support': isTrue,
		'./main.js': Mock
	});
	t.strictEqual( Foo, Mock, 'returns builtin' );

	if ( FLG ) {
		t.strictEqual( Ctor, DataView, 'is alias' ); // eslint-disable-line stdlib/require-globals
	}

	t.end();

	function Mock() {
		return this;
	}

	function isTrue() {
		return true;
	}
});

tape( 'if an environment does not support `DataView`, the export is a polyfill', function test( t ) {
	var Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-dataview-support': isFalse
	});

	t.strictEqual( Foo, polyfill, 'returns polyfill' );
	t.end();

	function isFalse() {
		return false;
	}
});

tape( 'the main export is a constructor', opts, function test( t ) {
	var buf;
	var dv;

	buf = new ArrayBuffer( 10 );

	dv = new Ctor( buf );
	t.strictEqual( instanceOf( dv, Ctor ), true, 'returns an instance' );

	dv = new Ctor( buf, 4 );
	t.strictEqual( instanceOf( dv, Ctor ), true, 'returns an instance' );

	dv = new Ctor( buf, 4, 2 );
	t.strictEqual( instanceOf( dv, Ctor ), true, 'returns an instance' );

	t.end();
});

tape( 'the constructor throws an error if not provided an array buffer', opts, function test( t ) {
	t.throws( badValue, TypeError, 'throws an error' );
	t.end();

	function badValue() {
		return new Ctor();
	}
});

tape( 'the constructor returns a `DataView` instance having a `buffer` property, which returns the underlying an array buffer', opts, function test( t ) {
	var buf;
	var dv;

	t.strictEqual( hasOwnProp( Ctor.prototype, 'buffer' ), true, 'has prototype property' );

	buf = new ArrayBuffer( 10 );
	dv = new Ctor( buf );
	t.strictEqual( hasOwnProp( dv, 'buffer' ), false, 'does not have own property' );
	t.strictEqual( hasProp( dv, 'buffer' ), true, 'has property' );
	t.strictEqual( dv.buffer, buf, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a `DataView` instance having a `byteLength` property, which returns the number of bytes in a `DataView`', opts, function test( t ) {
	var buf;
	var dv;

	t.strictEqual( hasOwnProp( Ctor.prototype, 'byteLength' ), true, 'has prototype property' );

	buf = new ArrayBuffer( 10 );

	dv = new Ctor( buf );
	t.strictEqual( hasOwnProp( dv, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( dv, 'byteLength' ), true, 'has property' );
	t.strictEqual( dv.byteLength, 10, 'returns expected value' );

	dv = new Ctor( buf, 4 );
	t.strictEqual( hasOwnProp( dv, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( dv, 'byteLength' ), true, 'has property' );
	t.strictEqual( dv.byteLength, 6, 'returns expected value' );

	dv = new Ctor( buf, 4, 2 );
	t.strictEqual( hasOwnProp( dv, 'byteLength' ), false, 'does not have own property' );
	t.strictEqual( hasProp( dv, 'byteLength' ), true, 'has property' );
	t.strictEqual( dv.byteLength, 2, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a `DataView` instance having a `byteOffset` property, which returns the number of bytes from the view to the start of the underlying an array buffer', opts, function test( t ) {
	var buf;
	var dv;

	t.strictEqual( hasOwnProp( Ctor.prototype, 'byteOffset' ), true, 'has prototype property' );

	buf = new ArrayBuffer( 10 );
	dv = new Ctor( buf, 4 );
	t.strictEqual( hasOwnProp( dv, 'byteOffset' ), false, 'does not have own property' );
	t.strictEqual( hasProp( dv, 'byteOffset' ), true, 'has property' );
	t.strictEqual( dv.byteOffset, 4, 'returns expected value' );

	t.end();
});
