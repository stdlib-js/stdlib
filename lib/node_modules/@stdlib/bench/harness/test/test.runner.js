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
var TransformStream = require( '@stdlib/streams/node/transform' );
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isRegExp = require( '@stdlib/assert/is-regexp' );
var sin = require( '@stdlib/math/base/special/sin' );
var Benchmark = require( './../lib/benchmark-class' );
var Runner = require( './../lib/runner' );


// VARIABLES //

var RE_YAML_BEGIN = /^ {2}[\-]{3}$/; // eslint-disable-line no-useless-escape
var RE_ITERATIONS = /^ {2}iterations: \d+$/;
var RE_ELAPSED = /^ {2}elapsed: [\d.]+$/;
var RE_RATE = /^ {2}rate: [\d.]+$/;
var RE_YAML_END = /^ {2}[.]{3}$/;
var RE_WARNING = /^# WARNING: (.*)$/;
var RE_SUMMARY = /^1\.\.\d+$/;
var TAP_HEADER = 'TAP version 13';


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Runner, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var runner = new Runner();
	t.strictEqual( runner instanceof Runner, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var createRunner;
	var runner;

	createRunner = Runner;
	runner = createRunner();

	t.strictEqual( runner instanceof Runner, true, 'returns an instance' );
	t.end();
});

tape( 'a runner instance has a `total` property', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.total, 'number', 'has property' );
	t.end();
});

tape( 'a runner instance has a `fail` property', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.fail, 'number', 'has property' );
	t.end();
});

tape( 'a runner instance has a `pass` property', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.pass, 'number', 'has property' );
	t.end();
});

tape( 'a runner instance has a `skip` property', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.skip, 'number', 'has property' );
	t.end();
});

tape( 'a runner instance has a `todo` property', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.todo, 'number', 'has property' );
	t.end();
});

tape( 'a runner instance has a `push` method to add a new benchmark', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.push, 'function', 'has method' );
	t.end();
});

tape( 'a runner instance has a `createStream` method to create a results stream', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.createStream, 'function', 'has method' );
	t.end();
});

tape( 'a runner instance has a `run` method to run benchmarks', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.run, 'function', 'has method' );
	t.end();
});

tape( 'a runner instance has a `clear` method to clear any pending benchmarks', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.clear, 'function', 'has method' );
	t.end();
});

tape( 'a runner instance has a `close` method to close a runner', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.close, 'function', 'has method' );
	t.end();
});

tape( 'a runner instance has an `exit` method to forcefully close a runner', function test( t ) {
	var runner = new Runner();
	t.strictEqual( typeof runner.exit, 'function', 'has method' );
	t.end();
});

tape( 'the `createStream` method throws if provided an `options` argument which is not an object', function test( t ) {
	var runner;
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		function noop() {}
	];

	runner = new Runner();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			runner.createStream( value );
		};
	}
});

tape( 'the `createStream` method throws if provided an invalid option', function test( t ) {
	var runner;
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	runner = new Runner();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			runner.createStream({
				'transform': value
			});
		};
	}
});

tape( 'the `createStream` method returns a transform stream', function test( t ) {
	var runner;
	var stream;

	runner = new Runner();
	stream = runner.createStream();

	t.strictEqual( stream instanceof TransformStream, true, 'returns a transform stream' );
	t.end();
});

tape( 'if not an `objectMode` stream, the stream returned from the `createStream` method writes the TAP header as the first line', function test( t ) {
	var runner;
	var stream;
	var str;

	runner = new Runner();
	str = '';

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );
	stream.end();
	stream.destroy();

	function onData( data ) {
		str += data.toString();
	}

	function onClose() {
		t.strictEqual( str, TAP_HEADER+'\n' );
		t.end();
	}
});

