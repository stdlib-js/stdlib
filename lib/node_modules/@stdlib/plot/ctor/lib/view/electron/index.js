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

// TODO: refactor. Remove disposable server. Create a server in the electron process and have it serve assets from local directories. Should be similar to SimpleServer.

// MODULES //

var spawn = require( 'child_process' ).spawn;
var path = require( 'path' );
var logger = require( 'debug' );
var toHTML = require( 'vdom-to-html' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var ENV = require( '@stdlib/process/env' );
var copy = require( '@stdlib/utils/copy' );
var merge = require( '@stdlib/utils/merge' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var httpServer = require( '@stdlib/net/disposable-http-server' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var debug = logger( 'plot:view:electron:main' );
var electron = tryRequire( '@stdlib/electron' );


// MAIN //

/**
* Opens a plot in an electron window.
*
* @private
* @param {Plot} plot - plot context
* @param {VTree} vtree - virtual tree
* @throws {Error} Electron must be properly installed
*/
function view( plot, vtree ) {
	var index;
	var html;
	var opts;
	var css;

	if ( instanceOf( electron, Error ) ) {
		throw new Error( 'invalid operation. Unable to load Electron. Ensure Electron is installed and try again.' );
	}
	debug( 'Transforming virtual DOM tree to HTML...' );
	html = toHTML( vtree );

	// Define `fs` options:
	opts = {
		'encoding': 'utf8'
	};

	debug( 'Injecting HTML into HTML template...' );
	index = path.join( __dirname, 'index.html' );
	index = readFileSync( index, opts );
	index = index.replace( /\{\{plot\}\}/, html );

	debug( 'Injecting CSS into HTML template...' );
	css = path.join( __dirname, 'css', 'reset.css' );
	css = readFileSync( css, opts );
	index = index.replace( /\{\{reset\}\}/, css );

	css = path.join( __dirname, 'css', 'colors.css' );
	css = readFileSync( css, opts );
	index = index.replace( /\{\{colors\}\}/, css );

	css = path.join( __dirname, 'css', 'styles.css' );
	css = readFileSync( css, opts );
	index = index.replace( /\{\{styles\}\}/, css );

	debug( 'Creating a disposable HTTP server...' );
	opts = {
		'html': index,
		'open': false
	};
	httpServer( opts, onReady );

	/**
	* Callback invoked once a server is ready to receive requests.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Server} server - HTTP server
	* @throws {Error} unexpected error
	*/
	function onReady( error, server ) {
		var child;
		var addr;
		var opts;
		var env;
		if ( error ) {
			throw error;
		}
		addr = server.address();
		debug( 'HTTP server initialized. Server is listening for requests on %s:%d.', addr.address, addr.port );

		debug( 'Electron executable: %s.', electron );

		// TODO: extract fixed env vars to config file and then won't need to pass via environment variables, but can simply require
		env = {
			'SERVER_PORT': addr.port,
			'SERVER_ADDRESS': addr.address,
			'PLOT_WIDTH': plot.width,
			'PLOT_HEIGHT': plot.height,
			'PLOT_APP_PATH': __dirname,
			'PLOT_MIN_WIDTH': 100,
			'PLOT_MIN_HEIGHT': 100,
			'PLOT_TITLE': plot.title || 'stdlib'
		};
		debug( 'Electron process environment variables: %s.', JSON.stringify( env ) );

		opts = {
			'cwd': __dirname,
			'detached': true,
			'stdio': 'ignore'
		};
		debug( 'Electron process options: %s.', JSON.stringify( opts ) );

		// Merge the current process' environment variables:
		opts.env = merge( {}, copy( ENV ), env );

		debug( 'Spawning an electron process...' );
		child = spawn( electron, [ './main.js' ], opts );
		child.unref();
	}
}


// EXPORTS //

module.exports = view;
