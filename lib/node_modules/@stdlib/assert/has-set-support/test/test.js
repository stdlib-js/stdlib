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
var detect = require( './../lib' );


// VARIABLES //

var hasSet = ( typeof Set === 'function' );


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

tape( 'if `Set` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasSet ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./set.js': Mock
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function Mock() {
		var arr = [];

		function has( value ) {
			return arr.indexOf( value ) !== -1;
		}
		function add( value ) {
			if ( has( value ) ) {
				return;
			}
			arr.push( value );
		}

		return {
			'has': has,
			'add': add
		};
	}
});

tape( 'if `Set` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasSet ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./set.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false` (mocked)' );

	mocked = proxyquire( './../lib/main.js', {
		'./set.js': Mock1
	});
	t.strictEqual( mocked(), false, 'detection result is `false` (no `has` method)' );

	mocked = proxyquire( './../lib/main.js', {
		'./set.js': Mock2
	});
	t.strictEqual( mocked(), false, 'detection result is `false` (no `add` method)' );

	t.end();

	function Mock1() {
		var arr = [];

		function add( value ) {
			arr.push( value );
		}

		return {
			'add': add
		};
	}

	function Mock2() {
		var arr = [];

		function has( value ) {
			return arr.indexOf( value ) !== -1;
		}

		return {
			'has': has
		};
	}
});
