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

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided an options argument which is not an object (mode=0)', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ], 0 );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an options argument which is not an object (mode=1)', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ], 1 );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an options argument which is not an object (mode=2)', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ], 2 );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `dtype` option which is not a supported data type (mode=1)', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'dtype': values[ i ]
		};
		err = validate( {}, opts, 1 );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `dtype` option which is not a supported data type (mode=2)', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'dtype': values[ i ]
		};
		err = validate( {}, opts, 2 );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `idtype` option which is not a supported data type (mode=0)', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'idtype': values[ i ]
		};
		err = validate( {}, opts, 0 );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided an `ndtype` option which is not a supported data type (mode=0)', function test( t ) {
	var values;
	var opts;
	var err;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		opts = {
			'ndtype': values[ i ]
		};
		err = validate( {}, opts, 0 );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns null if all options are valid (mode=1)', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'dtype': 'float64'
	};
	opts = {};
	err = validate( opts, options, 1 );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, options, 'sets option values' );

	t.end();
});

tape( 'the function returns null if all options are valid (mode=2)', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'dtype': 'float64'
	};
	opts = {};
	err = validate( opts, options, 2 );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, options, 'sets option values' );

	t.end();
});

tape( 'the function returns null if all options are valid (mode=0)', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'idtype': 'float64',
		'ndtype': 'float64'
	};
	opts = {};
	err = validate( opts, options, 0 );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, options, 'sets option values' );

	t.end();
});

tape( 'the function ignores unrecognized/unsupported options (mode=0)', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': true,
		'boop': 'bop'
	};
	opts = {};
	err = validate( opts, options, 0 );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'does not set any option values' );
	t.end();
});

tape( 'the function ignores unrecognized/unsupported options (mode=1)', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': true,
		'boop': 'bop'
	};
	opts = {};
	err = validate( opts, options, 1 );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'does not set any option values' );
	t.end();
});

tape( 'the function ignores unrecognized/unsupported options (mode=2)', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': true,
		'boop': 'bop'
	};
	opts = {};
	err = validate( opts, options, 2 );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'does not set any option values' );
	t.end();
});
