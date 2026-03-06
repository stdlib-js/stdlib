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
var round = require( '@stdlib/math/base/special/round' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var detect = require( './../lib' );


// VARIABLES //

var hasUint8ClampedArray = ( typeof Uint8ClampedArray === 'function' );


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

tape( 'if `Uint8ClampedArray` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasUint8ClampedArray ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./uint8clampedarray.js': Mock,
		'@stdlib/assert/is-uint8clampedarray': isArray
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function isArray() {
		return true;
	}

	function Mock( arr ) {
		var out = [];
		var v;
		var i;

		for ( i = 0; i < arr.length; i++ ) {
			v = arr[ i ];
			if ( v < 0 ) {
				v = 0;
			} else if ( v > 255 ) {
				v = 255;
			}
			out.push( round( v ) );
		}
		return out;
	}
});

tape( 'if `Uint8ClampedArray` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasUint8ClampedArray ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./uint8clampedarray.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./uint8clampedarray.js': Mock1
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./uint8clampedarray.js': Mock2,
		'@stdlib/assert/is-uint8clampedarray': isArray
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./uint8clampedarray.js': Mock3,
		'@stdlib/assert/is-uint8clampedarray': isArray
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./uint8clampedarray.js': Mock4
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	mocked = proxyquire( './../lib/main.js', {
		'./uint8clampedarray.js': Mock5
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );

	t.end();

	function isArray() {
		return true;
	}

	function Mock1() {
		// Not a typed array:
		return [];
	}

	function Mock2( arr ) {
		var out = [];
		var v;
		var i;

		// Does not clamp...
		for ( i = 0; i < arr.length; i++ ) {
			v = arr[ i ];
			out.push( round( v ) );
		}
		return out;
	}

	function Mock3( arr ) {
		var out = [];
		var v;
		var i;

		// Does not clamp...
		for ( i = 0; i < arr.length; i++ ) {
			v = arr[ i ];
			if ( v < 0 ) {
				v = 0;
			}
			out.push( round( v ) );
		}
		return out;
	}

	function Mock4() {
		throw new Error( 'beep' );
	}

	function Mock5( arr ) {
		var out = [];
		var v;
		var i;

		// Does not round to nearest...
		for ( i = 0; i < arr.length; i++ ) {
			v = arr[ i ];
			if ( v < 0 ) {
				v = 0;
			} else if ( v > 255 ) {
				v = 255;
			}
			out.push( v );
		}
		return out;
	}
});
