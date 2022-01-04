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
var ctors = require( './ctors.js' );


// MAIN //

/**
* Revives a JSON-serialized typed array.
*
* @param {string} key - key
* @param {*} value - value
* @returns {(*|TypedArray)} value or typed array
*
* @example
* var parseJSON = require( '@stdlib/utils/parse-json' );
*
* var str = '{"type":"Float64Array","data":[5,3]}';
*
* var arr = parseJSON( str, reviver );
* // returns <Float64Array>[ 5.0, 3.0 ]
*/
function reviver( key, value ) {
	var ctor;
	if (
		value &&
		value.type &&
		isArray( value.data )
	) {
		ctor = ctors[ value.type ];
		if ( ctor ) {
			return new ctor( value.data );
		}
	}
	return value;
}


// EXPORTS //

module.exports = reviver;
