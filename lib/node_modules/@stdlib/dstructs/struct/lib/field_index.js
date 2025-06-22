/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var indexOf = require( '@stdlib/array/base/index-of' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the index of a specified field name in a provided list of field names.
*
* @private
* @param {Array<string>} names - list of field names
* @param {string} name - field name
* @throws {Error} struct must have at least one field
* @throws {TypeError} must provide a recognized field name
* @returns {(integer|Error)} index or an error object
*/
function fieldIndex( names, name ) {
	var idx;
	if ( names.length === 0 ) {
		return new Error( 'invalid operation. struct does not have any fields.' );
	}
	idx = indexOf( names, name, 0 );
	if ( idx < 0 ) {
		return new TypeError( format( 'invalid argument. Field name must be one of the following: "%s". Value: `%s`.', join( names, ', ' ), name ) );
	}
	return idx;
}


// EXPORTS //

module.exports = fieldIndex;
