/* eslint-disable max-lines, max-len */

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
*
*
* ## Notice
*
* The original C code and copyright notice are from the [source implementation]{@link http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
*
*   1. Redistributions of source code must retain the above copyright
*      notice, this list of conditions and the following disclaimer.
*
*   2. Redistributions in binary form must reproduce the above copyright
*      notice, this list of conditions and the following disclaimer in the
*      documentation and/or other materials provided with the distribution.
*
*   3. The names of its contributors may not be used to endorse or promote
*      products derived from this software without specific prior written
*      permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
* CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
* PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var FLOAT64_MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var Uint32Array = require( '@stdlib/array/uint32' );
var max = require( '@stdlib/math/base/special/max' );
var uimul = require( '@stdlib/math/base/special/uimul' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
var typedarray2json = require( '@stdlib/array/to-json' );
var randuint32 = require( './rand_uint32.js' );


// VARIABLES //

// Define the size of the state array (see refs):
var N = 624;

// Define a (magic) constant used for indexing into the state array:
var M = 397;

// Define the maximum seed: 11111111111111111111111111111111
var MAX_SEED = UINT32_MAX >>> 0; // asm type annotation

// For seed arrays, define an initial state (magic) constant: 19650218 => 00000001001010111101011010101010
var SEED_ARRAY_INIT_STATE = 19650218 >>> 0; // asm type annotation

// Define a mask for the most significant `w-r` bits, where `w` is the word size (32 bits) and `r` is the separation point of one word (see refs): 2147483648 => 0x80000000 => 10000000000000000000000000000000
var UPPER_MASK = 0x80000000 >>> 0; // asm type annotation

// Define a mask for the least significant `r` bits (see refs): 2147483647 => 0x7fffffff => 01111111111111111111111111111111
var LOWER_MASK = 0x7fffffff >>> 0; // asm type annotation

// Define a multiplier (see Knuth TAOCP Vol2. 3rd Ed. P.106): 1812433253 => 01101100000001111000100101100101
var KNUTH_MULTIPLIER = 1812433253 >>> 0; // asm type annotation

// Define a (magic) multiplier: 1664525 => 00000000000110010110011000001101
var MAGIC_MULTIPLIER_1 = 1664525 >>> 0; // asm type annotation

// Define a (magic) multiplier: 1566083941 => 01011101010110001000101101100101
var MAGIC_MULTIPLIER_2 = 1566083941 >>> 0; // asm type annotation

// Define a tempering coefficient: 2636928640 => 0x9d2c5680 => 10011101001011000101011010000000
var TEMPERING_COEFFICIENT_1 = 0x9d2c5680 >>> 0; // asm type annotation

// Define a tempering coefficient: 4022730752 => 0xefc60000 => 11101111110001100000000000000000
var TEMPERING_COEFFICIENT_2 = 0xefc60000 >>> 0; // asm type annotation

// Define a constant vector `a` (see refs): 2567483615 => 0x9908b0df => 10011001000010001011000011011111
var MATRIX_A = 0x9908b0df >>> 0; // asm type annotation

// MAG01[x] = x * MATRIX_A; for x = {0,1}
var MAG01 = [ 0x0 >>> 0, MATRIX_A >>> 0 ]; // asm type annotation

// Define a normalization constant when generating double-precision floating-point numbers: 2^53 => 9007199254740992
var FLOAT64_NORMALIZATION_CONSTANT = 1.0 / ( FLOAT64_MAX_SAFE_INTEGER+1.0 ); // eslint-disable-line id-length

// 2^26: 67108864
var TWO_26 = 67108864 >>> 0; // asm type annotation

// 2^32: 2147483648 => 0x80000000 => 10000000000000000000000000000000
var TWO_32 = 0x80000000 >>> 0; // asm type annotation

// 1 (as a 32-bit unsigned integer): 1 => 0x1 => 00000000000000000000000000000001
var ONE = 0x1 >>> 0; // asm type annotation

// Define the maximum normalized pseudorandom double-precision floating-point number: ( (((2^32-1)>>>5)*2^26)+( (2^32-1)>>>6) ) / 2^53
var MAX_NORMALIZED = FLOAT64_MAX_SAFE_INTEGER * FLOAT64_NORMALIZATION_CONSTANT;

// Define the state array schema version:
var STATE_ARRAY_VERSION = 1; // NOTE: anytime the state array schema changes, this value should be incremented!!!

// Define the number of sections in the state array:
var NUM_STATE_SECTIONS = 3; // state, other, seed

// Define the index offset of the "state" section in the state array:
var STATE_SECTION_OFFSET = 2; // | version | num_sections | state_length | ...state | other_length | state_index | seed_length | ...seed |

// Define the index offset of the "other" section in the state array:
var OTHER_SECTION_OFFSET = N + 3; // | version | num_sections | state_length | ...state | other_length | state_index | seed_length | ...seed |

// Define the index offset of the seed section in the state array:
var SEED_SECTION_OFFSET = N + 5; // | version | num_sections | state_length | ...state | other_length | state_index | seed_length | ...seed |

// Define the length of the "fixed" length portion of the state array:
var STATE_FIXED_LENGTH = N + 6; // 1 (version) + 1 (num_sections) + 1 (state_length) + N (state) + 1 (other_length) + 1 (state_index) + 1 (seed_length)


// FUNCTIONS //

/**
* Verifies state array integrity.
*
* @private
* @param {Uint32Array} state - state array
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
	// The length of the "state" section must equal `N`...
	if ( state[ STATE_SECTION_OFFSET ] !== N ) {
		return new RangeError( 'invalid '+s1+'. `state` array has an incompatible state length. Expected: '+N+'. Actual: '+state[ STATE_SECTION_OFFSET ]+'.' );
	}
	// The length of the "other" section must equal `1`...
	if ( state[ OTHER_SECTION_OFFSET ] !== 1 ) {
		return new RangeError( 'invalid '+s1+'. `state` array has an incompatible section length. Expected: '+(1).toString()+'. Actual: '+state[ OTHER_SECTION_OFFSET ]+'.' );
	}
	// The length of the "seed" section much match the empirical length...
	if ( state[ SEED_SECTION_OFFSET ] !== state.length-STATE_FIXED_LENGTH ) {
		return new RangeError( 'invalid '+s1+'. `state` array length is incompatible with seed section length. Expected: '+(state.length-STATE_FIXED_LENGTH)+'. Actual: '+state[ SEED_SECTION_OFFSET ]+'.' );
	}
	return null;
}

/**
* Returns an initial PRNG state.
*
* @private
* @param {Uint32Array} state - state array
* @param {PositiveInteger} N - state size
* @param {uinteger32} s - seed
* @returns {Uint32Array} state array
*/
function createState( state, N, s ) {
	var i;

	// Set the first element of the state array to the provided seed:
	state[ 0 ] = s >>> 0; // equivalent to `s & 0xffffffffUL` in original C implementation

	// Initialize the remaining state array elements:
	for ( i = 1; i < N; i++ ) {
		/*
		* In the original C implementation (see `init_genrand()`),
		*
		* ```c
		* mt[i] = (KNUTH_MULTIPLIER * (mt[i-1] ^ (mt[i-1] >> 30)) + i)
		* ```
		*
		* In order to replicate this in JavaScript, we must emulate C-like multiplication of unsigned 32-bit integers.
		*/
		s = state[ i-1 ]>>>0; // asm type annotation
		s = ( s^(s>>>30) )>>>0; // asm type annotation
		state[ i ] = ( uimul( s, KNUTH_MULTIPLIER ) + i )>>>0; // asm type annotation
	}
	return state;
}

/**
* Initializes a PRNG state array according to a seed array.
*
* @private
* @param {Uint32Array} state - state array
* @param {NonNegativeInteger} N - state array length
* @param {Collection} seed - seed array
* @param {NonNegativeInteger} M - seed array length
* @returns {Uint32Array} state array
*/
function initState( state, N, seed, M ) {
	var s;
	var i;
	var j;
	var k;

	i = 1;
	j = 0;
	for ( k = max( N, M ); k > 0; k-- ) {
		/*
		* In the original C implementation (see `init_by_array()`),
		*
		* ```c
		* mt[i] = (mt[i]^((mt[i-1]^(mt[i-1]>>30))*1664525UL)) + seed[j] + j;
		* ```
		*
		* In order to replicate this in JavaScript, we must emulate C-like multiplication of unsigned 32-bit integers.
		*/
		s = state[ i-1 ]>>>0; // asm type annotation
		s = ( s^(s>>>30) )>>>0; // asm type annotation
		s = ( uimul( s, MAGIC_MULTIPLIER_1 ) )>>>0; // asm type annotation
		state[ i ] = ( ((state[i]>>>0)^s) + seed[j] + j )>>>0; /* non-linear */ // asm type annotation

		i += 1;
		j += 1;
		if ( i >= N ) {
			state[ 0 ] = state[ N-1 ];
			i = 1;
		}
		if ( j >= M ) {
			j = 0;
		}
	}
	for ( k = N-1; k > 0; k-- ) {
		/*
		* In the original C implementation (see `init_by_array()`),
		*
		* ```c
		* mt[i] = (mt[i]^((mt[i-1]^(mt[i-1]>>30))*1566083941UL)) - i;
		* ```
		*
		* In order to replicate this in JavaScript, we must emulate C-like multiplication of unsigned 32-bit integers.
		*/
		s = state[ i-1 ]>>>0; // asm type annotation
		s = ( s^(s>>>30) )>>>0; // asm type annotation
		s = ( uimul( s, MAGIC_MULTIPLIER_2 ) )>>>0; // asm type annotation
		state[ i ] = ( ((state[i]>>>0)^s) - i )>>>0; /* non-linear */ // asm type annotation

		i += 1;
		if ( i >= N ) {
			state[ 0 ] = state[ N-1 ];
			i = 1;
		}
	}
	// Ensure a non-zero initial state array:
	state[ 0 ] = TWO_32; // MSB (most significant bit) is 1

	return state;
}

/**
* Updates a PRNG's internal state by generating the next `N` words.
*
* @private
* @param {Uint32Array} state - state array
* @returns {Uint32Array} state array
*/
function twist( state ) {
	var w;
	var i;
	var j;
	var k;

	k = N - M;
	for ( i = 0; i < k; i++ ) {
		w = ( state[i]&UPPER_MASK ) | ( state[i+1]&LOWER_MASK );
		state[ i ] = state[ i+M ] ^ ( w>>>1 ) ^ MAG01[ w&ONE ];
	}
	j = N - 1;
	for ( ; i < j; i++ ) {
		w = ( state[i]&UPPER_MASK ) | ( state[i+1]&LOWER_MASK );
		state[ i ] = state[ i-k ] ^ ( w>>>1 ) ^ MAG01[ w&ONE ];
	}
	w = ( state[j]&UPPER_MASK ) | ( state[0]&LOWER_MASK );
	state[ j ] = state[ M-1 ] ^ ( w>>>1 ) ^ MAG01[ w&ONE ];
	return state;
}


// MAIN //

/**
* Returns a 32-bit Mersenne Twister pseudorandom number generator.
*
* ## Notes
*
* -   In contrast to the original C implementation, array seeds of length `1` are considered integer seeds. This ensures that the seed `[ 1234 ]` generates the same output as the seed `1234`. In the original C implementation, the two seeds would yield different output, which is **not** obvious from a user perspective.
*
* @param {Options} [options] - options
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} options argument must be an object
* @throws {TypeError} a seed must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integers less than or equal to the maximum unsigned 32-bit integer
* @throws {RangeError} a numeric seed must be a positive integer less than or equal to the maximum unsigned 32-bit integer
* @throws {TypeError} state must be a `Uint32Array`
* @throws {Error} must provide a valid state
* @throws {TypeError} `copy` option must be a boolean
* @returns {PRNG} Mersenne Twister PRNG
*
* @example
* var mt19937 = factory();
*
* var v = mt19937();
* // returns <number>
*
* @example
* // Return a seeded Mersenne Twister PRNG:
* var mt19937 = factory({
*     'seed': 1234
* });
*
* var v = mt19937();
* // returns 822569775
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
			if ( !isUint32Array( state ) ) {
				throw new TypeError( 'invalid option. `state` option must be a Uint32Array. Option: `' + state + '`.' );
			}
			err = verifyState( state, true );
			if ( err ) {
				throw err;
			}
			if ( opts.copy === false ) {
				STATE = state;
			} else {
				STATE = new Uint32Array( state.length );
				gcopy( state.length, state, 1, STATE, 1 );
			}
			// Create a state "view":
			state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );

			// Create a seed "view":
			seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), state[ SEED_SECTION_OFFSET ] );
		}
		// If provided a PRNG state, we ignore the `seed` option...
		if ( seed === void 0 ) {
			if ( hasOwnProp( options, 'seed' ) ) {
				seed = options.seed;
				opts.seed = true;
				if ( isPositiveInteger( seed ) ) {
					if ( seed > MAX_SEED ) {
						throw new RangeError( 'invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
					}
					seed >>>= 0; // asm type annotation
				} else if ( isCollection( seed ) === false || seed.length < 1 ) {
					throw new TypeError( 'invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
				} else if ( seed.length === 1 ) {
					seed = seed[ 0 ];
					if ( !isPositiveInteger( seed ) ) {
						throw new TypeError( 'invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
					}
					if ( seed > MAX_SEED ) {
						throw new RangeError( 'invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
					}
					seed >>>= 0; // asm type annotation
				} else {
					slen = seed.length;
					STATE = new Uint32Array( STATE_FIXED_LENGTH+slen );

					// Initialize sections:
					STATE[ 0 ] = STATE_ARRAY_VERSION;
					STATE[ 1 ] = NUM_STATE_SECTIONS;
					STATE[ STATE_SECTION_OFFSET ] = N;
					STATE[ OTHER_SECTION_OFFSET ] = 1;
					STATE[ OTHER_SECTION_OFFSET+1 ] = N; // state index
					STATE[ SEED_SECTION_OFFSET ] = slen;

					// Copy the provided seed array to prevent external mutation, as mutation would lead to an inability to reproduce PRNG values according to the PRNG's stated seed:
					gcopy.ndarray( slen, seed, 1, 0, STATE, 1, SEED_SECTION_OFFSET+1 );

					// Create a state "view":
					state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );

					// Create a seed "view":
					seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), slen );

					// Initialize the internal PRNG state:
					state = createState( state, N, SEED_ARRAY_INIT_STATE );
					state = initState( state, N, seed, slen );
				}
			} else {
				seed = randuint32() >>> 0; // asm type annotation
			}
		}
	} else {
		seed = randuint32() >>> 0; // asm type annotation
	}
	if ( state === void 0 ) {
		STATE = new Uint32Array( STATE_FIXED_LENGTH+1 );

		// Initialize sections:
		STATE[ 0 ] = STATE_ARRAY_VERSION;
		STATE[ 1 ] = NUM_STATE_SECTIONS;
		STATE[ STATE_SECTION_OFFSET ] = N;
		STATE[ OTHER_SECTION_OFFSET ] = 1;
		STATE[ OTHER_SECTION_OFFSET+1 ] = N; // state index
		STATE[ SEED_SECTION_OFFSET ] = 1;
		STATE[ SEED_SECTION_OFFSET+1 ] = seed;

		// Create a state "view":
		state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );

		// Create a seed "view":
		seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );

		// Initialize the internal PRNG state:
		state = createState( state, N, seed );
	}
	// Note: property order matters in order to maintain consistency of PRNG "shape" (hidden classes).
	setReadOnly( mt19937, 'NAME', 'mt19937' );
	setReadOnlyAccessor( mt19937, 'seed', getSeed );
	setReadOnlyAccessor( mt19937, 'seedLength', getSeedLength );
	setReadWriteAccessor( mt19937, 'state', getState, setState );
	setReadOnlyAccessor( mt19937, 'stateLength', getStateLength );
	setReadOnlyAccessor( mt19937, 'byteLength', getStateSize );
	setReadOnly( mt19937, 'toJSON', toJSON );
	setReadOnly( mt19937, 'MIN', 1 );
	setReadOnly( mt19937, 'MAX', UINT32_MAX );
	setReadOnly( mt19937, 'normalized', normalized );

	setReadOnly( normalized, 'NAME', mt19937.NAME );
	setReadOnlyAccessor( normalized, 'seed', getSeed );
	setReadOnlyAccessor( normalized, 'seedLength', getSeedLength );
	setReadWriteAccessor( normalized, 'state', getState, setState );
	setReadOnlyAccessor( normalized, 'stateLength', getStateLength );
	setReadOnlyAccessor( normalized, 'byteLength', getStateSize );
	setReadOnly( normalized, 'toJSON', toJSON );
	setReadOnly( normalized, 'MIN', 0.0 );
	setReadOnly( normalized, 'MAX', MAX_NORMALIZED );

	return mt19937;

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
	*/
	function getSeed() {
		var len = STATE[ SEED_SECTION_OFFSET ];
		return gcopy( len, seed, 1, new Uint32Array( len ), 1 );
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
	*     1.  internal PRNG state
	*     2.  auxiliary state information
	*     3.  PRNG seed
	*
	* -   The first element of the PRNG state array preamble is the state array schema version.
	*
	* -   The second element of the PRNG state array preamble is the number of state array sections (i.e., `3`).
	*
	* -   The first element of each section following the preamble specifies the section length. The remaining section elements comprise the section contents.
	*
	* @private
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		var len = STATE.length;
		return gcopy( len, STATE, 1, new Uint32Array( len ), 1 );
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
	* @param {PRNGStateMT19937} s - generator state
	* @throws {TypeError} must provide a `Uint32Array`
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		var err;
		if ( !isUint32Array( s ) ) {
			throw new TypeError( 'invalid argument. Must provide a Uint32Array. Value: `' + s + '`.' );
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
				STATE = new Uint32Array( s.length ); // reallocate
			}
			gcopy( s.length, s, 1, STATE, 1 );
		}
		// Create a new state "view":
		state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );

		// Create a new seed "view":
		seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), STATE[ SEED_SECTION_OFFSET ] );
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
		out.name = mt19937.NAME;
		out.state = typedarray2json( STATE );
		out.params = [];
		return out;
	}

	/**
	* Generates a pseudorandom integer on the interval \\( [1,2^{32}-1) \\).
	*
	* @private
	* @returns {uinteger32} pseudorandom integer
	*
	* @example
	* var r = mt19937();
	* // returns <number>
	*/
	function mt19937() {
		var r;
		var i;

		// Retrieve the current state index:
		i = STATE[ OTHER_SECTION_OFFSET+1 ];

		// Determine whether we need to update the PRNG state:
		if ( i >= N ) {
			state = twist( state );
			i = 0;
		}
		// Get the next word of "raw"/untempered state:
		r = state[ i ];

		// Update the state index:
		STATE[ OTHER_SECTION_OFFSET+1 ] = i + 1;

		// Tempering transform to compensate for the reduced dimensionality of equidistribution:
		r ^= r >>> 11;
		r ^= ( r << 7 ) & TEMPERING_COEFFICIENT_1;
		r ^= ( r << 15 ) & TEMPERING_COEFFICIENT_2;
		r ^= r >>> 18;

		return r >>> 0;
	}

	/**
	* Generates a pseudorandom number on the interval \\( [0,1) \\).
	*
	* ## Notes
	*
	* -   The original C implementation credits Isaku Wada for this algorithm (2002/01/09).
	*
	* @private
	* @returns {number} pseudorandom number
	*
	* @example
	* var r = normalized();
	* // returns <number>
	*/
	function normalized() {
		var x = mt19937() >>> 5;
		var y = mt19937() >>> 6;
		return ( (x*TWO_26)+y ) * FLOAT64_NORMALIZATION_CONSTANT;
	}
}


// EXPORTS //

module.exports = factory;
