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
var Writable = require( 'readable-stream' ).Writable;
var noop = require( '@stdlib/utils/noop' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var NAMESPACE = require( './../lib/namespace.js' );
var DebugSinkStream = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof DebugSinkStream, 'function', 'main export is a function' );
	t.end();
});

tape( 'the constructor throws an error if provided a callback argument which is not a function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			var s = new DebugSinkStream( value );
			if ( s ) {
				t.ok( false, 'did not throw' );
			}
		};
	}
});

tape( 'the constructor throws an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			var s = new DebugSinkStream( {}, value );
			if ( s ) {
				t.ok( false, 'did not throw' );
			}
		};
	}
});

tape( 'the constructor throws an error if provided an invalid option (no callback)', function test( t ) {
	t.throws( foo, TypeError, 'throws a type error' );
	t.end();
	function foo() {
		var s = new DebugSinkStream({
			'objectMode': 'beep'
		});
		if ( s ) {
			t.ok( false, 'did not throw' );
		}
	}
});

tape( 'the constructor throws an error if provided an invalid option (w/ callback)', function test( t ) {
	t.throws( foo, TypeError, 'throws a type error' );
	t.end();
	function foo() {
		var s = new DebugSinkStream({
			'objectMode': 'beep'
		}, noop );
		if ( s ) {
			t.ok( false, 'did not throw' );
		}
	}
});

tape( 'the constructor returns a Writable stream', function test( t ) {
	var s = new DebugSinkStream( noop );
	t.equal( s instanceof Writable, true, 'returns a Writable stream' );
	t.end();
});

tape( 'the constructor does not require the `new` operator', function test( t ) {
	var stream = DebugSinkStream;
	var s;

	s = stream();
	t.equal( s instanceof Writable, true, 'returns a Writable stream' );

	s = stream( {} );
	t.equal( s instanceof Writable, true, 'returns a Writable stream' );

	s = stream( noop );
	t.equal( s instanceof Writable, true, 'returns a Writable stream' );

	s = stream( {}, noop );
	t.equal( s instanceof Writable, true, 'returns a Writable stream' );

	t.end();
});

tape( 'the constructor supports providing a debug namespace', function test( t ) {
	var stream;
	var opts;

	stream = proxyquire( './../lib/main.js', {
		'./logger.js': debug
	});

	opts = {
		'name': 'beep'
	};
	stream( opts );

	function debug( name ) {
		t.equal( name, NAMESPACE+':'+opts.name, 'uses provided debug namespace' );
		t.end();
	}
});

tape( 'the returned stream invokes a provided callback with streamed data', function test( t ) {
	var expected;
	var stream;
	var cnt;
	var s;

	stream = proxyquire( './../lib/main.js', {
		'./logger.js': debug
	});

	s = stream();

	expected = [ '1', '2', '3' ];
	cnt = 0;

	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function debug() {
		return function debug( data ) {
			t.ok( data, 'logs data' );
			cnt += 1;
			if ( cnt === expected.length ) {
				t.end();
			}
		};
	}
});

tape( 'the returned stream invokes a provided callback with streamed data (converts buffers to strings)', function test( t ) {
	var stream;
	var total;
	var cnt;
	var s;

	stream = proxyquire( './../lib/main.js', {
		'./logger.js': debug
	});

	s = stream();

	total = 3;
	cnt = 0;

	s.write( string2buffer( '1' ), 'utf8' );
	s.write( string2buffer( '2' ), 'utf8' );
	s.write( string2buffer( '3' ), 'utf8' );
	s.end();

	function debug() {
		return function debug( data ) {
			t.equal( typeof data, 'string', 'logs data' );
			cnt += 1;
			if ( cnt === total ) {
				t.end();
			}
		};
	}
});

tape( 'the returned stream invokes a provided callback with streamed data', function test( t ) {
	var expected;
	var cnt;
	var s;

	s = new DebugSinkStream( onData );

	expected = [ '1', '2', '3' ];
	cnt = 0;

	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function onData( debug, chunk, idx ) {
		t.equal( typeof debug, 'function', 'first argument is a function' );
		t.equal( chunk.toString(), expected[ cnt ], 'streams expected chunk' );
		t.equal( idx, cnt, 'streams expected index' );
		cnt += 1;
		if ( cnt === expected.length ) {
			t.end();
		}
	}
});

tape( 'the returned stream invokes a provided callback with streamed data when in object mode', function test( t ) {
	var expected;
	var opts;
	var cnt;
	var s;

	opts = {
		'objectMode': true
	};
	s = new DebugSinkStream( opts, onData );

	expected = [ [1], [2], [3] ];
	cnt = 0;

	s.write( [1] );
	s.write( [2] );
	s.write( [3] );
	s.end();

	function onData( debug, chunk, idx ) {
		t.equal( typeof debug, 'function', 'first argument is a function' );
		t.deepEqual( chunk, expected[ cnt ], 'streams expected chunk' );
		t.equal( idx, cnt, 'streams expected index' );
		cnt += 1;
		if ( cnt === expected.length ) {
			t.end();
		}
	}
});

tape( 'the returned stream provides a method to destroy a stream', function test( t ) {
	var count = 0;
	var s;

	s = new DebugSinkStream();

	t.equal( typeof s.destroy, 'function', 'has destroy method' );

	s.on( 'error', onError );
	s.on( 'close', onClose );

	s.destroy( new Error() );

	function onError( err ) {
		count += 1;
		if ( err ) {
			t.ok( true, err.message );
		} else {
			t.ok( false, 'does not error' );
		}
		if ( count === 2 ) {
			t.end();
		}
	}
	function onClose() {
		count += 1;
		t.ok( true, 'stream closes' );
		if ( count === 2 ) {
			t.end();
		}
	}
});

tape( 'the returned stream provides a method to destroy a stream (subsequent writes)', function test( t ) {
	var count = 0;
	var s;

	s = new DebugSinkStream();

	t.equal( typeof s.destroy, 'function', 'has destroy method' );

	s.on( 'error', onError );
	s.on( 'close', onClose );

	s.destroy( new Error() );

	// Subsequent writes are permitted...
	s.write( '1' );
	s.write( '2' );
	s.write( '3' );

	function onError( err ) {
		count += 1;
		if ( err ) {
			t.ok( true, err.message );
		} else {
			t.ok( false, 'does not error' );
		}
		if ( count === 2 ) {
			t.end();
		}
	}
	function onClose() {
		count += 1;
		t.ok( true, 'stream closes' );
		if ( count === 2 ) {
			t.end();
		}
	}
});

tape( 'the returned stream does not allow itself to be destroyed more than once', function test( t ) {
	var s;

	s = new DebugSinkStream();

	s.on( 'error', onError );
	s.on( 'close', onClose );

	// If the stream is closed twice, the test will error...
	s.destroy();
	s.destroy();

	function onClose() {
		t.ok( true, 'stream closes' );
		t.end();
	}
	function onError( err ) {
		t.ok( false, err.message );
	}
});
