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
* Convert a string to snake case.
*
* @module @stdlib/string/snakecase
*
* @example
* var snakecase = require( '@stdlib/string/snakecase' );
*
* var str = snakecase( 'Foo Bar' );
* // returns 'foo_bar'
*
* str = snakecase( 'I am a tiny little house' );
* // returns 'i_am_a_tiny_little_house'
*/

// MODULES //

var snakecase = require( './main.js' );


// EXPORTS //

module.exports = snakecase;
