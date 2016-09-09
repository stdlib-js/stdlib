'use strict';

// MODULES //

var getKeys = require( 'object-keys' ).shim();
var prefix = require( './stdlib.js' );
var indexOf = require( prefix+'@stdlib/utils/index-of' );
var WHITELIST = require( './whitelist.json' );


// FILTER //

/**
* Filters raw license data.
*
* @private
* @param {ObjectArray} raw - raw license data
* @returns {ObjectArray} filtered data
*/
function filter( raw ) {
	var licenses;
	var sources;
	var source;
	var names;
	var seen;
	var keys;
	var key;
	var out;
	var obj;
	var id;
	var d;
	var i;
	var j;
	var k;

	obj = {};
	for ( i = 0; i < raw.length; i++ ) {
		d = raw[ i ];
		id = d.id;
		if ( !obj.hasOwnProperty( id ) ) {
			obj[ id ] = {
				'id': id,
				'repo': d.repository,
				'path': d.directory,
				'license': []
			};
		}
		sources = d.licenseSources;
		keys = getKeys( sources );
		for ( j = 0; j < keys.length; j++ ) {
			key = keys[ j ];
			source = sources[ key ];
			if ( key === 'package' ) {
				for ( k = 0; k < source.sources.length; k++ ) {
					names = [ source.sources[ k ].license ];
					licenses = {
						'src': 'package.json',
						'names': names
					};
					obj[ id ].license.push( licenses );
				}
			}
			// License files and READMEs...
			else {
				for ( k = 0; k < source.sources.length; k++ ) {
					names = source.sources[ k ].names();
					if ( names.length === 0 ) {
						continue;
					}
					licenses = {
						'src': key,
						'names': names
					};
					obj[ id ].license.push( licenses );
				}
			}
		}
	}
	keys = getKeys( obj );
	out = [];
	seen = {};
	for ( i = 0; i < keys.length; i++ ) {
		id = keys[ i ];
		d = obj[ id ];
		licenses = d.license;
		for ( j = 0; j < licenses.length; j++ ) {
			if ( seen.hasOwnProperty( id ) ) {
				continue;
			}
			names = licenses[ j ].names;
			for ( k = 0; k < names.length; k++ ) {
				if ( indexOf( WHITELIST, names[ k ] ) === -1 ) {
					seen[ id ] = true;
					out.push( d );
				}
			}
		}
	}
	return out;
} // end FUNCTION filer()


// EXPORTS //

module.exports = filter;
