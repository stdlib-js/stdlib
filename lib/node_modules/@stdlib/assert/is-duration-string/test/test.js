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
var isDurationString = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isDurationString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a duration string', function test( t ) {
	var values;
	var i;

	values = [
		'1s',
		'2m',
		'3h',
		'1d',
		'1s2ms',
		'1h2m',
		'1d2h',
		'1d2h3m',
		'1d2h3m4s',
		'1d2h3m4s5ms',
		'1d2h3m4s5MS'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isDurationString( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a non-duration string', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'1',
		'1.2',
		'1y',
		'1w',
		'1x',
		'2h1d',
		'5ms2s3m4h5d'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isDurationString( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		new Date(),
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {},
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isDurationString( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
