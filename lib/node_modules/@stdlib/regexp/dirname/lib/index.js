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
* Return a regular expression to capture a path dirname.
*
* @module @stdlib/regexp/dirname
*
* @example
* var reDirname = require( '@stdlib/regexp/dirname' );
* var RE_DIRNAME = reDirname();
*
* // On a POSIX platform...
* var dir = RE_DIRNAME.exec( '/foo/bar/index.js' )[ 1 ];
* // returns '/foo/bar'
*
* @example
* var reDirname = require( '@stdlib/regexp/dirname' );
* var RE_DIRNAME = reDirname();
*
* // On a Windows platform...
* var dir = RE_DIRNAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
* // returns 'C:\\foo\\bar'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var posix = require( '@stdlib/regexp/dirname-posix' ).REGEXP;
var win32 = require( '@stdlib/regexp/dirname-windows' ).REGEXP;
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var reDirname = require( './main.js' );


// MAIN //

setReadOnly( reDirname, 'REGEXP', ( IS_WINDOWS ) ? win32 : posix );
setReadOnly( reDirname, 'REGEXP_POSIX', posix );
setReadOnly( reDirname, 'REGEXP_WIN32', win32 );


// EXPORTS //

module.exports = reDirname;
