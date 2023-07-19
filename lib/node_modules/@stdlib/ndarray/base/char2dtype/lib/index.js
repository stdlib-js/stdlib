/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Return the data type string associated with a provided single letter abbreviation.
*
* @module @stdlib/ndarray/base/char2dtype
*
* @example
* var char2dtype = require( '@stdlib/ndarray/base/char2dtype' );
*
* var out = char2dtype();
* // returns {...}
*
* @example
* var char2dtype = require( '@stdlib/ndarray/base/char2dtype' );
*
* var out = char2dtype( 'd' );
* // returns 'float64'
*
* out = char2dtype( '(' );
* // returns null
*/

// MODULES //

var char2dtype = require( './main.js' );


// EXPORTS //

module.exports = char2dtype;
