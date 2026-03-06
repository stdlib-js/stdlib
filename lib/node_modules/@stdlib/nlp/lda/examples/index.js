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

var sotu = require( '@stdlib/datasets/sotu' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var stopwords = require( '@stdlib/datasets/stopwords-en' );
var lowercase = require( '@stdlib/string/lowercase' );
var lda = require( './../lib' );

var speeches;
var words;
var terms;
var model;
var str;
var i;
var j;

words = stopwords();
for ( i = 0; i < words.length; i++ ) {
	words[ i ] = new RegExp( '\\b'+words[ i ]+'\\b', 'gi' );
}

speeches = sotu({
	'range': [ 1930, 2010 ]
});
for ( i = 0; i < speeches.length; i++ ) {
	str = lowercase( speeches[ i ].text );
	for ( j = 0; j < words.length; j++ ) {
		str = str.replace( words[ j ], '' );
	}
	speeches[ i ] = str;
}

model = lda( speeches, 3 );
model.fit( 1000, 100, 10 );
for ( i = 0; i <= speeches.length; i++ ) {
	str = 'Year: ' + (1930+i) + '\t';
	str += 'Topic 1: ' + roundn( model.avgTheta.get( i, 0 ), -3 ) + '\t';
	str += 'Topic 2: ' + roundn( model.avgTheta.get( i, 1 ), -3 ) + '\t';
	str += 'Topic 3: ' + roundn( model.avgTheta.get( i, 2 ), -3 );
	console.log( str );
}

terms = model.getTerms( 0, 20 );
for ( i = 0; i < terms.length; i++ ) {
	terms[ i ] = terms[ i ].word;
}
console.log( 'Words most associated with first topic:\n ' + terms.join( ', ' ) );

terms = model.getTerms( 1, 20 );
for ( i = 0; i < terms.length; i++ ) {
	terms[ i ] = terms[ i ].word;
}
console.log( 'Words most associated with second topic:\n ' + terms.join( ', ' ) );

terms = model.getTerms( 2, 20 );
for ( i = 0; i < terms.length; i++ ) {
	terms[ i ] = terms[ i ].word;
}
console.log( 'Words most associated with third topic:\n ' + terms.join( ', ' ) );
