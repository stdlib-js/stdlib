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
* Read the entire contents of each file in a file list.
*
* @module @stdlib/fs/read-file-list
*
* @example
* var readFileList = require( '@stdlib/fs/read-file-list' );
*
* var list = [ __filename ];
*
* readFileList( list, onFiles );
*
* function onFiles( error, files ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( files );
* }
*
* @example
* var readFileList = require( '@stdlib/fs/read-file-list' ).sync;
*
* var list = [ __filename ];
* var files = readFileList( list );
*
* if ( files instanceof Error ) {
*     throw files;
* }
* console.dir( files );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var readFileList = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( readFileList, 'sync', sync );


// EXPORTS //

module.exports = readFileList;
