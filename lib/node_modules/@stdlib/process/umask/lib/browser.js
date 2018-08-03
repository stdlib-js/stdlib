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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var toSymbolic = require( './to_symbolic.js' );
var fromSymbolic = require( './from_symbolic.js' );


// VARIABLES //

var MASK = 0|0; // asm type annotation


// MAIN //

/**
* Get/set the process mask.
*
* ## Notes
*
* -   If provided a mask, the function sets the current mask and returns the previous process mask. Otherwise, the function returns the current process mask.
* -   Browser environments do not support process masks. Hence, this function always returns either `0` or `u=rwx,g=rwx,o=rwx`.
*
*
* @param {(NonNegativeInteger|string)} [mask] - mask
* @param {Object} [options] - options
* @param {boolean} [options.symbolic] - boolean indicating whether to return a mask using symbolic notation
* @throws {TypeError} must provide either a string, nonnegative integer, or an options object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a parseable expression mask
* @returns {(NonNegativeInteger|string)} process mask
*
* @example
* var mask = umask();
* // returns 0
*/
function umask() {
	var options;
	var nargs;
	var mask;
	var opts;
	var arg;

	nargs = arguments.length;
	if ( nargs === 0 ) {
		return MASK;
	}
	opts = {};
	arg = arguments[ 0 ];
	if ( nargs === 1 ) {
		if ( isString( arg ) ) {
			mask = fromSymbolic( MASK, arg );
			if ( mask instanceof Error ) {
				throw mask;
			}
			return MASK;
		}
		if ( isNonNegativeInteger( arg ) ) {
			// Easy case where we use the built-in function to set the mask and return its return value:
			return MASK;
		}
		if ( isObject( arg ) ) {
			if ( hasOwnProp( arg, 'symbolic' ) ) {
				opts.symbolic = arg.symbolic;
				if ( !isBoolean( opts.symbolic ) ) {
					throw new TypeError( 'invalid option. `symbolic` option must be a boolean. Option: `' + opts.symbolic + '`.' );
				}
			}
			mask = MASK;
			if ( opts.symbolic ) {
				mask = toSymbolic( mask );
			}
			return mask;
		}
		throw new TypeError( 'invalid argument. Must provide either a string, nonnegative integer, or an options object. Value: `' + arg + '`.' );
	}
	options = arguments[ 1 ];
	if ( !isObject( options ) ) {
		throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'symbolic' ) ) {
		opts.symbolic = options.symbolic;
		if ( !isBoolean( opts.symbolic ) ) {
			throw new TypeError( 'invalid option. `symbolic` option must be a boolean. Option: `' + opts.symbolic + '`.' );
		}
	}
	if ( isString( arg ) ) {
		mask = fromSymbolic( MASK, arg );
		if ( mask instanceof Error ) {
			throw mask;
		}
	} else if ( isNonNegativeInteger( arg ) ) {
		mask = arg;
	} else {
		throw new TypeError( 'invalid argument. First argument must be either a string or nonnegative integer. Value: `' + arg + '`.' );
	}
	// Set the mask:
	mask = MASK;

	// Determine how to format the output value:
	if ( opts.symbolic ) {
		mask = toSymbolic( mask );
	}
	return mask;
}


// EXPORTS //

module.exports = umask;
