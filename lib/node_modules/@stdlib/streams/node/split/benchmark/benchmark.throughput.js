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
var splitStream = require( './../lib' );


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

	function Writable() {
		WritableStream.call( this );
		return this;
	}

	inherit( Writable, WritableStream );
	Writable.prototype._write = onWrite; // eslint-disable-line no-underscore-dangle

	opts = {};
	stream = splitStream( opts );
	stream.pipe( new Writable() );

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return stream.write( i.toString()+'\n' );
		}
		b.toc();
		stream.end();

		b.pass( 'benchmark finished' );
		b.end();
	}

	function onWrite( chunk, enc, clbk ) {
		clbk(); // eslint-disable-line callback-return
		next();
	}
});

bench( pkg+'::throughput,object_mode', function benchmark( b ) {
	var stream;
	var opts;
	var i;

	function Writable( opts ) {
		WritableStream.call( this, opts );
		return this;
	}

	inherit( Writable, WritableStream );
	Writable.prototype._write = onWrite; // eslint-disable-line no-underscore-dangle

	opts = {
		'objectMode': true
	};
	stream = splitStream( opts );
	stream.pipe( new Writable( opts ) );

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return stream.write( i.toString()+'\n' );
		}
		b.toc();
		stream.end();

		b.pass( 'benchmark finished' );
		b.end();
	}

	function onWrite( chunk, enc, clbk ) {
		clbk(); // eslint-disable-line callback-return
		next();
	}
});
