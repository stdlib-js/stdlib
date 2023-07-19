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
var TransformStream = require( '@stdlib/streams/node/transform' );
var exitHarness = require( './../lib/exit_harness.js' );


// FIXTURES //

var mockHarness = require( './fixtures/harness.js' );
var Process = require( './fixtures/process.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof exitHarness, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is neither an object nor a function (one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			exitHarness( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an object (more than one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			exitHarness( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function (more than one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			exitHarness( {}, value );
		};
	}
});

tape( 'the function throws an error if provided an `autoclose` option which is not a boolean (one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		null,
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
			var opts = {
				'autoclose': value
			};
			exitHarness( opts );
		};
	}
});

tape( 'the function throws an error if provided an `autoclose` option which is not a boolean (more than one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		null,
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
			var opts = {
				'autoclose': value
			};
			exitHarness( opts, noop );
		};
	}
});

tape( 'the function throws an error if provided a `stream` option which is not stream (one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		null,
		true,
		false,
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
			var opts = {
				'stream': value
			};
			exitHarness( opts );
		};
	}
});

tape( 'the function throws an error if provided a `stream` option which is not stream (more than one argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		null,
		true,
		false,
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
			var opts = {
				'stream': value
			};
			exitHarness( opts, noop );
		};
	}
});

tape( 'the function returns a function (no arguments)', function test( t ) {
	var harness = exitHarness();
	t.strictEqual( typeof harness, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (one argument)', function test( t ) {
	var harness = exitHarness( {} );
	t.strictEqual( typeof harness, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (more than one argument)', function test( t ) {
	var harness = exitHarness( {}, noop );
	t.strictEqual( typeof harness, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function having a `createStream` method', function test( t ) {
	var harness = exitHarness();
	t.strictEqual( typeof harness.createStream, 'function', 'has method' );
	t.end();
});

tape( 'the function returns a function having a `close` method', function test( t ) {
	var harness = exitHarness();
	t.strictEqual( typeof harness.close, 'function', 'has method' );
	t.end();
});

tape( 'the function returns a function having an `exit` method', function test( t ) {
	var harness = exitHarness();
	t.strictEqual( typeof harness.exit, 'function', 'has method' );
	t.end();
});

tape( 'the function returns a function having an `exitCode` property', function test( t ) {
	var harness = exitHarness();
	t.strictEqual( typeof harness.exitCode, 'number', 'has property' );
	t.end();
});

tape( 'the function calls a provided callback once all benchmarks have finished running', function test( t ) {
	var exitHarness;
	var harness;

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./harness': mockHarness,
		'./log': logStream,
		'./utils/process.js': new Process( noop )
	});
	harness = exitHarness( onFinish );

	// Special mock hook:
	harness.end();

	function logStream() {
		return new TransformStream();
	}

	function onFinish() {
		t.ok( true, 'calls provided callback' );
		t.end();
	}
});

tape( 'if an environment supports exiting a process and a stream errors, the function sets the process exit code to `1`', function test( t ) {
	var exitHarness;
	var stream;
	var proc;

	proc = new Process( onExit );
	stream = new TransformStream();

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./utils/process.js': proc,
		'./utils/can_emit_exit.js': true
	});
	exitHarness({
		'stream': stream
	});

	stream.emit( 'error', new Error( 'beep' ) );

	// Exit the mock process:
	proc.emit( 'exit', 0 );

	function onExit( code ) {
		t.strictEqual( code, 1, 'sets exit code to 1' );
		t.end();
	}
});

tape( 'if an environment supports exiting a process and a process exits with a non-zero exit code, the process exit code is equal to the non-zero exit code', function test( t ) {
	var exitHarness;
	var stream;
	var proc;

	proc = new Process( uncalled );
	proc.on( 'exit', onExit );

	stream = new TransformStream();

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./utils/process.js': proc,
		'./utils/can_emit_exit.js': true
	});
	exitHarness({
		'stream': stream
	});

	// Exit the mock process:
	proc.emit( 'exit', 314 );

	function onExit( code ) {
		t.strictEqual( code, 314, 'returns expected exit code' );
		t.end();
	}

	function uncalled() {
		t.ok( false, 'callback should not be called' );
	}
});

