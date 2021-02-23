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
* Regular expression to split a POSIX filename.
*
* @module @stdlib/regexp/filename-posix
*
* @example
* var reFilenamePosix = require( '@stdlib/regexp/filename-posix' );
*
* var RE_FILENAME_POSIX = reFilenamePosix();
* var parts = RE_FILENAME_POSIX.exec( '/foo/bar/index.js' ).slice();
* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var reFilenamePosix = require( './main.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( reFilenamePosix, 'REGEXP', REGEXP );


// EXPORTS //

module.exports = reFilenamePosix;
