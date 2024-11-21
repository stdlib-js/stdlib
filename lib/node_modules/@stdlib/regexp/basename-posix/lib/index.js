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
* Regular expression to capture the last part of a POSIX path.
*
* @module @stdlib/regexp/basename-posix
*
* @example
* var reBasenamePosix = require( '@stdlib/regexp/basename-posix' );
*
* var RE_BASENAME_POSIX = reBasenamePosix();
* var base = RE_BASENAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
* // returns 'index.js'
*
* @example
* var reBasenamePosix = require( '@stdlib/regexp/basename-posix' );
*
* var base = reBasenamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ]
* // returns 'index.js'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( main, 'REGEXP', REGEXP );


// EXPORTS //

module.exports = main;
