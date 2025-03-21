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
var ns = require( './../lib/functions/namespace.js' );


// FIXTURES //

function namespace() {
	var ns = [
		{
			'alias': 'beep',
			'value': {}
		},
		{
			'alias': 'boop',
			'value': []
		},
		{
			'alias': 'bop',
			'value': {}
		}
	];
	ns[ '@noCallThru' ] = true;
	return ns;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ns, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function logs namespace aliases', function test( t ) {
	var expected;
	var actual;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	expected = [
		'beep',
		'boop',
		'bop'
	];
	actual = [];

	ns = proxyquire( './../lib/functions/namespace.js', {
		'./../namespace.js': namespace(),
		'./../console.js': mock
	});

	ns();

	t.deepEqual( actual, expected, 'logs expected values' );
	t.end();

	function log( str ) {
		actual.push( str );
	}
});
