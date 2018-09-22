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
* Test if a value is a binary string.
*
* @module @stdlib/assert/is-binary-string
*
* @example
* var isBinaryString = require( '@stdlib/assert/is-binary-string' );
*
* var bool = isBinaryString( '1000101' );
* // returns true
*
* bool = isBinaryString( 'beep' );
* // returns false
*
* bool = isBinaryString( '' );
* // returns false
*/

// MODULES //

var isBinaryString = require( './main.js' );


// EXPORTS //

module.exports = isBinaryString;
