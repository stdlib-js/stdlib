/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var objectKeys = require( '@stdlib/utils/keys' );
var table = require( './../lib' );

var codes;
var tbl;
var i;

// Get the data:
tbl = table();

// Get the emoji codes:
codes = objectKeys( tbl );

// Print out all the corresponding pictographs...
for ( i = 0; i < codes.length; i++ ) {
	console.log( codes[ i ] + ' => ' + tbl[ codes[ i ] ] );
}
