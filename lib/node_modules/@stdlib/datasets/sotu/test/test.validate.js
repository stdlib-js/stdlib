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
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.equals( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `name` option which is not a string or string array', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		void 0,
		null,
		NaN,
		true,
		[ 2, 3 ],
		[ 'beep', null ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'name': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `party` option which is not a string or string array', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		void 0,
		null,
		NaN,
		true,
		[ 2, 4 ],
		[ 'beep', null ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'party': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `year` option which is not a positive integer or positive integer array', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		-5,
		0,
		'5',
		void 0,
		null,
		NaN,
		true,
		[ 2, '43' ],
		[ 1980, 1990, -2000 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'year': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `range` option which is not a positive integer array of length 2', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		-5,
		0,
		'5',
		void 0,
		null,
		NaN,
		true,
		[ 2, '43' ],
		[ 1980, 1990, 2000 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'range': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `range` option whose first value is less than `1790`', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[ 1, 2000 ],
		[ 1789, 2000 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'range': values[ i ]
		});
		t.equal( err instanceof RangeError, true, 'returns a range error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `range` option whose second value is greater than `5000`', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		[ 2000, 5001 ],
		[ 2000, 10000 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'range': values[ i ]
		});
		t.equal( err instanceof RangeError, true, 'returns a range error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var expected;
	var options;
	var opts;
	var err;

	options = {
		'year': [ 1980 ],
		'range': [ 1980, 1990 ],
		'name': [ 'George Bush', 'Ronald Reagan' ],
		'party': 'Republican'
	};
	opts = {};

	expected = {
		'year': options.year,
		'range': options.range,
		'name': options.name,
		'party': options.party
	};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, expected, 'sets option values' );

	options = {
		'year': 2008,
		'range': [ 1980, 1990 ],
		'name': 'Barack Obama',
		'party': [ 'Republican', 'Democrat' ]
	};
	opts = {};

	expected = {
		'year': options.year,
		'range': options.range,
		'name': options.name,
		'party': options.party
	};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, expected, 'sets option values' );

	t.end();
});

tape( 'the function ignores unrecognized/unsupported options', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': true,
		'boop': 'bop'
	};
	opts = {};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'does not set any option values' );
	t.end();
});
