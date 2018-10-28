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
* Read a file as JSON.
*
* @module @stdlib/fs/read-json
*
* @example
* var resolve = require( 'path' ).resolve;
* var readJSON = require( '@stdlib/fs/read-json' );
*
* function onJSON( error, data ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( data );
* }
*
* readJSON( resolve( __dirname, '..', 'package.json' ), onJSON );
*
* @example
* var resolve = require( 'path' ).resolve;
* var instanceOf = require( '@stdlib/assert/instance-of' );
* var readJSON = require( '@stdlib/fs/read-json' );
*
* var out = readJSON.sync( resolve( __dirname, '..', 'package.json' ) );
* if ( instanceOf( out, Error ) ) {
*     throw out;
* }
* console.dir( out );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var readJSON = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( readJSON, 'sync', sync );


// EXPORTS //

module.exports = readJSON;
