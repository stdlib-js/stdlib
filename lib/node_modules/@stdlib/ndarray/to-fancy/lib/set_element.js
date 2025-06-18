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

// MAIN //

/**
* Sets the element associated with a specified index.
*
* @private
* @param {Object} target - target object
* @param {string} property - index string
* @param {*} value - new value
* @param {Object} ctx - context object
* @param {Function} ctx.setter - accessor for setting ndarray elements
* @param {string} ctx.dtype - target ndarray data type
* @param {boolean} ctx.strict - boolean indicating whether to enforce strict bounds checking
* @param {Function} ctx.validator - function for validating new values
* @param {(Function|null)} ctx.preSetElement - function for normalizing new values (if necessary)
* @throws {TypeError} assigned value cannot be safely cast to the target ndarray data type
* @throws {TypeError} target ndarray must have a supported data type
* @throws {RangeError} index exceeds ndarray bounds
* @returns {boolean} boolean indicating whether assignment succeeded
*/
function setElement( target, property, value, ctx ) {
	var err;
	var v;

	err = ctx.validator( value, ctx.dtype );
	if ( err ) {
		throw err;
	}
	if ( ctx.preSetElement ) {
		v = ctx.preSetElement( value );
	} else {
		v = value;
	}
	return ctx.setter( target, property, v, ctx.strict );
}


// EXPORTS //

module.exports = setElement;
