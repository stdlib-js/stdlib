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
* Write data to a file.
*
* @module @stdlib/fs/write-file
*
* @example
* var writeFile = require( '@stdlib/fs/write-file' );
*
* function onWrite( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* writeFile( './beep/boop.txt', 'beep boop\n', onWrite );
*
* @example
* var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
*
* var err = writeFileSync( './beep/boop.txt', 'beep boop\n' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var writeFile = require( './main.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( writeFile, 'sync', sync );


// EXPORTS //

module.exports = writeFile;
