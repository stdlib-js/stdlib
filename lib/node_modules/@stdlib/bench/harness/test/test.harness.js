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
var cos = require( '@stdlib/math/base/special/cos' );
var randu = require( '@stdlib/random/base/randu' );
var noop = require( '@stdlib/utils/noop' );
var createHarness = require( './../lib/harness' );


// VARIABLES //

var RE_RESULTS = /\s{2}[\-]{3}\r?\n\s{2}iterations: (.+)\r?\n\s{2}elapsed: (.+)\r?\n\s{2}rate: (.+)\r?\n\s{2}[.]{3}\r?\n/; // eslint-disable-line no-useless-escape
var RE_SUMMARY = /^1\.\.\d+$/;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof createHarness, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided only one argument which is neither a function nor an options object', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			createHarness( value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (> 1 argument)', function test( t ) {
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
		function beep() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			createHarness( value, noop );
		};
	}
});

tape( 'the function throws an error if provided an `autoclose` option which is not a boolean (> 1 argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function beep() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'autoclose': value
			};
			createHarness( opts, noop );
		};
	}
});

tape( 'the function throws an error if provided an callback argument which is not a function (> 1 argument)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			createHarness( {}, value );
		};
	}
});

tape( 'the function returns a function (no arguments)', function test( t ) {
	var harness = createHarness();
	t.strictEqual( typeof harness, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	var harness = createHarness({} );
	t.strictEqual( typeof harness, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (callback)', function test( t ) {
	var harness = createHarness( noop );
	t.strictEqual( typeof harness, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (more than 1 argument)', function test( t ) {
	var harness = createHarness({}, noop );
	t.strictEqual( typeof harness, 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function has a `createStream` method', function test( t ) {
	var harness = createHarness();
	t.strictEqual( typeof harness.createStream, 'function', 'has method' );
	t.end();
});

tape( 'the returned function has a `close` method', function test( t ) {
	var harness = createHarness();
	t.strictEqual( typeof harness.close, 'function', 'has method' );
	t.end();
});

tape( 'the returned function has an `exit` method', function test( t ) {
	var harness = createHarness();
	t.strictEqual( typeof harness.exit, 'function', 'has method' );
	t.end();
});

tape( 'the returned function has an `exitCode` property', function test( t ) {
	var harness = createHarness();
	t.strictEqual( typeof harness.exitCode, 'number', 'has property' );
	t.strictEqual( harness.exitCode, 0, 'value is 0' );
	t.end();
});

tape( 'the returned function throws an error if provided a first argument which is not a string', function test( t ) {
	var harness;
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	harness = createHarness();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			harness( value, {}, noop );
		};
	}
});

tape( 'the returned function throws an error if provided an options argument which is not an object (no benchmark function)', function test( t ) {
	var harness;
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];

	harness = createHarness();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			harness( 'beep', value );
		};
	}
});

tape( 'the returned function throws an error if provided an options argument which is not an object (benchmark function)', function test( t ) {
	var harness;
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	harness = createHarness();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			harness( 'beep', value, noop );
		};
	}
});

tape( 'the returned function throws an error if provided a benchmark function argument which is not a function (no options)', function test( t ) {
	var harness;
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];

	harness = createHarness();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			harness( 'beep', value );
		};
	}
});

tape( 'the returned function throws an error if provided a benchmark function argument which is not a function (options)', function test( t ) {
	var harness;
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	harness = createHarness();

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			harness( 'beep', {}, value );
		};
	}
});

