/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var Number = require( '@stdlib/number/ctor' );
var detect = require( './../lib' );


// VARIABLES //

var hasFloat16Array = ( typeof Float16Array === 'function' ); // eslint-disable-line stdlib/require-globals


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'returns expected value' );
	t.end();
});

tape( 'if `Float16Array` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasFloat16Array ) {
		t.strictEqual( detect(), true, 'returns expected value' );
	} else {
		t.strictEqual( detect(), false, 'returns expected value' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./float16array.js': Mock
	});
	t.strictEqual( mocked(), true, 'returns expected value' );

	t.end();

	function Mock() {
		var mock = {
			'0': 1.0,
			'1': 3.0,
			'2': -3.0,
			'3': Number.POSITIVE_INFINITY,
			'length': 4,
			'constructor': {
				'name': 'Float16Array'
			},
			'BYTES_PER_ELEMENT': 2
		};
		return mock;
	}
});

tape( 'if `Float16Array` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasFloat16Array ) {
		t.strictEqual( detect(), true, 'returns expected value' );
	} else {
		t.strictEqual( detect(), false, 'returns expected value' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./float16array.js': {}
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	mocked = proxyquire( './../lib/main.js', {
		'./float16array.js': Mock1
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	mocked = proxyquire( './../lib/main.js', {
		'./float16array.js': Mock2
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	mocked = proxyquire( './../lib/main.js', {
		'./float16array.js': Mock3
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	mocked = proxyquire( './../lib/main.js', {
		'./float16array.js': Mock4
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	t.end();

	function Mock1() {
		// Not a typed array:
		return [];
	}

	function Mock2() {
		// Does not lose precision...
		var mock = {
			'0': 1.0,
			'1': 3.14,
			'2': -3.14,
			'3': Number.POSITIVE_INFINITY,
			'length': 4,
			'constructor': {
				'name': 'Float16Array'
			},
			'BYTES_PER_ELEMENT': 2
		};
		return mock;
	}

	function Mock3() {
		// Does not overflow...
		var mock = {
			'0': 1.0,
			'1': 3.140625,
			'2': -3.140625,
			'3': 5.0e40,
			'length': 4,
			'constructor': {
				'name': 'Float16Array'
			},
			'BYTES_PER_ELEMENT': 2
		};
		return mock;
	}

	function Mock4() {
		throw new Error( 'beep' );
	}
});
