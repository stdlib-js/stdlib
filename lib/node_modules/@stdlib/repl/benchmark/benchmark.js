/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var inspectSinkStream = require( '@stdlib/streams/node/inspect-sink' );
var randu = require( '@stdlib/random/streams/randu' );
var noop = require( '@stdlib/utils/noop' );
var pkg = require( './../package.json' ).name;
var REPL = require( './../lib' );


// MAIN //

bench( pkg+'::new', function benchmark( b ) {
	var sopts;
	var opts;
	var r;
	var i;

	opts = {
		'output': inspectSinkStream( noop )
	};
	sopts = {
		'iter': 1
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		opts.input = randu( sopts ); // Note: this is slow, but should not be rate-limiting
		r = new REPL( opts );
		if ( typeof r !== 'object' ) {
			b.fail( 'should return an object' );
		}
		r.close();
	}
	b.toc();
	if ( !( r instanceof REPL ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::no_new', function benchmark( b ) {
	var sopts;
	var repl;
	var opts;
	var r;
	var i;

	repl = REPL;
	opts = {
		'output': inspectSinkStream( noop )
	};
	sopts = {
		'iter': 1
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		opts.input = randu( sopts ); // Note: this is slow, but should not be rate-limiting
		r = repl( opts );
		if ( typeof r !== 'object' ) {
			b.fail( 'should return an object' );
		}
		r.close();
	}
	b.toc();
	if ( !( r instanceof REPL ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
