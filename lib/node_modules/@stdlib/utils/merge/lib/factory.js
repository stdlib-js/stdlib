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

var validate = require( './validate.js' );
var defaults = require( './defaults.js' );
var mergefcn = require( './mergefcn.js' );


// MAIN //

/**
* Returns a function for merging and extending objects.
*
* @param {Options} options - merge options
* @param {number} [options.level=Infinity] - merge level
* @param {boolean} [options.copy=true] - boolean indicating whether to deep copy merged values
* @param {(boolean|Function)} [options.override=true] - defines the merge strategy
* @param {boolean} [options.extend=true] - boolean indicating whether new properties can be added to the target object
* @throws {TypeError} must provide valid options
* @returns {Function} function which can be used to merge objects
*
* @example
* var opts = {
*     'level': 100,
*     'copy': true,
*     'override': true,
*     'extend': true
* };
*
* var merge = factory( opts );
* // returns <Function>
*/
function factory( options ) {
	var opts;
	var err;
	opts = defaults();
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	return mergefcn( opts );
}


// EXPORTS //

module.exports = factory;
