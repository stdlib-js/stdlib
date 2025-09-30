#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var fs = require( 'fs' );
var db = require( './lib/node_modules/@stdlib/math/special/data/unary_function_database.json' );


// MAIN //

/**
* Extracts unique dtype configurations from the unary function database.
*
* @returns {void}
*/
function main() {
	var inputDtypesSet;
	var outputDtypesSet;
	var inputDtypes;
	var outputDtypes;
	var functions;
	var results;
	var func;
	var obj;
	var i;

	// Initialize sets to store unique values:
	inputDtypesSet = new Set();
	outputDtypesSet = new Set();

	// Get all function names:
	functions = Object.keys( db );

	// Iterate through each function:
	for ( i = 0; i < functions.length; i++ ) {
		func = functions[ i ];
		obj = db[ func ];

		// Add input_dtypes if it exists:
		if ( obj.input_dtypes ) {
			inputDtypesSet.add( obj.input_dtypes );
		}

		// Add output_dtypes if it exists:
		if ( obj.output_dtypes ) {
			outputDtypesSet.add( obj.output_dtypes );
		}
	}

	// Convert sets to sorted arrays:
	inputDtypes = Array.from( inputDtypesSet ).sort();
	outputDtypes = Array.from( outputDtypesSet ).sort();

	// Create results string:
	results = 'UNIQUE INPUT_DTYPES CONFIGURATIONS:\n';
	results += '=====================================\n\n';
	for ( i = 0; i < inputDtypes.length; i++ ) {
		results += '- ' + inputDtypes[ i ] + '\n';
	}

	results += '\n\nUNIQUE OUTPUT_DTYPES CONFIGURATIONS:\n';
	results += '====================================\n\n';
	for ( i = 0; i < outputDtypes.length; i++ ) {
		results += '- ' + outputDtypes[ i ] + '\n';
	}

	results += '\n\nSUMMARY:\n';
	results += '========\n';
	results += 'Total unique input_dtypes configurations: ' + inputDtypes.length + '\n';
	results += 'Total unique output_dtypes configurations: ' + outputDtypes.length + '\n';
	results += 'Total functions analyzed: ' + functions.length + '\n';

	// Write results to file:
	fs.writeFileSync( 'dtype_configurations.txt', results, 'utf8' );

	console.log( 'Dtype configurations extracted to dtype_configurations.txt' );
	console.log( 'Found ' + inputDtypes.length + ' unique input_dtypes and ' + outputDtypes.length + ' unique output_dtypes configurations' );
}


// EXPORTS //

module.exports = main;

// If called directly from command line, execute the function
if ( require.main === module ) {
	main();
}
