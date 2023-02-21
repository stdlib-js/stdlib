/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var fdtypes = require( '@stdlib/array/typed-real-float-dtypes' );
var rdtypes = require( '@stdlib/array/typed-real-dtypes' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var RDTYPES = rdtypes();
var FDTYPES = fdtypes();
RDTYPES.push( 'generic' );
FDTYPES.push( 'generic' );


// MAIN //

/**
* Validates function options.
*
* ## Notes
*
* -   Validation modes:
*
*     -   `0`: factory validation
*     -   `1`: integer PRNG validation
*     -   `2`: normalized PRNG validation
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dtype] - output array data type
* @param {string} [options.idtype] - output array data type when generating integers
* @param {string} [options.rdtype] - output array data type when generating normalized numbers
* @param {integer} mode - validation mode
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'dtype': 'float64'
* };
* var err = validate( opts, options, 0 );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options, mode ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( mode === 0 ) {
		if ( hasOwnProp( options, 'idtype' ) ) {
			opts.idtype = options.idtype;
			if ( RDTYPES.indexOf( opts.idtype ) < 0 ) {
				return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'idtype', RDTYPES.join( '", "' ), opts.idtype ) );
			}
		}
		if ( hasOwnProp( options, 'ndtype' ) ) {
			opts.ndtype = options.ndtype;
			if ( FDTYPES.indexOf( opts.ndtype ) < 0 ) {
				return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'ndtype', FDTYPES.join( '", "' ), opts.ndtype ) );
			}
		}
	} else if ( mode === 1 && hasOwnProp( options, 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( RDTYPES.indexOf( opts.dtype ) < 0 ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', RDTYPES.join( '", "' ), opts.dtype ) );
		}
	} else if ( hasOwnProp( options, 'dtype' ) ) { // mode === 2
		opts.dtype = options.dtype;
		if ( FDTYPES.indexOf( opts.dtype ) < 0 ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', FDTYPES.join( '", "' ), opts.dtype ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
