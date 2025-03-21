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
var alias2pkg = require( './../lib/functions/alias2pkg.js' );


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
	t.strictEqual( typeof alias2pkg, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function resolves an alias to a package name (alias)', function test( t ) {
	var alias2pkg;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	ns = namespace();

	alias2pkg = proxyquire( './../lib/functions/alias2pkg.js', {
		'./../namespace.js': ns,
		'./../console.js': mock
	});

	alias2pkg( 'beep' );

	function log( str ) {
		t.strictEqual( str, '@stdlib/beep', 'logs expected value' );
		t.end();
	}
});

tape( 'the function resolves an alias to a package name (known value reference)', function test( t ) {
	var alias2pkg;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	ns = namespace();

	alias2pkg = proxyquire( './../lib/functions/alias2pkg.js', {
		'./../namespace.js': ns,
		'./../console.js': mock
	});

	alias2pkg( ns[ 1 ].value );

	function log( str ) {
		t.strictEqual( str, '@stdlib/foo/boop', 'logs expected value' );
		t.end();
	}
});

tape( 'if unable to resolve a package name, the function logs a message (alias)', function test( t ) {
	var alias2pkg;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	ns = namespace();

	alias2pkg = proxyquire( './../lib/functions/alias2pkg.js', {
		'./../namespace.js': ns,
		'./../console.js': mock
	});

	alias2pkg( 'adkfjadkfjsldjjfasdlfsdj' );

	function log( str ) {
		t.notEqual( str, '@stdlib/beep', 'logs a different string' );
		t.notEqual( str, '@stdlib/foo/boop', 'logs a different string' );
		t.end();
	}
});

tape( 'if unable to resolve a package name, the function logs a message (value; no alias)', function test( t ) {
	var alias2pkg;
	var mock;
	var ns;

	mock = {
		'log': log
	};

	ns = namespace();

	alias2pkg = proxyquire( './../lib/functions/alias2pkg.js', {
		'./../namespace.js': ns,
		'./../console.js': mock
	});

	alias2pkg( ns[ 2 ].value );

	function log( str ) {
		t.notEqual( str, '@stdlib/beep', 'logs a different string' );
		t.notEqual( str, '@stdlib/foo/boop', 'logs a different string' );
		t.end();
	}
});
