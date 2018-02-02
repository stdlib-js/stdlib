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
* Partially apply function arguments from the right.
*
* @module @stdlib/utils/papply-right
*
* @example
* var papplyRight = require( '@stdlib/utils/papply-right' );
*
* function say( text, name ) {
*     return text + ', ' + name + '.';
* }
*
* var toGrace = papplyRight( say, 'Grace Hopper' );
*
* var str = toGrace( 'Hello' );
* // returns 'Hello, Grace Hopper.'
*
* str = toGrace( 'Thank you' );
* // returns 'Thank you, Grace Hopper.'
*/

// MODULES //

var papplyRight = require( './papply_right.js' );


// EXPORTS //

module.exports = papplyRight;
