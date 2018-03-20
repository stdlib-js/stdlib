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
var T_ODD = [
	1.33333333333201242699e-01, // T1 => 3FC11111, 1110FE7A
	2.18694882948595424599e-02, // T3 => 3FABA1BA, 1BB341FE
	3.59207910759131235356e-03, // T5 => 3F6D6D22, C9560328
	5.88041240820264096874e-04, // T7 => 3F4344D8, F2F26501
	7.81794442939557092300e-05, // T9 => 3F147E88, A03792A6
	-1.85586374855275456654e-05 // T11 => BEF375CB, DB605373
];
var T_EVEN = [
	5.39682539762260521377e-02, // T2 => 3FABA1BA, 1BB341FE
	8.86323982359930005737e-03, // T4 => 3F8226E3, E96E8493
	1.45620945432529025516e-03, // T6 => 3F57DBC8, FEE08315
	2.46463134818469906812e-04, // T8 => 3F3026F7, 1A8D1068
	7.14072491382608190305e-05, // T10 => 3F12B80F, 32F0A7E9
	2.59073051863633712884e-05  // T12 => 3EFB2A70, 74BF7AD4
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

	fpath = resolve( __dirname, '..', 'lib', 'polyval_t_odd.js' );
	str = header + compile( T_ODD );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_t_even.js' );
	str = header + compile( T_EVEN );
	writeFileSync( fpath, str, opts );
}

main();
