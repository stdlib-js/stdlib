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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isArrayLike = require( '@stdlib/assert/is-array-like' );
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var randu = require( '@stdlib/random/base/mt19937' ).factory;
var copy = require( '@stdlib/utils/copy' );
var discreteUniform = require( './discrete_uniform.js' );
var renormalizing = require( './renormalizing.js' );
var fisherYates = require( './fisher_yates.js' );
var vose = require( './vose.js' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// FUNCTIONS //

var slice = Array.prototype.slice;


// MAIN //

/**
* Returns a function to sample elements from an array-like object.
*
* @param {(ArrayLike|TypedArrayLike)} [pool] - array-like object from which to sample
* @param {Options} [options] - function options
* @param {PositiveInteger} [options.seed] - integer-valued seed
* @param {NonNegativeInteger} [options.size] - sample size
* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
* @param {boolean} [options.mutate=false] - boolean indicating whether to mutate the `pool` when sampling without replacement
* @throws {TypeError} `pool` must be an array-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function to sample elements from an array-like object
*
* @example
* var sample = factory({
*     'seed': 232
* });
* var out = sample( 'abcdefg' );
* // e.g., returns [ 'g', 'd', 'g', 'f', 'c', 'e', 'f' ]
*
* @example
* var sample = factory( [ 1, 2, 3, 4, 5, 6 ], {
*     'seed': 232,
*     'size': 2
* });
* var out = sample();
* // e.g., returns [ 6, 4 ]
*
* out = sample();
* // e.g., returns [ 6, 5 ]
*
* @example
* var sample = factory( [ 1, 2, 3, 4, 5, 6 ], {
*     'seed': 474,
*     'size': 3,
*     'mutate': true,
*     'replace': false
* });
* var out = sample();
* // e.g., returns [ 4, 3, 6 ]
*
* out = sample();
* // e.g., returns [ 1, 5, 2 ]
*
* out = sample();
* // returns null
*
* @example
* var sample = factory( [ 0, 1 ], {
*     'size': 2
* });
*
* var out = sample();
* // e.g., returns [ 1, 1 ]
*
* out = sample({
*     'size': 10
* });
* // e.g., returns [ 0, 1, 1, 1, 0, 1, 0, 0, 1, 1 ]
*
* @example
* var sample = factory( [ 0, 1 ], {
*     'size': 2
* });
*
* var out = sample();
* // e.g., returns [ 1, 1 ]
*
* out = sample({
*     'replace': false
* });
* // e.g., returns [ 0, 1 ] or [ 1, 0 ]
*
* out = sample();
* // e.g., returns [ 1, 1 ]
*
* @example
* var sample = factory( [ 0, 1 ], {
*     'size': 2,
*     'mutate': true
* });
*
* var out = sample();
* // e.g., returns [ 1, 1 ]
*
* out = sample({
*     'replace': false
* });
* // e.g., returns [ 0, 1 ] or [ 1, 0 ]
*
* out = sample();
* // returns null
*/
function factory() {
	var config;
	var pool;
	var conf;
	var rand;
	var err;
	var fcn;

	conf = copy( defaults );
	if ( arguments.length === 1 ) {
		if ( isArrayLike( arguments[ 0 ] ) || isTypedArrayLike( arguments[ 0 ] ) ) { // eslint-disable-line max-len
			pool = arguments[ 0 ];
		} else {
			config = arguments[ 0 ];
			err = validate( conf, config );
		}
	} else if ( arguments.length > 1 ) {
		pool = arguments[ 0 ];
		config = arguments[ 1 ];
		if ( !( isArrayLike( pool ) || isTypedArrayLike( pool ) ) ) {
			throw new TypeError( 'invalid argument. `pool` argument must be array-like. Value: `' + pool + '`.' );
		}
		err = validate( conf, config );
	}
	if ( err ) {
		throw err;
	}
	if ( config && config.seed ) {
		rand = randu({
			'seed': config.seed
		});
	} else {
		rand = randu();
	}
	if ( pool === void 0 ) {
		fcn = sample1;
	} else {
		if ( isString( pool ) ) {
			pool = pool.split( '' );
		} else {
			pool = copy( pool );
		}
		fcn = sample2;
	}
	setReadOnly( fcn, 'seed', rand.seed );
	setReadOnly( fcn, 'PRNG', rand );

	rand = rand.normalized;

	return fcn;

	/**
	* Samples elements from an array-like object.
	*
	* @private
	* @param {(ArrayLike|TypedArrayLike)} x - array-like object from which to sample elements
	* @param {Options} [options] - function options
	* @param {NonNegativeInteger} [options.size] - sample size
	* @param {ProbabilityArray} [options.probs] - element probabilities
	* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
	* @throws {TypeError} first argument must be array-like
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {RangeError} `size` option must be less than or equal to the length of `x` when the `replace` option is `false`
	* @returns {Array} sample
	*/
	function sample1( x, options ) {
		var replace;
		var xcopy;
		var probs;
		var opts;
		var size;
		var err;

		if ( !( isArrayLike( x ) || isTypedArrayLike( x ) ) ) {
			throw new TypeError( 'invalid argument. First argument must be array-like. Value: `' + x + '`.' );
		}
		if ( isString( x ) ) {
			x = x.split( '' );
		}
		opts = {};
		if ( arguments.length > 1 ) {
			err = validate( opts, options );
			if ( err ) {
				throw err;
			}
		}
		if ( opts.replace === void 0 ) {
			replace = conf.replace;
		} else {
			replace = opts.replace;
		}
		if ( opts.probs !== void 0 ) {
			probs = opts.probs;
		}
		if ( opts.size ) {
			size = opts.size;
		} else if ( conf.size ) {
			size = conf.size;
		} else {
			size = x.length;
		}
		if (
			replace === false &&
			size > x.length
		) {
			throw new RangeError( 'invalid input option. `size` option must be less than or equal to the length of `x` when `replace` is `false`. Option: `' + size + '`.' );
		}
		// Custom probabilities...
		if ( probs ) {
			if ( replace ) {
				return vose( x, size, rand, probs );
			}
			return renormalizing( x, size, rand, probs );
		}
		// All elements equally likely...
		if ( replace ) {
			return discreteUniform( x, size, rand );
		}
		xcopy = slice.call( x );
		return fisherYates( xcopy, size, rand );
	}

	/**
	* Samples elements from a population.
	*
	* @private
	* @param {Options} [options] - function options
	* @param {NonNegativeInteger} [options.size] - sample size
	* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
	* @param {boolean} [options.mutate=false] - boolean indicating whether to mutate the `pool` when sampling without replacement
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {RangeError} `size` option must be less than or equal to the population when the `replace` option is `false`
	* @returns {Array} sample
	*/
	function sample2( options ) {
		var replace;
		var mutate;
		var opts;
		var size;
		var err;
		var out;

		if ( pool.length === 0 ) {
			return null;
		}
		opts = {};
		if ( arguments.length ) {
			err = validate( opts, options );
			if ( err ) {
				throw err;
			}
		}
		if ( opts.mutate === void 0 ) {
			mutate = conf.mutate;
		} else {
			mutate = opts.mutate;
		}
		if ( opts.replace === void 0 ) {
			replace = conf.replace;
		} else {
			replace = opts.replace;
		}
		if ( opts.size ) {
			size = opts.size;
		} else if ( conf.size ) {
			size = conf.size;
		} else {
			size = pool.length;
		}
		if (
			replace === false &&
			size > pool.length
		) {
			throw new RangeError( 'invalid input option. `size` option must be less than or equal to the population size when `replace` is `false`. Option: `' + size + '`.' );
		}
		if ( replace ) {
			return discreteUniform( pool, size, rand );
		}
		out = fisherYates( pool, size, rand );
		if ( mutate ) {
			// Remove the sample observations:
			pool = pool.slice( size, pool.length );
		}
		return out;
	}
}


// EXPORTS //

module.exports = factory;
