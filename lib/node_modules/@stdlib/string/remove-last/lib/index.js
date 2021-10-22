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
* Remove the last character(s) of a string.
*
* @module @stdlib/string/remove-last
*
* @example
* var removeLast = require( '@stdlib/string/remove-last' );
*
* var out = removeLast( 'last man standing' );
* // returns 'last man standin'
*
* out = removeLast( 'Hidden Treasures' );
* // returns 'Hidden Treasure';
*
* out = removeLast( '🐮🐷🐸🐵', 2 ) );
* // returns '🐮🐷'
*/

// MODULES //

var removeLast = require( './main.js' );


// EXPORTS //

module.exports = removeLast;
