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
* Test whether a value is an absolute HTTP(S) URI.
*
* @module @stdlib/assert/is-absolute-http-uri
*
* @example
* var isAbsoluteHttpURI = require( '@stdlib/assert/is-absolute-http-uri' );
*
* var bool = isAbsoluteHttpURI( 'http://example.com' );
* // returns true
*
* bool = isAbsoluteHttpURI( './beep/boop' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
