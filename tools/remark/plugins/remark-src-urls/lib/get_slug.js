'use strict';

// MODULES //

var exec = require( 'child_process' ).execSync;


// GET SLUG //

/**
* Attempts to derive a Github repository slug from the given directory.
*
* @private
* @param {string} dir - local repository directory
* @returns {string} repository slug
*/
function getSlug( dir ) {
	var slug;
	var opts;
	var cmd;
	var out;
	var re;

	opts = { 'cwd': dir };

	// Regular expression to extract a repository slug:
	re = /(?:.+github\.com\/)(.+)\.(?:.+)/;

	// Get the remote origin:
	cmd = 'git config --get remote.origin.url';
	out = exec( cmd, opts );

	// Extract the repository slug:
	slug = out.toString().match( re )[ 1 ];

	// Get the current Git hash:
	cmd = 'git rev-parse HEAD';
	out = exec( cmd, opts );

	// Convert from a Buffer to a string and remove any newline characters:
	out = out.toString();
	out = out.match( /(.+)/ )[ 1 ];

	return slug+'/'+out;
} // end FUNCTION getSlug()


// EXPORTS //

module.exports = getSlug;
