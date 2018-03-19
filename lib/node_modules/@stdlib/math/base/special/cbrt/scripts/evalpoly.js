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

/*
* This script compiles modules for evaluating polynomial functions. If any polynomial coefficients change, this script should be rerun to update the compiled files.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var licenseHeader = require( '@stdlib/_tools/licenses/header' );
var compile = require( '@stdlib/math/base/tools/evalpoly-compile' );


// VARIABLES //

/*
* Polynomial coefficients ordered in ascending degree.
*
* |1/cbrt(x) - p(x)| < 2**-23.5 (~[-7.93e-8, 7.929e-8])
*/
var P = [
	1.87595182427177009643,   // 0x3ffe03e6, 0x0f61e692
	-1.88497979543377169875,  // 0xbffe28e0, 0x92f02420
	1.621429720105354466140,  // 0x3ff9f160, 0x4a49d6c2
	-0.758397934778766047437, // 0xbfe844cb, 0xbee751d9
	0.145996192886612446982   // 0x3fc2b000, 0xd4e4edd7
];

// Header to add to output files:
var header = licenseHeader( 'Apache-2.0', 'js', {
	'year': ( new Date() ).getFullYear(),
	'copyright': 'The Stdlib Authors'
});
header += '\n/* This is a generated file. Do not edit directly. */\n';


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var opts;
	var str;

	opts = {
		'encoding': 'utf8'
	};

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p.js' );
	str = header + compile( P );
	writeFileSync( fpath, str, opts );
}

main();
