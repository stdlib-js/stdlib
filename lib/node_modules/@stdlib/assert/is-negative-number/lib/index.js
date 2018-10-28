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
* Test if a value is a negative number.
*
* @module @stdlib/assert/is-negative-number
*
* @example
* var isNegativeNumber = require( '@stdlib/assert/is-negative-number' );
*
* var bool = isNegativeNumber( -5.0 );
* // returns true
*
* bool = isNegativeNumber( new Number( -5.0 ) );
* // returns true
*
* bool = isNegativeNumber( -3.14 );
* // returns true
*
* bool = isNegativeNumber( 5.0 );
* // returns false
*
* bool = isNegativeNumber( null );
* // returns false
*
* @example
* // Use interface to check for negative number primitives...
* var isNegativeNumber = require( '@stdlib/assert/is-negative-number' ).isPrimitive;
*
* var bool = isNegativeNumber( -3.0 );
* // returns true
*
* bool = isNegativeNumber( new Number( -3.0 ) );
* // returns false
*
* @example
* // Use interface to check for negative number objects...
* var isNegativeNumber = require( '@stdlib/assert/is-negative-number' ).isObject;
*
* var bool = isNegativeNumber( -3.0 );
* // returns false
*
* bool = isNegativeNumber( new Number( -3.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isNegativeNumber = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isNegativeNumber, 'isPrimitive', isPrimitive );
setReadOnly( isNegativeNumber, 'isObject', isObject );


// EXPORTS //

module.exports = isNegativeNumber;
