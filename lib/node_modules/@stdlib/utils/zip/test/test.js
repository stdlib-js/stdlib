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
var zip = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zip, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided at least one array', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function zipper() {
			zip( value );
		};
	}
});

tape( 'the function throws an error if an invalid argument is passed besides at least one array and the options argument', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function zipper() {
			zip( [], value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function zipper() {
			zip( [], value );
		};
	}
});

tape( 'the function throws an error if the `trunc` option is not a boolean value', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		null,
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
		return function zipper() {
			zip( [], {
				'trunc': value
			});
		};
	}
});

tape( 'the function throws an error if the `arrays` option is not a boolean value', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		null,
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
		return function zipper() {
			zip( [], {
				'arrays': value
			});
		};
	}
});

tape( 'the function allows any value for the `fill` option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		null,
		void 0,
		NaN,
		true,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.doesNotThrow( okayValue( values[i] ), 'does not throw an error when provided '+values[i] );
	}
	t.end();

	function okayValue( value ) {
		return function zipper() {
			zip( [], {
				'fill': value
			});
		};
	}
});

tape( 'the function throws an error if provided options but no array', function test( t ) {
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		zip( {} );
	}
});

tape( 'the function zips arrays', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var z;

	x = [ 1, 2 ];
	y = [ 'a', 'b' ];
	z = [ true, false ];

	expected = [ [ 1, 'a' ], [ 2, 'b' ] ];
	actual = zip( x, y );

	t.deepEqual( actual, expected );

	expected = [ [ 1, 'a', true ], [ 2, 'b', false ] ];
	actual = zip( x, y, z );

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function zips arrays and, by default, output an array with length equal to the shortest input array', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3 ];
	y = [ 'a', 'b' ];

	expected = [ [ 1, 'a' ], [ 2, 'b' ] ];
	actual = zip( x, y );

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function zips arrays and inserts nulls into tuples for arrays shorter than the tuple index', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3 ];
	y = [ 'a', 'b' ];

	expected = [ [ 1, 'a' ], [ 2, 'b' ], [ 3, null ] ];
	actual = zip( x, y, {
		'trunc': false
	});

	t.deepEqual( actual, expected );

	x = [ 1, 2 ];
	y = [ 'a', 'b', 'c' ];

	expected = [ [ 1, 'a' ], [ 2, 'b' ], [ null, 'c' ] ];
	actual = zip( x, y, {
		'trunc': false
	});

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function allows arbitrary fill values', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3 ];
	y = [ 'a', 'b' ];

	expected = [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'beep' ] ];
	actual = zip( x, y, {
		'trunc': false,
		'fill': 'beep'
	});

	t.deepEqual( actual, expected );

	x = [ 1, 2 ];
	y = [ 'a', 'b', 'c' ];

	expected = [ [ 1, 'a' ], [ 2, 'b' ], [ 0, 'c' ] ];
	actual = zip( x, y, {
		'trunc': false,
		'fill': 0
	});

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function zips an array of arrays', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ [ 1, 2 ], [ 'a', 'b' ] ];

	expected = [ [ 1, 'a' ], [ 2, 'b' ] ];
	actual = zip( x, {
		'arrays': true
	});

	t.deepEqual( actual, expected );
	t.end();
});
