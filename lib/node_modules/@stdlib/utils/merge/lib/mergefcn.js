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

var isObject = require( '@stdlib/assert/is-object' );
var deepMerge = require( './deepmerge.js' );


// MAIN //

/**
* Returns a merge function based on provided options.
*
* @private
* @param {Options} opts - function options
* @param {number} options.level - merge level
* @param {boolean} options.copy - boolean indicating whether to deep copy merged values
* @param {(boolean|Function)} options.override - defines the merge strategy
* @param {boolean} options.extend - boolean indicating whether new properties can be added to the target object
* @returns {Function} merge function
*
* @example
* var merge = mergefcn({
*     'level': Number.POSITIVE_INFINITY,
*     'copy': true,
*     'override': true,
*     'extend': true
* });
* // returns <Function>
*/
function mergefcn( opts ) {
	return merge;

	/**
	* Merges objects into a target object. Note that the target object is mutated.
	*
	* @private
	* @param {Object} target - target object
	* @param {...Object} source - source objects (i.e., objects to be merged into the target object)
	* @throws {Error} must provide a target object and one or more source objects
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} source arguments must be objects
	* @returns {Object} merged (target) object
	*
	* @example
	* var target = {
	*     'a': 'beep'
	* };
	* var source = {
	*     'a': 'boop',
	*     'b': 'bap'
	* };
	*
	* var out = merge( target, source );
	* // returns {'a':'boop', 'b':'bap'}
	*/
	function merge( target ) {
		var nargs;
		var arg;
		var src;
		var i;

		nargs = arguments.length - 1;
		if ( nargs < 1 ) {
			throw new Error( 'insufficient input arguments. Must provide both a target object and one or more source objects.' );
		}
		if ( !isObject( target ) ) {
			throw new TypeError( 'invalid argument. First argument must be an object. Value: `' + target + '`.' );
		}
		src = new Array( nargs );
		for ( i = 0; i < nargs; i++ ) {
			arg = arguments[ i+1 ];

			// WARNING: this is a porous check. Buffers, Numbers, Booleans, Strings, Dates, RegExp, custom class instances,... will all pass.
			if ( !isObject( arg ) ) {
				throw new TypeError( 'invalid argument. A merge source must be an object. Value: `' + arg + '`.' );
			}
			src[ i ] = arg;
		}
		for ( i = 0; i < nargs; i++ ) {
			deepMerge( target, src[ i ], opts.level, opts.copy, opts.override, opts.extend ); // eslint-disable-line max-len
		}
		return target;
	}
}


// EXPORTS //

module.exports = mergefcn;
