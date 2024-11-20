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

var WritableStream = require( 'readable-stream' ).Writable; // eslint-disable-line stdlib/no-redeclare
var bench = require( '@stdlib/bench' );
var inherit = require( '@stdlib/utils/inherit' );
var nextTick = require( '@stdlib/utils/next-tick' );
var pkg = require( './../package.json' ).name;
var randomStream = require( './../lib' );


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

bench( pkg+'::throughput:highWaterMark=<default>', function benchmark( b ) {
	var rStream;
	var wStream;
	var opts;
	var i;

	function Writable( opts ) {
		WritableStream.call( this, opts );
		return this;
	}

	inherit( Writable, WritableStream );
	Writable.prototype._write = next; // eslint-disable-line no-underscore-dangle

	// Create a source stream:
	opts = {};
	rStream = randomStream( 20.0, 0.5, opts );

	// Create a sink stream:
	opts = {};
	wStream = new Writable( opts );

	i = 0;
	b.tic();

	return pipe();

	function pipe() {
		// Begin data flow...
		rStream.pipe( wStream );
	}

	function next( chunk, encoding, clbk ) {
		i += 1;
		if ( i < b.iterations ) {
			return clbk();
		}
		b.toc();
		rStream.destroy();

		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( pkg+'::throughput:highWaterMark=0', function benchmark( b ) {
	var rStream;
	var wStream;
	var opts;
	var i;

	function Writable( opts ) {
		WritableStream.call( this, opts );
		return this;
	}

	inherit( Writable, WritableStream );
	Writable.prototype._write = next; // eslint-disable-line no-underscore-dangle

	// Create a source stream:
	opts = {
		'highWaterMark': 0
	};
	rStream = randomStream( 20.0, 0.5, opts );

	// Create a sink stream:
	opts = {};
	wStream = new Writable( opts );

	i = 0;
	b.tic();

	return pipe();

	function pipe() {
		// Begin data flow...
		rStream.pipe( wStream );
	}

	function next( chunk, encoding, clbk ) {
		i += 1;
		if ( i < b.iterations ) {
			return clbk();
		}
		b.toc();
		rStream.destroy();

		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( pkg+'::throughput,object_mode:highWaterMark=<default>', function benchmark( b ) {
	var rStream;
	var wStream;
	var opts;
	var i;

	function Writable( opts ) {
		WritableStream.call( this, opts );
		return this;
	}

	inherit( Writable, WritableStream );
	Writable.prototype._write = next; // eslint-disable-line no-underscore-dangle

	// Create a source stream:
	opts = {};
	rStream = randomStream.objectMode( 20.0, 0.5, opts );

	// Create a sink stream:
	opts = {
		'objectMode': true
	};
	wStream = new Writable( opts );

	i = 0;
	b.tic();

	return pipe();

	function pipe() {
		// Begin data flow...
		rStream.pipe( wStream );
	}

	function next( chunk, encoding, clbk ) {
		i += 1;
		if ( i < b.iterations ) {
			return clbk();
		}
		b.toc();
		rStream.destroy();

		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( pkg+'::throughput,object_mode:highWaterMark=0', function benchmark( b ) {
	var rStream;
	var wStream;
	var opts;
	var i;

	function Writable( opts ) {
		WritableStream.call( this, opts );
		return this;
	}

	inherit( Writable, WritableStream );
	Writable.prototype._write = next; // eslint-disable-line no-underscore-dangle

	// Create a source stream:
	opts = {
		'highWaterMark': 0
	};
	rStream = randomStream.objectMode( 20.0, 0.5, opts );

	// Create a sink stream:
	opts = {
		'objectMode': true
	};
	wStream = new Writable( opts );

	i = 0;
	b.tic();

	return pipe();

	function pipe() {
		// Begin data flow...
		rStream.pipe( wStream );
	}

	function next( chunk, encoding, clbk ) {
		i += 1;
		if ( i < b.iterations ) {
			return clbk();
		}
		b.toc();
		rStream.destroy();

		b.pass( 'benchmark finished' );
		b.end();
	}
});
