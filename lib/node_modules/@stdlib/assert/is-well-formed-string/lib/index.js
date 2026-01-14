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

/**
* Test if a string is well-formed.
*
* @module @stdlib/assert/is-well-formed-string
*
* @example
* var isWellFormedString = require( '@stdlib/assert/is-well-formed-string' );
*
* var bool = isWellFormedString( '' );
* // returns true
*
* bool = isWellFormedString( new String( '' ) );
* // returns true
*
* bool = isWellFormedString( '\uDBFF' );
* // returns false
*
* bool = isWellFormedString( '\uDBFFFF\uDBFF' );
* // returns false
*
* bool = isWellFormedString( [] );
* // returns false
*
* bool = isWellFormedString( '-5' );
* // returns true
*
* bool = isWellFormedString( null );
* // returns false
*
* @example
* // Use interface to check for well-formed string primitives...
* var isWellFormedString = require( '@stdlib/assert/is-well-formed-string' ).isPrimitive;
*
* var bool = isWellFormedString( '\uDC00' );
* // returns false
*
* bool = isWellFormedString( new String( '' ) );
* // returns false
*
* @example
* // Use interface to check for well-formed string objects...
* var isWellFormedString = require( '@stdlib/assert/is-well-formed-string' ).isObject;
*
* var bool = isWellFormedString( '\uDC00' );
* // returns false
*
* bool = isWellFormedString( new String( '' ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( main, 'isPrimitive', isPrimitive );
setReadOnly( main, 'isObject', isObject );


// EXPORTS //

module.exports = main;
