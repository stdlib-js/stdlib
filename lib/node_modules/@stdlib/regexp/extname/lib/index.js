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
* Return a regular expression to capture a filename extension.
*
* @module @stdlib/regexp/extname
*
* @example
* var reExtname = require( '@stdlib/regexp/extname' );
* var RE_EXTNAME = reExtname();
*
* // On a POSIX platform...
* var ext = RE_EXTNAME.exec( '/foo/bar/index.js' )[ 1 ];
* // returns '.js'
*
* @example
* var reExtname = require( '@stdlib/regexp/extname' );
* var RE_EXTNAME = reExtname();
*
* // On a Windows platform...
* var ext = RE_EXTNAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
* // returns '.js'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var posix = require( '@stdlib/regexp/extname-posix' ).REGEXP;
var win32 = require( '@stdlib/regexp/extname-windows' ).REGEXP;
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var reExtname = require( './main.js' );


// MAIN //

setReadOnly( reExtname, 'REGEXP', ( IS_WINDOWS ) ? win32 : posix );
setReadOnly( reExtname, 'REGEXP_POSIX', posix );
setReadOnly( reExtname, 'REGEXP_WIN32', win32 );


// EXPORTS //

module.exports = reExtname;
