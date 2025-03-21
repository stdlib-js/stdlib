/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isMethodIn = require( '@stdlib/assert/is-method-in' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var ternary = require( '@stdlib/strided/base/ternary' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a factory function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.
*
* @param {Function} prng - ternary pseudorandom value generator
* @param {Function} prng.factory - method which returns a new ternary pseudorandom value generator
* @throws {TypeError} first argument must be a function
* @throws {TypeError} first argument must have a `factory` method
* @returns {Function} function which returns a function for filling strided arrays
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var triangular = require( '@stdlib/random/base/triangular' );
*
* var factory = createFactory( triangular );
* // returns <Function>
*
* var random = factory();
* // returns <Function>
*
* var out = new Float64Array( 10 );
* // returns <Float64Array>
*
* random( out.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 1 );
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var triangular = require( '@stdlib/random/base/triangular' );
*
* var factory = createFactory( triangular );
* // returns <Function>
*
* var random = factory();
* // returns <Function>
*
* var out = new Float64Array( 10 );
* // returns <Float64Array>
*
* random.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, [ 3.0 ], 0, 0, out, 1, 0 );
*/
function createFactory( prng ) {
	if ( !isFunction( prng ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', prng ) );
	}
	if ( !isMethodIn( prng, 'factory' ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have a `%s` method.', 'factory' ) );
	}
	return factory;

	/**
	* Returns a function for filling strided arrays with pseudorandom values drawn from a PRNG.
	*
	* @private
	* @param {Options} [options] - function options
	* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param {*} [options.seed] - pseudorandom value generator seed
	* @param {*} [options.state] - pseudorandom value generator state
	* @param {boolean} [options.copy] - boolean indicating whether to copy a provided pseudorandom value generator state
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {Function} function for filling strided arrays
	*/
	function factory() {
		var base;
		var opts;

		if ( arguments.length > 0 ) {
			opts = arguments[ 0 ];
			if ( !isPlainObject( opts ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
			}
			base = prng.factory( opts );
		} else {
			opts = {};
			base = prng;
		}
		if ( opts && opts.prng ) {
			setReadOnly( rand, 'seed', null );
			setReadOnly( rand, 'seedLength', null );
			setReadWriteAccessor( rand, 'state', constantFunction( null ), noop );
			setReadOnly( rand, 'stateLength', null );
			setReadOnly( rand, 'byteLength', null );
		} else {
			setReadOnlyAccessor( rand, 'seed', getSeed );
			setReadOnlyAccessor( rand, 'seedLength', getSeedLength );
			setReadWriteAccessor( rand, 'state', getState, setState );
			setReadOnlyAccessor( rand, 'stateLength', getStateLength );
			setReadOnlyAccessor( rand, 'byteLength', getStateSize );
		}
		setReadOnly( rand, 'PRNG', base.PRNG );
		setReadOnly( rand, 'ndarray', ndarray );
		return rand;

		/**
		* Fills a strided array with pseudorandom values drawn from a PRNG.
		*
		* @private
		* @param {NonNegativeInteger} N - number of indexed elements
		* @param {Collection} param1 - first PRNG parameter
		* @param {integer} sp1 - first PRNG parameter stride length
		* @param {Collection} param2 - second PRNG parameter
		* @param {integer} sp2 - second PRNG parameter stride length
		* @param {Collection} param3 - third PRNG parameter
		* @param {integer} sp3 - third PRNG parameter stride length
		* @param {Collection} out - output array
		* @param {integer} so - output array stride length
		* @returns {Collection} output array
		*/
		function rand( N, param1, sp1, param2, sp2, param3, sp3, out, so ) {
			ternary( [ param1, param2, param3, out ], [ N ], [ sp1, sp2, sp3, so ], base ); // eslint-disable-line max-len
			return out;
		}

		/**
		* Fills a strided array with pseudorandom values drawn from a PRNG using alternative indexing semantics.
		*
		* @private
		* @param {NonNegativeInteger} N - number of indexed elements
		* @param {Collection} param1 - first PRNG parameter
		* @param {integer} sp1 - first PRNG parameter stride length
		* @param {NonNegativeInteger} op1 - first PRNG parameter starting index
		* @param {Collection} param2 - second PRNG parameter
		* @param {integer} sp2 - second PRNG parameter stride length
		* @param {NonNegativeInteger} op2 - second PRNG parameter starting index
		* @param {Collection} param3 - third PRNG parameter
		* @param {integer} sp3 - third PRNG parameter stride length
		* @param {NonNegativeInteger} op3 - third PRNG parameter starting index
		* @param {Collection} out - output array
		* @param {integer} so - output array stride length
		* @param {NonNegativeInteger} oo - output array starting index
		* @returns {Collection} output array
		*/
		function ndarray( N, param1, sp1, op1, param2, sp2, op2, param3, sp3, op3, out, so, oo ) { // eslint-disable-line max-len, max-params
			ternary.ndarray( [ param1, param2, param3, out ], [ N ], [ sp1, sp2, sp3, so ], [ op1, op2, op3, oo ], base ); // eslint-disable-line max-len
			return out;
		}

		/**
		* Returns the PRNG seed.
		*
		* @private
		* @returns {*} seed
		*/
		function getSeed() {
			return rand.PRNG.seed;
		}

		/**
		* Returns the PRNG seed length.
		*
		* @private
		* @returns {PositiveInteger} seed length
		*/
		function getSeedLength() {
			return rand.PRNG.seedLength;
		}

		/**
		* Returns the PRNG state length.
		*
		* @private
		* @returns {PositiveInteger} state length
		*/
		function getStateLength() {
			return rand.PRNG.stateLength;
		}

		/**
		* Returns the PRNG state size (in bytes).
		*
		* @private
		* @returns {PositiveInteger} state size (in bytes)
		*/
		function getStateSize() {
			return rand.PRNG.byteLength;
		}

		/**
		* Returns the current pseudorandom number generator state.
		*
		* @private
		* @returns {*} current state
		*/
		function getState() {
			return rand.PRNG.state;
		}

		/**
		* Sets the pseudorandom number generator state.
		*
		* @private
		* @param {*} s - generator state
		* @throws {Error} must provide a valid state
		*/
		function setState( s ) {
			rand.PRNG.state = s;
		}
	}
}


// EXPORTS //

module.exports = createFactory;
