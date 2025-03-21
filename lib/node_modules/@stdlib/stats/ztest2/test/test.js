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
var normal = require( '@stdlib/random/base/normal' ).factory;
var contains = require( '@stdlib/assert/contains' );
var isArray = require( '@stdlib/assert/is-array' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var ztest2 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ztest2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, 'not a numeric array, hehe' ],
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
			ztest2( value, [ 1, 2, 3 ], 1.0, 1.0 );
		};
	}
});

tape( 'the function throws an error if the `y` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, 'not a numeric array, hehe' ],
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
			ztest2( [ 1, 2, 3 ], value, 1.0, 1.0 );
		};
	}
});

tape( 'the function throws an error when `sigmax` is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1.0,
		0.0,
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
			ztest2( [ 2, 3, 4 ], [ 1, 2, 3 ], value, 1.0 );
		};
	}
});

tape( 'the function throws an error when `sigmay` is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1.0,
		0.0,
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
			ztest2( [ 1, 2, 3 ], [ 2, 3, 4 ], 1.0, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `alternative` option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		void 0,
		null,
		NaN,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}

	t.throws( badValue( 'not one of less, greater or two-sided' ), Error, 'throws an error when provided not less, greater or two-sided' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			ztest2( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.4, 0.3 ], 1.0, 1.0, {
				'alternative': value
			});
		};
	}
});

tape( 'the function throws an error if the `alpha` option is a numeric value outside `[0,1]`', function test( t ) {
	var values;
	var i;

	values = [
		1.1,
		-0.1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ztest2( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.5, 0.9 ], 1.0, 1.0, {
				'alpha': value
			});
		};
	}
});

tape( 'the function computes a two-sample two-sided z-test', function test( t ) {
	var rnorm;
	var out;
	var i;
	var x;
	var y;

	rnorm = normal({
		'seed': 338
	});

	x = new Array( 100 );
	y = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = rnorm( 0.0, 1.0 );
		y[ i ] = rnorm( 0.0, 1.0 );
	}
	out = ztest2( x, y, 1.0, 1.0 );

	t.strictEqual( typeof out.rejected, 'boolean', '`rejected` property is a boolean' );
	t.strictEqual( out.rejected, false, 'fail to reject null hypothesis' );
	t.strictEqual( typeof out.pValue, 'number', '`pValue` property is a boolean' );
	t.strictEqual( typeof out.statistic, 'number', '`statistic` property is a boolean' );
	t.strictEqual( isArray( out.ci ), true, '`ci` property is an array' );

	// TODO: Add test fixtures

	t.end();
});

tape( 'the function computes a two-sample one-sided z-test', function test( t ) {
	var rnorm;
	var out;
	var i;
	var x;
	var y;

	rnorm = normal({
		'seed': 338
	});

	x = new Array( 100 );
	y = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = rnorm( 0.0, 1.0 );
		y[ i ] = rnorm( 2.0, 1.0 );
	}

	// Alternative: mu_x - my_y > 0.0
	out = ztest2( x, y, 1.0, 1.0, {
		'alternative': 'greater'
	});
	t.strictEqual( typeof out.rejected, 'boolean', '`rejected` property is a boolean' );
	t.strictEqual( out.rejected, false, 'fail to reject null hypothesis' );
	t.strictEqual( typeof out.pValue, 'number', '`pValue` property is a boolean' );
	t.strictEqual( typeof out.statistic, 'number', '`statistic` property is a boolean' );
	t.strictEqual( isArray( out.ci ), true, '`ci` property is an array' );
	t.strictEqual( out.ci[1], PINF, 'CI upper bound is +infinity' );

	// Alternative: mu_x - my_y < 0.0
	out = ztest2( x, y, 1.0, 1.0, {
		'alternative': 'less'
	});
	t.strictEqual( typeof out.rejected, 'boolean', '`rejected` property is a boolean' );
	t.strictEqual( out.rejected, true, 'reject null hypothesis at 1% significance level' );
	t.strictEqual( typeof out.pValue, 'number', '`pValue` property is a boolean' );
	t.strictEqual( typeof out.statistic, 'number', '`statistic` property is a boolean' );
	t.strictEqual( isArray( out.ci ), true, '`ci` property is an array' );
	t.strictEqual( out.ci[0], NINF, 'CI lower bound is -infinity' );

	// TODO: Add test fixtures

	t.end();
});

