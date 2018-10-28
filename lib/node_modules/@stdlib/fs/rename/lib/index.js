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
* Rename a file.
*
* @module @stdlib/fs/rename
*
* @example
* var rename = require( '@stdlib/fs/rename' );
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* rename( './beep/boop.txt', './beep/foo.txt', done );
*
* @example
* var renameSync = require( '@stdlib/fs/rename' ).sync;
*
* var err = renameSync( './beep/boop.txt', './beep/foo.txt' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var rename = require( './main.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( rename, 'sync', sync );


// EXPORTS //

module.exports = rename;
