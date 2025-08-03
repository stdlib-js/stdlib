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
* Read a file as newline-delimited JSON.
*
* @module @stdlib/fs/read-ndjson
*
* @example
* var resolve = require( 'path' ).resolve;
* var readNDJSON = require( '@stdlib/fs/read-ndjson' );
*
* function clbk( error, data ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( data );
* }
*
* readNDJSON( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ), clbk );
*
* @example
* var resolve = require( 'path' ).resolve;
* var instanceOf = require( '@stdlib/assert/instance-of' );
* var readNDJSON = require( '@stdlib/fs/read-ndjson' );
*
* var out = readNDJSON.sync( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ) );
* if ( instanceOf( out, Error ) ) {
*     throw out;
* }
* console.log( out );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( main, 'sync', sync );


// EXPORTS //

module.exports = main;
