/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Test if a value is a square number.
*
* @module @stdlib/assert/is-square-number
*
* @example
* var isSquareNumber = require( '@stdlib/assert/is-square-number' );
*
* var bool = isSquareNumber( 4.0 );
* // returns true
*
* bool = isSquareNumber( new Number( 4.0 ) );
* // returns true
*
* bool = isSquareNumber( 3.14 );
* // returns false
*
* bool = isSquareNumber( -5.0 );
* // returns false
*
* bool = isSquareNumber( null );
* // returns false
*
* @example
* var isSquareNumber = require( '@stdlib/assert/is-square-number' ).isPrimitive;
*
* var bool = isSquareNumber( 4.0 );
* // returns true
*
* bool = isSquareNumber( new Number( 4.0 ) );
* // returns false
*
* @example
* var isSquareNumber = require( '@stdlib/assert/is-square-number' ).isObject;
*
* var bool = isSquareNumber( 4.0 );
* // returns false
*
* bool = isSquareNumber( new Number( 4.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isSquareNumber = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isSquareNumber, 'isPrimitive', isPrimitive );
setReadOnly( isSquareNumber, 'isObject', isObject );


// EXPORTS //

module.exports = isSquareNumber;