tape( 'if an `objectMode` stream, the stream returned from the `createStream` method streams objects (sync)', function test( t ) {
	var runner;
	var stream;
	var bmark;
	var opts;
	var i;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': true
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	i = -1;

	runner.on( 'done', onDone );
	runner.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.equal( 3.14, 3.14, 'should be equal' );
			b.comment( 'boom' );
		}
		b.toc();
		b.end();
	}

	function onData( data ) {
		var expected;
		i += 1;
		t.strictEqual( typeof data, 'object', 'streams an object' );
		if ( i === 0 ) {
			expected = {
				'type': 'benchmark',
				'name': 'beep',
				'id': 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 1 ) {
			expected = {
				'id': 0,
				'ok': true,
				'name': 'should be equal',
				'operator': 'equal',
				'actual': 3.14,
				'expected': 3.14,
				'benchmark': 0,
				'type': 'assert',
				'skip': void 0,
				'todo': void 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 2 ) {
			t.strictEqual( data.benchmark, 0, 'has expected benchmark id' );
			t.strictEqual( data.type, 'comment', 'has expected datum type' );
			t.strictEqual( data.name, 'boom', 'has expected `name` value' );
		} else if ( i === 3 ) {
			t.strictEqual( data.benchmark, 0, 'has expected benchmark id' );
			t.strictEqual( data.type, 'result', 'has expected datum type' );
			t.strictEqual( data.operator, 'result', 'has expected `operator` value' );
			t.strictEqual( data.ok, true, 'has expected `ok` status' );
			t.strictEqual( typeof data.iterations, 'number', 'has `iterations` property' );
			t.strictEqual( typeof data.elapsed, 'number', 'has `elapsed` property' );
			t.strictEqual( typeof data.rate, 'number', 'has `rate` property' );
		} else if ( i === 4 ) {
			expected = {
				'benchmark': 0,
				'type': 'end'
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else {
			t.ok( false, 'too many streamed values' );
		}
	}

	function onDone() {
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if an `objectMode` stream, the stream returned from the `createStream` method streams objects (async)', function test( t ) {
	var runner;
	var stream;
	var bmark;
	var opts;
	var i;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': true
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	i = -1;

	runner.on( 'done', onDone );
	runner.run();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( 3.14, 3.14, 'should be equal' );
				b.comment( 'WOOT!' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		var expected;
		i += 1;
		t.strictEqual( typeof data, 'object', 'streams an object' );
		if ( i === 0 ) {
			expected = {
				'type': 'benchmark',
				'name': 'beep',
				'id': 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 1 ) {
			expected = {
				'id': 0,
				'ok': true,
				'name': 'should be equal',
				'operator': 'equal',
				'actual': 3.14,
				'expected': 3.14,
				'benchmark': 0,
				'type': 'assert',
				'skip': void 0,
				'todo': void 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 2 ) {
			t.strictEqual( data.benchmark, 0, 'has expected benchmark id' );
			t.strictEqual( data.type, 'comment', 'has expected datum type' );
			t.strictEqual( data.name, 'WOOT!', 'has expected `name` value' );
		} else if ( i === 3 ) {
			t.strictEqual( data.benchmark, 0, 'has expected benchmark id' );
			t.strictEqual( data.type, 'result', 'has expected datum type' );
			t.strictEqual( data.operator, 'result', 'has expected `operator` value' );
			t.strictEqual( data.ok, true, 'has expected `ok` status' );
			t.strictEqual( typeof data.iterations, 'number', 'has `iterations` property' );
			t.strictEqual( typeof data.elapsed, 'number', 'has `elapsed` property' );
			t.strictEqual( typeof data.rate, 'number', 'has `rate` property' );
		} else if ( i === 4 ) {
			expected = {
				'benchmark': 0,
				'type': 'end'
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else {
			t.ok( false, 'too many streamed values' );
		}
	}

	function onDone() {
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if an `objectMode` stream, the stream returned from the `createStream` method guards against calling `run` more than once when benchmarks are already running (sync)', function test( t ) {
	var runner;
	var stream;
	var bmark;
	var opts;
	var i;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': true
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	i = -1;

	runner.on( 'done', onDone );
	runner.run();
	runner.run();
	runner.run();
	runner.run();
	runner.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.equal( 3.14, 3.14, 'should be equal' );
		}
		b.toc();
		b.end();
	}

	function onData( data ) {
		var expected;
		i += 1;
		t.strictEqual( typeof data, 'object', 'streams an object' );
		if ( i === 0 ) {
			expected = {
				'type': 'benchmark',
				'name': 'beep',
				'id': 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 1 ) {
			expected = {
				'id': 0,
				'ok': true,
				'name': 'should be equal',
				'operator': 'equal',
				'actual': 3.14,
				'expected': 3.14,
				'benchmark': 0,
				'type': 'assert',
				'skip': void 0,
				'todo': void 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 2 ) {
			t.strictEqual( data.benchmark, 0, 'has expected benchmark id' );
			t.strictEqual( data.type, 'result', 'has expected datum type' );
			t.strictEqual( data.operator, 'result', 'has expected `operator` value' );
			t.strictEqual( data.ok, true, 'has expected `ok` status' );
			t.strictEqual( typeof data.iterations, 'number', 'has `iterations` property' );
			t.strictEqual( typeof data.elapsed, 'number', 'has `elapsed` property' );
			t.strictEqual( typeof data.rate, 'number', 'has `rate` property' );
		} else if ( i === 3 ) {
			expected = {
				'benchmark': 0,
				'type': 'end'
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else {
			t.ok( false, 'too many streamed values' );
		}
	}

	function onDone() {
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if an `objectMode` stream, the stream returned from the `createStream` method guards against calling `run` more than once when benchmarks are already running (async)', function test( t ) {
	var runner;
	var stream;
	var bmark;
	var opts;
	var i;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': true
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	i = -1;

	runner.on( 'done', onDone );
	runner.run();
	runner.run();
	runner.run();
	runner.run();
	runner.run();

	function benchmark( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( 3.14, 3.14, 'should be equal' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		var expected;
		i += 1;
		t.strictEqual( typeof data, 'object', 'streams an object' );
		if ( i === 0 ) {
			expected = {
				'type': 'benchmark',
				'name': 'beep',
				'id': 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 1 ) {
			expected = {
				'id': 0,
				'ok': true,
				'name': 'should be equal',
				'operator': 'equal',
				'actual': 3.14,
				'expected': 3.14,
				'benchmark': 0,
				'type': 'assert',
				'skip': void 0,
				'todo': void 0
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else if ( i === 2 ) {
			t.strictEqual( data.benchmark, 0, 'has expected benchmark id' );
			t.strictEqual( data.type, 'result', 'has expected datum type' );
			t.strictEqual( data.operator, 'result', 'has expected `operator` value' );
			t.strictEqual( data.ok, true, 'has expected `ok` status' );
			t.strictEqual( typeof data.iterations, 'number', 'has `iterations` property' );
			t.strictEqual( typeof data.elapsed, 'number', 'has `elapsed` property' );
			t.strictEqual( typeof data.rate, 'number', 'has `rate` property' );
		} else if ( i === 3 ) {
			expected = {
				'benchmark': 0,
				'type': 'end'
			};
			t.deepEqual( data, expected, 'streams expected value '+i );
		} else {
			t.ok( false, 'too many streamed values' );
		}
	}

	function onDone() {
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if not an `objectMode` stream, the stream returned from the `createStream` method streams Buffer objects', function test( t ) {
	var expected;
	var runner;
	var stream;
	var bmark;
	var opts;
	var str;

	expected = [
		TAP_HEADER,
		'# Math.sin',
		RE_YAML_BEGIN,
		RE_ITERATIONS,
		RE_ELAPSED,
		RE_RATE,
		RE_YAML_END,
		'ok 1 benchmark success!',
		'# sin',
		RE_YAML_BEGIN,
		RE_ITERATIONS,
		RE_ELAPSED,
		RE_RATE,
		RE_YAML_END,
		'ok 2 benchmark success!',
		''
	];

	runner = new Runner();
	str = '';

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 10,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'Math.sin', opts, benchmark1 );
	runner.push( bmark );

	bmark = new Benchmark( 'sin', opts, benchmark2 );
	runner.push( bmark );

	runner.on( 'done', onDone );
	runner.run();

	function benchmark1( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = Math.sin( x ); // eslint-disable-line stdlib/no-builtin-math
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong!' );
			}
		}
		b.toc();

		if ( isnan( y ) ) {
			b.fail( 'something went wrong!' );
		} else {
			b.pass( 'benchmark success!' );
		}
		b.end();
	}

	function benchmark2( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = sin( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong!' );
			}
		}
		b.toc();

		if ( isnan( y ) ) {
			b.fail( 'something went wrong!' );
		} else {
			b.pass( 'benchmark success!' );
		}
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		var i;

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( isRegExp( expected[ i ] ) ) {
				t.strictEqual( expected[ i ].test( str[ i ] ), true, 'streams expected line '+i+': '+expected[ i ] );
			} else {
				t.strictEqual( str[ i ], expected[ i ], 'streams expected line '+i+': '+expected[ i ].toString() );
			}
		}
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if a benchmark includes a comment, the comment is included in stream output', function test( t ) {
	var expected;
	var runner;
	var stream;
	var bmark;
	var opts;
	var str;

	expected = [
		TAP_HEADER,
		'# Beep',
		'# beep boop',
		RE_YAML_BEGIN,
		RE_ITERATIONS,
		RE_ELAPSED,
		RE_RATE,
		RE_YAML_END,
		''
	];

	runner = new Runner();
	str = '';

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'Beep', opts, benchmark );
	runner.push( bmark );

	runner.on( 'done', onDone );
	runner.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.comment( 'beep boop' );
		}
		b.toc();
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		var i;

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( isRegExp( expected[ i ] ) ) {
				t.strictEqual( expected[ i ].test( str[ i ] ), true, 'streams expected line '+i+': '+expected[ i ] );
			} else {
				t.strictEqual( str[ i ], expected[ i ], 'streams expected line '+i+': '+expected[ i ].toString() );
			}
		}
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if a benchmark includes a passing assertion, the result is included in stream output and counters are incremented', function test( t ) {
	var expected;
	var runner;
	var stream;
	var bmark;
	var opts;
	var str;

	expected = [
		TAP_HEADER,
		'# Beep',
		'ok 1 beep boop',
		'ok 2 foo bar',
		RE_YAML_BEGIN,
		RE_ITERATIONS,
		RE_ELAPSED,
		RE_RATE,
		RE_YAML_END,
		''
	];

	runner = new Runner();
	str = '';

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'Beep', opts, benchmark );
	runner.push( bmark );

	t.strictEqual( runner.total, 0, 'assertion count is 0' );
	t.strictEqual( runner.pass, 0, 'number of passing assertions is 0' );

	runner.on( 'done', onDone );
	runner.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'beep boop' );
			b.equal( true, true, 'foo bar' );
		}
		b.toc();
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		var i;

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( isRegExp( expected[ i ] ) ) {
				t.strictEqual( expected[ i ].test( str[ i ] ), true, 'streams expected line '+i+': '+expected[ i ] );
			} else {
				t.strictEqual( str[ i ], expected[ i ], 'streams expected line '+i+': '+expected[ i ].toString() );
			}
		}
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( runner.total, 2, 'incremented assertion count' );
		t.strictEqual( runner.pass, 2, 'incremented number of passing assertions' );
		t.end();
	}
});

tape( 'if a benchmark includes a skipped assertion, the result is included in stream output with a `# SKIP` directive and counters are incremented', function test( t ) {
	var expected;
	var runner;
	var stream;
	var bmark;
	var opts;
	var str;

	expected = [
		TAP_HEADER,
		'# Beep',
		'ok 1 beep boop',
		'ok 2 foo bar',
		'ok 3 bip bap # SKIP',
		RE_YAML_BEGIN,
		RE_ITERATIONS,
		RE_ELAPSED,
		RE_RATE,
		RE_YAML_END,
		''
	];

	runner = new Runner();
	str = '';

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'Beep', opts, benchmark );
	runner.push( bmark );

	t.strictEqual( runner.total, 0, 'assertion count is 0' );
	t.strictEqual( runner.pass, 0, 'number of passing assertions is 0' );
	t.strictEqual( runner.skip, 0, 'number of skipped assertions is 0' );

	runner.on( 'done', onDone );
	runner.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'beep boop' );
			b.equal( true, true, 'foo bar' );
			b.skip( true, 'bip bap' );
		}
		b.toc();
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		var i;

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( isRegExp( expected[ i ] ) ) {
				t.strictEqual( expected[ i ].test( str[ i ] ), true, 'streams expected line '+i+': '+expected[ i ] );
			} else {
				t.strictEqual( str[ i ], expected[ i ], 'streams expected line '+i+': '+expected[ i ].toString() );
			}
		}
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( runner.total, 3, 'incremented assertion count' );
		t.strictEqual( runner.pass, 3, 'incremented number of passing assertions' );
		t.strictEqual( runner.skip, 1, 'incremented number of skipped assertions' );
		t.end();
	}
});

