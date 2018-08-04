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
* Test if a value is a complex typed array.
*
* @module @stdlib/assert/is-complex-typed-array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var isComplexTypedArray = require( '@stdlib/assert/is-complex-typed-array' );
*
* var bool = isComplexTypedArray( new Complex128Array( 10 ) );
* // returns true
*/

// MODULES //

var isComplexTypedArray = require( './main.js' );


// EXPORTS //

module.exports = isComplexTypedArray;
