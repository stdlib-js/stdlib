// MODULES //

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path, { join } from 'path';
import httpServer from '@stdlib/_tools/docs/www/server';
import App from './../src/server.jsx';


// VARIABLES //

let APP_SHELL_TEMPLATE = fs.readFileSync( path.resolve('./build/index.html' ), 'utf8' );
APP_SHELL_TEMPLATE.replace( '<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString( <App /> )}</div>` );


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

