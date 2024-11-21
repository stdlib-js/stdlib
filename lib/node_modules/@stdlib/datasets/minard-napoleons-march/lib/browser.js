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

var objectKeys = require( '@stdlib/utils/keys' );
var copy = require( '@stdlib/utils/copy' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var minardData = require( './data.js' );


// MAIN //

/**
* Returns datasets for Charles Joseph Minard's cartographic depiction of Napoleon's Russian campaign of 1812.
*
* @param {Options} [options] - options object
* @param {string} [options.data] - dataset name
* @throws {TypeError} must provide an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} must provide a recognized dataset name
* @returns {(Object|ObjectArray)} dataset(s)
*
* @example
* var data = minard();
* // returns <Object>
*
* @example
* var data = minard({
*     'data': 'army'
* });
* // returns <ObjectArray>
*/
function minard( options ) {
	var opts;
	var err;

	if ( arguments.length > 0 ) {
		opts = {};
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		if ( opts.data ) {
			if ( !hasOwnProp( minardData, opts.data ) ) {
				throw new RangeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'data', objectKeys( minardData ).join( '", "' ), opts.data ) );
			}
			return copy( minardData[ opts.data ] );
		}
	}
	return copy( minardData );
}


// EXPORTS //

module.exports = minard;
