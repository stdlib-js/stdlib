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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace regexp
*/
var regexp = {};

/**
* @name reBasename
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/basename}
*/
setReadOnly( regexp, 'reBasename', require( '@stdlib/regexp/basename' ) );

/**
* @name reBasenamePosix
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/basename-posix}
*/
setReadOnly( regexp, 'reBasenamePosix', require( '@stdlib/regexp/basename-posix' ) );

/**
* @name reBasenameWindows
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/basename-windows}
*/
setReadOnly( regexp, 'reBasenameWindows', require( '@stdlib/regexp/basename-windows' ) );

/**
* @name reColorHexadecimal
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/color-hexadecimal}
*/
setReadOnly( regexp, 'reColorHexadecimal', require( '@stdlib/regexp/color-hexadecimal' ) );

/**
* @name reDecimalNumber
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/decimal-number}
*/
setReadOnly( regexp, 'reDecimalNumber', require( '@stdlib/regexp/decimal-number' ) );

/**
* @name reDirname
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/dirname}
*/
setReadOnly( regexp, 'reDirname', require( '@stdlib/regexp/dirname' ) );

/**
* @name reDirnamePosix
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/dirname-posix}
*/
setReadOnly( regexp, 'reDirnamePosix', require( '@stdlib/regexp/dirname-posix' ) );

/**
* @name reDirnameWindows
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/dirname-windows}
*/
setReadOnly( regexp, 'reDirnameWindows', require( '@stdlib/regexp/dirname-windows' ) );

/**
* @name reEOL
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/eol}
*/
setReadOnly( regexp, 'reEOL', require( '@stdlib/regexp/eol' ) );

/**
* @name reExtendedLengthPath
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/extended-length-path}
*/
setReadOnly( regexp, 'reExtendedLengthPath', require( '@stdlib/regexp/extended-length-path' ) );

/**
* @name reExtname
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/extname}
*/
setReadOnly( regexp, 'reExtname', require( '@stdlib/regexp/extname' ) );

/**
* @name reExtnamePosix
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/extname-posix}
*/
setReadOnly( regexp, 'reExtnamePosix', require( '@stdlib/regexp/extname-posix' ) );

/**
* @name reExtnameWindows
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/extname-windows}
*/
setReadOnly( regexp, 'reExtnameWindows', require( '@stdlib/regexp/extname-windows' ) );

/**
* @name reFilename
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/filename}
*/
setReadOnly( regexp, 'reFilename', require( '@stdlib/regexp/filename' ) );

/**
* @name reFilenamePosix
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/filename-posix}
*/
setReadOnly( regexp, 'reFilenamePosix', require( '@stdlib/regexp/filename-posix' ) );

/**
* @name reFilenameWindows
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/filename-windows}
*/
setReadOnly( regexp, 'reFilenameWindows', require( '@stdlib/regexp/filename-windows' ) );

/**
* @name reFunctionName
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/function-name}
*/
setReadOnly( regexp, 'reFunctionName', require( '@stdlib/regexp/function-name' ) );

/**
* @name reNativeFunction
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/native-function}
*/
setReadOnly( regexp, 'reNativeFunction', require( '@stdlib/regexp/native-function' ) );

/**
* @name reRegExp
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/regexp}
*/
setReadOnly( regexp, 'reRegExp', require( '@stdlib/regexp/regexp' ) );

/**
* @name reUncPath
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/unc-path}
*/
setReadOnly( regexp, 'reUncPath', require( '@stdlib/regexp/unc-path' ) );

/**
* @name reUtf16SurrogatePair
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/utf16-surrogate-pair}
*/
setReadOnly( regexp, 'reUtf16SurrogatePair', require( '@stdlib/regexp/utf16-surrogate-pair' ) );

/**
* @name reUtf16UnpairedSurrogate
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/utf16-unpaired-surrogate}
*/
setReadOnly( regexp, 'reUtf16UnpairedSurrogate', require( '@stdlib/regexp/utf16-unpaired-surrogate' ) );

/**
* @name reWhitespace
* @memberof regexp
* @readonly
* @type {Function}
* @see {@link module:@stdlib/regexp/whitespace}
*/
setReadOnly( regexp, 'reWhitespace', require( '@stdlib/regexp/whitespace' ) );


// EXPORTS //

module.exports = regexp;
