/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var ndindex = require( './main.js' );


// MAIN //

/**
* Returns a function for creating ndarray index objects having a specified "kind".
*
* @private
* @param {string} kind - specialized index kind
* @returns {Function} factory function
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var cartesianIndex = createFactory( 'cartesian' );
* // returns <Function>
*
* var x = empty( [ 3, 2 ], {
*     'dtype': 'int32'
* });
*
* var idx = cartesianIndex( x );
* // returns <ndindex>
*/
function createFactory( kind ) {
	var f = factory;
	setReadOnly( f, 'free', ndindex.free ); // `free` is a static method
	setReadOnly( f, 'get', ndindex.get ); // `get` is a static method
	return f;

	/**
	* Returns an ndarray index having a specialized "kind".
	*
	* @private
	* @param {ndarray} x - input ndarray
	* @param {Options} [options] - function options
	* @param {boolean} [options.persist=false] - boolean indicating whether to continue persisting an index object after first usage
	* @throws {TypeError} first argument must be an ndarray-like object
	* @throws {TypeError} first argument must be a valid index ndarray
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ndindex} ndindex instance
	*/
	function factory( x ) {
		var options;
		var opts;

		opts = {
			'kind': kind
		};
		if ( arguments.length < 2 ) {
			return new ndindex( x, opts );
		}
		options = arguments[ 1 ];
		if ( !isObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'persist' ) ) {
			opts.persist = options.persist;
		}
		return new ndindex( x, opts );
	}
}


// EXPORTS //

module.exports = createFactory;
