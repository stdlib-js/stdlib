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
var TransformStream = require( '@stdlib/streams/node/transform' );  // eslint-disable-line stdlib/no-redeclare
var randu = require( '@stdlib/random/base/randu' );
var cos = require( '@stdlib/math/base/special/cos' );
var createExitHarness = require( './../lib/exit_harness.js' );
var bench = require( './../lib' );


// FIXTURES //

var mockHarness = require( './fixtures/harness.js' );


// VARIABLES //

var RE_RESULTS = /\s{2}[\-]{3}\r?\n\s{2}iterations: (.+)\r?\n\s{2}elapsed: (.+)\r?\n\s{2}rate: (.+)\r?\n\s{2}[.]{3}\r?\n/; // eslint-disable-line no-useless-escape


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bench, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to create a harness', function test( t ) {
	t.strictEqual( typeof bench.createHarness, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to create a stream', function test( t ) {
	t.strictEqual( typeof bench.createStream, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to add a listener for when a harness has finished running all benchmarks', function test( t ) {
	t.strictEqual( typeof bench.onFinish, 'function', 'has method' );
	t.end();
});

tape( 'the function throws an error if provided a `name` argument which is not a string (one argument)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench( value );
		};
	}
});

tape( 'the function throws an error if provided a `name` argument which is not a string (two arguments)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a `name` argument which is not a string (more than two arguments)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench( value, {}, noop );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object (two arguments)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench( 'beep', value );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object (more than two arguments)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench( 'beep', value, noop );
		};
	}
});

tape( 'the function throws an error if provided a `benchmark` argument which is not a function (two arguments)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench( 'beep', value );
		};
	}
});

tape( 'the function throws an error if provided a `benchmark` argument which is not a function (more than two arguments)', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench( 'beep', {}, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'skip': value
			};
			bench( 'beep', opts, noop );
		};
	}
});

tape( 'the `createStream` method throws an error if provided an options argument which is not an object', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench.createStream( value );
		};
	}
});

tape( 'the `createStream` method throws an error if provided an invalid option', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'transform': value
			};
			bench.createStream( opts );
		};
	}
});

tape( 'the `createStream` method returns a transform stream', function test( t ) {
	var stream = bench.createStream();
	t.strictEqual( stream instanceof TransformStream, true, 'returns a transform stream' );
	t.end();
});

tape( 'the `onFinish` method throws an error if not provided a function', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bench.onFinish( value );
		};
	}
});

tape( 'the `onFinish` method throws an error if provided a duplicate listener', function test( t ) {
	bench.onFinish( noop );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		bench.onFinish( noop );
	}
});

tape( 'all `onFinish` listeners are invoked once a harness finishes running all benchmarks', function test( t ) {
	var harness;
	var bench;

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( foo );
	bench.onFinish( bar );

	// Mock hook:
	bench( 'beep' );
	harness.end();

	function getHarness( opts, clbk ) {
		if ( harness ) {
			return harness;
		}
		if ( arguments.length === 1 ) {
			harness = mockHarness( opts );
		} else {
			harness = mockHarness( opts, clbk );
		}
		return harness;
	}

	function foo() {
		t.ok( true, 'calls listener `foo`' );
	}

	function bar() {
		t.ok( true, 'calls listener, `bar`' );
		t.end();
	}
});

tape( 'the function runs benchmarks (sync)', function test( t ) {
	var harness;
	var bench;
	var opts;

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( onFinish );

	opts = {
		'iterations': 100,
		'repeats': 3
	};
	bench( 'beep', opts, beep );
	bench( 'boop', opts, boop );

	function getHarness( clbk ) {
		var opts;
		if ( harness ) {
			return harness;
		}
		opts = {};
		opts.stream = new TransformStream();
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
	}

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
		t.end();
	}
});

tape( 'the function runs benchmarks (async)', function test( t ) {
	var harness;
	var bench;
	var opts;

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( onFinish );

	opts = {
		'iterations': 10,
		'repeats': 2
	};
	bench( 'beep', opts, beep );
	bench( 'boop', opts, boop );

	function getHarness( clbk ) {
		var opts;
		if ( harness ) {
			return harness;
		}
		opts = {};
		opts.stream = new TransformStream();
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
	}

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
		t.end();
	}
});

