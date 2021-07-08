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
* Convert a string to constant case.
*
* @module @stdlib/string/constantcase
*
* @example
* var constantcase = require( '@stdlib/string/constantcase' );
*
* var str = constantcase( 'aBcDeF' );
* // returns 'ABCDEF'
*
* str = constantcase( 'Hello World!' );
* // returns 'HELLO_WORLD'
*
* str = constantcase( 'I am a robot' );
* // returns 'I_AM_A_ROBOT'
*/


// MODULES //

var constantcase = require( './main.js' );


// EXPORTS //

module.exports = constantcase;
