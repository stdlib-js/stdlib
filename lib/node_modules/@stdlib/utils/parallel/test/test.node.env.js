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
var env = require( './../lib/node/env.js' );


// FIXTURES //

function getOpts() {
	return {
		'encoding': 'buffer',
		'maxBuffer': 1024,
		'cmd': 'node',
		'ordered': false,
		'uid': null,
		'gid': null
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof env, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object', function test( t ) {
	t.equal( typeof env( getOpts() ), 'object', 'returns an object' );
	t.end();
});

tape( 'the function sets a `WORKER_CMD` environment variable', function test( t ) {
	var out = env( getOpts() );
	t.equal( out.WORKER_CMD, 'node', 'sets env var' );
	t.end();
});

tape( 'the function sets a `WORKER_ENCODING` environment variable', function test( t ) {
	var out = env( getOpts() );
	t.equal( out.WORKER_ENCODING, 'buffer', 'sets env var' );
	t.end();
});

tape( 'the function sets a `WORKER_MAX_BUFFER` environment variable', function test( t ) {
	var out = env( getOpts() );
	t.equal( out.WORKER_MAX_BUFFER, 1024, 'sets env var' );
	t.end();
});

tape( 'if `ordered` is `true`, the function sets a `WORKER_ORDERED` environment variable', function test( t ) {
	var opts;
	var out;

	opts = getOpts();
	opts.ordered = true;

	out = env( opts );
	t.equal( out.WORKER_ORDERED, '1', 'sets env var' );

	t.end();
});

tape( 'if `uid` is truthy, the function sets a `WORKER_UID` environment variable', function test( t ) {
	var opts;
	var out;

	opts = getOpts();
	opts.uid = 1234;

	out = env( opts );
	t.equal( out.WORKER_UID, 1234, 'sets env var' );

	t.end();
});

tape( 'if `gid` is truthy, the function sets a `WORKER_GID` environment variable', function test( t ) {
	var opts;
	var out;

	opts = getOpts();
	opts.gid = 12345;

	out = env( opts );
	t.equal( out.WORKER_GID, 12345, 'sets env var' );

	t.end();
});
