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
* Create a simple HTTP server.
*
* @module @stdlib/net/simple-http-server
*
* @example
* var httpServer = require( '@stdlib/net/simple-http-server' );
*
* var opts = {
*     'dir': './',
*     'port': 7331,
*     'hostname': 'localhost',
*     'open': false
* };
* httpServer( opts, onReady );
*
* function onReady( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     server.close();
* }
*/

// MODULES //

var httpServer = require( './server.js' );


// EXPORTS //

module.exports = httpServer;
