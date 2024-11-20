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

/**
* Creates a CustomError class.
*
* @private
* @param {(Error|SyntaxError|ReferenceError|EvalError|RangeError|TypeError|URIError)} ctor - error constructor
* @returns {CustomError} constructor
*/
function createClass( ctor ) {
	if ( !ctor ) {
		ctor = Error;
	}
	/**
	* Create a new object, which prototypically inherits from the Error constructor.
	*
	* @private
	* @constructor
	* @param {string} msg - error message
	* @returns {CustomError} custom error instance
	*/
	function CustomError( msg ) {
		this.name = 'CustomError';
		if ( msg ) {
			this.message = msg;
		}
		this.stack = ( new ctor() ).stack;
		return this;
	}

	/**
	* Create a prototype which inherits from the parent prototype.
	*/
	CustomError.prototype = Object.create( ctor.prototype );

	/**
	* Set the constructor.
	*/
	CustomError.prototype.constructor = CustomError;

	return CustomError;
}


// EXPORTS //

module.exports = createClass;
