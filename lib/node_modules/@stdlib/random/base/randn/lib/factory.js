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
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var noop = require( '@stdlib/utils/noop' );
var typedarray2json = require( '@stdlib/array/to-json' );
var defaults = require( './defaults.json' );
var PRNGS = require( './prngs.js' );


// MAIN //

/**
* Returns a pseudorandom number generator for numbers from a standard normal distribution.
*
* @param {Options} [options] - function options
* @param {string} [options.name='improved-ziggurat'] - name of pseudorandom number generator
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {*} [options.seed] - pseudorandom number generator seed
* @param {*} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} must provide an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide the name of a supported pseudorandom number generator
* @returns {PRNG} pseudorandom number generator
*
* @example
* var randn = factory();
*
* var v = randn();
* // returns <number>
*
* @example
* var randn = factory({
*     'name': 'box-muller'
* });
* var v = randn();
* // returns <number>
*
* @example
* var randn = factory({
*     'seed': 12345
* });
* var v = randn();
* // returns <number>
*
* @example
* var randn = factory({
*     'name': 'box-muller',
*     'seed': 12345
* });
* var v = randn();
* // returns <number>
*/
function factory( options ) {
	var opts;
	var rand;
	var prng;

	opts = {
		'name': defaults.name,
		'copy': defaults.copy
	};
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Must provide an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'name' ) ) {
			opts.name = options.name;
		}
		if ( hasOwnProp( options, 'prng' ) ) {
			opts.prng = options.prng;
			if ( opts.prng === void 0 ) {
				throw new TypeError( 'invalid option. `prng` option cannot be undefined. Option: `' + opts.prng + '`.' );
			}
		} else if ( hasOwnProp( options, 'state' ) ) {
			opts.state = options.state;
			if ( opts.state === void 0 ) {
				throw new TypeError( 'invalid option. `state` option cannot be undefined. Option: `' + opts.state + '`.' );
			}
		} else if ( hasOwnProp( options, 'seed' ) ) {
			opts.seed = options.seed;
			if ( opts.seed === void 0 ) {
				throw new TypeError( 'invalid option. `seed` option cannot be undefined. Option: `' + opts.seed + '`.' );
			}
		}
		if ( hasOwnProp( options, 'copy' ) ) {
			opts.copy = options.copy;
			if ( !isBoolean( opts.copy ) ) {
				throw new TypeError( 'invalid option. `copy` option must be a boolean. Option: `' + opts.copy + '`.' );
			}
		}
	}
	prng = PRNGS[ opts.name ];
	if ( prng === void 0 ) {
		throw new Error( 'invalid option. Unrecognized/unsupported PRNG. Option: `' + opts.name + '`.' );
	}
	if ( opts.prng === void 0 ) {
		if ( opts.state === void 0 ) {
			if ( opts.seed === void 0 ) {
				rand = prng.factory();
			} else {
				rand = prng.factory({
					'seed': opts.seed
				});
			}
		} else {
			rand = prng.factory({
				'state': opts.state,
				'copy': opts.copy
			});
		}
	} else {
		rand = prng.factory({
			'prng': opts.prng
		});
	}
	setReadOnly( normal, 'NAME', 'randn' );

	// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
	if ( opts.prng ) {
		setReadOnly( normal, 'seed', null );
		setReadOnly( normal, 'seedLength', null );
		setReadWriteAccessor( normal, 'state', constantFunction( null ), noop );
		setReadOnly( normal, 'stateLength', null );
		setReadOnly( normal, 'byteLength', null );
		setReadOnly( normal, 'toJSON', constantFunction( null ) );
	} else {
		setReadOnlyAccessor( normal, 'seed', getSeed );
		setReadOnlyAccessor( normal, 'seedLength', getSeedLength );
		setReadWriteAccessor( normal, 'state', getState, setState );
		setReadOnlyAccessor( normal, 'stateLength', getStateLength );
		setReadOnlyAccessor( normal, 'byteLength', getStateSize );
		setReadOnly( normal, 'toJSON', toJSON );
	}
	setReadOnly( normal, 'PRNG', rand.PRNG );
	return normal;

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {*} seed
	*/
	function getSeed() {
		return rand.seed;
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return rand.seedLength;
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return rand.stateLength;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return rand.byteLength;
	}

	/**
	* Returns the current pseudorandom number generator state.
	*
	* @private
	* @returns {*} current state
	*/
	function getState() {
		return rand.state;
	}

	/**
	* Sets the pseudorandom number generator state.
	*
	* @private
	* @param {*} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rand.state = s;
	}

	/**
	* Serializes the pseudorandom number generator as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
	*
	* @private
	* @returns {Object} JSON representation
	*/
	function toJSON() {
		var out = {};
		out.type = 'PRNG';
		out.name = normal.NAME + '-' + rand.NAME;
		out.state = typedarray2json( rand.state );
		out.params = [];
		return out;
	}

	/**
	* Returns a pseudorandom number drawn from a standard normal distribution.
	*
	* @private
	* @returns {number} pseudorandom number
	*
	* @example
	* var v = normal();
	* // returns <number>
	*/
	function normal() {
		return rand();
	}
}


// EXPORTS //

module.exports = factory;
