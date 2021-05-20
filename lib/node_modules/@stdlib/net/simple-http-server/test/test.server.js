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

var path = require( 'path' );
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var cwd = require( '@stdlib/process/cwd' );
var httpServer = require( './../lib/server.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof httpServer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if provided a single argument which is neither an options object or a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			httpServer( value );
		};
	}
});

tape( 'the function throws a type error if provided more than one argument and the first argument is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			httpServer( value, noop );
		};
	}
});

tape( 'the function throws a type error if provided more than one argument and the second argument is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			httpServer( {}, value );
		};
	}
});

tape( 'the function throws an error if an error is encountered while attempting to start a server', function test( t ) {
	var httpServer = proxyquire( './../lib/server.js', {
		'@stdlib/net/http-server': createServer,
		'@stdlib/utils/open-url': noop
	});

	t.throws( foo, Error, 'throws an error' );
	t.end();

	function createServer() {
		return function boot( clbk ) {
			clbk( new Error( 'beep' ) );
		};
	}

	function foo() {
		httpServer( {} );
	}
});

tape( 'both the options and callback arguments are optional', function test( t ) {
	var httpServer;

	httpServer = proxyquire( './../lib/server.js', {
		'@stdlib/net/http-server': createServer,
		'@stdlib/utils/open-url': noop
	});

	httpServer();

	function createServer() {
		return function start( clbk ) {
			clbk( null, {
				'address': address,
				'once': noop
			});
			t.ok( true, 'ok' );
			t.end();
		};
	}
	function address() {
		return {
			'address': '0.0.0.0',
			'port': 57454
		};
	}
});

tape( 'the callback argument is optional (options)', function test( t ) {
	var httpServer;

	httpServer = proxyquire( './../lib/server.js', {
		'@stdlib/net/http-server': createServer,
		'@stdlib/utils/open-url': noop
	});

	httpServer({
		'port': 7331
	});

	function createServer() {
		return function start( clbk ) {
			clbk( null, {
				'address': address,
				'once': noop
			});
			t.ok( true, 'ok' );
			t.end();
		};
	}
	function address() {
		return {
			'address': '0.0.0.0',
			'port': 57454
		};
	}
});

tape( 'the options argument is optional (callback)', function test( t ) {
	var httpServer;

	httpServer = proxyquire( './../lib/server.js', {
		'@stdlib/utils/open-url': noop
	});

	httpServer( onReady );

	function onReady( error, server ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.ok( true, 'ok' );

		// Make sure to close the server:
		server.close();

		t.end();
	}
});

tape( 'if provided a `dir` option from which to serve files, the function resolves a relative path relative to the current working directory', function test( t ) {
	var httpServer;
	var opts;
	var dir;
	var flg;

	httpServer = proxyquire( './../lib/server.js', {
		'@stdlib/net/http-server': createServer,
		'@stdlib/utils/open-url': noop,
		'./request_listener.js': requestListener
	});

	opts = {
		'dir': './../test/beep/boop/../a/b/c'
	};

	dir = path.resolve( cwd(),
			opts.dir );

	httpServer( opts );

	function createServer() {
		function address() {
			return {
				'address': '0.0.0.0',
				'port': 57454
			};
		}
		return function start( clbk ) {
			clbk( null, {
				'address': address,
				'once': noop
			});
			if ( !flg ) {
				t.ok( false, 'failed to invoke request listener factory' );
			}
			t.end();
		};
	}

	function requestListener( options ) {
		t.equal( options.dir, dir, 'resolves relative path to current working directory' );
		flg = true;
	}
});

tape( 'if the `open` option is `true`, the function will attempt to open a user\'s default web browser', function test( t ) {
	var httpServer;
	var server;
	var opts;
	var flg;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'open': true
	};

	httpServer = proxyquire( './../lib/server.js', {
		'@stdlib/utils/open-url': openURL
	});

	httpServer( opts, onReady );

	function openURL( url ) {
		t.equal( url, 'http://'+opts.address+':'+opts.port, 'attempts to open URL' );
		flg = true;
	}

	function onReady( error, _server ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		if ( !flg ) {
			t.ok( false, 'did not attempt to open browser' );
		}
		server = _server;

		// Make sure to close the server:
		server.close();

		t.end();
	}
});
