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

// MODULES //

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path, { join } from 'path';
import httpServer from '@stdlib/_tools/docs/www/server';
import App from './../src/server.jsx';


// VARIABLES //

let APP_SHELL_TEMPLATE = fs.readFileSync( path.resolve('./build/index.html' ), 'utf8' );
APP_SHELL_TEMPLATE = APP_SHELL_TEMPLATE.replace( '<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString( <App /> )}</div>` );


// MAIN //

const opts = {
	'port': 7331,
	'address': '0.0.0.0',
	'template': APP_SHELL_TEMPLATE,
	'root': join( __dirname, '..', 'build', 'assets', 'v0.0.87' ),
	'static': join( __dirname, '..', 'build' ),
	'logger': true
};
const createServer = httpServer( opts );

function done( error, fastify ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Server is running...' );
}

createServer( done );

