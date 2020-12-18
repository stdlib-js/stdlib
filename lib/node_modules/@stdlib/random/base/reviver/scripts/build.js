/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var logger = require( 'debug' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var exists = require( '@stdlib/fs/exists' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var isPRNGLike = require( '@stdlib/assert/is-prng-like' );
var licenseHeader = require( '@stdlib/_tools/licenses/header' );


// VARIABLES //

var debug = logger( 'reviver:build' );
var OPTS = {
	'encoding': 'utf8'
};
var SPDX = 'Apache-2.0';
var YEAR = (new Date()).getFullYear();
var COPYRIGHT = 'The Stdlib Authors';


// FUNCTIONS //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var dpath;
	var fpath;
	var opath;
	var tmp1;
	var tmp2;
	var prng;
	var dirs;
	var pkgs;
	var str;
	var err;
	var pkg;
	var p;
	var i;

	dpath = resolve( __dirname, '..', '..' );

	debug( 'Reading namespace directory contents: %s', dpath );
	dirs = readDir( dpath );
	if ( dirs instanceof Error ) {
		debug( 'Encountered an error when attempting to read namespace directory contents: %s', err.message );
		return;
	}

	debug( 'Finding packages...' );
	pkgs = [];
	for ( i = 0; i < dirs.length; i++ ) {
		p = resolve( dpath, dirs[ i ] );
		fpath = resolve( p, 'package.json' );
		if ( exists( fpath ) ) {
			prng = require( p ); // eslint-disable-line stdlib/no-dynamic-require
			if ( isPRNGLike( prng ) ) {
				pkg = require( fpath ); // eslint-disable-line stdlib/no-dynamic-require
				pkgs.push( [ pkg.name, prng.NAME ] );
			}
		}
	}
	debug( 'Found %d packages.', pkgs.length );

	debug( 'Generating script...' );
	str = '';
	str += licenseHeader( SPDX, 'js', {
		'year': YEAR,
		'copyright': COPYRIGHT
	});
	str += '\n';

	str += '// This file is generated using `scripts/build.js`.\n\n';
	str += '\'use strict\';\n';
	str += '\n';
	str += '// MODULES //\n';
	str += '\n';
	tmp1 = [];
	tmp2 = [];
	for ( i = 0; i < pkgs.length; i++ ) {
		pkg = pkgs[ i ];
		tmp1.push( 'var prng'+i+' = require( \''+pkg[ 0 ]+'\' );' );
		tmp2.push( 'prngs[ \''+pkg[ 1 ]+'\' ] = prng'+i+'.factory;' );
	}
	str += tmp1.join( '\n' );
	str += '\n';
	str += '\n';
	str += '\n';
	str += '// MAIN //\n';
	str += '\n';
	str += 'var prngs = {};\n';
	str += tmp2.join( '\n' );
	str += '\n';
	str += '\n';
	str += '\n';
	str += '// EXPORTS //\n';
	str += '\n';
	str += 'module.exports = prngs;\n';

	opath = resolve( __dirname, '..', 'lib', 'prngs.js' );
	debug( 'Writing script to file: %s', opath );
	err = writeFile( opath, str, OPTS );
	if ( err ) {
		debug( 'Encountered an error when attempting to write script to file: %s', err.message );
		return;
	}
	debug( 'Successfully wrote script to file.' );
}


// MAIN //

main();
