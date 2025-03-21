/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var reSemVer = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reSemVer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the returned regular expression matches a semver version string', function test( t ) {
	var values;
	var RE;
	var i;

	RE = reSemVer();
	values = [
		'1.2.3',
		'1.0.0-alpha',
		'1.0.0-alpha.1',
		'1.0.0-0.3.7',
		'1.0.0-x.7.z.92',
		'1.0.0-alpha+001',
		'1.0.0+20130313144700',
		'1.0.0-beta+exp.sha.5',
		'1.0.0+21AF26D3--117B344092BD',
		'1.0.0+exp.sha.5114f85',
		'1.0.0+21AF26D3--117B344092BD',
		'1.0.0+exp.sha.5114f85'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[i] ), true, 'returns expected value when provided '+values[i] );
	}
	t.end();
});

tape( 'the returned regular expression does not match a non-semver version string', function test( t ) {
	var values;
	var RE;
	var i;

	RE = reSemVer();
	values = [
		'1.2',
		'-1.2.3',
		'1.2.3-',
		'1.2.3-+',
		'1.2.3-+001',
		'1.2.3-01',
		'1.2.3-0123',
		'1.2.3-0123.0123',
		'1.2.3-0123.0123.0123'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});
