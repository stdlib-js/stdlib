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

/* global global */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var openURL = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof openURL, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a valid URI', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'',
		'///boop',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			openURL( value );
		};
	}
});

tape( 'the function defers to the `window.open` method', function test( t ) {
	var openURL;
	var url;
	var win;

	win = global.window;
	global.window = {
		'open': mock
	};

	openURL = proxyquire( './../lib/browser.js', {} );

	url = 'https://google.com';
	openURL( url );

	global.window = win;

	function mock( val ) {
		t.equal( val, url, 'forwards the URL argument' );
		t.end();
	}
});
