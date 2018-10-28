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
* Test if a value is a probability.
*
* @module @stdlib/assert/is-probability
*
* @example
* var isProbability = require( '@stdlib/assert/is-probability' );
*
* var bool = isProbability( 0.5 );
* // returns true
*
* bool = isProbability( new Number( 0.5 ) );
* // returns true
*
* bool = isProbability( 3.14 );
* // returns false
*
* bool = isProbability( -5.0 );
* // returns false
*
* bool = isProbability( null );
* // returns false
*
* @example
* var isProbability = require( '@stdlib/assert/is-probability' ).isPrimitive;
*
* var bool = isProbability( 0.3 );
* // returns true
*
* bool = isProbability( new Number( 0.3 ) );
* // returns false
*
* @example
* var isProbability = require( '@stdlib/assert/is-probability' ).isObject;
*
* var bool = isProbability( 0.77 );
* // returns false
*
* bool = isProbability( new Number( 0.77 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isProbability = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isProbability, 'isPrimitive', isPrimitive );
setReadOnly( isProbability, 'isObject', isObject );


// EXPORTS //

module.exports = isProbability;
