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
var proxyquire = require( 'proxyquire' );
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
var string2buffer = require( '@stdlib/buffer/from-string' );
var Number = require( '@stdlib/number/ctor' );
var Symbol = require( '@stdlib/symbol/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var polyfill = require( './../lib/polyfill.js' );
var getType = require( './../lib/main.js' );
var typeOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof typeOf, 'function', 'export is a function' );
	t.end();
});

tape( 'if an environment has non-standard `typeof` behavior, the main export is a polyfill', function test( t ) {
	var typeOf = proxyquire( './../lib', {
		'./check.js': check
	});

	t.equal( typeOf.toString(), polyfill.toString(), 'exports polyfill' );
	t.end();

	function check() {
		return true;
	}
});

tape( 'if an environment has standard `typeof` behavior, the main export is a function which extends built-in `typeof` behavior', function test( t ) {
	var typeOf = proxyquire( './../lib', {
		'./check.js': check
	});

	t.equal( typeOf.toString(), getType.toString(), 'exports main implementation' );
	t.end();

	function check() {
		return false;
	}
});

tape( 'the function returns a value\'s type', function test( t ) {
	var expected;
	var values;
	var type;
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
		new Int8Array( 10 ),
		new Uint8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Float32Array( 10 ),
		new Float64Array( 10 ),
		new ArrayBuffer( 10 ),
		string2buffer( 'beep' )
	];

	expected = [
		'string',
		'string',
		'number',
		'number',
		'number',
		'boolean',
		'boolean',
		'boolean',
		'boolean',
		'undefined',
		'null',
		'array',
		'object',
		'function',
		'regexp',
		'date',
		'math',
		'json',
		'error',
		'typeerror',
		'syntaxerror',
		'urierror',
		'evalerror',
		'referenceerror',
		'rangeerror',
		'int8array',
		'uint8array',
		'uint8clampedarray',
		'int16array',
		'uint16array',
		'int32array',
		'uint32array',
		'float32array',
		'float64array',
		'arraybuffer',
		'buffer'
	];

	for ( i = 0; i < values.length; i++ ) {
		type = typeOf( values[i] );
		t.equal( type, expected[i], 'returns '+expected[i]+' when provided '+values[i] );
	}
	t.end();
});

tape( 'the function supports Map objects (ES2015)', function test( t ) {
	var v;
	if ( hasMapSupport() ) {
		v = typeOf( new Map() );
		t.equal( v, 'map', 'returns map' );
	}
	t.end();
});

tape( 'the function supports WeakMap objects (ES2015)', function test( t ) {
	var v;
	if ( hasWeakMapSupport() ) {
		v = typeOf( new WeakMap() );
		t.equal( v, 'weakmap', 'returns weakmap' );
	}
	t.end();
});

tape( 'the function supports Set objects (ES2015)', function test( t ) {
	var v;
	if ( hasSetSupport() ) {
		v = typeOf( new Set() );
		t.equal( v, 'set', 'returns set' );
	}
	t.end();
});

tape( 'the function supports WeakSet objects (ES2015)', function test( t ) {
	var v;
	if ( hasWeakSetSupport() ) {
		v = typeOf( new WeakSet() );
		t.equal( v, 'weakset', 'returns weakset' );
	}
	t.end();
});

tape( 'the function supports Symbol objects (ES2015)', function test( t ) {
	var v;
	if ( hasSymbolSupport() ) {
		v = typeOf( Symbol( 'beep' ) );
		t.equal( v, 'symbol', 'returns symbol' );
	}
	t.end();
});

tape( 'the function supports custom objects', function test( t ) {
	var v;
	function Person() {}
	v = typeOf( new Person() );
	t.equal( v, 'person', 'returns person' );
	t.end();
});

tape( 'if a value\'s constructor is an anonymous function, the function returns an empty string', function test( t ) {
	// eslint-disable-next-line func-names, no-extra-parens, space-before-function-paren
	var v = typeOf( new ( function() {} )() );
	t.equal( v, '', 'returns empty string' );

	t.end();
});

// TODO: add generator function test
