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

/* eslint-disable id-length */

'use strict';

// MODULES //

var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setNonEnumerableReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils/define-read-write-accessor' );
var getter = require( './getter.js' );
var setter = require( './setter.js' );


// MAIN //

/**
* Assigns methods for accessing field values to a provided prototype.
*
* @private
* @param {Object} p - prototype
* @param {Array<Object>} fields - field objects
* @returns {Object} object containing accessors for each field
*/
function createPrototypeAccessors( p, fields ) {
	var get;
	var set;
	var out;
	var o;
	var i;

	out = {};
	for ( i = 0; i < fields.length; i++ ) {
		o = fields[ i ];
		get = getter( o );
		set = setter( o );
		if ( o.enumerable ) {
			if ( o.writable ) {
				setReadWriteAccessor( p, o.name, get, set );
			} else {
				setReadOnlyAccessor( p, o.name, get );
			}
		} else if ( o.writable ) {
			setNonEnumerableReadWriteAccessor( p, o.name, get, set );
		} else {
			setNonEnumerableReadOnlyAccessor( p, o.name, get );
		}
		out[ o.name ] = [ get, set ];
	}
	return out;
}


// EXPORTS //

module.exports = createPrototypeAccessors;
