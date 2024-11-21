/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Calculate the Hamming distance between two equal-length strings.
*
* @module @stdlib/string/base/distances/hamming
*
* @example
* var hammingDistance = require( '@stdlib/string/base/distances/hamming' );
*
* var dist = hammingDistance( 'fly', 'ant' );
* // returns 3
*
* dist = hammingDistance( 'frog', 'blog' );
* // returns 2
*
* dist = hammingDistance( 'javascript', 'typescript' );
* // returns 4
*/


// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
