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
var co1 = [
	-1.0,
	-5.0,
	5.0
];
var co2 = [
	1.0,
	21.0,
	-69.0,
	46.0
];
var co3 = [
	7.0,
	-2.0,
	33.0,
	-62.0,
	31.0
];
var co4 = [
	25.0,
	-52.0,
	-17.0,
	88.0,
	-115.0,
	46.0
];
var co5 = [
	7.0,
	12.0,
	-78.0,
	52.0
];
var co6 = [
	-7.0,
	2.0,
	183.0,
	-370.0,
	185.0
];
var co7 = [
	-533.0,
	776.0,
	-1835.0,
	10240.0,
	-13525.0,
	5410.0
];
var co8 = [
	-1579.0,
	3747.0,
	-3372.0,
	-15821.0,
	45588.0,
	-45213.0,
	15071.0
];
var co9 = [
	449.0,
	-1259.0,
	-769.0,
	6686.0,
	-9260.0,
	3704.0
];
var co10 = [
	63149.0,
	-151557.0,
	140052.0,
	-727469.0,
	2239932.0,
	-2251437.0,
	750479.0
];
var co11 = [
	29233.0,
	-78755.0,
	105222.0,
	146879.0,
	-1602610.0,
	3195183.0,
	-2554139.0,
	729754.0
];
var co12 = [
	1.0,
	-13.0,
	13.0
];
var co13 = [
	1.0,
	21.0,
	-69.0,
	46.0
];
var co14 = [
	0.16666666666666666667,
	0.16666666666666666667
];
var co15 = [
	0.058333333333333333333,
	0.066666666666666666667,
	0.0083333333333333333333
];
var co16 = [
	0.025198412698412698413,
	0.026785714285714285714,
	0.0017857142857142857143,
	0.00019841269841269841270
];
var co17 = [
	0.012039792768959435626,
	0.010559964726631393298,
	-0.0011078042328042328042,
	0.00037477954144620811287,
	2.7557319223985890653e-6
];
var co18 = [
	0.0038370059724226390893,
	0.0061039211560044893378,
	-0.0016095979637646304313,
	0.00059458674042007375341,
	-0.000062705427288760622094,
	2.5052108385441718775e-8
];
var co19 = [
	0.0032177478835464946576,
	0.0010898206731540064873,
	-0.0012579159844784844785,
	0.00069084207973096861986,
	-0.00016376804137220803887,
	0.000015401265401265401265,
	1.6059043836821614599e-10
];
var co20 = [
	0.0017438262298340009980,
	0.000033530976880017885309,
	-0.00076245135440323932387,
	0.00064513046951456342991,
	-0.00024947258047043099953,
	0.000049255746366361445727,
	-3.9851014346715404916e-6,
	7.6471637318198164759e-13
];
var co21 = [
	0.00096472747321388644237,
	-0.00031101086326318780412,
	-0.00036307660358786885787,
	0.00051406605788341121363,
	-0.00029133414466938067350,
	0.000090867107935219902229,
	-0.000015303004486655377567,
	1.0914179173496789432e-6,
	2.8114572543455207632e-15
];
var co22 = [
	0.00054229262813129686486,
	-0.00036942667800009661203,
	-0.00010230378073700412687,
	0.00035764655430568632777,
	-0.00028690924218514613987,
	0.00012645437628698076975,
	-0.000033202652391372058698,
	4.8903045291975346210e-6,
	-3.1239569599829868045e-7,
	8.2206352466243297170e-18
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
	var coefs;
	var opts;
	var str;
	var i;

	opts = {
		'encoding': 'utf8'
	};

	coefs = [
		[ co1, 'co1' ],
		[ co2, 'co2' ],
		[ co3, 'co3' ],
		[ co4, 'co4' ],
		[ co5, 'co5' ],
		[ co6, 'co6' ],
		[ co7, 'co7' ],
		[ co8, 'co8' ],
		[ co9, 'co9' ],
		[ co10, 'co10' ],
		[ co11, 'co11' ],
		[ co12, 'co12' ],
		[ co13, 'co13' ],
		[ co14, 'co14' ],
		[ co15, 'co15' ],
		[ co16, 'co16' ],
		[ co17, 'co17' ],
		[ co18, 'co18' ],
		[ co19, 'co19' ],
		[ co20, 'co20' ],
		[ co21, 'co21' ],
		[ co22, 'co22' ]
	];
	for ( i = 0; i < coefs.length; i++ ) {
		fpath = resolve( __dirname, '..', 'lib', 'polyval_'+coefs[i][1]+'.js' );
		str = header + compile( coefs[i][0] );
		writeFileSync( fpath, str, opts );
	}
}

main();
