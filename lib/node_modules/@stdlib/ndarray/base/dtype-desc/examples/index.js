/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var dtypeDesc = require( './../lib' );

var dtypes;
var desc;
var i;

dtypes = [
	'float64',
	'float32',
	'int8',
	'uint8',
	'uint8c',
	'int16',
	'uint16',
	'int32',
	'uint32',
	'binary',
	'generic',
	'foobar'
];

for ( i = 0; i < dtypes.length; i++ ) {
	desc = dtypeDesc( dtypes[ i ] );
	console.log( '%s: %s', dtypes[ i ], desc );
}
