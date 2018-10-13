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

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var dtypes = require( '@stdlib/array/typed-dtypes' );
var contains = require( './contains.js' );


// VARIABLES //

var DTYPES = dtypes();


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dtype] - default data type
* @param {string} [options.name] - tuple name
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'dtype': 'float64',
*     'name': 'Complex128'
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
	if ( hasOwnProp( options, 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !isString( opts.dtype ) ) {
			return new TypeError( 'invalid option. `dtype` option must be a string. Option: `' + opts.dtype + '`.' );
		}
		if ( !contains( DTYPES, opts.dtype ) ) {
			return new Error( 'invalid option. `dtype` option must be a recognized data type. Option: `' + opts.dtype + '`.' );
		}
	}
	if ( hasOwnProp( options, 'name' ) ) {
		opts.name = options.name;
		if ( !isString( opts.name ) ) {
			return new TypeError( 'invalid option. `name` option must be a string. Option: `' + opts.name + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
