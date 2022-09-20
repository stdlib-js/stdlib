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
var noop = require( '@stdlib/utils/noop' );
var homedir = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof homedir, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function aliases `os.homedir` if available', function test( t ) {
	var homedir;
	var opts;

	opts = {
		'os': {
			'homedir': noop
		}
	};
	homedir = proxyquire( './../lib', opts );

	t.strictEqual( homedir, noop, 'equals `os.homedir`' );
	t.end();
});

tape( 'the function supports older Node versions', function test( t ) {
	var homedir;
	var opts;

	opts = {
		'os': {
			'homedir': void 0
		},
		'./main.js': mock
	};
	homedir = proxyquire( './../lib', opts );

	t.strictEqual( homedir(), '/Users/beep', 'returns home directory' );

	t.end();

	function mock() {
		return '/Users/beep';
	}
});
