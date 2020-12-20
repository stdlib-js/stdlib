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

var bench = require( '@stdlib/bench' );
var noop = require( '@stdlib/utils/noop' );
var nextTick = require( '@stdlib/utils/next-tick' );
var pkg = require( './../package.json' ).name;
var inspectSinkStream = require( './../lib' );


// MAIN //

bench( pkg+'::throughput,baseline', function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return nextTick( onTick );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}

	function onTick() {
		if ( i !== i ) {
			b.fail( 'should not be NaN' );
		}
		next();
	}
});

bench( pkg+'::throughput', function benchmark( b ) {
	var stream;
	var opts;
	var i;

	opts = {};
	stream = inspectSinkStream( opts, noop );

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			stream.write( i.toString() );
			return nextTick( next );
		}
		b.toc();
		stream.end();

		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( pkg+'::throughput,object_mode', function benchmark( b ) {
	var stream;
	var opts;
	var i;

	opts = {
		'objectMode': true
	};
	stream = inspectSinkStream( opts, noop );

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			stream.write( i );
			return nextTick( next );
		}
		b.toc();
		stream.end();

		b.pass( 'benchmark finished' );
		b.end();
	}
});
