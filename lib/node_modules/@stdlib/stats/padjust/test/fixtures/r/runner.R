#!/usr/bin/env Rscript
#
# @license Apache-2.0
#
# Copyright (c) 2020 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Set the precision to 16 digits:
options( digits = 16 );

#' Generate test fixtures.
#'
#' @examples
#' main();
main <- function() {
	#' Get the script filepath.
	#'
	#' @return The absolute path of this script
	#'
	#' @examples
	#' filepath <- get_script_path();
	get_script_path <- function() {
		args <- commandArgs( trailingOnly = FALSE );
		needle <- "--file=";
		match <- grep( needle, args );
		if ( length( match ) > 0 ) {
			# Rscript:
			filepath <- sub( needle, "", args[match] );
		} else {
			ls_vars <- ls( sys.frames()[[1]] )
			if ( "fileName" %in% ls_vars ) {
				# Source'd via RStudio:
				filepath <- sys.frames()[[1]]$fileName; # nolint
			} else {
				# Source'd via R console:
				filepath <- sys.frames()[[1]]$ofile;
			}
		}
		return( normalizePath( filepath ) );
	}

	#' Convert a data structure to JSON.
	#'
	#' @param x A data structure to convert
	#' @return JSON blob
	#'
	#' @examples
	#' x <- seq( -6.5, 25, 0.5 );
	#' json <- to_json( x );
	to_json <- function( x ) {
		return( jsonlite::toJSON( x, digits = 16, auto_unbox = TRUE ) );
	}

	#' Generate an output absolute filepath based on the script directory.
	#'
	#' @param name An output filename
	#' @return An absolute filepath
	#'
	#' @examples
	#' filepath <- get_filepath( "data.json" );
	get_filepath <- function( name ) {
		return( paste( source_dir, "/", name, sep = "" ) );
	}

	# Get the directory of this script:
	source_dir <- dirname( get_script_path() );

	# Generate test fixture data:
	pvals <- runif( 5, 0, 0.5 );
	out <- p.adjust( pvals, method = "bonferroni" );

	# Convert fixture data to JSON:
	bonferroni <- list(
		pvals = pvals,
		expected = out
	);
	bonferroni <- to_json( bonferroni );

	# Write the data to file...
	filepath <- get_filepath( "bonferroni.json" );
	write( bonferroni, filepath );

	# Generate test fixture data:
	pvals <- runif( 5, 0, 0.5 );
	out <- p.adjust( pvals, method = "BY" );

	# Convert fixture data to JSON:
	by <- list(
		pvals = pvals,
		expected = out
	);
	by <- to_json( by );

	# Write the data to file...
	filepath <- get_filepath( "by.json" );
	write( by, filepath );

	# Generate test fixture data:
	pvals <- runif( 5, 0, 0.5 );
	out <- p.adjust( pvals, method = "holm" );

	# Convert fixture data to JSON:
	holm <- list(
		pvals = pvals,
		expected = out
	);
	holm <- to_json( holm );

	# Write the data to file...
	filepath <- get_filepath( "holm.json" );
	write( holm, filepath );

	# Generate test fixture data:
	pvals <- runif( 5, 0, 0.5 );
	out <- p.adjust( pvals, method = "hommel" );

	# Convert fixture data to JSON:
	hommel <- list(
		pvals = pvals,
		expected = out
	);
	hommel <- to_json( hommel );

	# Write the data to file...
	filepath <- get_filepath( "hommel.json" );
	write( hommel, filepath );

	# Generate test fixture data:
	pvals <- runif( 5, 0, 0.5 );
	out <- p.adjust( pvals, method = "BH" );

	# Convert fixture data to JSON:
	bh <- list(
		pvals = pvals,
		expected = out
	);
	bh <- to_json( bh );

	# Write the data to file...
	filepath <- get_filepath( "bh.json" );
	write( bh, filepath );

	# Generate test fixture data:
	pvals <- runif( 5, 0, 0.5 );
	n <- 15;
	out <- p.adjust( pvals, method = "BH", n = n );

	# Convert fixture data to JSON:
	custom <- list(
		pvals = pvals,
		expected = out,
		n = n
	);
	custom <- to_json( custom );

	# Write the data to file...
	filepath <- get_filepath( "custom.json" );
	write( custom, filepath );

	# Generate test fixture data:
	pvals <- c( 0.3, 0.1, 0.1, 0.2 );
	n <- 10;
	out <- p.adjust( pvals, method = "hommel", n = n );

	# Convert fixture data to JSON:
	custom.hommel <- list(
		pvals = pvals,
		expected = out,
		n = n
	);
	custom.hommel <- to_json( custom.hommel );

	# Write the data to file...
	filepath <- get_filepath( "custom_hommel.json" );
	write( custom.hommel, filepath );

	# Generate test fixture data:
	pvals <- c( 0.3, 0.1, 0.1, 0.2 );
	n <- 10;
	out <- p.adjust( pvals, method = "BY", n = n );

	# Convert fixture data to JSON:
	custom.by <- list(
		pvals = pvals,
		expected = out,
		n = n
	);
	custom.by <- to_json( custom.by );

	# Write the data to file...
	filepath <- get_filepath( "custom_by.json" );
	write( custom.by, filepath );
}

main();
