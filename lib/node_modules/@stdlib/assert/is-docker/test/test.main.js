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
var constantFunction = require( '@stdlib/utils/constant-function' );
var isDocker = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isDocker, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if the process is running in a Docker container (existing `/.dockerenv` file)', function test( t ) {
	var isDocker;
	var bool;

	isDocker = proxyquire( './../lib/main.js', {
		'@stdlib/fs/exists': {
			'sync': constantFunction( true )
		}
	});

	bool = isDocker();
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `true` if the process is running in a Docker container (found `docker` in `cgroup`)', function test( t ) {
	var isDocker;
	var bool;

	isDocker = proxyquire( './../lib/main.js', {
		'@stdlib/fs/read-file': {
			'sync': constantFunction( 'docker' )
		}
	});

	bool = isDocker();
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if the process is not running in a Docker container', function test( t ) {
	var isDocker;
	var bool;

	isDocker = proxyquire( './../lib/main.js', {
		'@stdlib/fs/exists': {
			'sync': constantFunction( false )
		},
		'@stdlib/fs/read-file': {
			'sync': constantFunction( '' )
		}
	});

	bool = isDocker();
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});
