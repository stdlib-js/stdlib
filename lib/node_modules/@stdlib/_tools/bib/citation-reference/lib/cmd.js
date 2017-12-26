'use strict';

/**
* Returns a command to convert a Markdown file containing citations to a Markdown file with a formatted bibliography.
*
* @param {string} src - source file
* @param {string} dest - destination file
* @param {Options} opts - function options
* @param {string} opts.database - path to a bibliography database file
* @param {string} opts.csl - path to a Citation Style Language (CSL) file
* @returns {string} command
*/
function cmd( src, dest, opts ) {
	var out;
	out = new Array( 8 );
	out[ 0 ] = 'pandoc';
	out[ 1 ] = '--filter=pandoc-citeproc';
	out[ 2 ] = '--from=markdown';
	out[ 3 ] = '--to=markdown_github';
	out[ 4 ] = '--bibliography='+opts.database;
	out[ 5 ] = '--csl='+opts.csl;
	out[ 6 ] = '--output=' + dest;
	out[ 7 ] = src;
	return out.join( ' ' );
} // end FUNCTION cmd()


// EXPORTS //

module.exports = cmd;
