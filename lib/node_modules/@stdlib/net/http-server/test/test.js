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

var http = require( 'http' );
var tape = require( 'tape' );
var objectKeys = require( '@stdlib/utils/keys' );
var noop = require( '@stdlib/utils/noop' );
var createServer = require( './fixtures/server.js' );
var factory = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function will throw an error if provided an invalid option', function test( t ) {
	t.throws( foo, Error, 'throws error' );
	t.throws( bar, Error, 'throws error' );
	t.end();
	function foo() {
		factory({
			'port': 3.14
		});
	}
	function bar() {
		factory({
			'maxport': 3.14
		}, noop );
	}
});

tape( 'the function will throw an error if provided a request listener which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			factory( {}, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	t.strictEqual( typeof factory(), 'function', 'returns expected value' );
	t.end();
});

tape( 'the returned function will throw an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var create;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{}
	];

	create = factory( {} );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			create( value );
		};
	}
});

tape( 'the created server listens on a specified port', function test( t ) {
	var create;
	var opts;

	opts = {};
	opts.port = 7331;

	create = factory( opts );
	create( onServer );

	function onServer( error, server ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( server.address().port, opts.port, 'listens on port '+opts.port );
		}
		server.close();
		t.end();
	}
});

tape( 'the returned function will throw if the server encounters an error', function test( t ) {
	var create;
	var server;
	var opts;

	opts = {};
	opts.port = 1337;

	create = factory( opts );
	create( next );

	function next( error, s ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		server = s;
		t.throws( foo, Error, 'throws error' );
		server.close();
		t.end();
	}

	function foo() {
		var err = new Error( 'Server error.' );
		server.emit( 'error', err );
	}
});

tape( 'the returned function will throw if unable to listen on a specified port (default behavior)', function test( t ) {
	var create;
	var server;
	var opts;

	opts = {};
	opts.port = 10000;

	create = factory( opts );
	create( next );

	function next( error, s ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		server = s;
		t.throws( foo, Error, 'throws an error' );
		server.close();
		t.end();
	}

	function foo() {
		var err = new Error( 'Server address already in use.' );
		err.code = 'EADDRINUSE';

		server.emit( 'error', err );
	}
});

tape( 'the returned function will port hunt', function test( t ) {
	var eServer;
	var server;
	var create;
	var opts;

	opts = {};
	opts.port = 8080;
	opts.maxport = 9999;

	create = factory( opts );
	eServer = createServer( opts.port, next );

	function next() {
		var addr = eServer.address();
		t.strictEqual( addr.port, opts.port, 'fixture server bound to port '+opts.port+' and with address '+addr.address );
		create( onServer );
	}

	function onServer( error, s ) {
		var port;
		server = s;
		if ( error ) {
			t.ok( false, error.message );
		} else {
			port = server.address().port;
			t.strictEqual( port > opts.port, true, 'returns a server with a port ('+port+') higher than '+opts.port );
		}
		setTimeout( onTimeout, 0 );
	}

	function onTimeout() {
		server.close();
		eServer.close();
		t.end();
	}
});

tape( 'the server will listen on a specified hostname', function test( t ) {
	var create;
	var opts;

	opts = {};
	opts.hostname = 'localhost';

	create = factory( opts );
	create( onServer );

	function onServer( error, server ) {
		var address;

		if ( error ) {
			t.ok( false, error.message );
		} else {
			address = server.address().address;
			t.ok( address === '127.0.0.1' || address === '::1', 'listens on address 127.0.0.1 (localhost)' );
		}
		server.close();
		t.end();
	}
});

tape( 'the server will listen on a specified address', function test( t ) {
	var create;
	var opts;

	opts = {};
	opts.address = '127.0.0.1';

	create = factory( opts );
	create( onServer );

	function onServer( error, server ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( server.address().address, opts.address, 'listens at address '+opts.address );
		}
		server.close();
		t.end();
	}
});

tape( 'the server will use a provided request listener (no options)', function test( t ) {
	var connections;
	var create;
	var server;

	connections = {};

	create = factory( onRequest );
	create( onServer );

	function onRequest( request, response ) {
		t.ok( true, 'uses request listener' );
		response.end( 'OK' );
		server.close();
		setTimeout( destroyConnections, 10 );
	}

	function onServer( error, s ) {
		var addr;
		if ( error ) {
			t.ok( false, error.message );
		}
		server = s;

		server.on( 'connection', onConnection );
		server.once( 'close', onClose );

		addr = s.address();
		http.get( 'http://'+addr.address+':'+addr.port, noop );
	}

	function onClose() {
		t.end();
	}

	function onConnection( socket ) {
		var key;

		key = socket.remoteAddress+':'+socket.remotePort;
		connections[ key ] = socket;

		socket.once( 'close', onSocketClose );

		function onSocketClose() {
			delete connections[ key ];
		}
	}

	function destroyConnections() {
		var keys;
		var i;
		keys = objectKeys( connections );
		for ( i = 0; i < keys.length; i++ ) {
			connections[ keys[i] ].destroy();
		}
	}
});

tape( 'the server will use a provided request listener (options)', function test( t ) {
	var connections;
	var create;
	var server;
	var opts;

	opts = {};
	opts.port = 7331;

	connections = {};

	create = factory( opts, onRequest );
	create( onServer );

	function onRequest( request, response ) {
		t.ok( true, 'uses request listener' );
		response.end( 'OK' );
		server.close();
		setTimeout( destroyConnections, 10 );
	}

	function onServer( error, s ) {
		var addr;
		if ( error ) {
			t.ok( false, error.message );
		}
		server = s;

		server.on( 'connection', onConnection );
		server.once( 'close', onClose );

		addr = s.address();
		http.get( 'http://'+addr.address+':'+addr.port, noop );
	}

	function onClose() {
		t.end();
	}

	function onConnection( socket ) {
		var key;

		key = socket.remoteAddress+':'+socket.remotePort;
		connections[ key ] = socket;

		socket.once( 'close', onSocketClose );

		function onSocketClose() {
			delete connections[ key ];
		}
	}

	function destroyConnections() {
		var keys;
		var i;
		keys = objectKeys( connections );
		for ( i = 0; i < keys.length; i++ ) {
			connections[ keys[i] ].destroy();
		}
	}
});