tape( 'if a benchmark includes a todo assertion, the result is included in stream output with a `# TODO` directive and counters are incremented (todos always pass)', function test( t ) {
	var expected;
	var runner;
	var stream;
	var bmark;
	var opts;
	var str;

	expected = [
		TAP_HEADER,
		'# Beep',
		'ok 1 beep boop',
		'ok 2 foo bar',
		'not ok 3 bip bap # TODO',
		'ok 4 fizz buzz # TODO',
		RE_YAML_BEGIN,
		RE_ITERATIONS,
		RE_ELAPSED,
		RE_RATE,
		RE_YAML_END,
		''
	];

	runner = new Runner();
	str = '';

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'Beep', opts, benchmark );
	runner.push( bmark );

	t.strictEqual( runner.total, 0, 'assertion count is 0' );
	t.strictEqual( runner.pass, 0, 'number of passing assertions is 0' );
	t.strictEqual( runner.skip, 0, 'number of skipped assertions is 0' );
	t.strictEqual( runner.todo, 0, 'number of todo assertions is 0' );

	runner.on( 'done', onDone );
	runner.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'beep boop' );
			b.equal( true, true, 'foo bar' );
			b.todo( false, 'bip bap' );
			b.todo( true, 'fizz buzz' );
		}
		b.toc();
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		var i;
		var j;

		str = str.split( '\n' );
		j = 0;
		for ( i = 0; i < str.length; i++ ) {
			if ( isRegExp( expected[ j ] ) ) {
				t.strictEqual( expected[ j ].test( str[ i ] ), true, 'streams expected line: '+expected[ j ] );
				j += 1;
			} else if (
				/^[#A-Za-z0-9]/.test( str[ i ] ) ||
				str[ i ] === ''
			) {
				t.strictEqual( str[ i ], expected[ j ], 'streams expected line: '+expected[ j ].toString() );
				j += 1;
			} else {
				t.strictEqual( /^ {2}/.test( str[ i ] ), true, 'YAML block' );
			}
		}
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( runner.total, 4, 'expected assertion count' );
		t.strictEqual( runner.pass, 4, 'expected number of passing assertions' );
		t.strictEqual( runner.fail, 0, 'expected number of failing assertions' );
		t.strictEqual( runner.skip, 0, 'expected number of skipped assertions' );
		t.strictEqual( runner.todo, 2, 'incremented number of todo assertions' );
		t.end();
	}
});

