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
* Regular expression to split a filename.
*
* @module @stdlib/regexp/filename
*
* @example
* var reFilename = require( '@stdlib/regexp/filename' );
* var RE_FILENAME = reFilename();
*
* // On a POSIX platform...
* var parts = RE_FILENAME.exec( '/foo/bar/index.js' ).slice();
* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
*
* @example
* var reFilename = require( '@stdlib/regexp/filename' );
* var RE_FILENAME = reFilename();
*
* // On a Windows platform...
* var parts = RE_FILENAME.exec( 'C:\\foo\\bar\\index.js' ).slice();
* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var posix = require( '@stdlib/regexp/filename-posix' ).REGEXP;
var win32 = require( '@stdlib/regexp/filename-windows' ).REGEXP;
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var reFilename = require( './main.js' );


// MAIN //

setReadOnly( reFilename, 'REGEXP', ( IS_WINDOWS ) ? win32 : posix );
setReadOnly( reFilename, 'REGEXP_POSIX', posix );
setReadOnly( reFilename, 'REGEXP_WIN32', win32 );


// EXPORTS //

module.exports = reFilename;
