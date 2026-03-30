#!/usr/bin/env Rscript
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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
options( digits = 16L );

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
	rho <- 0.5;
	x <- rnorm( 200 );
	y <- rnorm( 200, 0.0, sqrt( 1.0 - rho*rho ) ) + rho*x;
	out <- cor.test( x, y, method = "pearson" );

	# Convert fixture data to JSON:
	twosided <- list(
		x = x,
		y = y,
		statistic = out$statistic,
		pValue = out$p.value,
		ci = out$conf.int
	);
	twosided <- to_json( twosided );

	# Write the data to file...
	filepath <- get_filepath( "twosided.json" );
	write( twosided, filepath );

	# Generate test fixture data:
	x <- rnorm( 200 );
	y <- rnorm( 200 ) - 0.5*x;
	out <- cor.test( x, y, method = "pearson", alternative = "less" );

	less <- list(
		x = x,
		y = y,
		statistic = out$statistic,
		pValue = out$p.value,
		ci = out$conf.int
	);
	less <- to_json( less );

	# Write the data to file...
	filepath <- get_filepath( "less.json" );
	write( less, filepath );

	# Generate test fixture data:
	x <- rnorm( 200 );
	y <- rnorm( 200 ) - 0.1*x;
	out <- cor.test( x, y, method = "pearson", alternative = "greater" );

	greater <- list(
		x = x,
		y = y,
		statistic = out$statistic,
		pValue = out$p.value,
		ci = out$conf.int
	);
	greater <- to_json( greater );

	# Write the data to file...
	filepath <- get_filepath( "greater.json" );
	write( greater, filepath );
}

main();
