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
* Node version.
*
* @module @stdlib/process/node-version
*
* @example
* var semver = require( 'semver' );
* var VERSION = require( '@stdlib/process/node-version' );
*
* if ( semver.lt( VERSION, '1.0.0' ) ) {
*    console.log( 'Running on a pre-io.js version...' );
* }
* else if ( semver.lt( VERSION, '4.0.0' ) ) {
*    console.log( 'Running on an io.js version...' );
* }
* else {
*    console.log( 'Running on a post-io.js version...' );
* }
*/

// MODULES //

var IS_NODE = require( '@stdlib/assert/is-node' );
var node = require( './version.js' );
var browser = require( './browser.js' );


// MAIN //

var VERSION;
if ( IS_NODE ) {
	VERSION = node;
} else {
	VERSION = browser;
}


// EXPORTS //

module.exports = VERSION;