tape( 'the function runs benchmarks (sync and async)', function test( t ) {
	var harness;
	var bench;
	var sopts;
	var aopts;

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( onFinish );

	sopts = {
		'iterations': 1000,
		'repeats': 2
	};
	aopts = {
		'iterations': 10,
		'repeats': 2
	};
	bench( 'sync (1)', sopts, beep );
	bench( 'async (1)', aopts, boop );
	bench( 'sync (2)', sopts, beep );
	bench( 'async (2)', aopts, boop );

	function getHarness( clbk ) {
		var opts;
		if ( harness ) {
			return harness;
		}
		opts = {};
		opts.stream = new TransformStream();
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
	}

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
		t.end();
	}
});

tape( 'if the `iterations` option is `null`, the function supports automatically determining iteration number', function test( t ) {
	var harness;
	var bench;
	var opts;

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( onFinish );

	opts = {
		'iterations': null,
		'repeats': 3
	};
	bench( 'beep', opts, beep );
	bench( 'boop', opts, boop );

	function getHarness( clbk ) {
		var opts;
		if ( harness ) {
			return harness;
		}
		opts = {};
		opts.stream = new TransformStream();
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
	}

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
		t.end();
	}
});

tape( 'by default, the `iterations` option is `null` and the number of repeats is `3`', function test( t ) {
	var harness;
	var stream;
	var bench;
	var str;

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( onFinish );

	stream = new TransformStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	bench( 'beep', beep );

	function getHarness( clbk ) {
		var opts;
		if ( harness ) {
			return harness;
		}
		opts = {};
		opts.stream = stream;
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
	}

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

tape( 'if the `skip` option is `true`, the function skips a benchmark', function test( t ) {
	var expected;
	var harness;
	var stream;
	var bench;
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

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( onFinish );

	stream = new TransformStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	opts = {
		'iterations': null,
		'repeats': 3,
		'skip': true
	};
	bench( 'beep', opts, beep );

	function getHarness( clbk ) {
		var opts;
		if ( harness ) {
			return harness;
		}
		opts = {};
		opts.stream = stream;
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
	}

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

tape( 'if not provided a benchmark function, the function treats the benchmark as a todo', function test( t ) {
	var expected;
	var harness;
	var stream;
	var bench;
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

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	bench.onFinish( onFinish );

	stream = new TransformStream();
	stream.on( 'data', onData );
	stream.on( 'close', onClose );

	str = '';

	opts = {
		'iterations': null,
		'repeats': 3,
		'skip': false
	};
	bench( 'beep' );
	bench( 'boop', opts );

	function getHarness( clbk ) {
		var opts;
		if ( harness ) {
			return harness;
		}
		opts = {};
		opts.stream = stream;
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
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

tape( 'if `createStream` is called before providing adding one or more benchmarks, the function runs benchmarks and only streams results to the created stream(s)', function test( t ) {
	var harness;
	var stream;
	var bench;
	var opts;
	var flg;

	function getHarness( opts, clbk ) {
		if ( harness ) {
			return harness;
		}
		getHarness.cached = true;
		opts.autoclose = true;
		harness = createExitHarness( opts, clbk );
		return harness;
	}

	getHarness.cached = false;

	bench = proxyquire( './../lib/main.js', {
		'./get_harness.js': getHarness
	});
	stream = bench.createStream({
		'objectMode': true
	});
	stream.on( 'data', onData );

	bench.onFinish( onFinish );

	opts = {
		'iterations': 1,
		'repeats': 1
	};
	bench( 'beep', opts, beep );
	bench( 'boop', opts, boop );

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

	function onData( data ) {
		flg = true;
		t.strictEqual( typeof data, 'object', 'returns an object' );
	}

	function onFinish() {
		t.ok( true, 'finished running benchmarks' );
		t.ok( flg, 'streamed results' );
		t.end();
	}
});