tape( 'if a benchmark includes a failing assertion, the result is included in stream output and counters are incremented', function test( t ) {
	var expected;
	var runner;
	var stream;
	var bmark;
	var opts;
	var str;

	expected = [
		TAP_HEADER,
		'# Beep',
		'not ok 1 beep boop',
		'  ---',

		// YAML block...
		'  ...',
		RE_YAML_BEGIN,
		RE_ITERATIONS,
		RE_ELAPSED,
		RE_RATE,
		RE_YAML_END,
		''
	];

	runner = new Runner();
	str = '';

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 1,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'Beep', opts, benchmark );
	runner.push( bmark );

	t.strictEqual( runner.total, 0, 'assertion count is 0' );
	t.strictEqual( runner.pass, 0, 'number of passing assertions is 0' );
	t.strictEqual( runner.fail, 0, 'number of failed assertions is 0' );

	runner.on( 'done', onDone );
	runner.run();

	function benchmark( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( false, 'beep boop' );
		}
		b.toc();
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		var i;
		var j;

		str = str.split( '\n' );
		j = 0;
		for ( i = 0; i < str.length; i++ ) {
			if ( isRegExp( expected[ j ] ) ) {
				t.strictEqual( expected[ j ].test( str[ i ] ), true, 'streams expected line: '+expected[ j ] );
				j += 1;
			} else if (
				/^[#A-Za-z0-9]/.test( str[ i ] ) ||
				str[ i ] === expected[ j ]
			) {
				t.strictEqual( str[ i ], expected[ j ], 'streams expected line: '+expected[ j ].toString() );
				j += 1;
			} else {
				t.strictEqual( /^ {2}/.test( str[ i ] ), true, 'YAML block' );
			}
		}
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( runner.total, 1, 'incremented assertion count' );
		t.strictEqual( runner.pass, 0, 'number of passing assertions is 0' );
		t.strictEqual( runner.fail, 1, 'incremented number of failed assertions' );
		t.end();
	}
});

