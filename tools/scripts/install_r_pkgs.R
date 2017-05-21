#!/usr/bin/env Rscript
#
# Installs R packages.
#
# The script is called with one or more arguments, where each argument is a
# package name to install.

# Get only the trailing command-line arguments:
args <- commandArgs( trailingOnly = TRUE );

# Check that at least one package name has been provided...
n <- length( args );
if ( n == 0 ) {
	stop( "Must provide at least one package to install.", call. = FALSE );
}
# Install each package...
for ( i in 1:n ) {
	install.packages( args[ i ], repos = "http://lib.stat.cmu.edu/R/CRAN/" );
}
