#!/usr/bin/env node

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

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var logger = require( 'debug' );
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var completions = require( './completions' );


// VARIABLES //

var debug = logger( 'sublime-completions' );

// Output directory:
var DIR = resolve( __dirname, '..' );


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var fopts;
	var conf;
	var out;
	var len;
	var i;

	fopts = {
		'encoding': 'utf8'
	};

	len = completions.length;
	debug( 'Generating %d completions files...', len );

	for ( i = 0; i < len; i++ ) {
		conf = completions[ i ];

		debug( 'Generating completions (%s)...', conf.name );
		out = {
			'scope': conf.scope,
			'completions': conf.completions
		};
		out = JSON.stringify( out, null, '\t' );

		debug( 'Writing completions file...' );
		fpath = join( DIR, 'stdlib-'+conf.name+'.sublime-completions' );
		writeFileSync( fpath, out, fopts );

		debug( 'Successfully generated completions file.' );
	}
	debug( 'Finished generating completions files.' );
}

main();
