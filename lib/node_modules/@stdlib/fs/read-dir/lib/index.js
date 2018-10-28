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
* Read the contents of a directory.
*
* @module @stdlib/fs/read-dir
*
* @example
* var readDir = require( '@stdlib/fs/read-dir' );
*
* function onRead( error, data ) {
*     if ( error ) {
*         console.error( error );
*     } else {
*         console.log( data );
*     }
* }
* readDir( __dirname, onRead );
*
* @example
* var readDirSync = require( '@stdlib/fs/read-dir' ).sync;
*
* var out = readDirSync( __dirname );
* if ( out instanceof Error ) {
*     throw out;
* }
* console.log( out );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var readDir = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( readDir, 'sync', sync );


// EXPORTS //

module.exports = readDir;
