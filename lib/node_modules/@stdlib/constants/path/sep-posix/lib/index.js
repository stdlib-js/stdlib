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
* POSIX path segment separator.
*
* @module @stdlib/constants/path/sep-posix
* @type {string}
*
* @example
* var PATH_SEP_POSIX = require( '@stdlib/constants/path/sep-posix' );
*
* var parts = 'foo/bar/baz'.split( PATH_SEP_POSIX );
* // returns ['foo','bar','baz']
*/

// MAIN //

/**
* Path segment separator on POSIX platforms.
*
* @constant
* @type {string}
* @default '/'
*/
var PATH_SEP_POSIX = '/';


// EXPORTS //

module.exports = PATH_SEP_POSIX;
