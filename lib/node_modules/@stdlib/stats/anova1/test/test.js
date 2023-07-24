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
var randu = require( '@stdlib/random/base/randu' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var contains = require( '@stdlib/assert/contains' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var anova1 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof anova1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, '5' ],
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anova1( value, [ 'treatment A', 'control' ] );
		};
	}
});

tape( 'the function throws an error if the `x` argument has a length smaller than 2', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[5]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anova1( value, [ 'treatment A', 'control' ] );
		};
	}
});

tape( 'the function throws an error if the `factor` argument is not an array', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		NaN,
		null
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anova1( [1, 2, 3, 4, 5], value );
		};
	}
});

tape( 'the function throws an error if the `factor` argument has a length smaller than 2', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[14],
		['treatment A']
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anova1( [1, 2, 3], value );
		};
	}
});

tape( 'the function throws an error if the `factor` argument has less than 2 unique elements', function test( t ) {
	var values;
	var i;

	values = [
		[ 'treatment A', 'treatment A', 'treatment A' ],
		[ 'treatment C', 'treatment C', 'treatment C', 'treatment C' ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			anova1( [1, 2, 3], value );
		};
	}
});

tape( 'the function throws an error if the arguments have unequal lengths', function test( t ) {
	// Two unique arguments for x and factor
	var valuesX;
	var valuesY;
	var i;

	valuesX = [
		[ 1, 2, 3, 4, 5, 6, 7, 8 ],
		[ 5, 6, 7, 4 ],
		[ 1, 2, 3 ]
	];

	valuesY = [
		[ 'treatment A', 'treatment C', 'treatment A', 'treatment C' ],
		[ 'control', 'treatment C', 'treatment B' ],
		[ 'john', 'delta beta' ]
	];

	for ( i = 0; i < valuesX.length; i++ ) {
		t.throws( badValue( valuesX[i], valuesY[i] ), Error, 'throws an error when provided '+valuesX[i]+valuesY[i] );
	}
	t.end();

	function badValue( valueX, valueY ) {
		return function badValue() {
			anova1( valueX, valueY );
		};
	}
});

tape( 'the function produces expected values on simple inputs', function test( t ) {
	var out;
	var x;
	var f;

	x = [ 3, 4, 5, 6, 2, 5, 10, 12, 8, 10 ];
	f = [ 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A' ];
	out = anova1( x, f );

	// Tested against R:
	t.equal( out.treatment.df, 2 );
	t.equal( out.treatment.ss, 3.75 );
	t.equal( out.treatment.ms, 1.875 );
	t.equal( out.error.df, 7 );
	t.equal( out.error.ss, 96.75 );
	t.equal( roundn(out.error.ms, -4), 13.8214 );
	t.equal( roundn(out.statistic, -4), 0.1357 );
	t.equal( roundn(out.pValue, -4), 0.8754 );
	t.end();
});

tape( 'the `.print()` method allows printing a formatted output table', function test( t ) {
	var actual;
	var table;
	var group;
	var vals;
	var len;
	var i;

	len = 30;
	vals = new Array( len );
	group = new Array( len );
	for ( i = 0; i < len; i++ ) {
		group[ i ] = discreteUniform( 0, 3 );
		vals[ i ] = ( randu()*50.0 ) + ( 10.0*group[ i ] );
	}
	actual = anova1( group, vals );
	table = actual.print();

	t.equal( typeof table, 'string', 'returns a string' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var actual;
	var table;
	var group;
	var vals;
	var len;
	var i;

	len = 30;
	vals = new Array( len );
	group = new Array( len );
	for ( i = 0; i < len; i++ ) {
		group[ i ] = discreteUniform( 0, 3 );
		vals[ i ] = ( randu()*50.0 ) + ( 10.0*group[ i ] );
	}
	actual = anova1( group, vals );
	table = actual.print({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var actual;
	var table;
	var group;
	var vals;
	var len;
	var i;

	len = 30;
	vals = new Array( len );
	group = new Array( len );
	for ( i = 0; i < len; i++ ) {
		group[ i ] = discreteUniform( 0, 3 );
		vals[ i ] = ( randu()*50.0 ) + ( 10.0*group[ i ] );
	}
	actual = anova1( group, vals );
	table = actual.print({
		'decision': false
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;
	var f;
	var x;

	x = [ 3, 4, 5, 6, 2, 5, 10, 12, 8, 10 ];
	f = [ 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A' ];
	out = anova1( x, f );
	table = out.print( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var i;
	var x;
	var f;

	x = [ 3, 4, 5, 6, 2, 5, 10, 12, 8, 10 ];
	f = [ 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A' ];
	out = anova1( x, f );

	values = [
		'abc',
		4,
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
			out.print( value );
		};
	}
});

tape( 'the function returns an object with a `.print()` method that throws an error if the `digits` option is not a positive integer', function test( t ) {
	var values;
	var out;
	var f;
	var i;
	var x;

	x = [ 3, 4, 5, 6, 2, 5, 10, 12, 8, 10 ];
	f = [ 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A' ];
	out = anova1( x, f );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
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
			out.print({
				'digits': value
			});
		};
	}
});

tape( 'the function returns an object with a `.print()` method that throws an error if the `decision` option is not a boolean primitive', function test( t ) {
	var values;
	var out;
	var f;
	var i;
	var x;

	x = [ 3, 4, 5, 6, 2, 5, 10, 12, 8, 10 ];
	f = [ 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A', 'control', 'treatment B', 'treatment A' ];
	out = anova1( x, f );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		null,
		7.0,
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
			out.print({
				'decision': value
			});
		};
	}
});