tape( 'the `exit` method forcefully exists a benchmark runner', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 1000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;

	runner.run();
	runner.on( 'close', onRunnerClose );

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( true, 'beep' );
				if ( i === 3 && count === 1 ) {
					// Forcefully exit (note that we're simulating an exit during the first benchmark):
					runner.exit();
				}
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onRunnerClose() {
		t.strictEqual( count, 1, 'runs expected number of benchmarks' );
		t.strictEqual( runner.fail, 2, 'expected number of failing assertions' );
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'the `close` method allows a benchmark runner to finish the current running benchmark and silently clear any pending benchmarks', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;

	runner.run();
	runner.on( 'close', onRunnerClose );

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( true, 'beep' );
				if ( i === 3 && count === 1 ) {
					// Note that we are simulating a close during the first benchmark:
					runner.close();
				}
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onRunnerClose() {
		t.strictEqual( count, 1, 'runs expected number of benchmarks' );
		t.strictEqual( runner.fail, 0, 'expected number of failing assertions' );
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'if the `close` method is called while benchmarks are pending, the output stream includes a warning and does not include summary statistics', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;
	var str;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );
	stream.on( 'data', onData );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;
	str = '';

	runner.run();
	runner.on( 'close', onRunnerClose );

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( true, 'boop' );
				if ( i === 3 && count === 1 ) {
					// Note that we are simulating calling close during the first benchmark:
					runner.close();
				}
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		str += data.toString();
	}

	function onRunnerClose() {
		var flg;
		var i;

		t.strictEqual( count, 1, 'runs expected number of benchmarks' );
		t.strictEqual( runner.fail, 0, 'expected number of failing assertions' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_WARNING.test( str[ i ] ) ) {
				flg = true;
			}
		}
		t.ok( flg, 'includes warning message' );

		flg = false;
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				flg = true;
			}
		}
		t.notOk( flg, 'does not include summary' );
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'if the `close` method is called after benchmarks have finished running, the output stream includes summary statistics (all passing)', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;
	var str;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );
	stream.on( 'data', onData );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;
	str = '';

	runner.on( 'done', onDone );
	runner.on( 'close', onRunnerClose );
	runner.run();

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( true, 'boop' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		runner.close();
	}

	function onRunnerClose() {
		var i;

		t.strictEqual( count, 3, 'runs expected number of benchmarks' );
		t.strictEqual( runner.total, 15, 'expected number of assertions' );
		t.strictEqual( runner.pass, 15, 'expected number of passing assertions' );
		t.strictEqual( runner.fail, 0, 'expected number of failing assertions' );
		t.strictEqual( runner.skip, 0, 'expected number of skipped assertions' );
		t.strictEqual( runner.todo, 0, 'expected number of todo assertions' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i < str.length ) {
			t.ok( true, 'stream includes summary' );
			t.strictEqual( str[ i ], '1..15', 'includes plan' );
			t.strictEqual( str[ i+1 ], '# total 15', 'includes total' );
			t.strictEqual( str[ i+2 ], '# pass  15', 'includes number of passing assertions' );
			t.strictEqual( str[ i+3 ], '#', 'includes empty comment line' );
			t.strictEqual( str[ i+4 ], '# ok', 'includes `ok` status message' );
		} else {
			t.ok( false, 'stream includes summary' );
		}
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'if the `close` method is called after benchmarks have finished running, the output stream includes summary statistics (failing assertions)', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;
	var str;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );
	stream.on( 'data', onData );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;
	str = '';

	runner.on( 'done', onDone );
	runner.on( 'close', onRunnerClose );
	runner.run();

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( false, 'boop' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		runner.close();
	}

	function onRunnerClose() {
		var i;

		t.strictEqual( count, 3, 'runs expected number of benchmarks' );
		t.strictEqual( runner.total, 15, 'expected number of assertions' );
		t.strictEqual( runner.pass, 0, 'expected number of passing assertions' );
		t.strictEqual( runner.fail, 15, 'expected number of failing assertions' );
		t.strictEqual( runner.skip, 0, 'expected number of skipped assertions' );
		t.strictEqual( runner.todo, 0, 'expected number of todo assertions' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i < str.length ) {
			t.ok( true, 'stream includes summary' );
			t.strictEqual( str[ i ], '1..15', 'includes plan' );
			t.strictEqual( str[ i+1 ], '# total 15', 'includes total' );
			t.strictEqual( str[ i+2 ], '# pass  0', 'includes number of passing assertions' );
			t.strictEqual( str[ i+3 ], '# fail  15', 'includes number of failing assertions' );
			t.strictEqual( str[ i+4 ], '', 'empty string' );
			t.strictEqual( str[ i+5 ], void 0, 'does not include `ok` status message' );
		} else {
			t.ok( false, 'stream includes summary' );
		}
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'if the `close` method is called after benchmarks have finished running, the output stream includes summary statistics (skipped assertions)', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;
	var str;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );
	stream.on( 'data', onData );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;
	str = '';

	runner.on( 'done', onDone );
	runner.on( 'close', onRunnerClose );
	runner.run();

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.skip( false, 'boop' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		runner.close();
	}

	function onRunnerClose() {
		var i;

		t.strictEqual( count, 3, 'runs expected number of benchmarks' );
		t.strictEqual( runner.total, 15, 'expected number of assertions' );
		t.strictEqual( runner.pass, 15, 'expected number of passing assertions' );
		t.strictEqual( runner.fail, 0, 'expected number of failing assertions' );
		t.strictEqual( runner.skip, 15, 'expected number of skipped assertions' );
		t.strictEqual( runner.todo, 0, 'expected number of todo assertions' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i < str.length ) {
			t.ok( true, 'stream includes summary' );
			t.strictEqual( str[ i ], '1..15', 'includes plan' );
			t.strictEqual( str[ i+1 ], '# total 15', 'includes total' );
			t.strictEqual( str[ i+2 ], '# pass  15', 'includes number of passing assertions' );
			t.strictEqual( str[ i+3 ], '# skip  15', 'includes number of skipped assertions' );
			t.strictEqual( str[ i+4 ], '#', 'includes empty comment line' );
			t.strictEqual( str[ i+5 ], '# ok', 'includes `ok` status message' );
		} else {
			t.ok( false, 'stream includes summary' );
		}
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'if the `close` method is called after benchmarks have finished running, the output stream includes summary statistics (todo assertions)', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;
	var str;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );
	stream.on( 'data', onData );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;
	str = '';

	runner.on( 'done', onDone );
	runner.on( 'close', onRunnerClose );
	runner.run();

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.todo( false, 'boop' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		runner.close();
	}

	function onRunnerClose() {
		var i;

		t.strictEqual( count, 3, 'runs expected number of benchmarks' );
		t.strictEqual( runner.total, 15, 'expected number of assertions' );
		t.strictEqual( runner.pass, 15, 'expected number of passing assertions' );
		t.strictEqual( runner.fail, 0, 'expected number of failing assertions' );
		t.strictEqual( runner.skip, 0, 'expected number of skipped assertions' );
		t.strictEqual( runner.todo, 15, 'expected number of todo assertions' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i < str.length ) {
			t.ok( true, 'stream includes summary' );
			t.strictEqual( str[ i ], '1..15', 'includes plan' );
			t.strictEqual( str[ i+1 ], '# total 15', 'includes total' );
			t.strictEqual( str[ i+2 ], '# pass  15', 'includes number of passing assertions' );
			t.strictEqual( str[ i+3 ], '# todo  15', 'includes number of todo assertions' );
			t.strictEqual( str[ i+4 ], '#', 'includes empty comment line' );
			t.strictEqual( str[ i+5 ], '# ok', 'includes `ok` status message' );
		} else {
			t.ok( false, 'stream includes summary' );
		}
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'if the `close` method is called after benchmarks have finished running, the output stream includes summary statistics (mixture of passing, failing, skipped, and todo)', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;
	var str;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );
	stream.on( 'data', onData );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;
	str = '';

	runner.on( 'done', onDone );
	runner.on( 'close', onRunnerClose );
	runner.run();

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( true, 'is okay' );
				b.fail( 'failing' );
				b.skip( true, 'skipped' );
				b.todo( false, 'todo' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		runner.close();
	}

	function onRunnerClose() {
		var i;

		t.strictEqual( count, 3, 'runs expected number of benchmarks' );
		t.strictEqual( runner.total, 60, 'expected number of assertions' );
		t.strictEqual( runner.pass, 45, 'expected number of passing assertions' );
		t.strictEqual( runner.fail, 15, 'expected number of failing assertions' );
		t.strictEqual( runner.skip, 15, 'expected number of skipped assertions' );
		t.strictEqual( runner.todo, 15, 'expected number of todo assertions' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i < str.length ) {
			t.ok( true, 'stream includes summary' );
			t.strictEqual( str[ i ], '1..60', 'includes plan' );
			t.strictEqual( str[ i+1 ], '# total 60', 'includes total' );
			t.strictEqual( str[ i+2 ], '# pass  45', 'includes number of passing assertions' );
			t.strictEqual( str[ i+3 ], '# fail  15', 'includes number of failing assertions' );
			t.strictEqual( str[ i+4 ], '# skip  15', 'includes number of skipped assertions' );
			t.strictEqual( str[ i+5 ], '# todo  15', 'includes number of todo assertions' );
			t.strictEqual( str[ i+6 ], '', 'empty string' );
			t.strictEqual( str[ i+7 ], void 0, ' does not include `ok` status message' );
		} else {
			t.ok( false, 'stream includes summary' );
		}
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

tape( 'the `close` method guards against multiple invocations', function test( t ) {
	var runner;
	var stream;
	var count;
	var bmark;
	var opts;
	var str;

	runner = new Runner();

	stream = runner.createStream({
		'objectMode': false
	});

	stream.on( 'close', onStreamClose );
	stream.on( 'data', onData );

	opts = {
		'iterations': 5,
		'skip': false,
		'timeout': 60000
	};
	bmark = new Benchmark( 'beep', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'boop', opts, benchmark );
	runner.push( bmark );

	bmark = new Benchmark( 'foo', opts, benchmark );
	runner.push( bmark );

	count = 0;
	str = '';

	runner.on( 'done', onDone );
	runner.on( 'close', onRunnerClose );
	runner.run();

	function benchmark( b ) {
		var i;

		count += 1;
		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( true, 'boop' );
				return setTimeout( next, 0 );
			}
			b.toc();
			b.end();
		}
	}

	function onData( data ) {
		str += data.toString();
	}

	function onDone() {
		runner.close();
		runner.close();
		runner.close();
		runner.close();
		runner.close();
		runner.close();
		runner.close();
	}

	function onRunnerClose() {
		var cnt;
		var idx;
		var i;

		t.strictEqual( count, 3, 'runs expected number of benchmarks' );
		t.strictEqual( runner.total, 15, 'expected number of assertions' );
		t.strictEqual( runner.pass, 15, 'expected number of passing assertions' );
		t.strictEqual( runner.fail, 0, 'expected number of failing assertions' );
		t.strictEqual( runner.skip, 0, 'expected number of skipped assertions' );
		t.strictEqual( runner.todo, 0, 'expected number of todo assertions' );

		str = str.split( '\n' );
		cnt = 0;
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				if ( idx === void 0 ) {
					idx = i;
				}
				cnt += 1;
			}
		}
		t.strictEqual( cnt, 1, 'only includes summary once' );

		i = idx;
		if ( i < str.length ) {
			t.ok( true, 'stream includes summary' );
			t.strictEqual( str[ i ], '1..15', 'includes plan' );
			t.strictEqual( str[ i+1 ], '# total 15', 'includes total' );
			t.strictEqual( str[ i+2 ], '# pass  15', 'includes number of passing assertions' );
			t.strictEqual( str[ i+3 ], '#', 'includes empty comment line' );
			t.strictEqual( str[ i+4 ], '# ok', 'includes `ok` status message' );
		} else {
			t.ok( false, 'stream includes summary' );
		}
		stream.destroy();
	}

	function onStreamClose() {
		t.end();
	}
});

// TODO: tests for encoding results
