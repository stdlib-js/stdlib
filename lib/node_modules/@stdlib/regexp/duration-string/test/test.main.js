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
var reDurationString = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reDurationString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the returned regular expression matches a duration string', function test( t ) {
	var values;
	var RE;
	var i;

	RE = reDurationString();
	values = [
		'3d',
		'3d2h',
		'21h',
		'21h3m',
		'3m30s',
		'3m',
		'3m30ms',
		'3m30s40ms',
		'40ms',
		'3d4m',
		'3d4m30s',
		'3d4m30s40ms',
		'3d4h5m6s7ms',
		'3D',
		'3D2h',
		'21H',
		'21h3M',
		'3M30S',
		'3M',
		'3M30MS',
		'3M30S40MS',
		'40MS',
		'3D4M',
		'3D4M30S',
		'3D4M30S40MS',
		'3D4H5M6S7MS'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[i] ), true, 'returns expected value when provided '+values[i] );
	}
	t.end();
});

tape( 'the returned regular expression matches an empty string', function test( t ) {
	var RE = reDurationString();
	t.equal( RE.test( '' ), true, 'returns expected value' );
	t.end();
});

tape( 'the returned regular expression does not match a non-duration string', function test( t ) {
	var values;
	var RE;
	var i;

	RE = reDurationString();
	values = [
		'1.0.0',
		'3 days',
		'3 days 2 hours',
		'beep boop',
		'3d 2h',
		'foo'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});
