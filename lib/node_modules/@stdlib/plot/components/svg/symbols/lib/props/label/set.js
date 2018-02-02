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

var logger = require( 'debug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );


// VARIABLES //

var debug = logger( 'symbols:set:label' );


// MAIN //

/**
* Sets the label.
*
* @private
* @param {(string|Function)} label - label
* @throws {TypeError} must be a string primitive or a function
*/
function set( label ) {
	/* eslint-disable no-invalid-this */
	if (
		!isString( label ) &&
		!isFunction( label )
	) {
		throw new TypeError( 'invalid value. `label` must be a string primitive or a function. Value: `' + label + '.`' );
	}
	debug( 'Current value: %d.', this._label );

	this._label = label;
	debug( 'New Value: %d.', this._label );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
