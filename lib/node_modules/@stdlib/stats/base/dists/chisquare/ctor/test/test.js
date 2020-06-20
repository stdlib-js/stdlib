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
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var quantile = require( '@stdlib/stats/base/dists/chisquare/quantile' );
var cdf = require( '@stdlib/stats/base/dists/chisquare/cdf' );
var mgf = require( '@stdlib/stats/base/dists/chisquare/mgf' );
var pdf = require( '@stdlib/stats/base/dists/chisquare/pdf' );
var entropy = require( '@stdlib/stats/base/dists/chisquare/entropy' );
var kurtosis = require( '@stdlib/stats/base/dists/chisquare/kurtosis' );
var skewness = require( '@stdlib/stats/base/dists/chisquare/skewness' );
var stdev = require( '@stdlib/stats/base/dists/chisquare/stdev' );
var variance = require( '@stdlib/stats/base/dists/chisquare/variance' );
var mode = require( '@stdlib/stats/base/dists/chisquare/mode' );
var median = require( '@stdlib/stats/base/dists/chisquare/median' );
var mean = require( '@stdlib/stats/base/dists/chisquare/mean' );
var ChiSquare = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ChiSquare, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `k` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		undefined,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new ChiSquare( value );
		};
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var chisquare = new ChiSquare();
	t.strictEqual( chisquare instanceof ChiSquare, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var chisquare = new ChiSquare( 2.0 );
	t.strictEqual( chisquare instanceof ChiSquare, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var chisquare = ChiSquare();
	t.strictEqual( chisquare instanceof ChiSquare, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	chisquare = ChiSquare( 2.0, 4.0 );
	t.strictEqual( chisquare instanceof ChiSquare, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `k`', function test( t ) {
	var chisquare;

	chisquare = new ChiSquare( 4.0 );
	t.strictEqual( hasOwnProp( chisquare, 'k' ), true, 'has property' );
	t.strictEqual( chisquare.k, 4.0, 'returns expected value' );

	chisquare.k = 3.0;
	t.strictEqual( chisquare.k, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `k` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		undefined,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var chisquare = new ChiSquare();
			chisquare.k = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'entropy' ), true, 'has property' );

	chisquare = new ChiSquare();
	t.strictEqual( chisquare.entropy, entropy( 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'kurtosis' ), true, 'has property' );

	chisquare = new ChiSquare( 4.5 );
	t.strictEqual( chisquare.kurtosis, kurtosis( 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'mean' ), true, 'has property' );

	chisquare = new ChiSquare( 2.0 );
	t.strictEqual( chisquare.mean, mean( 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'median' ), true, 'has property' );

	chisquare = new ChiSquare( 2.0 );
	t.strictEqual( chisquare.median, median( 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'mode' ), true, 'has property' );

	chisquare = new ChiSquare( 3.0 );
	t.strictEqual( chisquare.mode, mode( 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'skewness' ), true, 'has property' );

	chisquare = new ChiSquare( 0.5 );
	t.strictEqual( chisquare.skewness, skewness( 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'stdev' ), true, 'has property' );

	chisquare = new ChiSquare( 5.0 );
	t.strictEqual( chisquare.stdev, stdev( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var chisquare;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'variance' ), true, 'has property' );

	chisquare = new ChiSquare( 5.0 );
	t.strictEqual( chisquare.variance, variance( 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var chisquare;
	var y;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( ChiSquare.prototype.cdf ), true, 'has method' );

	chisquare = new ChiSquare();
	y = chisquare.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var chisquare;
	var y;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( ChiSquare.prototype.mgf ), true, 'has method' );

	chisquare = new ChiSquare();
	y = chisquare.mgf( 0.2 );

	t.strictEqual( y, mgf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var chisquare;
	var y;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( ChiSquare.prototype.pdf ), true, 'has method' );

	chisquare = new ChiSquare();
	y = chisquare.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var chisquare;
	var y;

	t.strictEqual( hasOwnProp( ChiSquare.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( ChiSquare.prototype.quantile ), true, 'has method' );

	chisquare = new ChiSquare();
	y = chisquare.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0 ), 'returns expected value' );
	t.end();
});
