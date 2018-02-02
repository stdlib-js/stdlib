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
* Return the size (in bytes) of the canonical binary representation of a specified numeric type.
*
* @module @stdlib/utils/size-of
*
* @example
* var sizeOf = require( '@stdlib/utils/size-of' );
*
* var s = sizeOf( 'int8' );
* // returns 1
*
* s = sizeOf( 'uint8' );
* // returns 1
*
* s = sizeOf( 'int16' );
* // returns 2
*/

// MODULES //

var sizeOf = require( './main.js' );


// EXPORTS //

module.exports = sizeOf;
