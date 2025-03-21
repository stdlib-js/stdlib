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

var isObjectLike = require( '@stdlib/assert/is-object-like' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var flatten = require( './flatten.js' );


// MAIN //

/**
* Flattens an object.
*
* @param {ObjectLike} obj - object to flatten
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.depth] - maximum depth to flatten
* @param {boolean} [options.copy=false] - boolean indicating whether to deep copy
* @param {boolean} [options.flattenArrays=false] - boolean indicating whether to flatten arrays
* @param {string} [options.delimiter='.'] - key path delimiter
* @throws {TypeError} first argument must be object-like
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ObjectLike} flattened object
*
* @example
* var obj = {'a':{'b':{'c':'d'}}};
*
* var out = flattenObject( obj );
* // returns {'a.b.c':'d'}
*/
function flattenObject( obj, options ) {
	var opts;
	var err;
	if ( !isObjectLike( obj ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object (except null). Value: `%s`.', obj ) );
	}
	opts = defaults();
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	return flatten( obj, opts );
}


// EXPORTS //

module.exports = flattenObject;
