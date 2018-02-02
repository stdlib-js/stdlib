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

var lpad = require( '@stdlib/string/left-pad' );
var umask = require( './../lib' );

var mask;
var opts;

// Print the process mask as an integer:
mask = umask();
console.log( mask.toString() );

// Print the process mask as an octal string:
console.log( lpad( mask.toString(), 4, '0' ) );

// Print the process mask using symbolic notation:
opts = {
	'symbolic': true
};
console.log( umask( opts ) );
