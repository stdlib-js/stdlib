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

( function () { // eslint-disable-line func-names, no-restricted-syntax
	/**
	* Removes extraneous information from a path.
	*
	* @private
	* @param {string} txt - text 1
	* @returns {string} cleaned text
	*/
	function cleanPath( txt ) {
		var ch;
		var j;
		if ( txt.charCodeAt( 0 ) === 34 ) {
			for ( j = 1; j < txt.length; j++ ) {
				ch = txt.charCodeAt( j );
				if ( ch === 34 ) {
					txt = txt.slice( 1, j );
					break;
				}
			}
		}
		j = txt.indexOf( '/docs/types/' );
		if ( j >= 0 ) {
			txt = txt.slice( 0, j );
		} else {
			j = txt.indexOf( '/index.d' );
			if ( j >= 0 ) {
				txt = txt.slice( 0, j );
			}
		}
		return txt;
	}

	/**
	* Cleans up the document title.
	*
	* @private
	* @param {DOMElement} el - title element
	*/
	function cleanTitle( el ) {
		var txt = cleanPath( el.innerHTML );
		var idx = txt.indexOf( 'stdlib' );
		if ( idx === -1 || idx === 1 ) { // e.g., '@stdlib/types/iter'
			txt = 'stdlib | ' + txt;
		} else {
			idx = txt.indexOf( ' | stdlib' );
			if ( idx === txt.length-9 ) { // e.g., 'foo/bar | stdlib'
				txt = 'stdlib | ' + txt.slice( 0, -9 );
			}
		}
		el.innerHTML = txt;
	}

	/**
	* Cleans up link text.
	*
	* @private
	* @param {Array<DOMElement>} el - list of anchor elements to clean
	*/
	function cleanLinks( el ) {
		var i;
		for ( i = 0; i < el.length; i++ ) {
			el[ i ].innerHTML = cleanPath( el[ i ].innerHTML );
		}
	}

	/**
	* Updates and removes extraneous information from a heading.
	*
	* @private
	* @param {string} txt - text
	* @returns {string} cleaned text
	*/
	function cleanHeading( txt ) {
		if ( txt.indexOf( 'External module' ) === 0 ) {
			txt = 'Package: &commat;stdlib/' + cleanPath( txt.slice( 16 ) );
		}
		return txt;
	}

	/**
	* Cleans up heading text.
	*
	* @private
	* @param {Array<DOMElement>} el - list of heading elements to clean
	*/
	function cleanHeadings( el ) {
		var i;
		for ( i = 0; i < el.length; i++ ) {
			el[ i ].innerHTML = cleanHeading( el[ i ].innerHTML );
		}
	}

	/**
	* Updates a description.
	*
	* @private
	* @param {string} txt - description
	* @returns {string} updated description
	*/
	function updateDescription( txt ) {
		var ch;
		if ( txt.length === 0 ) {
			return txt;
		}
		ch = txt[ 0 ].toUpperCase();
		if ( ch !== txt[ 0 ] ) {
			txt = ch + txt.slice( 1 );
		}
		if ( txt.charCodeAt( txt.length-1 ) !== 46 ) { // .
			txt += '.';
		}
		return txt;
	}

	/**
	* Updates `@param` and `@returns` descriptions.
	*
	* @private
	* @param {Array<DOMElement>} el - list of elements containing descriptions
	*/
	function updateDescriptions( el ) {
		var i;
		for ( i = 0; i < el.length; i++ ) {
			el[ i ].innerHTML = updateDescription( el[ i ].innerHTML );
		}
	}

	/**
	* Main execution sequence.
	*
	* @private
	*/
	function main() {
		var el;

		el = document.querySelector( 'title' );
		cleanTitle( el );

		el = document.querySelectorAll( '.tsd-kind-external-module a' );
		cleanLinks( el );

		el = document.querySelectorAll( '.tsd-is-not-exported a' );
		cleanLinks( el );

		el = document.querySelectorAll( '.tsd-breadcrumb a' );
		cleanLinks( el );

		el = document.querySelectorAll( '.tsd-page-title h1' );
		cleanHeadings( el );

		el = document.querySelectorAll( '.tsd-description .tsd-parameters .tsd-comment p' );
		updateDescriptions( el );

		el = document.querySelectorAll( '.tsd-description .tsd-returns-title + p' );
		updateDescriptions( el );
	}

	main();
})();
