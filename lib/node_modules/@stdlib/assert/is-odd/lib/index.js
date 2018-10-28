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
* Test if a value is an odd number.
*
* @module @stdlib/assert/is-odd
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' );
*
* var bool = isOdd( 5.0 );
* // returns true
*
* bool = isOdd( new Number( 5.0 ) );
* // returns true
*
* bool = isOdd( 4.0 );
* // returns false
*
* bool = isOdd( new Number( 4.0 ) );
* // returns false
*
* bool = isOdd( -3.14 );
* // returns false
*
* bool = isOdd( null );
* // returns false
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isPrimitive;
*
* var bool = isOdd( -5.0 );
* // returns true
*
* bool = isOdd( new Number( -5.0 ) );
* // returns false
*
* @example
* var isOdd = require( '@stdlib/assert/is-odd' ).isObject;
*
* var bool = isOdd( 5.0 );
* // returns false
*
* bool = isOdd( new Number( 5.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isOdd = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isOdd, 'isPrimitive', isPrimitive );
setReadOnly( isOdd, 'isObject', isObject );


// EXPORTS //

module.exports = isOdd;
