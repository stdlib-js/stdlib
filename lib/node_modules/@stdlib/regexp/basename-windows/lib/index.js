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
* Return a regular expression to capture the last part of a Windows path.
*
* @module @stdlib/regexp/basename-windows
*
* @example
* var reBasenameWindows = require( '@stdlib/regexp/basename-windows' );
* var RE_BASENAME_WINDOWS = reBasenameWindows();
*
* var base = RE_BASENAME_WINDOWS.exec( 'foo\\bar\\index.js' )[ 1 ];
* // returns 'index.js'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var reBasenameWindows = require( './main.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( reBasenameWindows, 'REGEXP', REGEXP );


// EXPORTS //

module.exports = reBasenameWindows;
