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
var HIGH = require( './../lib/high.js' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof HIGH, 'number', 'main export is a number' );
	t.end();
});

tape( 'if little endian, the export equals 1', function test( t ) {
	var HIGH = proxyquire( './../lib/high.js', {
		'@stdlib/assert/is-little-endian': true
	});

	t.equal( HIGH, 1, 'HIGH equals 1' );
	t.end();
});

tape( 'if big endian, the export equals 0', function test( t ) {
	var HIGH = proxyquire( './../lib/high.js', {
		'@stdlib/assert/is-little-endian': 'beep' // a value other than `true`
	});

	t.equal( HIGH, 0, 'HIGH equals 0' );
	t.end();
});
