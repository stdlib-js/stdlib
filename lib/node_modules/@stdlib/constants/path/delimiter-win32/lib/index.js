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
* Windows path delimiter.
*
* @module @stdlib/constants/path/delimiter-win32
* @type {string}
*
* @example
* var PATH_DELIMITER_WIN32 = require( '@stdlib/constants/path/delimiter-win32' );
*
* var PATH = 'C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\node\\';
* var paths = PATH.split( PATH_DELIMITER_WIN32 );
* // returns ['C:\\Windows\\system32','C:\\Windows','C:\\Program Files\\node\\']
*/

// MAIN //

/**
* Path delimiter on Windows platforms.
*
* @constant
* @type {string}
* @default ';'
*/
var PATH_DELIMITER_WIN32 = ';';


// EXPORTS //

module.exports = PATH_DELIMITER_WIN32;
