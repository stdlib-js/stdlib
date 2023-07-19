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

var isArray = require( '@stdlib/assert/is-array' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Extracts a property value from each element of an object array.
*
* @param {Array} arr - source array
* @param {*} prop - property to access
* @param {Options} [options] - function options
* @param {boolean} [options.copy=true] - boolean indicating whether to return a new data structure
* @throws {TypeError} first argument must be an object array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Array} destination array
*
* @example
* var arr = [
*     { 'a': 1, 'b': 2 },
*     { 'a': 0.5, 'b': 3 }
* ];
*
* var out = pluck( arr, 'a' );
* // returns [ 1, 0.5 ]
*
* @example
* var arr = [
*     { 'a': 1, 'b': 2 },
*     { 'a': 0.5, 'b': 3 }
* ];
*
* var out = pluck( arr, 'a', {'copy':false} );
* // returns [ 1, 0.5 ]
*
* var bool = ( arr[ 0 ] === out[ 0 ] );
* // returns true
*/
function pluck( arr, prop, options ) {
	var opts;
	var out;
	var err;
	var v;
	var i;

	if ( !isArray( arr ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array. Value: `%s`.', arr ) );
	}
	opts = defaults();
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.copy ) {
		out = new Array( arr.length );
	} else {
		out = arr;
	}
	for ( i = 0; i < arr.length; i++ ) {
		v = arr[ i ];
		if (
			v !== void 0 &&
			v !== null &&
			hasOwnProp( v, prop )
		) {
			out[ i ] = v[ prop ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = pluck;
