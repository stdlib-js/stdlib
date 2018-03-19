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
var compile = require( '@stdlib/math/base/tools/evalrational-compile' );


// VARIABLES //

// Polynomial coefficients ordered in ascending degree...
var P1 = [
	4.0535726612579544093e+13,
	5.4708611716525426053e+12,
	-3.7595974497819597599e+11,
	7.2144548214502560419e+09,
	-5.9157479997408395984e+07,
	2.2157953222280260820e+05,
	-3.1714424660046133456e+02
];

var Q1 = [
	3.0737873921079286084e+14,
	4.1272286200406461981e+12,
	2.7800352738690585613e+10,
	1.2250435122182963220e+08,
	3.8136470753052572164e+05,
	8.2079908168393867438e+02,
	1.0
];

var P2 = [
	1.1514276357909013326e+19,
	-5.6808094574724204577e+18,
	-2.3638408497043134724e+16,
	4.0686275289804744814e+15,
	-5.9530713129741981618e+13,
	3.7453673962438488783e+11,
	-1.1957961912070617006e+09,
	1.9153806858264202986e+06,
	-1.2337180442012953128e+03
];

var Q2 = [
	5.3321844313316185697e+20,
	5.6968198822857178911e+18,
	3.0837179548112881950e+16,
	1.1187010065856971027e+14,
	3.0221766852960403645e+11,
	6.3550318087088919566e+08,
	1.0453748201934079734e+06,
	1.2855164849321609336e+03,
	1.0
];

var PC = [
	-4.4357578167941278571e+06,
	-9.9422465050776411957e+06,
	-6.6033732483649391093e+06,
	-1.5235293511811373833e+06,
	-1.0982405543459346727e+05,
	-1.6116166443246101165e+03,
	0.0
];

var QC = [
	-4.4357578167941278568e+06,
	-9.9341243899345856590e+06,
	-6.5853394797230870728e+06,
	-1.5118095066341608816e+06,
	-1.0726385991103820119e+05,
	-1.4550094401904961825e+03,
	1.0
];

var PS = [
	3.3220913409857223519e+04,
	8.5145160675335701966e+04,
	6.6178836581270835179e+04,
	1.8494262873223866797e+04,
	1.7063754290207680021e+03,
	3.5265133846636032186e+01,
	0.0
];

var QS = [
	7.0871281941028743574e+05,
	1.8194580422439972989e+06,
	1.4194606696037208929e+06,
	4.0029443582266975117e+05,
	3.7890229745772202641e+04,
	8.6383677696049909675e+02,
	1.0
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

	fpath = resolve( __dirname, '..', 'lib', 'rational_p1q1.js' );
	str = header + compile( P1, Q1 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_p2q2.js' );
	str = header + compile( P2, Q2 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_pcqc.js' );
	str = header + compile( PC, QC );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_psqs.js' );
	str = header + compile( PS, QS );
	writeFileSync( fpath, str, opts );
}

main();
