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
var defineProperty = require( '@stdlib/utils/define-property' );
var indexOf = require( '@stdlib/utils/index-of' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var Symbol = require( '@stdlib/symbol/ctor' );
var objectKeys = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof objectKeys, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own enumerable property names', function test( t ) {
	var expected;
	var actual;
	var obj;
	var idx;
	var i;

	function Foo() {
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		return this;
	}

	Foo.prototype.foo = [ 'bar' ];

	obj = new Foo();

	expected = [ 'beep', 'a' ];
	actual = objectKeys( obj );

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own enumerable property names (arguments)', function test( t ) {
	var expected;
	var actual;
	var idx;
	var i;

	expected = [ '0' ];
	actual = objectKeys( arguments );

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own enumerable property names (string)', function test( t ) {
	var expected;
	var actual;
	var idx;
	var i;

	expected = [ '0', '1', '2' ];
	actual = objectKeys( 'foo' );

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own enumerable property names (string; non-enumerable character indices)', function test( t ) {
	var objectKeys;
	var expected;
	var actual;
	var idx;
	var i;

	objectKeys = proxyquire( './../lib/polyfill.js', {
		'@stdlib/assert/has-own-property': mock
	});

	expected = [ '0', '1', '2' ];
	actual = objectKeys( 'foo' );

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();

	function mock( obj, prop ) {
		if ( obj === 'foo' ) {
			return false;
		}
		return hasOwnProp( obj, prop );
	}
});

tape( 'the function returns an array of an object\'s own enumerable property names (function; environments having enumerable prototype bug)', function test( t ) {
	var objectKeys;
	var expected;
	var actual;

	function noop() {
		// No-op...
	}

	noop.a = 'b';

	objectKeys = proxyquire( './../lib/polyfill.js', {
		'./has_enumerable_prototype_bug.js': true
	});

	expected = [ 'a' ];
	actual = objectKeys( noop );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an array of an object\'s own enumerable property names (environments having non-enumerable properties bug)', function test( t ) {
	var objectKeys;
	var expected;
	var actual;
	var FLG;
	var obj;
	var idx;
	var i;

	FLG = true;

	objectKeys = proxyquire( './../lib/polyfill.js', {
		'./has_non_enumerable_properties_bug.js': true,
		'@stdlib/assert/has-own-property': mock
	});

	obj = {
		'a': 'b',
		'toString': toString
	};
	expected = [ 'a', 'toString' ];
	actual = objectKeys( obj );

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();

	function toString() {
		return 'beep';
	}

	function mock( obj, prop ) {
		if ( prop === 'toString' && hasOwnProp( obj, prop ) ) {
			FLG = !FLG;
			return FLG;
		}
		return hasOwnProp( obj, prop );
	}
});

tape( 'the function returns an array of an object\'s own enumerable property names (environments having non-enumerable properties and constructor equality bugs)', function test( t ) {
	var objectKeys;
	var expected;
	var actual;
	var FLG;
	var obj;
	var idx;
	var i;

	FLG = true;

	objectKeys = proxyquire( './../lib/polyfill.js', {
		'./has_non_enumerable_properties_bug.js': true,
		'@stdlib/assert/has-own-property': mock
	});

	obj = {
		'a': 'b',
		'toString': toString,
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = obj; // circular

	expected = [ 'a', 'toString' ];
	actual = objectKeys( obj );

	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property name: '+expected[i] );
	}
	t.end();

	function toString() {
		return 'beep';
	}

	function mock( obj, prop ) {
		if ( prop === 'toString' && hasOwnProp( obj, prop ) ) {
			FLG = !FLG;
			return FLG;
		}
		return hasOwnProp( obj, prop );
	}
});

tape( 'the function ignores non-enumerable properties', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {};
	defineProperty( obj, 'foo', {
		'configurable': true,
		'writable': true,
		'enumerable': false,
		'value': 'bar'
	});

	actual = objectKeys( obj );
	expected = [];

	t.deepEqual( actual, expected, 'ignores non-enumerable properties' );
	t.end();
});

tape( 'the function returns an empty array if provided non-string primitives', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		void 0,
		null
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = objectKeys( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns an empty array if provided a Symbol', function test( t ) {
	var expected;
	var actual;

	if ( hasSymbolSupport() ) {
		actual = objectKeys( Symbol( 'beep' ) );
		expected = [];
		t.deepEqual( actual, expected, 'returns expected value' );
	} else {
		t.pass( 'environment does not support symbols' );
	}
	t.end();
});
