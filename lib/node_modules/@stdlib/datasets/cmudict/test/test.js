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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var cmudict = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cmudict, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cmudict( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', opts, function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			cmudict({
				'data': value
			});
		};
	}
});

tape( 'the function throws an error if provided an unrecognized `data` value', opts, function test( t ) {
	t.throws( foo, RangeError, 'throws a range error' );
	t.end();

	function foo() {
		cmudict({
			'data': 'beep Boop bop'
		});
	}
});

tape( 'if not provided a `data` option, the function returns an `object`', opts, function test( t ) {
	var data;
	var d2;

	data = cmudict();
	t.equal( isObject( data ), true, 'returns an object' );
	t.equal( hasOwnProp( data, 'dict' ), true, 'has `dict` property' );
	t.equal( hasOwnProp( data, 'phones' ), true, 'has `phones` property' );
	t.equal( hasOwnProp( data, 'symbols' ), true, 'has `symbols` property' );
	t.equal( hasOwnProp( data, 'vp' ), true, 'has `vp` property' );

	// Should return a copy...
	d2 = cmudict();
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data.dict, d2.dict, 'different reference' );
	t.notEqual( data.phones, d2.phones, 'different reference' );
	t.notEqual( data.symbols, d2.symbols, 'different reference' );
	t.notEqual( data.vp, d2.vp, 'different reference' );

	t.end();
});

tape( 'if not provided a `data` option, the function returns an `object` (options)', opts, function test( t ) {
	var data;
	var d2;

	data = cmudict( {} );
	t.equal( isObject( data ), true, 'returns an object' );
	t.equal( hasOwnProp( data, 'dict' ), true, 'has `dict` property' );
	t.equal( hasOwnProp( data, 'phones' ), true, 'has `phones` property' );
	t.equal( hasOwnProp( data, 'symbols' ), true, 'has `symbols` property' );
	t.equal( hasOwnProp( data, 'vp' ), true, 'has `vp` property' );

	// Should return a copy...
	d2 = cmudict( {} );
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data.dict, d2.dict, 'different reference' );
	t.notEqual( data.phones, d2.phones, 'different reference' );
	t.notEqual( data.symbols, d2.symbols, 'different reference' );
	t.notEqual( data.vp, d2.vp, 'different reference' );

	t.end();
});

tape( 'if the `data` option is `dict`, the function returns an object', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'dict'
	};
	data = cmudict( opts );

	t.equal( isObject( data ), true, 'returns an object' );

	// Should return a copy...
	d2 = cmudict( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.end();
});

tape( 'if the `data` option is `phones`, the function returns an object', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'phones'
	};
	data = cmudict( opts );

	t.equal( isObject( data ), true, 'returns an object' );

	// Should return a copy...
	d2 = cmudict( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.end();
});

tape( 'if the `data` option is `symbols`, the function returns an array of strings', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'symbols'
	};
	data = cmudict( opts );

	t.equal( isStringArray( data ), true, 'returns an array of strings' );

	// Should return a copy...
	d2 = cmudict( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.end();
});

tape( 'if the `data` option is `vp`, the function returns an object', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'vp'
	};
	data = cmudict( opts );

	t.equal( isObject( data ), true, 'returns an object' );

	// Should return a copy...
	d2 = cmudict( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.end();
});
