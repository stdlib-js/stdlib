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

'use strict';

var resolve = require( 'path' ).resolve;
var stats = require( 'fs' ).stat;
var mapValuesAsync = require( './../lib' );

var files = {
	'file1': resolve( __dirname, '..', 'package.json' ),
	'file2': resolve( __dirname, '..', 'README.md' )
};

function getStats( file, next ) {
	stats( file, onStats );

	function onStats( error, data ) {
		if ( error ) {
			error = new Error( 'unable to retrieve stats: '+file );
			return next( error );
		}
		next( null, data );
	}
}

function done( error, out ) {
	if ( error ) {
		throw error;
	}
	console.log( out );
}

mapValuesAsync( files, getStats, done );
