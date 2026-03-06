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

/* eslint-disable array-element-newline */

'use strict';

var setProps = require( './../lib' );

// Define strided array function meta data:
var meta = {
	'nargs': 7,
	'nin': 1,
	'nout': 1
};

// Define the list of strided array data types:
var types = [
	'float64', 'float64',
	'float32', 'float32',
	'generic', 'generic'
];

// Define an object/function on which to set the properties:
var obj = {};

// Set the properties:
setProps( meta, types, obj, false );

// Retrieve strided array function data...
var nargs = obj.nargs;
console.log( nargs );
// => 7

var nin = obj.nin;
console.log( nin );
// => 1

var nout = obj.nout;
console.log( nout );
// => 1

var sigs = obj.types;
console.log( sigs );
// => [...]
