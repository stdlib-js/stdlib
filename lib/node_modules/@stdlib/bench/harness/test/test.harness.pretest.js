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

var EventEmitter = require( 'events' ).EventEmitter;
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var cos = require( '@stdlib/math/base/special/cos' );
var randu = require( '@stdlib/random/base/randu' );
var inherit = require( '@stdlib/utils/inherit' );
var pretest = require( './../lib/harness/pretest.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pretest, 'function', 'main export is a function' );
	t.end();
});

tape( 'given a synchronous benchmark, the function runs pretests to sanity check and/or catch failures', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	pretest( 'test', opts, benchmark, done );

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

	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'successfully completed pretest' );
		}
		t.end();
	}
});

tape( 'given an asynchronous benchmark, the function runs pretests to sanity check and/or catch failures', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	pretest( 'test', opts, benchmark, done );

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

	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'successfully completed pretest' );
		}
		t.end();
	}
});

tape( 'if a benchmark does not call both `tic` and `toc`, the pretest fails', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	pretest( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var x;
		var y;
		var i;

		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y < -1.0 || y > 1.0 ) {
				b.fail( 'something when wrong' );
			}
		}
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		} else {
			b.pass( 'success!' );
		}
		b.end();
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'pretest should fail' );
		}
		t.end();
	}
});

tape( 'if a benchmark calls `tic` but not `toc`, the pretest fails', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	pretest( 'test', opts, benchmark, done );

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
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		} else {
			b.pass( 'success!' );
		}
		b.end();
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'pretest should fail' );
		}
		t.end();
	}
});

tape( 'if a benchmark calls `tic` and `toc` more than once, the pretest fails', function test( t ) {
	var pretest;
	var opts;

	// Create a mock Benchmark class:
	function Benchmark() {
		EventEmitter.call( this );
		return this;
	}

	inherit( Benchmark, EventEmitter );

	Benchmark.prototype.run = run;

	// Proxyquire the pretest module so we can use the mock:
	pretest = proxyquire( './../lib/harness/pretest.js', {
		'./../benchmark-class': Benchmark
	});

	opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	// In this test, the `benchmark` function is not actually run.
	pretest( 'test', opts, benchmark, done );

	function run() {
		/* eslint-disable no-invalid-this */
		this.emit( 'tic' );
		this.emit( 'toc' );
		this.emit( 'tic' );
		this.emit( 'toc' );
		this.emit( 'end' );
	}

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
		b.tic();
		if ( y < -1.0 || y > 1.0 ) {
			b.fail( 'something went wrong' );
		} else {
			b.pass( 'success!' );
		}
		b.toc();
		b.end();
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'pretest should fail' );
		}
		t.end();
	}
});

tape( 'if a benchmark has a failing assertion (non-todo), the pretest fails', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	pretest( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y >= -1.0 && y <= 1.0 ) {
				b.fail( 'intentionally failing' );
			}
		}
		b.toc();
		if ( y >= -1.0 && y <= 1.0 ) {
			b.fail( 'intentionally failing' );
		} else {
			b.pass( 'success?!?!' );
		}
		b.end();
	}

	function done( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'pretest should fail' );
		}
		t.end();
	}
});

tape( 'if a benchmark has failing assertions but these assertions are todos, the pretest succeeds', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	pretest( 'test', opts, benchmark, done );

	function benchmark( b ) {
		var x;
		var y;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x = (randu()*100.0) - 50.0;
			y = cos( x );
			if ( y >= -1.0 && y <= 1.0 ) {
				b.todo( false, 'intentionally failing' );
			}
		}
		b.toc();
		if ( y >= -1.0 && y <= 1.0 ) {
			b.todo( false, 'intentionally failing' );
		} else {
			b.pass( 'success?!?!' );
		}
		b.end();
	}

	function done( error ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'pretest should succeed' );
		}
		t.end();
	}
});
