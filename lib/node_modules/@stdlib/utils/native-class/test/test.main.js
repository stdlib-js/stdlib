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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var hasMapSupport = require( '@stdlib/assert/has-map-support' );
var hasWeakMapSupport = require( '@stdlib/assert/has-weakmap-support' );
var hasSetSupport = require( '@stdlib/assert/has-set-support' );
var hasWeakSetSupport = require( '@stdlib/assert/has-weakset-support' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Number = require( '@stdlib/number/ctor' );
var Symbol = require( '@stdlib/symbol/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var nativeClass = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nativeClass, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns a string indicating the specification defined classification of an object (ES5)', function test( t ) {
	var expected;
	var values;
	var v;
	var i;

	values = [
		'a',
		new String( 'a' ),
		5,
		new Number( 5 ),
		NaN,
		true,
		new Boolean( true ),
		false,
		new Boolean( false ),
		void 0,
		null,
		[],
		{},
		function noop() {},
		/./,
		new Date(),
		Math,
		JSON,
		new Error(),
		new TypeError(),
		new SyntaxError(),
		new URIError(),
		new EvalError(),
		new ReferenceError(),
		new RangeError(),
		new Int8Array(),
		new Uint8Array(),
		new Uint8ClampedArray(),
		new Int16Array(),
		new Uint16Array(),
		new Int32Array(),
		new Uint32Array(),
		new Float32Array(),
		new Float64Array(),
		new ArrayBuffer()
	];

	expected = [
		'[object String]',
		'[object String]',
		'[object Number]',
		'[object Number]',
		'[object Number]',
		'[object Boolean]',
		'[object Boolean]',
		'[object Boolean]',
		'[object Boolean]',
		'[object Undefined]',
		'[object Null]',
		'[object Array]',
		'[object Object]',
		'[object Function]',
		'[object RegExp]',
		'[object Date]',
		'[object Math]',
		'[object JSON]',
		'[object Error]',
		'[object Error]',
		'[object Error]',
		'[object Error]',
		'[object Error]',
		'[object Error]',
		'[object Error]',
		'[object Int8Array]',
		'[object Uint8Array]',
		'[object Uint8ClampedArray]',
		'[object Int16Array]',
		'[object Uint16Array]',
		'[object Int32Array]',
		'[object Uint32Array]',
		'[object Float32Array]',
		'[object Float64Array]',
		'[object ArrayBuffer]'
	];

	for ( i = 0; i < values.length; i++ ) {
		v = nativeClass( values[i] );
		t.strictEqual( v, expected[i], 'returns '+expected[i]+' when provided '+values[i] );
	}
	t.end();
});

tape( 'the function supports Map objects (ES2015+)', function test( t ) {
	var v;
	if ( hasMapSupport() ) {
		v = nativeClass( new Map() );
		t.strictEqual( v, '[object Map]', 'returns [object Map]' );
	}
	t.end();
});

tape( 'the function supports WeakMap objects (ES2015+)', function test( t ) {
	var v;
	if ( hasWeakMapSupport() ) {
		v = nativeClass( new WeakMap() );
		t.strictEqual( v, '[object WeakMap]', 'returns [object WeakMap]' );
	}
	t.end();
});

tape( 'the function supports Set objects (ES2015+)', function test( t ) {
	var v;
	if ( hasSetSupport() ) {
		v = nativeClass( new Set() );
		t.strictEqual( v, '[object Set]', 'returns [object Set]' );
	}
	t.end();
});

tape( 'the function supports WeakSet objects (ES2015+)', function test( t ) {
	var v;
	if ( hasWeakSetSupport() ) {
		v = nativeClass( new WeakSet() );
		t.strictEqual( v, '[object WeakSet]', 'returns [object WeakSet]' );
	}
	t.end();
});

tape( 'the function supports Symbol objects (ES2015+)', function test( t ) {
	var v;
	if ( hasSymbolSupport() ) {
		v = nativeClass( Symbol( 'beep' ) );
		t.strictEqual( v, '[object Symbol]', 'returns [object Symbol]' );
	}
	t.end();
});

tape( 'the function supports custom objects', function test( t ) {
	var v;

	function Person() {
		return this;
	}

	v = nativeClass( new Person() );
	t.strictEqual( v, '[object Object]', 'returns [object Object]' );
	t.end();
});

// TODO: add generator function test
