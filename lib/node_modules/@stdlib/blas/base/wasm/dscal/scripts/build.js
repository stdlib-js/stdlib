#!/usr/bin/env node

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

// MODULES //

var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var wpath = resolve( __dirname, '..', 'src', 'main.wasm' );
var tpath = resolve( __dirname, 'template.txt' );
var opath = resolve( __dirname, '..', 'lib', 'binary.browser.js' );

var opts = {
	'encoding': 'utf8'
};

var PLACEHOLDER = '{{WASM_BASE64}}';


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var wasm;
	var tmpl;

	wasm = readFile( wpath );
	tmpl = readFile( tpath, opts );

	tmpl = replace( tmpl, PLACEHOLDER, wasm.toString( 'base64' ) );

	writeFile( opath, tmpl, opts );
}

main();
