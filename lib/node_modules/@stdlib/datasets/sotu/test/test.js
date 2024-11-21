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
var isObjectArray = require( '@stdlib/assert/is-plain-object-array' );
var sotu = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sotu, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
			sotu( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
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
			sotu({
				'name': value
			});
		};
	}
});

tape( 'the function throws an error if provided an unrecognized `name`', function test( t ) {
	t.throws( foo, RangeError, 'throws a range error' );
	t.end();

	function foo() {
		sotu({
			'name': 'beep Boop bop'
		});
	}
});

tape( 'the function throws an error if provided a `year` for which no SOTU exists', function test( t ) {
	t.throws( foo, RangeError, 'throws a range error' );
	t.throws( bar, RangeError, 'throws a range error' );
	t.end();

	function foo() {
		sotu({
			'year': 1776
		});
	}
	function bar() {
		sotu({
			'year': 1933
		});
	}
});

tape( 'the function throws an error if provided a unrecognized `party`', function test( t ) {
	t.throws( foo, RangeError, 'throws a range error' );
	t.end();

	function foo() {
		sotu({
			'party': 'Beeper Boopers'
		});
	}
});

tape( 'the function returns an object array', function test( t ) {
	var out = sotu();
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.end();
});

tape( 'the `name` option can be used to retrieve SOTU addresses by specific Presidents', function test( t ) {
	var bool;
	var out;
	var i;

	out = sotu({
		'name': 'Barack Obama'
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out.length, 8, 'returns selected speeches' );

	for ( i = 0; i < out.length; i++ ) {
		t.equal( out[ i ].name, 'Barack Obama', 'speech is from expected President' );
	}

	out = sotu({
		'name': [ 'William J Clinton', 'Barack Obama' ]
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out.length, 16, 'returns selected speeches' );

	for ( i = 0; i < out.length; i++ ) {
		bool = ( out[ i ].name === 'William J Clinton' || out[ i ].name === 'Barack Obama' );
		t.equal( bool, true, 'returns a speech by a specified President' );
	}
	t.end();
});

tape( 'the `party` option can be used to retrieve SOTU addresses from Presidents belonging to particular political parties', function test( t ) {
	var bool;
	var out;
	var i;

	out = sotu({
		'party': 'Democratic'
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );

	for ( i = 0; i < out.length; i++ ) {
		t.equal( out[ i ].party, 'Democratic', 'speech is from a Democratic President' );
	}

	out = sotu({
		'party': [ 'Democratic', 'Republican' ]
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );

	for ( i = 0; i < out.length; i++ ) {
		bool = ( out[ i ].party === 'Democratic' || out[ i ].party === 'Republican' );
		t.equal( bool, true, 'speech is from a Democratic or Republican President' );
	}
	t.end();
});

tape( 'the `year` option can be used to retrieve SOTU addresses from particular years', function test( t ) {
	var out;

	out = sotu({
		'year': 2009
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out[ 0 ].name, 'Barack Obama', 'speech is from expected President' );

	out = sotu({
		'year': [ 1998, 2009 ]
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out[ 0 ].name, 'William J Clinton', 'speech is from expected President' );
	t.equal( out[ 1 ].name, 'Barack Obama', 'speech is from expected President' );

	t.end();
});

tape( 'the `range` option can be used to retrieve SOTU addresses of a given time period', function test( t ) {
	var out;

	out = sotu({
		'range': [ 1980, 1995 ]
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out.length, 16, 'returns speeches from 1980 to 1995' );

	out = sotu({
		'range': [ 1880, 1920 ]
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out.length, 41, 'returns speeches from 1880 to 1920' );

	out = sotu({
		'range': [ 1920, 1970 ]
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out.length, 52, 'returns speeches from 1920 to 1970' );

	out = sotu({
		'range': [ 1935, 1960 ]
	});
	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out.length, 27, 'returns speeches from 1935 to 1960' );

	t.end();
});

tape( 'if provided multiple options, the function returns the union', function test( t ) {
	var counters;
	var out;
	var i;

	out = sotu({
		'name': 'Barack Obama',  // 8
		'year': [ 1790, 2003 ],  // 2
		'range': [ 1990, 1999 ], // 10
		'party': 'Whig'          // 4
	});

	counters = {
		'name': 0,
		'year': 0,
		'range': 0,
		'party': 0
	};

	t.equal( isObjectArray( out ), true, 'returns an object array' );
	t.equal( out.length, 24, 'returned array has expected length' );

	for ( i = 0; i < out.length; i++ ) {
		if ( out[ i ].name === 'Barack Obama' ) {
			counters.name += 1;
		}
		else if (
			out[ i ].year === 1790 ||
			out[ i ].year === 2003
		) {
			counters.year += 1;
		}
		else if (
			out[ i ].year >= 1990 &&
			out[ i ].year <= 1999
		) {
			counters.range += 1;
		}
		else if ( out[ i ].party === 'Whig' ) {
			counters.party += 1;
		}
	}
	t.equal( counters.name, 8, 'returns speeches by name' );
	t.equal( counters.year, 2, 'returns speeches by year' );
	t.equal( counters.range, 10, 'returns speeches by range' );
	t.equal( counters.party, 4, 'returns speeches by party' );

	t.end();
});
