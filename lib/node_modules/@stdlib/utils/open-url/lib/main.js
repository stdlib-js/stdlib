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

// MODULES //

var spawn = require( 'child_process' ).spawn;
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var IS_DARWIN = require( '@stdlib/assert/is-darwin' );
var isURI = require( '@stdlib/assert/is-uri' );


// VARIABLES //

var ARGS;
var CMD;

// Mac:
if ( IS_DARWIN ) {
	CMD = 'open';
	ARGS = [];
}
// On Windows, ideally, we would use the `start` command; however, the rules regarding argument spacing and escaping are complex. Instead, we can use `cmd /c` which has built-in logic to address these rules.
else if ( IS_WINDOWS ) {
	CMD = 'cmd';

	// `cmd /c` interprets double-quoted first parameters as window titles. To work around this, we explicitly provide an empty string for the window title.
	ARGS = [ '/c', 'start', '""' ];
}
// All other `*nix` flavors:
else {
	CMD = 'xdg-open';
	ARGS = [];
}


// MAIN //

/**
* Opens a URL.
*
* @param {string} url - URL to open
* @throws {TypeError} must provide a valid URI
* @returns {Process} spawned process (unreferenced)
*
* @example
* var proc = openURL( 'https://google.com' );
*/
function openURL( url ) {
	var args;
	var proc;
	var i;
	if ( !isURI( url ) ) {
		throw new TypeError( 'invalid input value. Must provide a valid URI. Value: `' + url + '`.' );
	}
	args = new Array( ARGS.length );
	for ( i = 0; i < ARGS.length; i++ ) {
		args[ i ] = ARGS[ i ];
	}
	if ( IS_WINDOWS ) {
		// `&` characters must be escaped when passed to `start`:
		url = url.replace( /&/g, '^&' );
	}
	args.push( url );

	// Spawn a child process to open the URL:
	proc = spawn( CMD, args, {} );

	// To prevent the parent process waiting on the child process, we unreference the process to remove it from the parent's reference count:
	proc.unref();

	return proc;
}


// EXPORTS //

module.exports = openURL;
