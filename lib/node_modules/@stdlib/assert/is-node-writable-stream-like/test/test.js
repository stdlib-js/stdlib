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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var stream = require( 'stream' );
var EventEmitter = require( 'events' ).EventEmitter;
var tape = require( 'tape' );
var transformStream = require( '@stdlib/streams/node/transform' );
var isNodeWritableStreamLike = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNodeWritableStreamLike, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a value which is Node writable stream-like', function test( t ) {
	var values;
	var s;
	var i;

	function pipe() {
		// pipe function
	}

	function write() {
		// write function
	}

	s = new EventEmitter();
	s.pipe = pipe;
	s._write = write;
	s._writableState = {};

	values = [
		new stream.Transform(),
		new stream.Writable(),
		transformStream(),
		s
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isNodeWritableStreamLike( values[ i ] ), true, 'returns true for value '+i );
	}
	t.end();
});

tape( 'the function returns `false` if  not provided a value which is Node writable stream-like', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		undefined,
		[],
		{},
		function pipe() {},
		new EventEmitter(),
		new stream.Readable(),
		new stream.Stream()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isNodeWritableStreamLike( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});
