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
* Test if a value is a generator object.
*
* @module @stdlib/assert/is-generator-object
*
* @example
* var isGeneratorObject = require( '@stdlib/assert/is-generator-object' );
*
* function* generateID() {
*     var idx = 0;
*     while ( idx < idx+1 ) {
*         yield idx;
*         idx += 1;
*     }
* }
*
* var bool = isGeneratorObject( generateID() );
* // returns true
*
* bool = isGeneratorObject( generateID );
* // returns false
*
* bool = isGeneratorObject( {} );
* // returns false
*/

// MODULES //

var isGeneratorObject = require( './main.js' );


// EXPORTS //

module.exports = isGeneratorObject;
