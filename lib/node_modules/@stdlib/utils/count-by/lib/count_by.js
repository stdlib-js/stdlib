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

var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var validate = require( './validate.js' );


// MAIN //

/**
* Groups values according to an indicator function and returns group counts.
*
* @param {Collection} collection - input collection
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {Function} indicator - indicator function specifying which group an element in the input collection belongs to
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} last argument must be a function
* @throws {TypeError} must provide valid options
* @returns {Object} counts
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = countBy( arr, indicator );
* // returns { 'b': 3, 'f': 1 }
*/
function countBy( collection, options, indicator ) {
	var thisArg;
	var opts;
	var err;
	var out;
	var len;
	var cb;
	var g;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	opts = {};
	if ( arguments.length === 2 ) {
		cb = options;
	} else {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		cb = indicator;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+cb+'`.' );
	}
	thisArg = opts.thisArg;
	len = collection.length;
	out = {};
	for ( i = 0; i < len; i++ ) {
		g = cb.call( thisArg, collection[ i ], i );
		if ( hasOwnProp( out, g ) ) {
			out[ g ] += 1;
		} else {
			out[ g ] = 1;
		}
	}
	return out;
}


// EXPORTS //

module.exports = countBy;
