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
var noop = require( '@stdlib/utils/noop' );
var example = require( './../lib/functions/example.js' );


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

function examples() {
	return {
		'beep': 'x = "Beep!"',
		'boop': 'y = "Boop!"'
	};
}

function repl() {
	return {
		'write': noop,
		'displayPrompt': noop
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof example, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	t.strictEqual( typeof example( repl() ), 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function executes an example (alias)', function test( t ) {
	var example;
	var count;
	var mock;
	var ns;
	var eg;
	var f;

	mock = repl();
	mock.write = write;

	ns = namespace();
	eg = examples();

	example = proxyquire( './../lib/functions/example.js', {
		'./../namespace.js': ns,
		'./../examples.js': eg
	});
	f = example( mock );

	count = 0;
	f( 'beep' );

	function write( str ) {
		count += 1;
		if ( count === 1 ) {
			t.strictEqual( str, '\n', 'passes expected value' );
		} else {
			t.strictEqual( str, 'x = "Beep!"', 'passes expected value' );
			t.end();
		}
	}
});

tape( 'the returned function executes an example (known value reference)', function test( t ) {
	var example;
	var count;
	var mock;
	var ns;
	var eg;
	var f;

	mock = repl();
	mock.write = write;

	ns = namespace();
	eg = examples();

	example = proxyquire( './../lib/functions/example.js', {
		'./../namespace.js': ns,
		'./../examples.js': eg
	});
	f = example( mock );

	count = 0;
	f( ns[ 1 ].value );

	function write( str ) {
		count += 1;
		if ( count === 1 ) {
			t.strictEqual( str, '\n', 'passes expected value' );
		} else {
			t.strictEqual( str, 'y = "Boop!"', 'passes expected value' );
			t.end();
		}
	}
});

tape( 'if unable to resolve an example, the returned function logs a message (alias)', function test( t ) {
	var example;
	var mock;
	var ns;
	var eg;
	var f;

	mock = {
		'log': log
	};
	ns = namespace();
	eg = examples();

	example = proxyquire( './../lib/functions/example.js', {
		'./../namespace.js': ns,
		'./../examples.js': eg,
		'./../console.js': mock
	});
	f = example( repl );

	f( 'adkfjadkfjsldjjfasdlfsdj' );

	function log( str ) {
		t.notEqual( str, 'x = "Beep!"', 'passes different string' );
		t.notEqual( str, 'y = "Boop!"', 'passes different string' );
		t.end();
	}
});

tape( 'if unable to resolve an example, the returned function logs a message (value)', function test( t ) {
	var example;
	var mock;
	var ns;
	var eg;
	var f;

	mock = {
		'log': log
	};
	ns = namespace();
	eg = examples();

	example = proxyquire( './../lib/functions/example.js', {
		'./../namespace.js': ns,
		'./../examples.js': eg,
		'./../console.js': mock
	});
	f = example( repl );

	f( ns[ 2 ].value );

	function log( str ) {
		t.notEqual( str, 'x = "Beep!"', 'passes different string' );
		t.notEqual( str, 'y = "Boop!"', 'passes different string' );
		t.end();
	}
});