tape( 'if an environment supports exiting a process and a harness benchmark fails, the function sets the process exit code to `1`', function test( t ) {
	var exitHarness;
	var harness;
	var stream;
	var proc;
	var opts;
	var flg;

	proc = new Process( onExit );
	stream = new TransformStream();

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./utils/process.js': proc,
		'./utils/can_emit_exit.js': true
	});
	opts = {
		'stream': stream
	};
	harness = exitHarness( opts, onFinish );

	opts = {
		'iterations': 1,
		'repeats': 1
	};
	harness( 'test', opts, benchmark );

	function benchmark( b ) {
		var i;
		t.strictEqual( b.iterations, 1, 'set iterations' );
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( false, 'is not okay' );
		}
		b.toc();
		flg = true;
		b.end();
	}

	function onFinish() {
		harness.close();
		proc.emit( 'exit', 0 );
	}

	function onExit( code ) {
		t.strictEqual( code, 1, 'sets exit code to 1' );
		t.ok( flg, 'ran benchmark' );
		t.end();
	}
});

tape( 'the returned harness runs benchmarks (process exit)', function test( t ) {
	var exitHarness;
	var harness;
	var stream;
	var proc;
	var opts;
	var flg;

	proc = new Process( onExit );
	stream = new TransformStream();

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./utils/process.js': proc,
		'./utils/can_emit_exit.js': true
	});
	opts = {
		'stream': stream
	};
	harness = exitHarness( opts, onFinish );

	opts = {
		'iterations': 1,
		'repeats': 1
	};
	harness( 'test', opts, benchmark );

	function benchmark( b ) {
		var i;
		t.strictEqual( b.iterations, 1, 'set iterations' );
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'is okay' );
		}
		b.toc();
		flg = true;
		b.end();
	}

	function onFinish() {
		harness.close();
		proc.emit( 'exit', 0 );
	}

	function onExit( code ) {
		t.strictEqual( code, 0, 'sets exit code to 0' );
		t.ok( flg, 'ran benchmark' );
		t.end();
	}
});

tape( 'the returned harness runs benchmarks (no process exit)', function test( t ) {
	var exitHarness;
	var harness;
	var stream;
	var proc;
	var opts;
	var flg;

	proc = new Process( onExit );
	stream = new TransformStream();

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./utils/process.js': proc,
		'./utils/can_emit_exit.js': false
	});
	opts = {
		'stream': stream
	};
	harness = exitHarness( opts, onFinish );

	opts = {
		'iterations': 1,
		'repeats': 1
	};
	harness( 'test', opts, benchmark );

	function benchmark( b ) {
		var i;
		t.strictEqual( b.iterations, 1, 'set iterations' );
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'is okay' );
		}
		b.toc();
		flg = true;
		b.end();
	}

	function onFinish() {
		harness.close();
		t.ok( flg, 'ran benchmark' );
		t.end();
	}

	function onExit() {
		t.ok( false, 'should not be called' );
	}
});

tape( 'if the `autoclose` option is `true`, the returned harness runs benchmarks and then closes', function test( t ) {
	var exitHarness;
	var harness;
	var stream;
	var proc;
	var opts;
	var flg;

	proc = new Process();
	stream = new TransformStream();

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./utils/process.js': proc,
		'./utils/can_emit_exit.js': false
	});
	opts = {
		'stream': stream,
		'autoclose': true
	};
	harness = exitHarness( opts, onFinish );

	opts = {
		'iterations': 1,
		'repeats': 1
	};
	harness( 'test', opts, benchmark );

	function benchmark( b ) {
		var i;
		t.strictEqual( b.iterations, 1, 'set iterations' );
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'is okay' );
		}
		b.toc();
		flg = true;
		b.end();
	}

	function onFinish() {
		t.ok( flg, 'ran benchmark' );
		t.ok( true, 'harness automatically closed' );
		t.end();
	}
});

tape( 'if the `autoclose` option is `false` and an environment does not support a process exit, the returned harness runs benchmarks and requires being manually closed', function test( t ) {
	var exitHarness;
	var harness;
	var stream;
	var proc;
	var opts;
	var flg;

	proc = new Process();
	stream = new TransformStream();

	// Note: this is a timing test. We assume that internal matters (e.g., closing streams) are handled before notifying external consumers (e.g., users wanting to know that a harness has finished running all benchmarks).
	stream.on( 'close', onClose );

	exitHarness = proxyquire( './../lib/exit_harness.js', {
		'./utils/process.js': proc,
		'./utils/can_emit_exit.js': false
	});
	opts = {
		'stream': stream,
		'autoclose': false
	};
	harness = exitHarness( opts, onFinish );

	opts = {
		'iterations': 1,
		'repeats': 1
	};
	harness( 'test', opts, benchmark );

	function benchmark( b ) {
		var i;
		t.strictEqual( b.iterations, 1, 'set iterations' );
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'is okay' );
		}
		b.toc();
		b.end();
	}

	function onClose() {
		flg = true;
	}

	function onFinish() {
		t.notOk( flg, 'should not be called before manually calling `harness.close()`' );
		t.end();
	}
});
