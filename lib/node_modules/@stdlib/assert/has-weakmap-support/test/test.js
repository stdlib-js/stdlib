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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var detect = require( './../lib' );


// VARIABLES //

var hasWeakMap = ( typeof WeakMap === 'function' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'detection result is a boolean' );
	t.end();
});

tape( 'if `WeakMap` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasWeakMap ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./weakmap.js': Mock
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function Mock() {
		var o = {};
		function has( key ) {
			return hasOwnProp( o, key );
		}
		function set( key, value ) {
			o[ key ] = value;
		}
		function get( key ) {
			return o[ key ];
		}
		return {
			'has': has,
			'set': set,
			'get': get
		};
	}
});

tape( 'if `WeakMap` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasWeakMap ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./weakmap.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false` (mocked)' );

	mocked = proxyquire( './../lib/main.js', {
		'./weakmap.js': Mock1
	});
	t.strictEqual( mocked(), false, 'detection result is `false` (no `has` method)' );

	mocked = proxyquire( './../lib/main.js', {
		'./weakmap.js': Mock2
	});
	t.strictEqual( mocked(), false, 'detection result is `false` (no `set` method)' );

	mocked = proxyquire( './../lib/main.js', {
		'./weakmap.js': Mock3
	});
	t.strictEqual( mocked(), false, 'detection result is `false` (no `get` method)' );

	t.end();

	function Mock1() {
		var o = {};
		function set( key, value ) {
			o[ key ] = value;
		}
		function get( key ) {
			return o[ key ];
		}
		return {
			'set': set,
			'get': get
		};
	}

	function Mock2() {
		var o = {};
		function has( key ) {
			return hasOwnProp( o, key );
		}
		function get( key ) {
			return o[ key ];
		}
		return {
			'has': has,
			'get': get
		};
	}

	function Mock3() {
		var o = {};
		function has( key ) {
			return hasOwnProp( o, key );
		}
		function set( key, value ) {
			o[ key ] = value;
		}
		return {
			'has': has,
			'set': set
		};
	}
});
