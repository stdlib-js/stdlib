/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isNull = require( '@stdlib/assert/is-null' );
var objectKeys = require( '@stdlib/utils/keys' );


// MAIN //

/**
* Validates a resolution table object.
*
* @private
* @param {Object} out - destination object
* @param {Object} table - resolution table object
* @param {(Function|null)} [table.number] - function to invoke upon receiving a number
* @param {(Function|null)} [table.complex] - function to invoke upon receiving a complex number
* @param {(Function|null)} [table.array] - function to invoke upon receiving an array-like object
* @param {(Function|null)} [table.ndarray] - function to invoke upon receiving an ndarray-like object
* @returns {(Error|null)} null or an error object
*
* @example
* var out = {};
* var table = {
*     'number': null,
*     'complex': null,
*     'array': null,
*     'ndarray': null
* };
* var err = validate( out, table );
* if ( err ) {
*     throw err;
* }
*/
function validate( out, table ) {
	var fields;
	var tmp;
	var key;
	var i;

	if ( !isPlainObject( table ) ) {
		return new TypeError( 'invalid argument. Resolution table must be a plain object. Value: `' + table + '`.' );
	}
	fields = objectKeys( out );
	for ( i = 0; i < fields.length; i++ ) {
		key = fields[ i ];
		if ( hasOwnProp( table, key ) ) {
			tmp = table[ key ];
			if ( !isFunction( tmp ) && !isNull( tmp ) ) {
				return new TypeError( 'invalid argument. Resolution table `' + key + '` field value must be either a function or `null`. Value: `' + tmp + '`.' );
			}
			out[ key ] = tmp;
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
