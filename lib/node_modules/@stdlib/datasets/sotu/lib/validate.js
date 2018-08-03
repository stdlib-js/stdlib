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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' ).primitives;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {(string|StringArray)} [options.name] - President name(s)
* @param {(PositiveInteger|PositiveIntegerArray)} [options.year] - year(s)
* @param {PositiveIntegerArray} [options.range] - year range
* @param {(string|StringArray)} [options.party] - political party
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'range': [ 1942, 2008 ],
*     'president': 'Barack Obama'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'name' ) ) {
		opts.name = options.name;
		if (
			!isString( opts.name ) &&
			!isStringArray( opts.name )
		) {
			return new TypeError( 'invalid option. `name` option must be a string primitive or an array of strings. Option: `' + opts.name + '`.' );
		}
	}
	if ( hasOwnProp( options, 'year' ) ) {
		opts.year = options.year;
		if (
			!isPositiveInteger( opts.year ) &&
			!isPositiveIntegerArray( opts.year )
		) {
			return new TypeError( 'invalid option. `year` option must be a positive integer or an array of positive integers. Option: `' + opts.year + '`.' );
		}
	}
	if ( hasOwnProp( options, 'range' ) ) {
		opts.range = options.range;
		if (
			!isPositiveIntegerArray( opts.range ) ||
			opts.range.length !== 2
		) {
			return new TypeError( 'invalid option. `range` option must be a positive integer array of length two. Option: `' + opts.range + '`.' );
		}
		if ( opts.range[ 0 ] < 1790 ) {
			return new RangeError( 'invalid option. `range[0]` cannot be less than `1790`. Option: `' + opts.range + '`.' );
		}
		if ( opts.range[ 1 ] > 5000 ) {
			return new RangeError( 'invalid option. `range[1]` cannot be greater than `5000`. Option: `' + opts.range + '`.' );
		}
	}
	if ( hasOwnProp( options, 'party' ) ) {
		opts.party = options.party;
		if (
			!isString( opts.party ) &&
			!isStringArray( opts.party )
		) {
			return new TypeError( 'invalid option. `party` option must be a primitive string or an array of strings. Option: `' + opts.party + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
