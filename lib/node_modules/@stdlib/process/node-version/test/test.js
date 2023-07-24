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
var IS_NODE = require( '@stdlib/assert/is-node' );
var VERSION = require( './../lib' );


// TESTS //

tape( 'main export is either a string or `null`', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof VERSION === 'string' || VERSION === null, true, 'main export is either a string or `null`' );
	t.end();
});

tape( 'if running in a Node.js process, the main export is a string; otherwise, the export is equal to `null`.', function test( t ) {
	if ( IS_NODE ) {
		t.equal( typeof VERSION, 'string', 'exports a string' );
	} else {
		t.equal( VERSION, null, 'exports null' );
	}
	t.end();
});

tape( 'if not running in a Node.js process, the main export is `null`', function test( t ) {
	var VERSION = proxyquire( './../lib', {
		'@stdlib/assert/is-node': false
	});
	t.equal( VERSION, null, 'exports null' );
	t.end();
});
