/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Close a file descriptor.
*
* @module @stdlib/fs/close
*
* @example
* var openSync = require( '@stdlib/fs/open' ).sync;
* var close = require( '@stdlib/fs/close' );
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* var fd = openSync( __filename, 'r+' );
* if ( fd instanceof Error ) {
*     throw fd;
* }
*
* close( fd, done );
*
* @example
* var openSync = require( '@stdlib/fs/open' ).sync;
* var closeSync = require( '@stdlib/fs/close' ).sync;
*
* var fd = openSync( __filename, 'r+' );
*
* if ( fd instanceof Error ) {
*     throw fd;
* }
*
* var err = closeSync( fd );
* if ( err instanceof Error ) {
*     throw err;
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( main, 'sync', sync );


// EXPORTS //

module.exports = main;
