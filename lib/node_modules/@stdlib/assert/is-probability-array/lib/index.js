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
* Test if a value is an array-like object containing only probabilities.
*
* @module @stdlib/assert/is-probability-array
*
* @example
* var isNonNegativeNumberArray = require( '@stdlib/assert/is-probability-array' );
*
* var bool = isProbabilityArray( [ 0.5, new Number(0.8) ] );
* // returns true
*
* bool = isProbabilityArray( [ 0.8, 1.2 ] );
* // returns false
*
* bool = isProbabilityArray( [ 0.8, '0.2' ] );
* // returns false
*
* @example
* var isProbabilityArray = require( '@stdlib/assert/is-probability-array' ).primitives;
*
* var bool = isProbabilityArray( [ 1.0, 0.0, 0.5 ] );
* // returns true
*
* bool = isProbabilityArray( [ 0.3, new Number(0.4) ] );
* // returns false
*
* @example
* var isProbabilityArray = require( '@stdlib/assert/is-probability-array' ).objects;
*
* var bool = isProbabilityArray( [ new Number(0.7), new Number(1.0) ] );
* // returns true
*
* bool = isProbabilityArray( [ 1.0, 0.0, new Number(0.7) ] );
* // returns false
*/

// MODULES //

var isProbability = require( '@stdlib/assert/is-probability' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );


// MAIN //

var isProbabilityArray = arrayfun( isProbability );
setReadOnly( isProbabilityArray, 'primitives', arrayfun( isProbability.isPrimitive ) );
setReadOnly( isProbabilityArray, 'objects', arrayfun( isProbability.isObject ) );


// EXPORTS //

module.exports = isProbabilityArray;
