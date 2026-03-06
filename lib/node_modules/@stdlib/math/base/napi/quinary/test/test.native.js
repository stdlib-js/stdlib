/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var addon = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( addon instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof addon, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			addon( value, 3.14, 3.14, 3.14, 3.14 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			addon( 3.14, value, 3.14, 3.14, 3.14 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			addon( 3.14, 3.14, value, 3.14, 3.14 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			addon( 3.14, 3.14, 3.14, value, 3.14 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			addon( 3.14, 3.14, 3.14, 3.14, value );
		};
	}
});

tape( 'the function throws an error if provided insufficient arguments', opts, function test( t ) {
	t.throws( f1, Error, 'throws an error' );
	t.throws( f2, Error, 'throws an error' );
	t.throws( f3, Error, 'throws an error' );
	t.throws( f4, Error, 'throws an error' );
	t.throws( f5, Error, 'throws an error' );
	t.end();

	function f1() {
		addon();
	}

	function f2() {
		addon( 3.14 );
	}

	function f3() {
		addon( 3.14, 3.14 );
	}

	function f4() {
		addon( 3.14, 3.14, 3.14 );
	}

	function f5() {
		addon( 3.14, 3.14, 3.14, 3.14 );
	}
});

tape( 'the function does not throw an error when provided valid arguments', opts, function test( t ) {
	var y;
	try {
		y = addon( 3.14, 3.14, 3.14, 3.14, 3.14 );
		t.ok( true, 'does not throw' );
		t.strictEqual( typeof y, 'number', 'returns expected value' );
	} catch ( err ) {
		t.ok( false, err.message );
	}
	t.end();
});
