'use strict';

var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var mkdirp = require( 'mkdirp' ).sync;
var build = require( './../lib' );

var root = join( __dirname, 'fixtures' );
var out = resolve( __dirname, '../build' );

mkdirp( out );

var opts = {
    'pattern': 'index.js',
    'bundle': 'test_bundle.js',
    'html': 'tests.html'
};

build( root, out, opts, clbk );

function clbk( error, bool ) {
    if ( error ) {
        throw error;
    }
    if ( bool ) {
        console.log( 'Success!' );
    } else {
        console.log( 'No generated assets.' );
    }
}
