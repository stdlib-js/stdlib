/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var dtypes2signatures = require( '@stdlib/ndarray/base/dtypes2signatures' );
var types = require( './../lib/types.json' );
var meta = require( './../lib/meta.json' );
var strided = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strided, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method providing an ndarray interface', function test( t ) {
	t.strictEqual( typeof strided.ndarray, 'function', 'method is a function' );
	t.end();
});

tape( 'if a native implementation is available, the main export is the native implementation', opts, function test( t ) {
	var strided = proxyquire( './../lib', {
		'@stdlib/utils/try-require': tryRequire
	});

	t.strictEqual( strided, mock, 'returns native implementation' );
	t.end();

	function tryRequire() {
		return mock;
	}

	function mock() {
		// Mock...
	}
});

tape( 'if a native implementation is not available, the main export is a JavaScript implementation', opts, function test( t ) {
	var strided;
	var main;

	main = require( './../lib/rsqrt.js' );

	strided = proxyquire( './../lib', {
		'@stdlib/utils/try-require': tryRequire
	});

	t.strictEqual( strided, main, 'returns JavaScript implementation' );
	t.end();

	function tryRequire() {
		return new Error( 'Cannot find module' );
	}
});

tape( 'attached to the main export is a property for retrieving the number of arguments', function test( t ) {
	t.strictEqual( strided.nargs, meta.nargs, 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a property for retrieving the number of input strided array arguments', function test( t ) {
	t.strictEqual( strided.nin, meta.nin, 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a property for retrieving the number of output strided array arguments', function test( t ) {
	t.strictEqual( strided.nout, meta.nout, 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a property for retrieving the list of supported array data types', function test( t ) {
	t.deepEqual( strided.types, dtypes2signatures( types, meta.nin, meta.nout ), 'returns expected value' );
	t.end();
});

tape( 'attached to the ndarray interface is a property for retrieving the number of arguments', function test( t ) {
	t.strictEqual( strided.ndarray.nargs, meta.nargs+meta.nin+meta.nout, 'returns expected value' );
	t.end();
});

tape( 'attached to the ndarray interface is a property for retrieving the number of input strided array arguments', function test( t ) {
	t.strictEqual( strided.ndarray.nin, meta.nin, 'returns expected value' );
	t.end();
});

tape( 'attached to the ndarray interface is a property for retrieving the number of output strided array arguments', function test( t ) {
	t.strictEqual( strided.ndarray.nout, meta.nout, 'returns expected value' );
	t.end();
});

tape( 'attached to the ndarray interface is a property for retrieving the list of supported array data types', function test( t ) {
	t.deepEqual( strided.ndarray.types, dtypes2signatures( types, meta.nin, meta.nout ), 'returns expected value' );
	t.end();
});
