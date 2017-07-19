'use strict';

// MODULES //

var debug = require( 'debug' )( 'links:insert' );
var getKeys = require( 'object-keys' ).shim();


// MAIN //

/**
* Attempts to insert a link into a database.
*
* @private
* @param {Object} db - link database
* @param {Object} link - link details
* @returns {(Error|Object)} error or updated database
*/
function insert( db, link ) {
	var keys;
	var out;
	var key;
	var uri;
	var err;
	var i;

	keys = getKeys( db );
	uri = link.uri; // TODO: percent-encode URI

	// Check for an existing URI entry or identifier...
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		if ( uri === key ) {
			err = new Error( 'duplicate entry. Database already contains an entry for the provided URI: '+link.uri+'.' );
			debug( 'Found a duplicate entry: %s', JSON.stringify( db[ key] ) );
			return err;
		}
		if ( link.id === db[ key ].id ) {
			err = new Error( 'duplicate identifier. Database already contains an entry for the provided id: '+link.id+'.' );
			debug( 'Found a duplicate identifier: %s', JSON.stringify( db[ key] ) );
			return err;
		}
	}
	// New entry...
	keys.push( uri );

	// Sort the keys to enforce lexicographic order (valid on most engines, but not guaranteed as insertion order is not specified at specification level):
	keys.sort();

	// Clone the database, adding the new entry...
	out = {};
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		if ( key === uri ) {
			out[ key ] = {
				'id': link.id,
				'description': link.description,
				'short': '',
				'keywords': ( link.keywords ) ? link.keywords : []
			};
		} else {
			out[ key ] = db[ key ];
		}
	}
	return out;
} // end FUNCTION insert()


// EXPORTS //

module.exports = insert;
