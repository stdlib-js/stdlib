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
* Test if a value is a negative integer.
*
* @module @stdlib/assert/is-negative-integer
*
* @example
* var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' );
*
* var bool = isNegativeInteger( -5.0 );
* // returns true
*
* bool = isNegativeInteger( new Number( -5.0 ) );
* // returns true
*
* bool = isNegativeInteger( 5.0 );
* // returns false
*
* bool = isNegativeInteger( -3.14 );
* // returns false
*
* bool = isNegativeInteger( null );
* // returns false
*
* @example
* var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' ).isPrimitive;
*
* var bool = isNegativeInteger( -3.0 );
* // returns true
*
* bool = isNegativeInteger( new Number( -3.0 ) );
* // returns false
*
* @example
* var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' ).isObject;
*
* var bool = isNegativeInteger( -3.0 );
* // returns false
*
* bool = isNegativeInteger( new Number( -3.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isNegativeInteger = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isNegativeInteger, 'isPrimitive', isPrimitive );
setReadOnly( isNegativeInteger, 'isObject', isObject );


// EXPORTS //

module.exports = isNegativeInteger;
