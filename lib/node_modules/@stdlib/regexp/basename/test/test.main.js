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
var reBasename = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( reBasename instanceof Function, true, 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `platform` argument is not a recognized platform', function test( t ) {
	var values;
	var i;

	values = [
		123,
		'abc',
		true,
		false,
		null,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function factory() {
			reBasename( value );
		};
	}
});

tape( 'the function returns a regular expression that captures the last part of a POSIX path (platform: `posix`)', function test( t ) {
	var expected;
	var values;
	var base;
	var RE;
	var i;

	RE = reBasename( 'posix' );

	values = [
		'index.js',
		'/foo/bar/home.html'
	];

	expected = [
		'index.js',
		'home.html'
	];

	for ( i = 0; i < values.length; i++ ) {
		base = RE.exec( values[ i ] )[ 1 ];
		t.strictEqual( base, expected[ i ], values[ i ] );
	}
	t.end();
});

tape( 'the function returns a regular expression that captures the last part of a Windows path (platform: `win32`)', function test( t ) {
	var expected;
	var values;
	var base;
	var RE;
	var i;

	RE = reBasename( 'win32' );

	values = [
		'index.js',
		'C:\\foo\\bar\\home.html'
	];

	expected = [
		'index.js',
		'home.html'
	];

	for ( i = 0; i < values.length; i++ ) {
		base = RE.exec( values[ i ] )[ 1 ];
		t.strictEqual( base, expected[ i ], values[ i ] );
	}
	t.end();
});
