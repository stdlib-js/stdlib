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
* Test if a value is a nonnegative number.
*
* @module @stdlib/assert/is-nonnegative-number
*
* @example
* var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' );
*
* var bool = isNonNegativeNumber( 5.0 );
* // returns true
*
* bool = isNonNegativeNumber( new Number( 5.0 ) );
* // returns true
*
* bool = isNonNegativeNumber( 3.14 );
* // returns true
*
* bool = isNonNegativeNumber( -5.0 );
* // returns false
*
* bool = isNonNegativeNumber( null );
* // returns false
*
* @example
* var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' ).isPrimitive;
*
* var bool = isNonNegativeNumber( 3.0 );
* // returns true
*
* bool = isNonNegativeNumber( new Number( 3.0 ) );
* // returns false
*
* @example
* var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' ).isObject;
*
* var bool = isNonNegativeNumber( 3.0 );
* // returns false
*
* bool = isNonNegativeNumber( new Number( 3.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isNonNegativeNumber = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isNonNegativeNumber, 'isPrimitive', isPrimitive );
setReadOnly( isNonNegativeNumber, 'isObject', isObject );


// EXPORTS //

module.exports = isNonNegativeNumber;
