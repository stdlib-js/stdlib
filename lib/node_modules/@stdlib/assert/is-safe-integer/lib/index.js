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
* Test if a value is a safe integer.
*
* @module @stdlib/assert/is-safe-integer
*
* @example
* var isSafeInteger = require( '@stdlib/assert/is-safe-integer' );
*
* var bool = isSafeInteger( 5.0 );
* // returns true
*
* bool = isSafeInteger( new Number( 5.0 ) );
* // returns true
*
* bool = isSafeInteger( 2.0e200 );
* // returns false
*
* bool = isSafeInteger( -3.14 );
* // returns false
*
* bool = isSafeInteger( null );
* // returns false
*
* @example
* var isSafeInteger = require( '@stdlib/assert/is-safe-integer' ).isPrimitive;
*
* var bool = isSafeInteger( -3.0 );
* // returns true
*
* bool = isSafeInteger( new Number( -3.0 ) );
* // returns false
*
* @example
* var isSafeInteger = require( '@stdlib/assert/is-safe-integer' ).isObject;
*
* var bool = isSafeInteger( 3.0 );
* // returns false
*
* bool = isSafeInteger( new Number( 3.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isSafeInteger = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isSafeInteger, 'isPrimitive', isPrimitive );
setReadOnly( isSafeInteger, 'isObject', isObject );


// EXPORTS //

module.exports = isSafeInteger;
