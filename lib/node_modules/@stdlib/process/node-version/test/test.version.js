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
var VERSION = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a string', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof VERSION, 'string', 'main export is a string' );
	t.end();
});

tape( 'main export equals `process.versions.node`', function test( t ) {
	var VERSION = proxyquire( './../lib/main.js', {
		'./process.js': {
			'versions': {
				'node': '3.1.4'
			}
		}
	});
	t.equal( VERSION, '3.1.4', 'returns expected value' );
	t.end();
});
