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
var pkg2alias = require( './../lib/functions/pkg2alias.js' );


// FIXTURES //

function namespace() {
	var ns = [
		{
			'alias': 'beep',
			'path': '@stdlib/beep',
			'value': {}
		},
		{
			'alias': 'boop',
			'path': '@stdlib/foo/boop',
			'value': []
		},
		{
			'value': {}
		}
	];
	ns[ '@noCallThru' ] = true;
	return ns;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pkg2alias, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
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
			pkg2alias( value );
		};
	}
});

tape( 'the function resolves a package name to an alias', function test( t ) {
	var pkg2alias;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	ns = namespace();

	pkg2alias = proxyquire( './../lib/functions/pkg2alias.js', {
		'./../namespace.js': ns,
		'./../console.js': mock
	});

	pkg2alias( '@stdlib/beep' );

	function log( str ) {
		t.strictEqual( str, 'beep', 'logs expected value' );
		t.end();
	}
});

tape( 'the function resolves a package name to an alias', function test( t ) {
	var pkg2alias;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	ns = namespace();

	pkg2alias = proxyquire( './../lib/functions/pkg2alias.js', {
		'./../namespace.js': ns,
		'./../console.js': mock
	});

	pkg2alias( '@stdlib/foo/boop' );

	function log( str ) {
		t.strictEqual( str, 'boop', 'logs expected value' );
		t.end();
	}
});

tape( 'if unable to resolve an alias, the function logs a message', function test( t ) {
	var pkg2alias;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	ns = namespace();

	pkg2alias = proxyquire( './../lib/functions/pkg2alias.js', {
		'./../namespace.js': ns,
		'./../console.js': mock
	});

	pkg2alias( 'adkfjadkfjsldjjfasdlfsdj' );

	function log( str ) {
		t.notEqual( str, 'beep', 'logs a different string' );
		t.notEqual( str, 'boop', 'logs a different string' );
		t.end();
	}
});
