/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var validate = require( './../lib/validate_table.js' );


// FUNCTIONS //

/**
* Returns a destination object.
*
* @private
* @returns {Object} destination object
*/
function output() {
	return {
		'number': null,
		'complex': null,
		'array': null,
		'ndarray': null
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided a `table` argument which is not an object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( output(), values[ i ] );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an invalid "number" field value', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'number': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an invalid "complex" field value', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'complex': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an invalid "array" field value', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'array': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an invalid "ndarray" field value', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'ndarray': values[ i ]
		};
		err = validate( output(), opts );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided a valid table object', function test( t ) {
	var table;
	var out;
	var err;

	out = output();
	table = {
		'number': null,
		'complex': null,
		'array': null,
		'ndarray': null
	};

	err = validate( out, table );
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( out, table, 'sets fields' );

	out = output();
	table = {
		'number': noop,
		'complex': noop,
		'array': noop,
		'ndarray': noop
	};

	err = validate( out, table );
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( out, table, 'sets fields' );

	t.end();

	function noop() {
		// Does nothing...
	}
});

tape( 'the function will ignore unrecognized table fields', function test( t ) {
	var table;
	var out;
	var err;

	out = output();
	table = {
		'beep': [],
		'boop': []
	};

	err = validate( out, table );
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( out, output(), 'ignores unrecognized fields' );

	t.end();
});
