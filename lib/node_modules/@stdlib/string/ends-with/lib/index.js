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
* Test if a string ends with the characters of another string.
*
* @module @stdlib/string/ends-with
*
* @example
* var endsWith = require( '@stdlib/string/ends-with' );
*
* var str = 'Fair is foul, and foul is fair, hover through fog and filthy air';
*
* var bool = endsWith( str, 'air' );
* // returns true
*
* bool = endsWith( str, 'fair' );
* // returns false
*
* bool = endsWith( str, 'fair', 30 );
* // returns true
*
* bool = endsWith( str, 'fair', -34 );
* // returns true
*/

// MODULES //

var endsWith = require( './ends_with.js' );


// EXPORTS //

module.exports = endsWith;
