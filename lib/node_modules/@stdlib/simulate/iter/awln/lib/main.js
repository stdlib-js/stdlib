/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var noop = require( '@stdlib/utils/noop' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var laplace = require( '@stdlib/random/base/laplace' ).factory;
var format = require( '@stdlib/string/format' );
var SQRT_TWO = require( '@stdlib/constants/float64/sqrt-two' );
var defaults = require( './defaults.js' );


// MAIN //

/**
* Returns an iterator which introduces additive white Laplacian noise with standard deviation `sigma`.
*
* ## Method
*
* -   The variance of a Laplace (biexponential or double-exponential) distribution is given by
*
*     ```tex
*     \operatorname{Var} = 2b^2
*     ```
*
*     where \\( b \\) is the distribution scale parameter.
*
* -   Accordingly, the standard deviation is then
*
*     ```tex
*     \sigma = b\sqrt{2}
*     ```
*
* -   Solving for \\( b \\), we derive the parameter transform necessary for generating a Laplacian random variable with standard deviation \\( \sigma \\)
*
*     ```tex
*     b = \frac{\sigma}{\sqrt{2}}
*     ```
*
* @param {Iterator} iterator - input iterator
* @param {PositiveNumber} sigma - standard deviation of the noise
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers on the interval `[0,1)`
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be a positive number
* @throws {TypeError} third argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Iterator} iterator
*
* @example
* var iterSineWave = require( '@stdlib/simulate/iter/sine-wave' );
*
* var sine = iterSineWave({
*     'iter': 100
* });
*
* var it = iterawln( sine, 0.5 );
*
* var v = it.next().value;
* // returns <number>
*
* v = it.next().value;
* // returns <number>
*
* v = it.next().value;
* // returns <number>
*
* // ...
*/
function iterawln( iterator, sigma, options ) {
	var rlaplace;
	var opts;
	var iter;
	var FLG;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an iterator. Value: `%s`.', iterator ) );
	}
	if ( !isPositiveNumber( sigma ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a positive number. Value: `%s`.', sigma ) );
	}
	opts = defaults();
	if ( arguments.length > 2 ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'copy' ) ) {
			opts.copy = options.copy;
			if ( !isBoolean( options.copy ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'copy', options.copy ) );
			}
		}
		if ( hasOwnProp( options, 'prng' ) ) {
			if ( !isFunction( options.prng ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', options.prng ) );
			}
			opts.prng = options.prng;
		}
		// If provided a PRNG, ignore the `state` option, as we don't support getting or setting PRNG state.
		else if ( hasOwnProp( options, 'state' ) ) {
			opts.state = options.state;
			if ( !isUint32Array( options.state ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a Uint32Array. Option: `%s`.', 'state', options.state ) );
			}
		}
		// If provided a PRNG, ignore the `seed` option, as a `seed`, by itself, is insufficient to guarantee reproducibility. If provided a state, ignore the `seed` option, as a PRNG state should contain seed information.
		else if ( hasOwnProp( options, 'seed' ) ) {
			opts.seed = options.seed;
			if ( options.seed === void 0 ) {
				throw new TypeError( format( 'invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.', 'seed', options.seed ) );
			}
		}
	}
	rlaplace = laplace( 0.0, sigma/SQRT_TWO, opts );

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and the provided iterator is iterable, make the iterator iterable:
	if ( iteratorSymbol && isFunction( iterator[ iteratorSymbol ] ) ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
	if ( options && options.prng ) {
		setReadOnly( iter, 'seed', null );
		setReadOnly( iter, 'seedLength', null );
		setReadWriteAccessor( iter, 'state', constantFunction( null ), noop );
		setReadOnly( iter, 'stateLength', null );
		setReadOnly( iter, 'byteLength', null );
		setReadOnly( iter, 'PRNG', options.prng );
	} else {
		setReadOnlyAccessor( iter, 'seed', getSeed );
		setReadOnlyAccessor( iter, 'seedLength', getSeedLength );
		setReadWriteAccessor( iter, 'state', getState, setState );
		setReadOnlyAccessor( iter, 'stateLength', getStateLength );
		setReadOnlyAccessor( iter, 'byteLength', getStateSize );
		setReadOnly( iter, 'PRNG', rlaplace.PRNG );
	}
	return iter;

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
	*/
	function getSeed() {
		return rlaplace.seed;
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return rlaplace.seedLength;
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return rlaplace.stateLength;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return rlaplace.byteLength;
	}

	/**
	* Returns the current PRNG state.
	*
	* @private
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		return rlaplace.state;
	}

	/**
	* Sets the PRNG state.
	*
	* @private
	* @param {PRNGStateMT19937} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rlaplace.state = s;
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var v;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = true;
			return v;
		}
		if ( typeof v.value === 'number' ) {
			v = v.value + rlaplace();
		} else {
			v = NaN;
		}
		return {
			'value': v,
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return iterawln( iterator[ iteratorSymbol ](), sigma, opts );
	}
}


// EXPORTS //

module.exports = iterawln;
