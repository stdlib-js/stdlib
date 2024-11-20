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

var expandContractions = require( './../lib' );

var str = 'I won\'t be able to, sorry.';
var out = expandContractions( str );
console.log( out );
// => 'I will not be able to, sorry.'

str = 'She\'ll be coming around the mountain...';
out = expandContractions( str );
console.log( out );
// => 'She will be coming around the mountain...'

str = 'Y\'all\'d be surprised if you know what I\'ll do.';
out = expandContractions( str );
console.log( out );
// => 'You all would be surprised if you know what I will do.'

str = 'Y\'all\'d\'ve come to the park if y\'all could\'ve, right?';
out = expandContractions( str );
console.log( out );
// => 'You all would have come to the park if you all could have, right?'

str = 'If Parker hadn\'t been sent off for a foul, they\'d\'ve won.';
out = expandContractions( str );
console.log( out );
// => 'If Parker had not been sent off for a foul, they would have won.'
