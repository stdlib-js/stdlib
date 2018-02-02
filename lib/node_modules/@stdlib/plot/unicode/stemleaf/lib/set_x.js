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

var isTypedArray = require( '@stdlib/assert/is-typed-array' );
var isArray = require( '@stdlib/assert/is-array' );
var formatData = require( './format_data.js' );


// MAIN //

/**
* Sets the first chart data.
*
* @private
* @param {(Array|TypedArray)} x - data
* @throws {TypeError} must be an array or typed array
*/
function setX( x ) {
	/* eslint-disable no-invalid-this */
	if (
		!isArray( x ) &&
		!isTypedArray( x )
	) {
		throw new TypeError( 'invalid value. Must be an array or typed array. Value: `' + x + '`.' );
	}
	this._x = formatData( x, this._xValue );
}


// EXPORTS //

module.exports = setX;
