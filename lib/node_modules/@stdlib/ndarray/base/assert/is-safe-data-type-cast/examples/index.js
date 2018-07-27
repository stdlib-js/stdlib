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

var dtypes = require( '@stdlib/ndarray/dtypes' );
var isSafeCast = require( './../lib' );

var DTYPES;
var bool;
var dt;
var i;
var j;

// Get a list of supported ndarray data types:
DTYPES = dtypes();

// For each data type, determine whether one can safely cast to another data type...
for ( i = 0; i < DTYPES.length; i++ ) {
	dt = DTYPES[ i ];
	for ( j = 0; j < DTYPES.length; j++ ) {
		bool = isSafeCast( dt, DTYPES[ j ] );
		console.log( '%s => %s. Safe? %s.', dt, DTYPES[ j ], bool );
	}
}
