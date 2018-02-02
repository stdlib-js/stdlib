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
* Test if a string starts with the characters of another string.
*
* @module @stdlib/string/starts-with
*
* @example
* var startsWith = require( '@stdlib/string/starts-with' );
*
* var str = 'Fair is foul, and foul is fair, hover through fog and filthy air';
* var bool = startsWith( str, 'Fair' );
* // returns true
*
* bool = startsWith( str, 'fair' );
* // returns false
*
* bool = startsWith( str, 'foul', 8 );
* // returns true
*
* bool = startsWith( str, 'filthy', -10 );
* // returns true
*/

// MODULES //

var startsWith = require( './starts_with.js' );


// EXPORTS //

module.exports = startsWith;
