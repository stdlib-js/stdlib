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

/* eslint-disable max-len */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var floor = require( '@stdlib/math/base/special/floor' );
var Int32Array = require( '@stdlib/array/int32' );
var INT32_MAX = require( '@stdlib/constants/int32/max' );
var typedarray2json = require( '@stdlib/array/to-json' );
var createTable = require( './create_table.js' );
var randint32 = require( './rand_int32.js' );


// VARIABLES //

var NORMALIZATION_CONSTANT = (INT32_MAX - 1)|0; // asm type annotation
var MAX_SEED = (INT32_MAX - 1)|0; // asm type annotation
var A = 16807|0; // asm type annotation

// Define the number of elements in the shuffle table:
var TABLE_LENGTH = 32;

// Define the state array schema version:
var STATE_ARRAY_VERSION = 1; // NOTE: anytime the state array schema changes, this value should be incremented!!!

// Define the number of sections in the state array:
var NUM_STATE_SECTIONS = 3; // table, other, seed

// Define the index offset of the "table" section in the state array:
var TABLE_SECTION_OFFSET = 2; // | version | num_sections | table_length | ...table | other_length | shuffle_state | prng_state | seed_length | ...seed |

// Define the index offset of the "state" section in the state array:
var STATE_SECTION_OFFSET = TABLE_LENGTH + 3; // | version | num_sections | table_length | ...table | state_length | shuffle_state | prng_state | seed_length | ...seed |

// Define the index offset of the seed section in the state array:
var SEED_SECTION_OFFSET = TABLE_LENGTH + 6; // | version | num_sections | table_length | ...table | state_length | shuffle_state | prng_state | seed_length | ...seed |

// Define the length of the "fixed" length portion of the state array:
var STATE_FIXED_LENGTH = TABLE_LENGTH + 7; // 1 (version) + 1 (num_sections) + 1 (table_length) + TABLE_LENGTH (table) + 1 (state_length) + 1 (shuffle_state) + 1 (prng_state) + 1 (seed_length)

// Define the indices for the shuffle table and PRNG states:
var SHUFFLE_STATE = STATE_SECTION_OFFSET + 1;
var PRNG_STATE = STATE_SECTION_OFFSET + 2;


// FUNCTIONS //

/**
* Verifies state array integrity.
*
* @private
* @param {Int32Array} state - state array
* @param {boolean} FLG - flag indicating whether the state array was provided as an option (true) or an argument (false)
* @returns {(Error|null)} an error or `null`
*/
function verifyState( state, FLG ) {
	var s1;
	if ( FLG ) {
		s1 = 'option';
	} else {
		s1 = 'argument';
	}
	// The state array must have a minimum length...
	if ( state.length < STATE_FIXED_LENGTH+1 ) {
		return new RangeError( 'invalid '+s1+'. `state` array has insufficient length.' );
	}
	// The first element of the state array must equal the supported state array schema version...
	if ( state[ 0 ] !== STATE_ARRAY_VERSION ) {
		return new RangeError( 'invalid '+s1+'. `state` array has an incompatible schema version. Expected: '+STATE_ARRAY_VERSION+'. Actual: '+state[ 0 ]+'.' );
	}
	// The second element of the state array must contain the number of sections...
	if ( state[ 1 ] !== NUM_STATE_SECTIONS ) {
		return new RangeError( 'invalid '+s1+'. `state` array has an incompatible number of sections. Expected: '+NUM_STATE_SECTIONS+'. Actual: '+state[ 1 ]+'.' );
	}
	// The length of the "table" section must equal `TABLE_LENGTH`...
	if ( state[ TABLE_SECTION_OFFSET ] !== TABLE_LENGTH ) {
		return new RangeError( 'invalid '+s1+'. `state` array has an incompatible table length. Expected: '+TABLE_LENGTH+'. Actual: '+state[ TABLE_SECTION_OFFSET ]+'.' );
	}
	// The length of the "state" section must equal `2`...
	if ( state[ STATE_SECTION_OFFSET ] !== 2 ) {
		return new RangeError( 'invalid '+s1+'. `state` array has an incompatible state length. Expected: '+(2).toString()+'. Actual: '+state[ STATE_SECTION_OFFSET ]+'.' );
	}
	// The length of the "seed" section much match the empirical length...
	if ( state[ SEED_SECTION_OFFSET ] !== state.length-STATE_FIXED_LENGTH ) {
		return new RangeError( 'invalid '+s1+'. `state` array length is incompatible with seed section length. Expected: '+(state.length-STATE_FIXED_LENGTH)+'. Actual: '+state[ SEED_SECTION_OFFSET ]+'.' );
	}
	return null;
}


// MAIN //

