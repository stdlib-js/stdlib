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
* Platform-specific path delimiter.
*
* @module @stdlib/constants/path/delimiter
* @type {string}
*
* @example
* var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
* var PATH_DELIMITER = require( '@stdlib/constants/path/delimiter' );
*
* var PATH;
* var paths;
*
* if ( IS_WINDOWS ) {
*     PATH = 'C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\node\\';
*     paths = PATH.split( PATH_DELIMITER );
*     // returns ['C:\\Windows\\system32','C:\\Windows','C:\\Program Files\\node\\']
* } else {
*     PATH = '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin';
*     paths = PATH.split( PATH_DELIMITER );
*     // returns ['/usr/bin','/bin','/usr/sbin','/sbin','/usr/local/bin']
* }
*/

// MODULES //

var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var PATH_DELIMITER_WIN32 = require( '@stdlib/constants/path/delimiter-win32' );
var PATH_DELIMITER_POSIX = require( '@stdlib/constants/path/delimiter-posix' );


// MAIN //

var PATH_DELIMITER;
if ( IS_WINDOWS ) {
	PATH_DELIMITER = PATH_DELIMITER_WIN32;
} else {
	PATH_DELIMITER = PATH_DELIMITER_POSIX;
}


// EXPORTS //

module.exports = PATH_DELIMITER;
