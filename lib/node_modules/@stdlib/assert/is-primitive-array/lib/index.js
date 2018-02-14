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
* Test if a value is an array-like object containing only JavaScript primitives.
*
* @module @stdlib/assert/is-primitive-array
*
* @example
* var isPrimitiveArray = require( '@stdlib/assert/is-primitive-array' );
*
* var bool = isPrimitiveArray( [ '3', 2, null ] );
* // returns true
*
* bool = isPrimitiveArray( [ {}, 2, 1 ] );
* // returns false
*
* bool = isPrimitiveArray( [ new String('abc'), '3.0' ] );
* // returns false
*/

// MODULES //

var isPrimitiveArray = require( './main.js' );


// EXPORTS //

module.exports = isPrimitiveArray;
