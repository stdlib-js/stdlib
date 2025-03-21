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

var picto;
var tbl;
var i;

// Get the data:
tbl = table();

// Get the emoji pictographs:
picto = objectKeys( tbl );

// Print out all the corresponding codes...
for ( i = 0; i < picto.length; i++ ) {
	console.log( picto[ i ] + ' => ' + tbl[ picto[ i ] ] );
}
