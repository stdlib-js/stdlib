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
var detect = require( './../lib' );


// VARIABLES //

var hasNodeBuffer = ( typeof Buffer === 'function' );


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

tape( 'if `Buffer` is supported, detection result is `true` (no `from` method; Node <v5.10)', function test( t ) {
	var mocked;
	if ( hasNodeBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./buffer.js': Mock,
		'@stdlib/assert/is-buffer': isBuffer
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function isBuffer() {
		return true;
	}

	function Mock() {
		return [
			1,
			2,
			3,
			4
		];
	}
});

tape( 'if `Buffer` is supported, detection result is `true` (has `from` method; Node v5.10+)', function test( t ) {
	var mocked;
	if ( hasNodeBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	function Mock() {
		return this;
	}

	Mock.from = from;

	mocked = proxyquire( './../lib/main.js', {
		'./buffer.js': Mock,
		'@stdlib/assert/is-buffer': isBuffer
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function isBuffer() {
		return true;
	}

	function from() {
		return [
			1,
			2,
			3,
			4
		];
	}
});

tape( 'if `Buffer` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasNodeBuffer ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	function Mock1() {
		// Not a buffer:
		return {};
	}

	Mock1.from = null;

	function Mock2() {
		throw new Error( 'beep' );
	}

	Mock2.from = null;

	function Mock3() {
		return this;
	}

	Mock3.from = from;

	mocked = proxyquire( './../lib/main.js', {
		'./buffer.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./buffer.js': Mock1
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./buffer.js': Mock2,
		'@stdlib/assert/is-buffer': isBuffer
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./buffer.js': Mock3,
		'@stdlib/assert/is-buffer': isBuffer
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	t.end();

	function isBuffer() {
		return true;
	}

	function from() {
		throw new Error( 'boop' );
	}
});
