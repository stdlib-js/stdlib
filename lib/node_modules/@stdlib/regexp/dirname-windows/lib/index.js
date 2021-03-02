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
* Return a regular expression to capture a Windows path dirname.
*
* @module @stdlib/regexp/dirname-windows
*
* @example
* var reDirnameWindows = require( '@stdlib/regexp/dirname-windows' );
*
* var RE_DIRNAME_WINDOWS = reDirnameWindows();
* var dir = RE_DIRNAME_WINDOWS.exec( 'foo\\bar\\index.js' )[ 1 ];
* // returns 'foo\\bar'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var reDirnameWindows = require( './main.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( reDirnameWindows, 'REGEXP', REGEXP );


// EXPORTS //

module.exports = reDirnameWindows;
