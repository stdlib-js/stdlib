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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isProbability = require( '@stdlib/assert/is-probability' ).isPrimitive;
var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var kurtosis = require( '@stdlib/stats/base/dists/negative-binomial/kurtosis' );
var mean = require( '@stdlib/stats/base/dists/negative-binomial/mean' );
var mode = require( '@stdlib/stats/base/dists/negative-binomial/mode' );
var skewness = require( '@stdlib/stats/base/dists/negative-binomial/skewness' );
var stdev = require( '@stdlib/stats/base/dists/negative-binomial/stdev' );
var variance = require( '@stdlib/stats/base/dists/negative-binomial/variance' );
var cdf = require( '@stdlib/stats/base/dists/negative-binomial/cdf' );
var logpmf = require( '@stdlib/stats/base/dists/negative-binomial/logpmf' );
var mgf = require( '@stdlib/stats/base/dists/negative-binomial/mgf' );
var pmf = require( '@stdlib/stats/base/dists/negative-binomial/pmf' );
var quantile = require( '@stdlib/stats/base/dists/negative-binomial/quantile' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function negativeBinomialCDF( x ) {
	return cdf( x, this.r, this.p );
}

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPMF
*/
function negativeBinomialLogPMF( x ) {
	return logpmf( x, this.r, this.p );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function negativeBinomialMGF( t ) {
	return mgf( t, this.r, this.p );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PMF
*/
function negativeBinomialPMF( x ) {
	return pmf( x, this.r, this.p );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function negativeBinomialQuantile( p ) {
	return quantile( p, this.r, this.p );
}


// MAIN //

/**
* Negative binomial distribution constructor.
*
* @constructor
* @param {PositiveNumber} [r=1.0] - number of successes until experiment is stopped
* @param {Probability} [p=0.5] - success probability
* @throws {TypeError} `r` must be a positive number
* @throws {TypeError} `p` must be a number between 0 and 1
* @returns {NegativeBinomial} distribution instance
*
* @example
* var nbinomial = new NegativeBinomial( 5.0, 0.1 );
*
* var y = nbinomial.cdf( 10.0 );
* // returns ~0.013
*
* var v = nbinomial.mode;
* // returns 36.0
*/
function NegativeBinomial() {
	var r;
	var p;
	if ( !(this instanceof NegativeBinomial) ) {
		if ( arguments.length === 0 ) {
			return new NegativeBinomial();
		}
		return new NegativeBinomial( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		r = arguments[ 0 ];
		p = arguments[ 1 ];
		if ( !isPositive( r ) ) {
			throw new TypeError( format( 'invalid argument. Number of trials until experiment is stopped must be a positive number. Value: `%s`.', r ) );
		}
		if ( !isProbability( p ) ) {
			throw new TypeError( format( 'invalid argument. Success probability must be a number between 0 and 1. Value: `%s`.', p ) );
		}
	} else {
		r = 1.0;
		p = 0.5;
	}
	defineProperty( this, 'r', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return r;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			r = value;
		}
	});
	defineProperty( this, 'p', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return p;
		},
		'set': function set( value ) {
			if ( !isProbability( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number on the interval: [0, 1]. Value: `%s`.', value ) );
			}
			p = value;
		}
	});
	return this;
}

/**
* Negative binomial distribution excess kurtosis.
*
* @name kurtosis
* @memberof NegativeBinomial.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var nbinomial = new NegativeBinomial( 12.0, 0.4 );
*
* var v = nbinomial.kurtosis;
* // returns ~0.522
*/
setReadOnlyAccessor( NegativeBinomial.prototype, 'kurtosis', function get() {
	return kurtosis( this.r, this.p );
});

/**
* Negative binomial distribution expected value.
*
* @name mean
* @memberof NegativeBinomial.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var nbinomial = new NegativeBinomial( 12.0, 0.4 );
*
* var v = nbinomial.mean;
* // returns ~18.0
*/
setReadOnlyAccessor( NegativeBinomial.prototype, 'mean', function get() {
	return mean( this.r, this.p );
});

/**
* Negative binomial distribution mode.
*
* @name mode
* @memberof NegativeBinomial.prototype
* @type {NonNegativeInteger}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var nbinomial = new NegativeBinomial( 12.0, 0.4 );
*
* var v = nbinomial.mode;
* // returns 16.0
*/
setReadOnlyAccessor( NegativeBinomial.prototype, 'mode', function get() {
	return mode( this.r, this.p );
});

/**
* Negative binomial distribution skewness.
*
* @name skewness
* @memberof NegativeBinomial.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var nbinomial = new NegativeBinomial( 12.0, 0.4 );
*
* var v = nbinomial.skewness;
* // returns ~0.596
*/
setReadOnlyAccessor( NegativeBinomial.prototype, 'skewness', function get() {
	return skewness( this.r, this.p );
});

/**
* Negative binomial distribution standard deviation.
*
* @name stdev
* @memberof NegativeBinomial.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var nbinomial = new NegativeBinomial( 12.0, 0.4 );
*
* var v = nbinomial.stdev;
* // returns ~6.708
*/
setReadOnlyAccessor( NegativeBinomial.prototype, 'stdev', function get() {
	return stdev( this.r, this.p );
});

/**
* Negative binomial distribution variance.
*
* @name variance
* @memberof NegativeBinomial.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var nbinomial = new NegativeBinomial( 12.0, 0.4 );
*
* var v = nbinomial.variance;
* // returns ~45.0
*/
setReadOnlyAccessor( NegativeBinomial.prototype, 'variance', function get() {
	return variance( this.r, this.p );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof NegativeBinomial.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var nbinomial = new NegativeBinomial( 4.0, 0.2 );
*
* var v = nbinomial.cdf( 3.0 );
* // returns ~0.033
*/
setReadOnly( NegativeBinomial.prototype, 'cdf', negativeBinomialCDF );

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @name logpmf
* @memberof NegativeBinomial.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var nbinomial = new NegativeBinomial( 4.0, 0.2 );
*
* var v = nbinomial.logpmf( 9.0 );
* // returns ~-3.052
*/
setReadOnly( NegativeBinomial.prototype, 'logpmf', negativeBinomialLogPMF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof NegativeBinomial.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var nbinomial = new NegativeBinomial( 4.0, 0.2 );
*
* var v = nbinomial.mgf( 0.1 );
* // returns ~1.66
*/
setReadOnly( NegativeBinomial.prototype, 'mgf', negativeBinomialMGF );

/**
* Evaluates the probability mass function (PMF).
*
* @name pmf
* @memberof NegativeBinomial.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var nbinomial = new NegativeBinomial( 4.0, 0.2 );
*
* var v = nbinomial.pmf( 9.0 );
* // returns ~0.047
*/
setReadOnly( NegativeBinomial.prototype, 'pmf', negativeBinomialPMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof NegativeBinomial.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var nbinomial = new NegativeBinomial( 4.0, 0.2 );
*
* var v = nbinomial.quantile( 0.5 );
* // returns 15.0
*/
setReadOnly( NegativeBinomial.prototype, 'quantile', negativeBinomialQuantile );


// EXPORTS //

module.exports = NegativeBinomial;
