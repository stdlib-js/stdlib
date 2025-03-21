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
var quantile = require( '@stdlib/stats/base/dists/negative-binomial/quantile' );
var cdf = require( '@stdlib/stats/base/dists/negative-binomial/cdf' );
var logpmf = require( '@stdlib/stats/base/dists/negative-binomial/logpmf' );
var mgf = require( '@stdlib/stats/base/dists/negative-binomial/mgf' );
var pmf = require( '@stdlib/stats/base/dists/negative-binomial/pmf' );
var kurtosis = require( '@stdlib/stats/base/dists/negative-binomial/kurtosis' );
var skewness = require( '@stdlib/stats/base/dists/negative-binomial/skewness' );
var variance = require( '@stdlib/stats/base/dists/negative-binomial/variance' );
var stdev = require( '@stdlib/stats/base/dists/negative-binomial/stdev' );
var mode = require( '@stdlib/stats/base/dists/negative-binomial/mode' );
var mean = require( '@stdlib/stats/base/dists/negative-binomial/mean' );
var NegativeBinomial = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof NegativeBinomial, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `r` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
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
			new NegativeBinomial( value, 0.3 );
		};
	}
});

tape( 'the function throws an error if provided a `p` argument which is not a probability', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		-0.1,
		1.1,
		5.0,
		NaN,
		true,
		false,
		void 0,
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
			new NegativeBinomial( 8, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `r` and `p`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new NegativeBinomial( 8 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var nbinomial = new NegativeBinomial();
	t.strictEqual( nbinomial instanceof NegativeBinomial, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var nbinomial = new NegativeBinomial( 4.0, 0.5 );
	t.strictEqual( nbinomial instanceof NegativeBinomial, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var nbinomial = NegativeBinomial();
	t.strictEqual( nbinomial instanceof NegativeBinomial, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	nbinomial = NegativeBinomial( 4.0, 0.5 );
	t.strictEqual( nbinomial instanceof NegativeBinomial, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `r`', function test( t ) {
	var nbinomial;

	nbinomial = new NegativeBinomial( 2.0, 0.4 );
	t.strictEqual( hasOwnProp( nbinomial, 'r' ), true, 'has property' );
	t.strictEqual( nbinomial.r, 2.0, 'returns expected value' );

	nbinomial.r = 9.0;
	t.strictEqual( nbinomial.r, 9.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `r` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
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
			var nbinomial = new NegativeBinomial();
			nbinomial.r = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `p`', function test( t ) {
	var nbinomial;

	nbinomial = new NegativeBinomial( 10.0, 0.4 );
	t.strictEqual( hasOwnProp( nbinomial, 'p' ), true, 'has property' );
	t.strictEqual( nbinomial.p, 0.4, 'returns expected value' );

	nbinomial.p = 0.8;
	t.strictEqual( nbinomial.p, 0.8, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `p` to a value which is not a probability', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		-0.1,
		1.1,
		5.0,
		NaN,
		true,
		false,
		void 0,
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
			var nbinomial = new NegativeBinomial();
			nbinomial.p = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var nbinomial;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'kurtosis' ), true, 'has property' );

	nbinomial = new NegativeBinomial( 8.0, 0.4 );
	t.strictEqual( nbinomial.kurtosis, kurtosis( 8.0, 0.4 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var nbinomial;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'mean' ), true, 'has property' );

	nbinomial = new NegativeBinomial( 2.0, 0.9 );
	t.strictEqual( nbinomial.mean, mean( 2.0, 0.9 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var nbinomial;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'mode' ), true, 'has property' );

	nbinomial = new NegativeBinomial( 3.0, 0.4 );
	t.strictEqual( nbinomial.mode, mode( 3.0, 0.4 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var nbinomial;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'skewness' ), true, 'has property' );

	nbinomial = new NegativeBinomial( 9.0, 0.3 );
	t.strictEqual( nbinomial.skewness, skewness( 9.0, 0.3 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var nbinomial;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'stdev' ), true, 'has property' );

	nbinomial = new NegativeBinomial( 5.0, 0.8 );
	t.strictEqual( nbinomial.stdev, stdev( 5.0, 0.8 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var nbinomial;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'variance' ), true, 'has property' );

	nbinomial = new NegativeBinomial( 5.0, 0.8 );
	t.strictEqual( nbinomial.variance, variance( 5.0, 0.8 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var nbinomial;
	var y;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( NegativeBinomial.prototype.cdf ), true, 'has method' );

	nbinomial = new NegativeBinomial();
	y = nbinomial.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability mass function (PMF)', function test( t ) {
	var nbinomial;
	var y;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'logpmf' ), true, 'has property' );
	t.strictEqual( isFunction( NegativeBinomial.prototype.logpmf ), true, 'has method' );

	nbinomial = new NegativeBinomial();
	y = nbinomial.logpmf( 0.0 );

	t.strictEqual( y, logpmf( 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var nbinomial;
	var y;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( NegativeBinomial.prototype.mgf ), true, 'has method' );

	nbinomial = new NegativeBinomial();
	y = nbinomial.mgf( 0.1 );

	t.strictEqual( y, mgf( 0.1, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability mass function (PMF)', function test( t ) {
	var nbinomial;
	var y;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'pmf' ), true, 'has property' );
	t.strictEqual( isFunction( NegativeBinomial.prototype.pmf ), true, 'has method' );

	nbinomial = new NegativeBinomial();
	y = nbinomial.pmf( 0.0 );

	t.strictEqual( y, pmf( 0.0, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var nbinomial;
	var y;

	t.strictEqual( hasOwnProp( NegativeBinomial.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( NegativeBinomial.prototype.quantile ), true, 'has method' );

	nbinomial = new NegativeBinomial();
	y = nbinomial.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 0.5 ), 'returns expected value' );
	t.end();
});
