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
* Test if a value is an empty string.
*
* @module @stdlib/assert/is-empty-string
*
* @example
* var isEmptyString = require( '@stdlib/assert/is-empty-string' );
*
* var bool = isEmptyString( '' );
* // returns true
*
* bool = isEmptyString( 'beep' );
* // returns false
*
* bool = isEmptyString( [] );
* // returns false
*
* @example
* var isEmptyString = require( '@stdlib/assert/is-empty-string' ).isObject;
*
* var bool = isEmptyString( new String( '' ) );
* // returns true
*
* bool = isEmptyString( '' );
* // returns false
*
* @example
* var isEmptyString = require( '@stdlib/assert/is-empty-string' ).isPrimitive;
*
* var bool = isEmptyString( '' );
* // returns true
*
* bool = isEmptyString( new String( '' ) );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isEmptyString = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isEmptyString, 'isPrimitive', isPrimitive );
setReadOnly( isEmptyString, 'isObject', isObject );


// EXPORTS //

module.exports = isEmptyString;
