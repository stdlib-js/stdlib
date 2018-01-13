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

var writeFileSync = require( 'fs' ).writeFileSync;
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var logger = require( 'debug' );
var getKeys = require( 'object-keys' ).shim();
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var licenseHeader = require( '@stdlib/_tools/licenses/header' );


// VARIABLES //

var debug = logger( 'license-headers' );

// SPDX license identifier:
var SPDX = 'Apache-2.0';

// Configuration for each license header snippet:
var LANGS = {
	'awk': {
		'trigger': 'stdlib.license',
		'scope': 'source.awk',
		'desc': 'Snippet: AWK license header'
	},
	'c': {
		'trigger': 'stdlib.license',
		'scope': 'source.c',
		'desc': 'Snippet: C license header'
	},
	'cpp': {
		'trigger': 'stdlib.license',
		'scope': 'source.c++',
		'desc': 'Snippet: C++ license header'
	},
	'css': {
		'trigger': 'stdlib.license',
		'scope': 'source.css',
		'desc': 'Snippet: CSS license header'
	},
	'f': {
		'trigger': 'stdlib.license',
		'scope': 'source.modern-fortran',
		'desc': 'Snippet: Fortran license header (modern)'
	},
	'gyp': {
		'trigger': 'stdlib.license.gyp',
		'scope': '', // gyp
		'desc': 'Snippet: GYP license header'
	},
	'gypi': {
		'trigger': 'stdlib.license.gypi',
		'scope': '', // gyp
		'desc': 'Snippet: GYP include license header'
	},
	'html': {
		'trigger': 'stdlib.license',
		'scope': 'text.html',
		'desc': 'Snippet: HTML license header'
	},
	'ini': {
		'trigger': 'stdlib.license.ini',
		'scope': '', // ini
		'desc': 'Snippet: INI license header'
	},
	'jl': {
		'trigger': 'stdlib.license',
		'scope': 'source.julia',
		'desc': 'Snippet: Julia license header'
	},
	'js': {
		'trigger': 'stdlib.license',
		'scope': 'source.js',
		'desc': 'Snippet: JavaScript license header'
	},
	'md': {
		'trigger': 'stdlib.license',
		'scope': 'text.html.markdown',
		'desc': 'Snippet: Markdown license header'
	},
	'mk': {
		'trigger': 'stdlib.license',
		'scope': 'source.makefile',
		'desc': 'Snippet: Makefile license header'
	},
	'py': {
		'trigger': 'stdlib.license',
		'scope': 'source.python',
		'desc': 'Snippet: Python license header'
	},
	'r': {
		'trigger': 'stdlib.license',
		'scope': 'source.r',
		'desc': 'Snippet: R license header'
	},
	'sh': {
		'trigger': 'stdlib.license',
		'scope': 'source.shell',
		'desc': 'Snippet: Shell script license header'
	},
	'yml': {
		'trigger': 'stdlib.license',
		'scope': 'source.yaml',
		'desc': 'Snippet: YAML license header'
	},
	'default': {
		'trigger': 'stdlib.license',
		'scope': '',
		'desc': 'Snippet: default license header'
	}
};

// Default header "style":
var DEFAULT_HEADER_LANG = 'js';

// File read/write options:
var FOPTS = {
	'encoding': 'utf8'
};

// Snippet template:
var TEMPLATE = readFileSync( join( __dirname, 'template.txt' ), FOPTS );

// Output directory:
var OUT_DIR = resolve( __dirname, '..' );

// License header options:
var OPTS = {
	'year': ( new Date() ).getFullYear(),
	'copyright': 'The Stdlib Authors'
};


// FUNCTIONS //

/**
* Returns a license header snippet.
*
* @private
* @param {string} content - snippet content
* @param {Object} conf - snippet configuration
* @param {string} conf.trigger - tab trigger
* @param {string} conf.scope - snippet scope
* @param {string} conf.desc - snippet description
* @returns {string} snippet
*/
function createSnippet( content, conf ) {
	var snippet = replace( TEMPLATE, '{{SNIPPET}}', content );
	snippet = replace( snippet, '{{TAB_TRIGGER}}', conf.trigger );
	snippet = replace( snippet, '{{SCOPE}}', conf.scope );
	return replace( snippet, '{{DESCRIPTION}}', conf.desc );
} // end FUNCTION createSnippet()


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var snippet;
	var header;
	var fpath;
	var keys;
	var lang;
	var conf;
	var len;
	var i;

	keys = getKeys( LANGS );
	len = keys.length;

	debug( 'Generating %d license header snippets...', len );
	for ( i = 0; i < len; i++ ) {
		lang = keys[ i ];

		debug( 'Generating license header for `%s`...', lang );
		if ( lang === 'default' ) {
			header = licenseHeader( SPDX, DEFAULT_HEADER_LANG, OPTS );
		} else {
			header = licenseHeader( SPDX, lang, OPTS );
		}
		if ( header === null ) {
			debug( 'Failed to generate a license header for `%s`.', lang );
			continue;
		}
		conf = LANGS[ lang ];

		debug( 'Generating license header snippet...' );
		snippet = createSnippet( header, conf );

		debug( 'Writing license header snippet to file...' );
		if ( lang === 'default' ) {
			fpath = join( OUT_DIR, 'stdlib-license.sublime-snippet' );
		} else {
			fpath = join( OUT_DIR, 'stdlib-license-'+lang+'.sublime-snippet' );
		}
		writeFileSync( fpath, snippet, FOPTS );

		debug( 'Successfully generated license header snippet.' );
	}
	debug( 'Finished generating snippets.' );
} // end FUNCTION main()

main();
