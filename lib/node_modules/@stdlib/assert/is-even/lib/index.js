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
* Test if a value is an even number.
*
* @module @stdlib/assert/is-even
*
* @example
* var isEven = require( '@stdlib/assert/is-even' );
*
* var bool = isEven( 4.0 );
* // returns true
*
* bool = isEven( new Number( 4.0 ) );
* // returns true
*
* bool = isEven( 3.0 );
* // returns false
*
* bool = isEven( new Number( 5.0 ) );
* // returns false
*
* bool = isEven( -3.14 );
* // returns false
*
* bool = isEven( null );
* // returns false
*
* @example
* // Use interface to check for even number primitives...
* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
*
* var bool = isEven( -4.0 );
* // returns true
*
* bool = isEven( new Number( -4.0 ) );
* // returns false
*
* @example
* // Use interface to check for even number objects...
* var isEven = require( '@stdlib/assert/is-even' ).isObject;
*
* var bool = isEven( 4.0 );
* // returns false
*
* bool = isEven( new Number( 4.0 ) );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isEven = require( './main.js' );
var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

setReadOnly( isEven, 'isPrimitive', isPrimitive );
setReadOnly( isEven, 'isObject', isObject );


// EXPORTS //

module.exports = isEven;
