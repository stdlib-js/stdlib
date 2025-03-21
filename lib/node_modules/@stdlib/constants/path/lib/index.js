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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name DELIMITER
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/constants/path/delimiter}
*/
setReadOnly( ns, 'DELIMITER', require( '@stdlib/constants/path/delimiter' ) );

/**
* @name DELIMITER_POSIX
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/constants/path/delimiter-posix}
*/
setReadOnly( ns, 'DELIMITER_POSIX', require( '@stdlib/constants/path/delimiter-posix' ) );

/**
* @name DELIMITER_WIN32
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/constants/path/delimiter-win32}
*/
setReadOnly( ns, 'DELIMITER_WIN32', require( '@stdlib/constants/path/delimiter-win32' ) );

/**
* @name SEP
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/constants/path/sep}
*/
setReadOnly( ns, 'SEP', require( '@stdlib/constants/path/sep' ) );

/**
* @name SEP_POSIX
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/constants/path/sep-posix}
*/
setReadOnly( ns, 'SEP_POSIX', require( '@stdlib/constants/path/sep-posix' ) );

/**
* @name SEP_WIN32
* @memberof ns
* @readonly
* @type {string}
* @see {@link module:@stdlib/constants/path/sep-win32}
*/
setReadOnly( ns, 'SEP_WIN32', require( '@stdlib/constants/path/sep-win32' ) );


// EXPORTS //

module.exports = ns;
