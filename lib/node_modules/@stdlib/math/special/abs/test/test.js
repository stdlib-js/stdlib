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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var dtypes2signatures = require( '@stdlib/ndarray/base/dtypes2signatures' );
var hasProp = require( '@stdlib/assert/has-property' );
var types = require( './../lib/types.json' );
var meta = require( './../lib/meta.json' );
var fcn = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fcn, 'function', 'main export is a function' );
	t.end();
});

tape( 'if a native implementation is available, the main export is the native implementation', opts, function test( t ) {
	var fcn = proxyquire( './../lib', {
		'@stdlib/utils/try-require': tryRequire
	});

	t.strictEqual( fcn, mock, 'returns native implementation' );
	t.end();

	function tryRequire() {
		return mock;
	}

	function mock() {
		// Mock...
	}
});

tape( 'if a native implementation is not available, the main export is a JavaScript implementation', opts, function test( t ) {
	var main;
	var fcn;

	main = require( './../lib/main.js' );

	fcn = proxyquire( './../lib', {
		'@stdlib/utils/try-require': tryRequire
	});

	t.strictEqual( fcn, main, 'returns JavaScript implementation' );
	t.end();

	function tryRequire() {
		return new Error( 'Cannot find module' );
	}
});

tape( 'attached to the main export is a property for retrieving the number of input and output arrays', function test( t ) {
	t.strictEqual( fcn.nargs, meta.nargs, 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a property for retrieving the number of input arrays', function test( t ) {
	t.strictEqual( fcn.nin, meta.nin, 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a property for retrieving the number of output arrays', function test( t ) {
	t.strictEqual( fcn.nout, meta.nout, 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a property for retrieving the list of supported array data types', function test( t ) {
	t.deepEqual( fcn.types, dtypes2signatures( types, meta.nin, meta.nout ), 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is an `assign` method for assigning results to a provided output array', function test( t ) {
	t.strictEqual( hasProp( fcn, 'assign' ), true, 'has property' );
	t.strictEqual( typeof fcn.assign, 'function', 'has method' );
	t.end();
});

tape( 'attached to the `assign` method is a property for retrieving the number of input and output arrays', function test( t ) {
	t.strictEqual( fcn.assign.nargs, meta.nargs, 'returns expected value' );
	t.end();
});

tape( 'attached to the `assign` method is a property for retrieving the number of input arrays', function test( t ) {
	t.strictEqual( fcn.assign.nin, meta.nin, 'returns expected value' );
	t.end();
});

tape( 'attached to the `assign` method is a property for retrieving the number of output arrays', function test( t ) {
	t.strictEqual( fcn.assign.nout, meta.nout, 'returns expected value' );
	t.end();
});

tape( 'attached to the `assign` method is a property for retrieving the list of supported array data types', function test( t ) {
	t.deepEqual( fcn.assign.types, dtypes2signatures( types, meta.nin, meta.nout ), 'returns expected value' );
	t.end();
});
