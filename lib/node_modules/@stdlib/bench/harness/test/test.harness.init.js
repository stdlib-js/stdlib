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
var cos = require( '@stdlib/math/base/special/cos' );
var randu = require( '@stdlib/random/base/randu' );
var init = require( './../lib/harness/init.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof init, 'function', 'main export is a function' );
	t.end();
});

tape( 'given a synchronous benchmark, the function performs benchmark initialization tasks (iterations = null)', function test( t ) {
	var opts = {
		'iterations': null,
		'repeats': 4,
		'timeout': 60000,
		'skip': false
	};

	init( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something when wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		} else {
			b.pass( 'success!' );
		}
		b.end();
	}

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, false, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );
		t.strictEqual( options.repeats, 4, 'does not change `repeats` option' );

		t.notEqual( options.iterations, null, 'does change `iterations` option' );
		t.strictEqual( typeof options.iterations, 'number', 'iterations option is a number' );

		t.strictEqual( bmark, benchmark, 'returns benchmark function' );

		t.end();
	}
});

tape( 'given a synchronous benchmark, the function performs benchmark initialization tasks (iterations != null)', function test( t ) {
	var opts = {
		'iterations': 1e6,
		'repeats': 4,
		'timeout': 60000,
		'skip': false
	};

	init( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something when wrong' );
			}
		}
		b.toc();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		} else {
			b.pass( 'success!' );
		}
		b.end();
	}

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, false, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );
		t.strictEqual( options.repeats, 4, 'does not change `repeats` option' );
		t.strictEqual( options.iterations, 1e6, 'does not change `iterations` option' );

		t.strictEqual( bmark, benchmark, 'returns benchmark function' );

		t.end();
	}
});

tape( 'given an asynchronous benchmark, the function performs benchmark initialization tasks (iterations = null)', function test( t ) {
	var opts = {
		'iterations': null,
		'repeats': 4,
		'timeout': 60000,
		'skip': false
	};

	init( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var i;

		b.comment( 'Running benchmark...' );

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( 3.14, 3.14, 'should be equal' );
				return setTimeout( next, 10 );
			}
			b.comment( 'Success!' );
			b.toc();
			b.end();
		}
	}

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, false, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );
		t.strictEqual( options.repeats, 4, 'does not change `repeats` option' );

		t.notEqual( options.iterations, null, 'does change `iterations` option' );
		t.strictEqual( typeof options.iterations, 'number', 'iterations option is a number' );

		t.strictEqual( bmark, benchmark, 'returns benchmark function' );

		t.end();
	}
});

tape( 'given an asynchronous benchmark, the function performs benchmark initialization tasks (iterations != null)', function test( t ) {
	var opts = {
		'iterations': 10,
		'repeats': 4,
		'timeout': 60000,
		'skip': false
	};

	init( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var i;

		b.comment( 'Running benchmark...' );

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( 3.14, 3.14, 'should be equal' );
				return setTimeout( next, 10 );
			}
			b.comment( 'Success!' );
			b.toc();
			b.end();
		}
	}

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, false, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );
		t.strictEqual( options.repeats, 4, 'does not change `repeats` option' );
		t.strictEqual( options.iterations, 10, 'does not change `iterations` option' );

		t.strictEqual( bmark, benchmark, 'returns benchmark function' );

		t.end();
	}
});

tape( 'if a benchmark function argument is `undefined`, the function treats the benchmark as a todo and modifies input arguments (sets repeats)', function test( t ) {
	var opts = {
		'iterations': null,
		'repeats': 4,
		'timeout': 60000,
		'skip': false
	};

	init( 'test', opts, void 0, done );

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, false, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );
		t.strictEqual( options.iterations, null, 'does not change `iterations` option' );

		t.strictEqual( options.repeats, 1, 'repeats set to 1' );

		t.strictEqual( bmark, void 0, 'returns benchmark function argument' );

		t.end();
	}
});

tape( 'if a `skip` option is `true`, the function modifies input arguments (sets repeats)', function test( t ) {
	var opts = {
		'iterations': null,
		'repeats': 40,
		'timeout': 60000,
		'skip': true
	};

	init( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var i;

		b.comment( 'Running benchmark...' );

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( 3.14, 3.14, 'should be equal' );
				return setTimeout( next, 10 );
			}
			b.comment( 'Success!' );
			b.toc();
			b.end();
		}
	}

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, true, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );
		t.strictEqual( options.iterations, null, 'does not change `iterations` option' );

		t.strictEqual( options.repeats, 1, 'repeats set to 1' );

		t.strictEqual( bmark, benchmark, 'returns benchmark function' );

		t.end();
	}
});

tape( 'if a benchmark has a failing assertion (non-todo), the function modifies input arguments (sets repeats and iterations)', function test( t ) {
	var opts = {
		'iterations': null,
		'repeats': 40,
		'timeout': 60000,
		'skip': false
	};

	init( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var i;

		b.comment( 'Running benchmark...' );

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.notEqual( 3.14, 3.14, 'should not be equal' );
				return setTimeout( next, 10 );
			}
			b.comment( 'Success!' );
			b.toc();
			b.end();
		}
	}

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, false, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );

		t.strictEqual( options.iterations, 1, 'iterations set to 1' );
		t.strictEqual( options.repeats, 1, 'repeats set to 1' );

		t.strictEqual( bmark, benchmark, 'returns benchmark function' );

		t.end();
	}
});

tape( 'if an error occurs during iteration determination, the function modifies input arguments (sets iterations and repeats)', function test( t ) {
	var init;
	var opts;

	init = proxyquire( './../lib/harness/init.js', {
		'./iterations.js': iterations
	});

	opts = {
		'iterations': null,
		'repeats': 40,
		'timeout': 60000,
		'skip': false
	};

	init( 'test', opts, benchmark, done );

	function iterations( name, opts, benchmark, clbk ) {
		return clbk( new Error( 'beep' ) );
	}

	function benchmark( b ) {
		var i;

		b.comment( 'Running benchmark...' );

		i = 0;
		b.tic();

		setTimeout( next, 0 );

		function next() {
			i += 1;
			if ( i <= b.iterations ) {
				b.equal( 3.14, 3.14, 'should be equal' );
				return setTimeout( next, 10 );
			}
			b.comment( 'Success!' );
			b.toc();
			b.end();
		}
	}

	function done( name, options, bmark ) {
		t.strictEqual( name, 'test', 'returns benchmark name as first argument' );

		t.strictEqual( options, opts, 'returns input options object' );

		t.strictEqual( options.skip, false, 'does not change `skip` option' );
		t.strictEqual( options.timeout, 60000, 'does not change `timeout` option' );

		t.strictEqual( options.iterations, 1, 'iterations set to 1' );
		t.strictEqual( options.repeats, 1, 'repeats set to 1' );

		t.strictEqual( bmark, benchmark, 'returns benchmark function' );

		t.end();
	}
});
