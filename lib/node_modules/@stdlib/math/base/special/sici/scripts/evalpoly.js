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
var SN = [
	1.00000000000000000302e0,
	-4.13470316229406538752e-2,
	9.76945438170435310816e-4,
	-9.75759303843632795789e-6,
	4.62591714427012837309e-8,
	-8.39167827910303881427e-11
];
var SD = [
	9.99999999999999996984e-1,
	1.42085239326149893930e-2,
	9.96412122043875552487e-5,
	4.41827842801218905784e-7,
	1.27997891179943299903e-9,
	2.03269266195951942049e-12
];
var CN = [
	-1.00000000000000000080e0,
	2.89159652607555242092e-2,
	-4.74007206873407909465e-4,
	3.59325051419993077021e-6,
	-1.35249504915790756375e-8,
	2.02524002389102268789e-11
];
var CD = [
	4.00000000000000000080e0,
	5.10028056236446052392e-2,
	3.17442024775032769882e-4,
	1.23210355685883423679e-6,
	3.06780997581887812692e-9,
	4.07746040061880559506e-12
];
var FN4 = [
	5.48900223421373614008e-7,
	1.08936580650328664411e-4,
	6.81020132472518137426e-3,
	1.67006611831323023771e-1,
	1.62083287701538329132e0,
	5.45937717161812843388e0,
	4.23612862892216586994e0
];
var FD4 = [
	5.48900252756255700982e-7,
	1.10034357153915731354e-4,
	7.01710668322789753610e-3,
	1.78792052963149907262e-1,
	1.86792257950184183883e0,
	7.30828822505564552187e0,
	8.16496634205391016773e0,
	1.00000000000000000000e0
];
var FN8 = [
	9.70507110881952024631e-14,
	9.41779576128512936592e-11,
	3.20092790091004902806e-8,
	4.86215430826454749482e-6,
	3.49556442447859055605e-4,
	1.16064229408124407915e-2,
	1.60300158222319456320e-1,
	7.13715274100146711374e-1,
	4.55880873470465315206e-1
];
var FD8 = [
	9.70507110881952025725e-14,
	9.43720590350276732376e-11,
	3.21956939101046018377e-8,
	4.92435064317881464393e-6,
	3.58696481881851580297e-4,
	1.22253594771971293032e-2,
	1.78685545332074536321e-1,
	9.17463611873684053703e-1,
	1.00000000000000000000e0
];
var GN4 = [
	7.82579040744090311069e-9,
	1.97963874140963632189e-6,
	1.61999794598934024525e-4,
	5.38868681462177273157e-3,
	7.48527737628469092119e-2,
	3.97180296392337498885e-1,
	6.11379109952219284151e-1,
	8.71001698973114191777e-2
];
var GD4 = [
	7.82579218933534490868e-9,
	2.02659182086343991969e-6,
	1.73221081474177119497e-4,
	6.22396345441768420760e-3,
	9.88771761277688796203e-2,
	6.66296701268987968381e-1,
	1.64402202413355338886e0,
	1.00000000000000000000e0
];
var GN8 = [
	3.14040098946363334640e-15,
	3.85945925430276600453e-12,
	1.70404452782044526189e-9,
	3.47131167084116673800e-7,
	3.48941165502279436777e-5,
	1.71718239052347903558e-3,
	3.84878767649974295920e-2,
	3.30410979305632063225e-1,
	6.97359953443276214934e-1
];
var GD8 = [
	3.14040098946363335242e-15,
	3.87830166023954706752e-12,
	1.72693748966316146736e-9,
	3.57043223443740838771e-7,
	3.68475504442561108162e-5,
	1.90284426674399523638e-3,
	4.67913194259625806320e-2,
	4.87852258695304967486e-1,
	1.68548898811011640017e0,
	1.00000000000000000000e0
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

	fpath = resolve( __dirname, '..', 'lib', 'polyval_sn.js' );
	str = header + compile( SN );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_sd.js' );
	str = header + compile( SD );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_cn.js' );
	str = header + compile( CN );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_cd.js' );
	str = header + compile( CD );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_fn4.js' );
	str = header + compile( FN4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_fd4.js' );
	str = header + compile( FD4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_fn8.js' );
	str = header + compile( FN8 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_fd8.js' );
	str = header + compile( FD8 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_gn4.js' );
	str = header + compile( GN4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_gd4.js' );
	str = header + compile( GD4 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_gn8.js' );
	str = header + compile( GN8 );
	writeFileSync( fpath, str, opts );

	fpath = resolve( __dirname, '..', 'lib', 'polyval_gd8.js' );
	str = header + compile( GD8 );
	writeFileSync( fpath, str, opts );
}

main();
