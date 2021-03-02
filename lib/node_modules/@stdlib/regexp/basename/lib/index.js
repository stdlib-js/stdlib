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
* Return a regular expression to capture the last part of a path.
*
* @module @stdlib/regexp/basename
*
* @example
* var reBasename = require( '@stdlib/regexp/basename' );
* var RE_BASENAME = reBasename();
*
* // On a POSIX platform...
* var base = RE_BASENAME.exec( '/foo/bar/index.js' )[ 1 ];
* // returns 'index.js'
*
* @example
* var reBasename = require( '@stdlib/regexp/basename' );
* var RE_BASENAME = reBasename();
*
* // On a Windows platform...
* var base = RE_BASENAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
* // returns 'index.js'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var posix = require( '@stdlib/regexp/basename-posix' ).REGEXP;
var win32 = require( '@stdlib/regexp/basename-windows' ).REGEXP;
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var reBasename = require( './main.js' );


// MAIN //

setReadOnly( reBasename, 'REGEXP', ( IS_WINDOWS ) ? win32 : posix );
setReadOnly( reBasename, 'REGEXP_POSIX', posix );
setReadOnly( reBasename, 'REGEXP_WIN32', win32 );


// EXPORTS //

module.exports = reBasename;
