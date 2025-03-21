/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var invertObject = require( '@stdlib/utils/object-inverse' );
var replace = require( '@stdlib/string/replace' );
var database = require( './../lib' );

var db = database();
var errorMap = invertObject( db );
var RE_ERR_MSG = /Error\( '([^']+)' \)/;

function replacer( match, p1 ) {
	return 'Error( formatProdErrorMessage( \'' + errorMap[ p1 ] + '\' ) )';
}

var code = 'throw new Error( \'insufficient arguments. Must provide at least one iterator function.\' );';
var transformed = replace( code, RE_ERR_MSG, replacer );
console.log( transformed );
// e.g., => 'throw new Error( formatProdErrorMessage( \'0N\' ) );'
