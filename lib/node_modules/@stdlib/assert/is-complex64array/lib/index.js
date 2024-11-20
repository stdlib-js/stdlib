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
* Test if a value is a Complex64Array.
*
* @module @stdlib/assert/is-complex64array
*
* @example
* var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
*
* var bool = isComplex64Array( new Complex64Array( 10 ) );
* // returns true
*
* bool = isComplex64Array( [] );
* // returns false
*/

// MODULES //

var isComplex64Array = require( './main.js' );


// EXPORTS //

module.exports = isComplex64Array;
