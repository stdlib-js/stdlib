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
var isObjectArray = require( '@stdlib/assert/is-plain-object-array' );
var minard = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minard, 'function', 'main export is a function' );
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
			minard( value );
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
			minard({
				'data': value
			});
		};
	}
});

tape( 'the function throws an error if provided an unrecognized `data` value', opts, function test( t ) {
	t.throws( foo, RangeError, 'throws a range error' );
	t.end();

	function foo() {
		minard({
			'data': 'beep Boop bop'
		});
	}
});

tape( 'if not provided a `data` option, the function returns an `object`', opts, function test( t ) {
	var data;
	var d2;

	data = minard();
	t.equal( isObject( data ), true, 'returns an object' );
	t.equal( hasOwnProp( data, 'army' ), true, 'has `army` property' );
	t.equal( hasOwnProp( data, 'cities' ), true, 'has `cities` property' );
	t.equal( hasOwnProp( data, 'labels' ), true, 'has `labels` property' );
	t.equal( hasOwnProp( data, 'rivers' ), true, 'has `rivers` property' );
	t.equal( hasOwnProp( data, 'temperature' ), true, 'has `temperature` property' );

	// Should return a deep copy...
	d2 = minard();
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data.army, d2.army, 'different reference' );
	t.notEqual( data.cities, d2.cities, 'different reference' );
	t.notEqual( data.labels, d2.labels, 'different reference' );
	t.notEqual( data.rivers, d2.rivers, 'different reference' );
	t.notEqual( data.temperature, d2.temperature, 'different reference' );

	t.end();
});

tape( 'if not provided a `data` option, the function returns an `object` (options)', opts, function test( t ) {
	var data;
	var d2;

	data = minard( {} );
	t.equal( isObject( data ), true, 'returns an object' );
	t.equal( hasOwnProp( data, 'army' ), true, 'has `army` property' );
	t.equal( hasOwnProp( data, 'cities' ), true, 'has `cities` property' );
	t.equal( hasOwnProp( data, 'labels' ), true, 'has `labels` property' );
	t.equal( hasOwnProp( data, 'rivers' ), true, 'has `rivers` property' );
	t.equal( hasOwnProp( data, 'temperature' ), true, 'has `temperature` property' );

	// Should return a deep copy...
	d2 = minard( {} );
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data.army, d2.army, 'different reference' );
	t.notEqual( data.cities, d2.cities, 'different reference' );
	t.notEqual( data.labels, d2.labels, 'different reference' );
	t.notEqual( data.rivers, d2.rivers, 'different reference' );
	t.notEqual( data.temperature, d2.temperature, 'different reference' );

	t.end();
});

tape( 'if the `data` option is `army`, the function returns an array of objects', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'army'
	};
	data = minard( opts );

	t.equal( isObjectArray( data ), true, 'returns an object array' );

	// Should return a deep copy...
	d2 = minard( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data[0], d2[0], 'different reference' );

	t.end();
});

tape( 'if the `data` option is `cities`, the function returns an array of objects', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'cities'
	};
	data = minard( opts );

	t.equal( isObjectArray( data ), true, 'returns an object array' );

	// Should return a deep copy...
	d2 = minard( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data[0], d2[0], 'different reference' );

	t.end();
});

tape( 'if the `data` option is `labels`, the function returns an array of objects', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'labels'
	};
	data = minard( opts );

	t.equal( isObjectArray( data ), true, 'returns an object array' );

	// Should return a deep copy...
	d2 = minard( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data[0], d2[0], 'different reference' );

	t.end();
});

tape( 'if the `data` option is `rivers`, the function returns an object', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'rivers'
	};
	data = minard( opts );

	t.equal( isObject( data ), true, 'returns an object' );

	// Should return a deep copy...
	d2 = minard( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data.features, d2.features, 'different reference' );

	t.end();
});

tape( 'if the `data` option is `temperature`, the function returns an array of objects', opts, function test( t ) {
	var data;
	var opts;
	var d2;

	opts = {
		'data': 'temperature'
	};
	data = minard( opts );

	t.equal( isObjectArray( data ), true, 'returns an object array' );

	// Should return a deep copy...
	d2 = minard( opts );
	t.notEqual( data, d2, 'returns new reference' );
	t.notEqual( data[0], d2[0], 'different reference' );

	t.end();
});
