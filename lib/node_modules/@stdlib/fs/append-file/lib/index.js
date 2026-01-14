/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Append data to a file.
*
* @module @stdlib/fs/append-file
*
* @example
* var appendFile = require( '@stdlib/fs/append-file' );
*
* function onAppend( err ) {
*     if ( err ) {
*         console.log( err.message );
*     }
* }
*
* appendFile( './beep/boop.txt', 'appended something\n', onAppend );
*
* @example
* var appendFileSync = require( '@stdlib/fs/append-file' ).sync;
*
* var err = appendFileSync( './beep/boop.txt', 'data to append\n' );
* if ( err instanceof Error ) {
*     throw err;
* }
*/


// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var async = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( async, 'sync', sync );


// EXPORTS //

module.exports = async;
