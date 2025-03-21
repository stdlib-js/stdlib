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
var help = require( './../lib/functions/help.js' );


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

function docs() {
	return {
		'beep': 'Beep!',
		'boop': 'Boop!'
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof help, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function logs help usage (alias)', function test( t ) {
	var help;
	var mock;
	var ns;
	var d;

	mock = {
		'log': log
	};

	ns = namespace();
	d = docs();

	help = proxyquire( './../lib/functions/help.js', {
		'./../namespace.js': ns,
		'./../docs.js': d,
		'./../console.js': mock
	});

	help( 'beep' );

	function log( str ) {
		t.strictEqual( str, 'Beep!', 'passes expected help text' );
		t.end();
	}
});

tape( 'the function logs help usage (known value reference)', function test( t ) {
	var help;
	var mock;
	var ns;
	var d;

	mock = {
		'log': log
	};

	ns = namespace();
	d = docs();

	help = proxyquire( './../lib/functions/help.js', {
		'./../namespace.js': ns,
		'./../docs.js': d,
		'./../console.js': mock
	});

	help( ns[ 1 ].value );

	function log( str ) {
		t.strictEqual( str, 'Boop!', 'passes expected help text' );
		t.end();
	}
});

tape( 'if unable to resolve help information, the function logs a message (alias)', function test( t ) {
	var help;
	var mock;
	var ns;
	var d;

	mock = {
		'log': log
	};

	ns = namespace();
	d = docs();

	help = proxyquire( './../lib/functions/help.js', {
		'./../namespace.js': ns,
		'./../docs.js': d,
		'./../console.js': mock
	});

	help( 'adkfjadkfjsldjjfasdlfsdj' );

	function log( str ) {
		t.notEqual( str, 'Beep!', 'passes different string' );
		t.notEqual( str, 'Boop!', 'passes different string' );
		t.end();
	}
});

tape( 'if unable to resolve help information, the function logs a message (value; no REPL docs)', function test( t ) {
	var help;
	var mock;
	var ns;
	var d;

	mock = {
		'log': log
	};

	ns = namespace();
	d = docs();

	help = proxyquire( './../lib/functions/help.js', {
		'./../namespace.js': ns,
		'./../docs.js': d,
		'./../console.js': mock
	});

	help( ns[ 2 ].value );

	function log( str ) {
		t.notEqual( str, 'Beep!', 'passes different string' );
		t.notEqual( str, 'Boop!', 'passes different string' );
		t.end();
	}
});
