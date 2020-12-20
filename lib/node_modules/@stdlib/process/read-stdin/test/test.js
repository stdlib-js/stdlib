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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var noop = require( '@stdlib/utils/noop' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var Stream = require( './fixtures/stdin.js' );
var stdin = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof stdin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws if provided an `encoding` argument which is not a string', opts, function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws TypeError when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			stdin( value, noop );
		};
	}
});

tape( 'the function throws if provided a `callback` argument which is not a function', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue1( values[i] ), TypeError, 'throws TypeError when provided ' + values[i] );
		t.throws( badValue2( values[i] ), TypeError, 'throws TypeError when provided ' + values[i] );
	}
	t.end();

	function badValue1( value ) {
		return function badValue() {
			stdin( value );
		};
	}
	function badValue2( value ) {
		return function badValue() {
			stdin( 'utf8', value );
		};
	}
});

tape( 'if `stdin` is run in TTY mode and the encoding is not set, the function returns an empty buffer', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = true;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( onRead );

	function onRead( error, data ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isBuffer( data ), true, 'returns a buffer' );
		t.equal( data.length, 0, 'buffer is empty' );
		t.end();
	}
});

tape( 'if `stdin` is run in TTY mode and the encoding is set, the function returns an empty string', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = true;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( 'hex', onRead );

	function onRead( error, data ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isBuffer( data ), false, 'does not return a buffer' );
		t.equal( typeof data, 'string', 'returns a string' );
		t.equal( data.length, 0, 'string is empty' );
		t.end();
	}
});

tape( 'if an error is encountered while reading from `stdin`, the error is returned', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = false;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( onRead );

	stream.emit( 'error', new Error( 'beep' ) );

	function onRead( error ) {
		if ( error ) {
			t.equal( error.message, 'beep', 'returns an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while reading from `stdin`, the error is returned (encoding set)', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = false;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( 'utf8', onRead );

	stream.emit( 'error', new Error( 'beep' ) );

	function onRead( error ) {
		if ( error ) {
			t.equal( error.message, 'beep', 'returns an error' );
		}
		t.end();
	}
});

tape( 'if the `encoding` argument is not set, the function returns `stdin` data as a `buffer`', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = false;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( onRead );

	stream.push( string2buffer( 'beep' ) );
	stream.push( string2buffer( ' ' ) );
	stream.push( string2buffer( 'boop' ) );
	stream.push( null );

	function onRead( error, data ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isBuffer( data ), true, 'returns a buffer' );
		t.equal( data.toString(), 'beep boop', 'returns `stdin` data' );
		t.end();
	}
});

tape( 'if the `encoding` argument is not set, the function returns `stdin` data as a `buffer`', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = false;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( onRead );

	stream.push( 'beep' );
	stream.push( ' ' );
	stream.push( 'boop' );
	stream.push( null );

	function onRead( error, data ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isBuffer( data ), true, 'returns a buffer' );
		t.equal( data.toString(), 'beep boop', 'returns `stdin` data' );
		t.end();
	}
});

tape( 'if the `encoding` argument is set, the function returns `stdin` data as a `string`', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = false;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( 'utf8', onRead );

	stream.push( string2buffer( 'beep' ) );
	stream.push( string2buffer( ' ' ) );
	stream.push( string2buffer( 'boop' ) );
	stream.push( null );

	function onRead( error, data ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isBuffer( data ), false, 'does not return a buffer' );
		t.equal( typeof data, 'string', 'returns a string' );
		t.equal( data, 'beep boop', 'returns `stdin` data' );
		t.end();
	}
});

tape( 'if the `encoding` argument is not set and no `stdin` data, the function returns an empty `buffer`', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = false;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( onRead );

	stream.push( null );

	function onRead( error, data ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isBuffer( data ), true, 'returns a buffer' );
		t.equal( data.length, 0, 'returns an empty buffer' );
		t.equal( data.toString(), '', 'buffer is empty' );
		t.end();
	}
});

tape( 'if the `encoding` argument is set and no `stdin` data, the function returns an empty `string`', opts, function test( t ) {
	var stream;
	var stdin;

	stream = new Stream();
	stream.isTTY = false;

	stdin = proxyquire( './../lib/main.js', {
		'@stdlib/streams/node/stdin': stream,
		'@noCallThru': true
	});

	stdin( 'utf8', onRead );

	stream.push( null );

	function onRead( error, data ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isBuffer( data ), false, 'does not return a buffer' );
		t.equal( typeof data, 'string', 'returns a string' );
		t.equal( data, '', 'returns empty string' );
		t.end();
	}
});
