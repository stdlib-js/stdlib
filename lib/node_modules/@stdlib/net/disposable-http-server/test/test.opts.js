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
var getOpts = require( './../lib/opts.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof getOpts, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function extracts a `port` option', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'html': '<h1>beep</h1>',
		'open': true,
		'port': 7331
	};

	expected = {
		'port': opts.port
	};

	actual = getOpts( opts );

	t.deepEqual( actual, expected, 'extracts server options' );
	t.end();
});

tape( 'the function extracts a `maxport` option', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'html': '<h1>beep</h1>',
		'open': true,
		'maxport': 8000
	};

	expected = {
		'maxport': opts.maxport
	};

	actual = getOpts( opts );

	t.deepEqual( actual, expected, 'extracts server options' );
	t.end();
});

tape( 'the function extracts a `hostname` option', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'html': '<h1>beep</h1>',
		'open': true,
		'hostname': 'localhost'
	};

	expected = {
		'hostname': opts.hostname
	};

	actual = getOpts( opts );

	t.deepEqual( actual, expected, 'extracts server options' );
	t.end();
});

tape( 'the function extracts an `address` option', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'html': '<h1>beep</h1>',
		'open': true,
		'address': '127.0.0.1'
	};

	expected = {
		'address': opts.address
	};

	actual = getOpts( opts );

	t.deepEqual( actual, expected, 'extracts server options' );
	t.end();
});

tape( 'the function ignores non HTTP server options', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'html': '<h1>beep</h1>',
		'open': true,
		'port': 7331,
		'maxport': 8000,
		'address': '127.0.0.1',
		'hostname': 'localhost'
	};

	expected = {
		'port': opts.port,
		'maxport': opts.maxport,
		'address': opts.address,
		'hostname': opts.hostname
	};

	actual = getOpts( opts );

	t.deepEqual( actual, expected, 'extracts server options' );
	t.end();
});