/**
* Returns a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
*
* @param {Options} [options] - options
* @param {PRNGSeedMINSTD} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMINSTD} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} options argument must be an object
* @throws {TypeError} a seed must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integers less than the maximum signed 32-bit integer
* @throws {RangeError} a numeric seed must be a positive integer less than the maximum signed 32-bit integer
* @throws {TypeError} state must be an `Int32Array`
* @throws {Error} must provide a valid state
* @throws {TypeError} `copy` option must be a boolean
* @returns {PRNG} shuffled LCG PRNG
*
* @example
* var minstd = factory();
*
* var v = minstd();
* // returns <number>
*
* @example
* // Return a seeded LCG:
* var minstd = factory({
*     'seed': 1234
* });
*
* var v = minstd();
* // returns 1421600654
*/
function factory( options ) {
	var STATE;
	var state;
	var opts;
	var seed;
	var slen;
	var err;

	opts = {};
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'copy' ) ) {
			opts.copy = options.copy;
			if ( !isBoolean( options.copy ) ) {
				throw new TypeError( 'invalid option. `copy` option must be a boolean. Option: `' + options.copy + '`.' );
			}
		}
		if ( hasOwnProp( options, 'state' ) ) {
			state = options.state;
			opts.state = true;
			if ( !isInt32Array( state ) ) {
				throw new TypeError( 'invalid option. `state` option must be an Int32Array. Option: `' + state + '`.' );
			}
			err = verifyState( state, true );
			if ( err ) {
				throw err;
			}
			if ( opts.copy === false ) {
				STATE = state;
			} else {
				STATE = new Int32Array( state.length );
				gcopy( state.length, state, 1, STATE, 1 );
			}
			// Create a state (table) "view":
			state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );

			// Create a seed "view":
			seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), state[ SEED_SECTION_OFFSET ] );
		}
		// If provided a PRNG state, we ignore the `seed` option...
		if ( seed === void 0 ) {
			if ( hasOwnProp( options, 'seed' ) ) {
				seed = options.seed;
				opts.seed = true;
				if ( isPositiveInteger( seed ) ) {
					if ( seed > MAX_SEED ) {
						throw new RangeError( 'invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `' + seed + '`.' );
					}
					seed |= 0; // asm type annotation
				} else if ( isCollection( seed ) && seed.length > 0 ) {
					slen = seed.length;
					STATE = new Int32Array( STATE_FIXED_LENGTH+slen );

					// Initialize sections:
					STATE[ 0 ] = STATE_ARRAY_VERSION;
					STATE[ 1 ] = NUM_STATE_SECTIONS;
					STATE[ TABLE_SECTION_OFFSET ] = TABLE_LENGTH;
					STATE[ STATE_SECTION_OFFSET ] = 2;
					STATE[ PRNG_STATE ] = seed[ 0 ];
					STATE[ SEED_SECTION_OFFSET ] = slen;

					// Copy the provided seed array to prevent external mutation, as mutation would lead to an inability to reproduce PRNG values according to the PRNG's stated seed:
					gcopy.ndarray( slen, seed, 1, 0, STATE, 1, SEED_SECTION_OFFSET+1 );

					// Create a state (table) "view":
					state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );

					// Create a seed "view":
					seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), slen );

					// Initialize the internal PRNG state:
					state = createTable( minstd, state, TABLE_LENGTH );
					STATE[ SHUFFLE_STATE ] = state[ 0 ];
				} else {
					throw new TypeError( 'invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `' + seed + '`.' );
				}
			} else {
				seed = randint32()|0; // asm type annotation
			}
		}
	} else {
		seed = randint32()|0; // asm type annotation
	}
	if ( state === void 0 ) {
		STATE = new Int32Array( STATE_FIXED_LENGTH+1 );

		// Initialize sections:
		STATE[ 0 ] = STATE_ARRAY_VERSION;
		STATE[ 1 ] = NUM_STATE_SECTIONS;
		STATE[ TABLE_SECTION_OFFSET ] = TABLE_LENGTH;
		STATE[ STATE_SECTION_OFFSET ] = 2;
		STATE[ PRNG_STATE ] = seed;
		STATE[ SEED_SECTION_OFFSET ] = 1;
		STATE[ SEED_SECTION_OFFSET+1 ] = seed;

		// Create a state (table) "view":
		state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );

		// Create a seed "view":
		seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );

		// Initialize the internal PRNG state:
		state = createTable( minstd, state, TABLE_LENGTH );
		STATE[ SHUFFLE_STATE ] = state[ 0 ];
	}
	setReadOnly( minstdShuffle, 'NAME', 'minstd-shuffle' );
	setReadOnlyAccessor( minstdShuffle, 'seed', getSeed );
	setReadOnlyAccessor( minstdShuffle, 'seedLength', getSeedLength );
	setReadWriteAccessor( minstdShuffle, 'state', getState, setState );
	setReadOnlyAccessor( minstdShuffle, 'stateLength', getStateLength );
	setReadOnlyAccessor( minstdShuffle, 'byteLength', getStateSize );
	setReadOnly( minstdShuffle, 'toJSON', toJSON );
	setReadOnly( minstdShuffle, 'MIN', 1 );
	setReadOnly( minstdShuffle, 'MAX', INT32_MAX-1 );
	setReadOnly( minstdShuffle, 'normalized', normalized );

	setReadOnly( normalized, 'NAME', minstdShuffle.NAME );
	setReadOnlyAccessor( normalized, 'seed', getSeed );
	setReadOnlyAccessor( normalized, 'seedLength', getSeedLength );
	setReadWriteAccessor( normalized, 'state', getState, setState );
	setReadOnlyAccessor( normalized, 'stateLength', getStateLength );
	setReadOnlyAccessor( normalized, 'byteLength', getStateSize );
	setReadOnly( normalized, 'toJSON', toJSON );
	setReadOnly( normalized, 'MIN', (minstdShuffle.MIN-1.0) / NORMALIZATION_CONSTANT );
	setReadOnly( normalized, 'MAX', (minstdShuffle.MAX-1.0) / NORMALIZATION_CONSTANT );

	return minstdShuffle;

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMINSTD} seed
	*/
	function getSeed() {
		var len = STATE[ SEED_SECTION_OFFSET ];
		return gcopy( len, seed, 1, new Int32Array( len ), 1 );
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return STATE[ SEED_SECTION_OFFSET ];
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return STATE.length;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return STATE.byteLength;
	}

	/**
	* Returns the current PRNG state.
	*
	* ## Notes
	*
	* -   The PRNG state array is comprised of a preamble followed by `3` sections:
	*
	*     0.  preamble (version + number of sections)
	*     1.  shuffle table
	*     2.  internal PRNG state
	*     3.  PRNG seed
	*
	* -   The first element of the PRNG state array preamble is the state array schema version.
	*
	* -   The second element of the PRNG state array preamble is the number of state array sections (i.e., `3`).
	*
	* -   The first element of each section following the preamble specifies the section length. The remaining section elements comprise the section contents.
	*
	* @private
	* @returns {PRNGStateMINSTD} current state
	*/
	function getState() {
		var len = STATE.length;
		return gcopy( len, STATE, 1, new Int32Array( len ), 1 );
	}

	/**
	* Sets the PRNG state.
	*
	* ## Notes
	*
	* -   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
	* -   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).
	*
	* @private
	* @param {PRNGStateMINSTD} s - generator state
	* @throws {TypeError} must provide an `Int32Array`
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		var err;
		if ( !isInt32Array( s ) ) {
			throw new TypeError( 'invalid argument. Must provide an Int32Array. Value: `' + s + '`.' );
		}
		err = verifyState( s, false );
		if ( err ) {
			throw err;
		}
		if ( opts.copy === false ) {
			if ( opts.state && s.length === STATE.length ) {
				gcopy( s.length, s, 1, STATE, 1 ); // update current shared state
			} else {
				STATE = s; // point to new shared state
				opts.state = true; // setting this flag allows updating a shared state even if a state array was not provided at PRNG creation
			}
		} else {
			// Check if we can reuse allocated memory...
			if ( s.length !== STATE.length ) {
				STATE = new Int32Array( s.length ); // reallocate
			}
			gcopy( s.length, s, 1, STATE, 1 );
		}
		// Create a new state (table) "view":
		state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );

		// Create a new seed "view":
		seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), STATE[ SEED_SECTION_OFFSET ] );
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
		out.name = minstdShuffle.NAME;
		out.state = typedarray2json( STATE );
		out.params = [];
		return out;
	}

	/**
	* Generates a pseudorandom integer on the interval \\( [1,2^{31}-1) \\).
	*
	* @private
	* @returns {integer32} pseudorandom integer
	*/
	function minstd() {
		var s = STATE[ PRNG_STATE ]|0; // asm type annotation
		s = ( (A*s)%INT32_MAX )|0; // asm type annotation
		STATE[ PRNG_STATE ] = s;
		return s|0; // asm type annotation
	}

	/**
	* Generates a pseudorandom integer on the interval \\( [1,2^{31}-1) \\).
	*
	* @private
	* @returns {integer32} pseudorandom integer
	*
	* @example
	* var v = minstd();
	* // returns <number>
	*/
	function minstdShuffle() {
		var s;
		var i;

		s = STATE[ SHUFFLE_STATE ];
		i = floor( TABLE_LENGTH * (s/INT32_MAX) );

		// Pull a state from the table:
		s = state[ i ];

		// Update the PRNG state:
		STATE[ SHUFFLE_STATE ] = s;

		// Replace the pulled state:
		state[ i ] = minstd();

		return s;
	}

	/**
	* Generates a pseudorandom number on the interval \\( [0,1) \\).
	*
	* @private
	* @returns {number} pseudorandom number
	*
	* @example
	* var v = normalized();
	* // returns <number>
	*/
	function normalized() {
		return (minstdShuffle()-1) / NORMALIZATION_CONSTANT;
	}
}


// EXPORTS //

module.exports = factory;
