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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils/noop' );
var DebugStream = require( './../lib/main.js' );
var objectMode = require( './../lib/object_mode.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof objectMode, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a callback argument which is not a function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			objectMode( value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			objectMode( {}, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (no callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			objectMode( value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		function noop() {},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			objectMode( value, noop );
		};
	}
});

tape( 'the function returns a stream instance', function test( t ) {
	var stream = objectMode();
	t.equal( stream instanceof DebugStream, true, 'returns a stream instance' );
	t.end();
});

tape( 'the function returns a stream which allows writing objects', function test( t ) {
	var stream;
	var opts;

	stream = objectMode();
	stream.write( new String( 'beep' ) );
	stream.end();

	t.ok( true, 'did not error when writing an object' );

	stream = objectMode( noop );
	stream.write( new String( 'beep' ) );
	stream.end();

	t.ok( true, 'did not error when writing an object' );

	// Attempt to override should not work...
	opts = {
		// Option should be overridden...
		'objectMode': false
	};

	stream = objectMode( opts );
	stream.write( new String( 'beep' ) );
	stream.end();

	t.ok( true, 'did not error when writing an object' );

	stream = objectMode( opts, noop );
	stream.write( new String( 'beep' ) );
	stream.end();

	t.ok( true, 'did not error when writing an object' );

	t.end();
});
