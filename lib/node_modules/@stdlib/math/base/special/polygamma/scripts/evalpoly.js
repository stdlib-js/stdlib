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

// Polynomial coefficients ordered in ascending degree...
var P3 = [
	-2.0,
	-4.0
];
var P4 = [
	16.0,
	8.0
];
var P5 = [
	-16.0,
	-88.0,
	-16.0
];
var P6 = [
	272.0,
	416.0,
	32.0
];
var P7 = [
	-272.0,
	-2880.0,
	-1824.0,
	-64.0
];
var P8 = [
	7936.0,
	24576.0,
	7680.0,
	128.0
];
var P9 = [
	-7936.0,
	-137216.0,
	-185856.0,
	-31616.0,
	-256.0
];
var P10 = [
	353792.0,
	1841152.0,
	1304832.0,
	128512.0,
	512.0
];
var P11 = [
	-353792.0,
	-9061376.0,
	-21253376.0,
	-8728576.0,
	-518656.0,
	-1024.0
];
var P12 = [
	22368256.0,
	175627264.0,
	222398464.0,
	56520704.0,
	2084864.0,
	2048.0
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

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p3.js' );
	str = header + compile( P3 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p4.js' );
	str = header + compile( P4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p5.js' );
	str = header + compile( P5 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p6.js' );
	str = header + compile( P6 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p7.js' );
	str = header + compile( P7 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p8.js' );
	str = header + compile( P8 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p9.js' );
	str = header + compile( P9 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p10.js' );
	str = header + compile( P10 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p11.js' );
	str = header + compile( P11 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_p12.js' );
	str = header + compile( P12 );
	writeFileSync( fpath, str, opts );
}

main();
