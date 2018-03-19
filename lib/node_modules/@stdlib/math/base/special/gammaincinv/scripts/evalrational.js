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
var AK0 = [
	-3.333333333438e-1,
	-2.070740359969e-1,
	-5.041806657154e-2,
	-4.923635739372e-3,
	-4.293658292782e-5
];
var BK0 = [
	1.000000000000e+0,
	7.045554412463e-1,
	2.118190062224e-1,
	3.048648397436e-2,
	1.605037988091e-3
];

var AK1 = [
	-1.72847633523e-2,
	-1.59372646475e-2,
	-4.64910887221e-3,
	-6.06834887760e-4,
	-6.14830384279e-6
];
var BK1 = [
	1.00000000000e+0,
	7.64050615669e-1,
	2.97143406325e-1,
	5.79490176079e-2,
	5.74558524851e-3
];

var AK2 = [
	-1.72839517431e-2,
	-1.46362417966e-2,
	-3.57406772616e-3,
	-3.91032032692e-4,
	2.49634036069e-6
];
var BK2 = [
	1.00000000000e+0,
	6.90560400696e-1,
	2.49962384741e-1,
	4.43843438769e-2,
	4.24073217211e-3
];

var AK3 = [
	9.99944669480e-1,
	1.04649839762e+2,
	8.57204033806e+2,
	7.31901559577e+2,
	4.55174411671e+1
];
var BK3 = [
	1.00000000000e+0,
	1.04526456943e+2,
	8.23313447808e+2,
	3.11993802124e+3,
	3.97003311219e+3
];

var AK4 = [
	4.95346498136e-2,
	2.99521337141e-2,
	6.88296911516e-3,
	5.12634846317e-4,
	-2.01411722031e-5
];
var BK4 = [
	1.00000000000e+0,
	7.59803615283e-1,
	2.61547111595e-1,
	4.64854522477e-2,
	4.03751193496e-3
];

var AK5 = [
	4.52313583942e-3,
	1.20744920113e-3,
	-7.89724156582e-5,
	-5.04476066942e-5,
	-5.35770949796e-6
];
var BK5 = [
	1.00000000000e+0,
	9.12203410349e-1,
	4.05368773071e-1,
	9.01638932349e-2,
	9.48935714996e-3
];

var AK6 = [
	4.39937562904e-3,
	4.87225670639e-4,
	-1.28470657374e-4,
	5.29110969589e-6,
	1.57166771750e-7
];
var BK6 = [
	1.00000000000e+0,
	7.94435257415e-1,
	3.33094721709e-1,
	7.03527806143e-2,
	8.06110846078e-3
];

var AK7 = [
	-1.14811912320e-3,
	-1.12850923276e-1,
	1.51623048511e+0,
	-2.18472031183e-1,
	7.30002451555e-2
];
var BK7 = [
	1.00000000000e+0,
	1.42482206905e+1,
	6.97360396285e+1,
	2.18938950816e+2,
	2.77067027185e+2
];

var AK8 = [
	-1.45727889667e-4,
	-2.90806748131e-1,
	-1.33085045450e+1,
	1.99722374056e+2,
	-1.14311378756e+1
];
var BK8 = [
	1.00000000000e+0,
	1.39612587808e+2,
	2.18901116348e+3,
	7.11524019009e+3,
	4.55746081453e+4
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

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak0bk0.js' );
	str = header + compile( AK0, BK0 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak1bk1.js' );
	str = header + compile( AK1, BK1 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak2bk2.js' );
	str = header + compile( AK2, BK2 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak3bk3.js' );
	str = header + compile( AK3, BK3 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak4bk4.js' );
	str = header + compile( AK4, BK4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak5bk5.js' );
	str = header + compile( AK5, BK5 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak6bk6.js' );
	str = header + compile( AK6, BK6 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak7bk7.js' );
	str = header + compile( AK7, BK7 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'rational_ak8bk8.js' );
	str = header + compile( AK8, BK8 );
	writeFileSync( fpath, str, opts );
}

main();
