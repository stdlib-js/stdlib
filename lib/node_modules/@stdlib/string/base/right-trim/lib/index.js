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
* Trim whitespace characters from the end of a string.
*
* @module @stdlib/string/base/right-trim
*
* @example
* var rtrim = require( '@stdlib/string/base/right-trim' );
*
* var out = rtrim( '   Whitespace   ' );
* // returns '   Whitespace'
*
* out = rtrim( '\t\t\tTabs\t\t\t' );
* // returns '\t\t\tTabs'
*
* out = rtrim( '\n\n\nNew Lines\n\n\n' );
* // returns '\n\n\nNew Lines'
*/

// MODULES //

var HAS_BUILTIN = require( './has_builtin.js' );
var polyfill = require( './polyfill.js' );
var main = require( './main.js' );


// MAIN //

var rtrim;
if ( HAS_BUILTIN ) {
	rtrim = main;
} else {
	rtrim = polyfill;
}


// EXPORTS //

module.exports = rtrim;
