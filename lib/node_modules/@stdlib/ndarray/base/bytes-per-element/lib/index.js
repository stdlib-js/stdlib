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
* Return the number of bytes per element provided an underlying array data type.
*
* @module @stdlib/ndarray/base/bytes-per-element
*
* @example
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
*
* var nbytes = bytesPerElement( 'float64' );
* // returns 8
*
* nbytes = bytesPerElement( 'generic' );
* // returns null
*/

// MODULES //

var bytesPerElement = require( './main.js' );


// EXPORTS //

module.exports = bytesPerElement;
