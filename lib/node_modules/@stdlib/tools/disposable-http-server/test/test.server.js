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
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var noop = require( '@stdlib/utils/noop' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var httpServer = require( './../lib/server.js' );


// FIXTURES //

var request = require( './fixtures/request.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof httpServer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function requires an options object', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		httpServer();
	}
});

tape( 'the function throws a type error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws a type error' );
	t.end();

	function foo() {
		httpServer({
			'open': null
		});
	}
});

tape( 'the function throws a type error if provided a callback argument which is not a function', function test( t ) {
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

tape( 'if only provided HTML, the server serves the HTML content once and then closes', function test( t ) {
	var server;
	var opts;
	var flg;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'html': '<h1>Beep</h1>'
	};

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		var options;
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );

		options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/',
			'method': 'GET'
		};
		request( options, onResponse );
	}

	function onResponse( error, res, body ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( body, opts.html, 'returns content' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}

	function onClose() {
		t.ok( true, 'server closed' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}
});

tape( 'if only provided JavaScript, the server serves an HTML boilerplate and then the JavaScript and then closes', function test( t ) {
	var server;
	var fpath;
	var html;
	var opts;
	var flg;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'javascript': 'console.log("Beep");'
	};

	fpath = path.resolve( __dirname, '../static/index.html' );
	html = readFileSync( fpath, 'utf8' );

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );
		getHTML();
	}

	function getHTML() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/',
			'method': 'GET'
		};
		request( options, onHTML );
	}

	function onHTML( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, html, 'returns HTML boilerplate' );
		getJavaScript();
	}

	function getJavaScript() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/bundle.js',
			'method': 'GET'
		};
		request( options, onJavaScript );
	}

	function onJavaScript( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, opts.javascript, 'returns JavaScript' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}

	function onClose() {
		t.ok( true, 'server closed' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}
});

tape( 'if provided HTML and JavaScript, the server serves the HTML and then the JavaScript and then closes', function test( t ) {
	var server;
	var opts;
	var flg;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'html': '<script src="/bundle.js"></script>',
		'javascript': 'console.log("Beep");'
	};

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );
		getHTML();
	}

	function getHTML() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/',
			'method': 'GET'
		};
		request( options, onHTML );
	}

	function onHTML( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, opts.html, 'returns HTML' );
		getJavaScript();
	}

	function getJavaScript() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/bundle.js',
			'method': 'GET'
		};
		request( options, onJavaScript );
	}

	function onJavaScript( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, opts.javascript, 'returns JavaScript' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}

	function onClose() {
		t.ok( true, 'server closed' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}
});

tape( 'if a client only requests JavaScript, the server serves the JavaScript and then closes', function test( t ) {
	var server;
	var opts;
	var flg;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'javascript': 'console.log("Beep");'
	};

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );
		getJavaScript();
	}

	function getJavaScript() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/bundle.js',
			'method': 'GET'
		};
		request( options, onJavaScript );
	}

	function onJavaScript( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, opts.javascript, 'returns JavaScript' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}

	function onClose() {
		t.ok( true, 'server closed' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}
});

tape( 'if the server receives a request for something other than the JavaScript bundle or base HTML page, the server returns a `404` response', function test( t ) {
	var server;
	var opts;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'html': '<h1>Beep</h1>'
	};

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		var options;
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );

		options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/beep/boop.js',
			'method': 'GET'
		};
		request( options, onResponse );
	}

	function onResponse( error, res ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( res.statusCode, 404, 'returns 404' );
		server.close();
	}

	function onClose() {
		t.ok( true, 'server closed' );
		t.end();
	}
});

tape( 'if the server receives a request while closing, the server returns a `503` response', function test( t ) {
	var server;
	var close;
	var opts;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'html': 'Beep!'
	};

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;

		// Intercept the close method:
		close = server.close;
		close = close.bind( server );
		server.close = noop;

		getHTML();
	}

	function getHTML() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/',
			'method': 'GET'
		};

		request( options, onHTML );
	}

	function onHTML( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, opts.html, 'returns HTML' );
		next();
	}

	function next() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/bundle.js',
			'method': 'GET'
		};
		request( options, onResponse );
	}

	function onResponse( error, res ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( res.statusCode, 503, 'returns 503 response' );

		// Restore the close method:
		server.close = close;
		server.close();

		t.end();
	}
});

tape( 'the function accepts `Buffer` objects for both HTML and JavaScript', function test( t ) {
	var server;
	var opts;
	var flg;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'html': string2buffer( '<script src="/bundle.js"></script>' ),
		'javascript': string2buffer( 'console.log("Beep");' )
	};

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );
		getHTML();
	}

	function getHTML() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/',
			'method': 'GET'
		};
		request( options, onHTML );
	}

	function onHTML( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, opts.html.toString(), 'returns HTML' );
		getJavaScript();
	}

	function getJavaScript() {
		var options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/bundle.js',
			'method': 'GET'
		};
		request( options, onJavaScript );
	}

	function onJavaScript( error, res, data ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		t.equal( data, opts.javascript.toString(), 'returns JavaScript' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}

	function onClose() {
		t.ok( true, 'server closed' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}
});

tape( 'the server will close any persistent connections on close', function test( t ) {
	var httpServer;
	var server;
	var opts;
	var flg;

	httpServer = proxyquire( './../lib/server.js', {
		'./connections_store.js': store
	});

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'html': '<h1>Beep</h1>'
	};

	httpServer( opts, onReady );

	function onReady( error, _server ) {
		var options;
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );

		options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/',
			'method': 'GET'
		};
		request( options, noop );
	}

	function onClose() {
		t.ok( true, 'server closed' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}

	function store() {
		return {
			'1234': {
				'destroy': destroy
			}
		};
	}

	function destroy() {
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}
});

tape( 'if the `open` option is `true`, the function will attempt to open the content in a user\'s default web browser', function test( t ) {
	var httpServer;
	var server;
	var opts;
	var flg;

	opts = {
		'port': 7331,
		'address': '127.0.0.1',
		'html': '<h1>Beep</h1>',
		'open': true
	};

	httpServer = proxyquire( './../lib/server.js', {
		'@stdlib/utils/open-url': openURL
	});

	httpServer( opts, onReady );

	function openURL( url ) {
		var options;

		t.equal( url, 'http://'+opts.address+':'+opts.port, 'attempts to open URL' );

		options = {
			'protocol': 'http:',
			'hostname': opts.address,
			'port': opts.port,
			'path': '/',
			'method': 'GET'
		};
		setTimeout( onTimeout, 0 );

		function onTimeout() {
			request( options, onResponse );
		}
	}

	function onReady( error, _server ) {
		if ( error ) {
			t.ok( false, error.message );
			return t.end();
		}
		server = _server;
		server.on( 'close', onClose );
	}

	function onResponse( error, res, body ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( body, opts.html, 'returns content' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}

	function onClose() {
		t.ok( true, 'server closed' );
		if ( flg ) {
			t.end();
		} else {
			flg = true;
		}
	}
});
