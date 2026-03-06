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
var iterations = require( './../lib/harness/iterations.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterations, 'function', 'main export is a function' );
	t.end();
});

tape( 'given a synchronous benchmark, the function determines an iteration number to satisfy a minimum benchmark duration', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	iterations( 'test', opts, benchmark, done );

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

	function done( error, iter ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( typeof iter, 'number', 'returns an iteration number' );
		t.strictEqual( iter >= 1, true, 'iteration number is >= 1' );
		t.end();
	}
});

tape( 'given an asynchronous benchmark, the function determines an iteration number to satisfy a minimum benchmark duration', function test( t ) {
	var opts = {
		'iterations': null,
		'timeout': 60000,
		'skip': false
	};

	iterations( 'test', opts, benchmark, done );

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

	function done( error, iter ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( typeof iter, 'number', 'returns an iteration number' );
		t.strictEqual( iter >= 1, true, 'iteration number is >= 1' );
		t.end();
	}
});