tape( 'the returned function runs benchmarks (sync)', function test( t ) {
	var harness;
	var stream;
	var opts;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );
	stream = harness.createStream();

	stream.on( 'close', onClose );

	opts = {
		'iterations': 100,
		'repeats': 3
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'is okay' );
		}
		b.toc();
		b.end();
	}

	function boop( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.equal( true, true, 'is equal' );
		}
		b.toc();
		b.end();
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'the returned function runs benchmarks (async)', function test( t ) {
	var harness;
	var stream;
	var opts;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );
	stream = harness.createStream();

	stream.on( 'close', onClose );

	opts = {
		'iterations': 10,
		'repeats': 2
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.ok( true, 'is okay' );
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function boop( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( true, true, 'is equal' );
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'the returned function runs benchmarks (sync and async)', function test( t ) {
	var harness;
	var stream;
	var sopts;
	var aopts;
	var opts;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );
	stream = harness.createStream();

	stream.on( 'close', onClose );

	sopts = {
		'iterations': 1000,
		'repeats': 2
	};
	aopts = {
		'iterations': 10,
		'repeats': 2
	};
	harness( 'sync (1)', sopts, beep );
	harness( 'async (1)', aopts, boop );
	harness( 'sync (2)', sopts, beep );
	harness( 'async (2)', aopts, boop );

	function beep( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'is okay' );
		}
		b.toc();
		b.end();
	}

	function boop( b ) {
		var i;

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( true, true, 'is equal' );
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if the `iterations` option is `null`, the returned function supports automatically determining iteration number', function test( t ) {
	var harness;
	var stream;
	var opts;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'close', onClose );

	opts = {
		'iterations': null,
		'repeats': 3
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var x;
		var y;
		var i;

		t.strictEqual( typeof b.iterations, 'number', 'iterations is a number' );
		t.notEqual( b.iterations, opts.iterations, 'iteration number does not equal provided option (null)' );
		t.strictEqual( b.iterations >= 1, true, 'iteration number is >= 1' );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function boop( b ) {
		var i;

		t.strictEqual( typeof b.iterations, 'number', 'iterations is a number' );
		t.notEqual( b.iterations, opts.iterations, 'iteration number does not equal provided option (null)' );
		t.strictEqual( b.iterations >= 1, true, 'iteration number is >= 1' );

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( true, true, 'is equal' );
				return setTimeout( next, 10 );
			}
			b.toc();
			b.end();
		}
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'by default, the `iterations` option is `null` and the number of repeats is `3`', function test( t ) {
	var harness;
	var stream;
	var opts;
	var str;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	harness( 'beep', beep );

	function beep( b ) {
		var x;
		var y;
		var i;

		t.strictEqual( typeof b.iterations, 'number', 'iterations is a number' );
		t.strictEqual( b.iterations >= 1, true, 'iteration number is >= 1' );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onFinish() {
		var match;
		var count;

		t.ok( true, 'finished running benchmarks' );

		count = 0;
		while ( str.length ) {
			match = RE_RESULTS.exec( str );
			if ( match ) {
				count += 1;
				str = str.substring( match.index + match[ 0 ].length );
			} else {
				str = str.substring( str.length );
			}
		}
		t.strictEqual( count, 3, 'expected number of repeats' );
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if the `skip` option is `true`, the returned function skips a benchmark', function test( t ) {
	var expected;
	var harness;
	var stream;
	var opts;
	var str;

	expected = [
		'TAP version 13',
		'# SKIP beep',
		'#',
		'1..0',
		'# total 0',
		'# pass  0',
		'#',
		'# ok',
		''
	];

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	opts = {
		'iterations': null,
		'repeats': 3,
		'skip': true
	};
	harness( 'beep', opts, beep );

	function beep( b ) {
		var x;
		var y;
		var i;

		t.strictEqual( typeof b.iterations, 'number', 'iterations is a number' );
		t.strictEqual( b.iterations >= 1, true, 'iteration number is >= 1' );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onFinish() {
		var i;

		t.ok( true, 'finished running benchmarks' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			t.strictEqual( str[ i ], expected[ i ], 'equals expected output line: '+expected[ i ] );
		}
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if not provided a benchmark function, the returned function treats the benchmark as a todo', function test( t ) {
	var expected;
	var harness;
	var stream;
	var opts;
	var str;

	expected = [
		'TAP version 13',
		'# TODO beep',
		'# TODO boop',
		'#',
		'1..0',
		'# total 0',
		'# pass  0',
		'#',
		'# ok',
		''
	];

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	harness( 'beep' );
	harness( 'boop', {} );

	function onData( data ) {
		str += data.toString();
	}

	function onFinish() {
		var i;

		t.ok( true, 'finished running benchmarks' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			t.strictEqual( str[ i ], expected[ i ], 'equals expected output line: '+expected[ i ] );
		}
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'the `createStream` method supports returning an object mode stream', function test( t ) {
	var harness;
	var stream;
	var opts;
	var flg;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );
	stream = harness.createStream({
		'objectMode': true
	});

	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	opts = {
		'iterations': 10,
		'repeats': 3
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var i;
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			b.ok( true, 'is okay' );
		}
		b.toc();
		b.end();
	}

	function boop( b ) {
		var i = 0;
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

	function onData( result ) {
		flg = true;
		t.strictEqual( typeof result, 'object', 'streams an object' );
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		t.ok( flg, 'streamed data' );
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'if all benchmarks succeed, the harness exit code is `0`', function test( t ) {
	var harness;
	var stream;
	var opts;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'close', onClose );

	opts = {
		'iterations': null,
		'repeats': 3,
		'skip': false
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 && y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 && y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function boop( b ) {
		var i = 0;
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

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( harness.exitCode, 0, 'expected exit code' );
		t.end();
	}
});

tape( 'if a benchmark fails, the harness exit code is `1`', function test( t ) {
	var harness;
	var stream;
	var opts;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'close', onClose );

	opts = {
		'iterations': null,
		'repeats': 3,
		'skip': false
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y >= -1.0 && y <= 1.0 ) {
				// Intentionally fail...
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y >= -1.0 && y <= 1.0 ) {
			// Intentionally fail...
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function boop( b ) {
		var i = 0;
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

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( harness.exitCode, 1, 'expected exit code' );
		t.end();
	}
});

tape( 'the function supports automatically closing a benchmark harness', function test( t ) {
	var harness;
	var stream;
	var opts;
	var str;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	opts = {
		'iterations': 10,
		'repeats': 3,
		'skip': false
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 && y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 && y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function boop( b ) {
		var i = 0;
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
		str += data.toString();
	}

	function onFinish() {
		var i;

		t.ok( true, 'finished running benchmarks' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i === str.length ) {
			t.ok( false, 'should stream summary' );
		} else {
			t.ok( true, 'should stream summary' );
		}
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'the function supports manually closing a benchmark harness', function test( t ) {
	var harness;
	var stream;
	var opts;
	var str;

	opts = {
		'autoclose': false
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	opts = {
		'iterations': 10,
		'repeats': 3,
		'skip': false
	};
	harness( 'beep', opts, beep );
	harness( 'boop', opts, boop );

	function beep( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 && y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 && y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function boop( b ) {
		var i = 0;
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
		str += data.toString();
	}

	function onFinish() {
		var i;

		t.ok( true, 'finished running benchmarks' );

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i === str.length ) {
			t.ok( true, 'should not stream summary until close' );
		} else {
			t.ok( false, 'should not stream summary until close' );
		}
		harness.close();
		setTimeout( onTimeout, 100 );
	}

	function onTimeout() {
		var i;

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i === str.length ) {
			t.ok( false, 'should stream summary upon close' );
		} else {
			t.ok( true, 'should stream summary upon close' );
		}
		stream.destroy();
	}

	function onClose() {
		t.end();
	}
});

tape( 'the function supports forcefully exiting a benchmark harness (while running)', function test( t ) {
	var harness;
	var stream;
	var count;
	var opts;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'close', onClose );

	count = 0;

	opts = {
		'iterations': 10,
		'repeats': 3,
		'skip': false
	};
	harness( 'beep', opts, beep );

	function beep( b ) {
		var x;
		var y;
		var i;

		count += 1;
		if ( count === 2 ) {
			// Simulate exiting a harness while a benchmark is running...
			harness.exit();
		}
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 && y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 && y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( harness.exitCode, 1, 'expected exit code' );
		t.end();
	}
});

tape( 'the function supports forcefully exiting a benchmark harness (after running; no autoclose)', function test( t ) {
	var harness;
	var stream;
	var opts;
	var str;

	opts = {
		'autoclose': false
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	opts = {
		'iterations': 10,
		'repeats': 3,
		'skip': false
	};
	harness( 'beep', opts, beep );

	function beep( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 && y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 && y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		harness.exit();
		setTimeout( onTimeout, 100 );
	}

	function onTimeout() {
		var i;

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i === str.length ) {
			t.ok( true, 'should not stream summary upon exit' );
		} else {
			t.ok( false, 'should not stream summary upon exit' );
		}
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( harness.exitCode, 0, 'expected exit code' );
		t.end();
	}
});

tape( 'attempting to exit a harness after the harness has closed is a no-op', function test( t ) {
	var harness;
	var stream;
	var opts;
	var str;

	opts = {
		'autoclose': true
	};
	harness = createHarness( opts, onFinish );

	stream = harness.createStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	opts = {
		'iterations': 10,
		'repeats': 3,
		'skip': false
	};
	harness( 'beep', opts, beep );

	function beep( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 && y > 1.0 ) {
				b.fail( 'something went wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 && y > 1.0 ) {
			b.fail( 'something went wrong' );
		}
		b.end();
	}

	function onData( data ) {
		str += data.toString();
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );

		// The harness should have automatically closed by this point:
		harness.exit();
		setTimeout( onTimeout, 100 );
	}

	function onTimeout() {
		var i;

		str = str.split( '\n' );
		for ( i = 0; i < str.length; i++ ) {
			if ( RE_SUMMARY.test( str[ i ] ) ) {
				break;
			}
		}
		if ( i === str.length ) {
			t.ok( false, 'should stream summary if already closed' );
		} else {
			t.ok( true, 'should stream summary if already closed' );
		}
		stream.destroy();
	}

	function onClose() {
		t.strictEqual( harness.exitCode, 0, 'expected exit code' );
		t.end();
	}
});
