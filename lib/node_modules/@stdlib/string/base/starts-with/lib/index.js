/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* @module @stdlib/string/base/starts-with
*
* @example
* var startsWith = require( '@stdlib/string/base/starts-with' );
*
* var str = 'Fair is foul, and foul is fair, hover through fog and filthy air';
* var bool = startsWith( str, 'Fair', 0 );
* // returns true
*
* bool = startsWith( str, 'fair', 0 );
* // returns false
*
* bool = startsWith( str, 'foul', 8 );
* // returns true
*
* bool = startsWith( str, 'filthy', -10 );
* // returns true
*/

// MODULES //

var HAS_BUILTIN = require( './has_builtin.js' );
var polyfill = require( './polyfill.js' );
var main = require( './main.js' );


// MAIN //

var startsWith;
if ( HAS_BUILTIN ) {
	startsWith = main;
} else {
	startsWith = polyfill;
}


// EXPORTS //

module.exports = startsWith;
