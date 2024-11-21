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

var datespace = require( './../lib' );
var start;
var arr;
var end;

end = '2014-12-02T07:00:54.973Z';
start = new Date( end ) - 100000;

// Default behavior:
console.log( '\nDefault:' );
arr = datespace( start, end );
console.log( arr.join( '\n' ) );

// Specify length:
console.log( '\nLength 10:' );
arr = datespace( start, end, 10 );
console.log( arr.join( '\n' ) );

console.log( '\nLength 11:' );
arr = datespace( start, end, 11 );
console.log( arr.join( '\n' ) );

// Create an array with decremented values:
console.log( '\nDecremented values:' );
arr = datespace( end, start, 11 );
console.log( arr.join( '\n' ) );
