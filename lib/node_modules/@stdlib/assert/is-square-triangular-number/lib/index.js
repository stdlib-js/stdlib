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
* Test if a value is a square triangular number.
*
* @module @stdlib/assert/is-square-triangular-number
*
* @example
* var isSquareTriangularNumber = require( '@stdlib/assert/is-square-triangular-number' );
*
* var bool = isSquareTriangularNumber( 36.0 );
* // returns true
*
* bool = isSquareTriangularNumber( new Number( 36.0 ) );
* // returns true
*
* bool = isSquareTriangularNumber( 3.14 );
* // returns false
*
* bool = isSquareTriangularNumber( -5.0 );
* // returns false
*
* bool = isSquareTriangularNumber( null );
* // returns false
*
* @example
* var isSquareTriangularNumber = require( '@stdlib/assert/is-square-triangular-number' ).isPrimitive;
*
* var bool = isSquareTriangularNumber( 36.0 );
* // returns true
*
* bool = isSquareTriangularNumber( new Number( 36.0 ) );
* // returns false
*
* @example
* var isSquareTriangularNumber = require( '@stdlib/assert/is-square-triangular-number' ).isObject;
*
* var bool = isSquareTriangularNumber( 36.0 );
* // returns false
*
* bool = isSquareTriangularNumber( new Number( 36.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isSquareTriangularNumber = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isSquareTriangularNumber, 'isPrimitive', isPrimitive );
setReadOnly( isSquareTriangularNumber, 'isObject', isObject );


// EXPORTS //

module.exports = isSquareTriangularNumber;
