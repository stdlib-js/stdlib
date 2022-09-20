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
var repl = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repl, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		function foo() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			repl( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (no options)', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			repl( value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			repl( {}, value );
		};
	}
});

tape( 'the function starts a REPL environment', function test( t ) {
	var repl;
	var mock;

	mock = {
		'start': start
	};

	repl = proxyquire( './../lib/main.js', {
		'repl': mock
	});

	repl( onStart );

	function start() {
		return {
			'context': {}
		};
	}

	function onStart( error, server ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'starts a REPL' );
			t.ok( server, 'returns a REPL server' );
		}
		t.end();
	}
});

tape( 'the function starts a REPL environment (options)', function test( t ) {
	var repl;
	var mock;

	mock = {
		'start': start
	};

	repl = proxyquire( './../lib/main.js', {
		'repl': mock
	});

	repl( {}, onStart );

	function start() {
		return {
			'context': {}
		};
	}

	function onStart( error, server ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'starts a REPL' );
			t.ok( server, 'returns a REPL server' );
		}
		t.end();
	}
});
