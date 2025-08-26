/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var http2 = require( 'http2' ); // eslint-disable-line node/no-unsupported-features/node-builtins
var tape = require( 'tape' );
var objectKeys = require( '@stdlib/utils/keys' );
var noop = require( '@stdlib/utils/noop' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var tryRequire = require( '@stdlib/utils/try-require' );
var createServer = require( './fixtures/server.js' );
var factory = require( './../lib' );


// VARIABLES //

var CERT = readFileSync( resolve( __dirname, 'fixtures', 'localhost-cert.pem' ) );
var KEY = readFileSync( resolve( __dirname, 'fixtures', 'localhost-privkey.pem' ) );

var main = tryRequire( resolve( __dirname, './../lib/main.js' ) );
var opts = {
	'skip': ( main instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function will throw an error if provided an invalid option', opts, function test( t ) {
	t.throws( foo, Error, 'throws error' );
	t.throws( bar, Error, 'throws error' );
	t.end();
	function foo() {
		factory({
			'cert': CERT,
			'key': KEY,
			'port': 3.14
		});
	}
	function bar() {
		factory({
			'cert': CERT,
			'key': KEY,
			'maxport': 3.14
		}, noop );
	}
});

tape( 'the function will throw an error if provided a request listener which is not a function', opts, function test( t ) {
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
			var opts = {
				'cert': CERT,
				'key': KEY
			};
			factory( opts, value );
		};
	}
});

tape( 'the function returns a function', opts, function test( t ) {
	var opts = {
		'cert': CERT,
		'key': KEY
	};
	t.strictEqual( typeof factory( opts ), 'function', 'returns expected value' );
	t.end();
});

tape( 'the returned function will throw an error if provided a callback argument which is not a function', opts, function test( t ) {
	var values;
	var create;
	var opts;
	var i;

	opts = {
		'cert': CERT,
		'key': KEY
	};
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

	create = factory( opts );

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

tape( 'the created server listens on a specified port', opts, function test( t ) {
	var create;
	var opts;

	opts = {
		'cert': CERT,
		'key': KEY,
		'port': 7331
	};

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

tape( 'the returned function will throw if the server encounters an error', opts, function test( t ) {
	var create;
	var server;
	var opts;

	opts = {
		'cert': CERT,
		'key': KEY,
		'port': 7331
	};

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

tape( 'the returned function will throw if unable to listen on a specified port (default behavior)', opts, function test( t ) {
	var create;
	var server;
	var opts;

	opts = {
		'cert': CERT,
		'key': KEY,
		'port': 10000
	};

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

tape( 'the returned function will port hunt', opts, function test( t ) {
	var eServer;
	var server;
	var create;
	var opts;

	opts = {
		'cert': CERT,
		'key': KEY,
		'port': 8080,
		'maxport': 9999
	};

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

tape( 'the server will listen on a specified hostname', opts, function test( t ) {
	var create;
	var opts;

	opts = {
		'cert': CERT,
		'key': KEY,
		'hostname': 'localhost'
	};

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

tape( 'the server will listen on a specified address', opts, function test( t ) {
	var create;
	var opts;

	opts = {
		'cert': CERT,
		'key': KEY,
		'address': '127.0.0.1'
	};

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

tape( 'the server will use a provided request listener', opts, function test( t ) {
	var connections;
	var client;
	var create;
	var server;
	var opts;

	opts = {
		'cert': CERT,
		'key': KEY,
		'allowHTTP1': true,
		'port': 7331
	};
	connections = {};

	create = factory( opts, onRequest );
	create( onServer );

	function onRequest( request, response ) {
		t.ok( true, 'uses request listener' );
		response.end( 'OK' );
		client.close();
		server.close();
		setTimeout( destroyConnections, 10 );
	}

	function onServer( error, s ) {
		var addr;
		var opts;
		var req;
		if ( error ) {
			t.ok( false, error.message );
		}
		server = s;

		server.on( 'connection', onConnection );
		server.once( 'close', onClose );

		addr = s.address();

		opts = {
			'ca': CERT
		};
		client = http2.connect( 'https://localhost:'+addr.port, opts, noop );
		req = client.request({
			':path': '/'
		});
		req.end();
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