tape( 'the function computes a two-sample two-sided z-test with a custom significance level', function test( t ) {
	var rnorm;
	var out;
	var i;
	var x;
	var y;

	rnorm = normal({
		'seed': 383
	});

	x = new Array( 100 );
	y = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = rnorm( 0.0, 1.0 );
		y[ i ] = rnorm( 3.0, 1.0 );
	}

	out = ztest2( x, y, 1.0, 1.0, {
		'alpha': 0.01
	});

	t.strictEqual( typeof out.rejected, 'boolean', '`rejected` property is a boolean' );
	t.strictEqual( out.rejected, true, 'reject null hypothesis at 1% significance level' );
	t.strictEqual( typeof out.pValue, 'number', '`pValue` property is a boolean' );
	t.strictEqual( typeof out.statistic, 'number', '`statistic` property is a boolean' );
	t.strictEqual( isArray( out.ci ), true, '`ci` property is an array' );

	// TODO: Add test fixtures

	t.end();
});

tape( 'the function correctly computes a two-sample one-sided z-test with a custom significance level', function test( t ) {
	var rnorm;
	var out;
	var i;
	var x;
	var y;

	rnorm = normal({
		'seed': 338
	});

	x = new Array( 100 );
	y = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = rnorm( 1.0, 1.0 );
		y[ i ] = rnorm( 0.0, 1.0 );
	}

	// Alternative: mu_x - mu_y > 0.0
	out = ztest2( x, y, 1.0, 1.0, {
		'alternative': 'greater',
		'alpha': 0.1
	});

	t.strictEqual( typeof out.rejected, 'boolean', '`rejected` property is a boolean' );
	t.strictEqual( out.rejected, true, 'reject null hypothesis at 10% significance level' );
	t.strictEqual( typeof out.pValue, 'number', '`pValue` property is a boolean' );
	t.strictEqual( typeof out.statistic, 'number', '`statistic` property is a boolean' );
	t.strictEqual( isArray( out.ci ), true, '`ci` property is an array' );
	t.strictEqual( out.ci[1], PINF, 'CI upper bound is +infinity' );

	// Alternative: mu_x - mu_y < 0.0
	out = ztest2( x, y, 1.0, 1.0, {
		'alternative': 'less',
		'alpha': 0.1
	});

	t.strictEqual( typeof out.rejected, 'boolean', '`rejected` property is a boolean' );
	t.strictEqual( out.rejected, false, 'fail to reject null hypothesis at 10% significance level' );
	t.strictEqual( typeof out.pValue, 'number', '`pValue` property is a boolean' );
	t.strictEqual( typeof out.statistic, 'number', '`statistic` property is a boolean' );
	t.strictEqual( isArray( out.ci ), true, '`ci` property is an array' );
	t.strictEqual( out.ci[0], NINF, 'CI lower bound is -infinity' );

	// TODO: Add test fixtures

	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of two-sample z-test', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 3, 2, 1, 5, 6, 2, 3 ];
	out = ztest2( x, y, 1.0, 2.0 );
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = ztest2( x, y, 1.0, 2.0, {
		'alternative': 'less'
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = ztest2( x, y, 1.0, 2.0, {
		'alternative': 'greater'
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4, 6, 9, 6, 4, 3 ];
	y = [ 2, 3, 2, 1, 2, 2, 1, 1 ];
	out = ztest2( x, y, 3.0, 1.0 );
	table = out.print({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4, 6, 9, 6, 4, 3 ];
	y = [ 2, 3, 2, 1, 2, 2, 1, 1 ];
	out = ztest2( x, y, 3.0, 1.0 );
	table = out.print({
		'decision': false
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ztest2( x, y, 2.0, 1.0 );
	table = out.print( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var i;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ztest2( x, y, 2.0, 1.0 );

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
	var i;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ztest2( x, y, 2.0, 1.0 );

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
	var i;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ztest2( x, y, 2.0, 1.0 );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		null,
		9.0,
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
