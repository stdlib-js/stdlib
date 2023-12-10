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
var IS_WINDOWS = require( './../lib' );


// TESTS //

tape( 'main export is a boolean', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof IS_WINDOWS, 'boolean', 'main export is a boolean' );
	t.end();
});

tape( 'the main export is `true` if the current process is running on Windows', function test( t ) {
	var IS_WINDOWS;

	IS_WINDOWS = proxyquire( './../lib', {
		'@stdlib/os/platform': 'win32'
	});
	t.equal( IS_WINDOWS, true, 'is true' );
	t.end();
});

tape( 'the main export is `false` if the current process is not running on Windows', function test( t ) {
	var IS_WINDOWS;

	IS_WINDOWS = proxyquire( './../lib', {
		'@stdlib/os/platform': 'darwin'
	});
	t.equal( IS_WINDOWS, false, 'is false' );
	t.end();
});
