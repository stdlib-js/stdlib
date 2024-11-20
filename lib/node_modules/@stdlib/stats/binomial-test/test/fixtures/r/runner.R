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
	high_p <- binom.test( 800, 1050, p = 0.8 );
	high_p <- list( x = 800, n = 1050, pValue = high_p$p.value, statistic = high_p$estimate, lower = high_p$conf.int[1], upper = high_p$conf.int[2], p = 0.8 );

	low_p <- binom.test( 200, 1050, p = 0.2 );
	low_p <- list( x = 200, n = 1050, pValue = low_p$p.value, statistic = low_p$estimate, lower = low_p$conf.int[1], upper = low_p$conf.int[2], p = 0.2 );

	medium_p <- binom.test( 480, 1050, p = 0.5 );
	medium_p <- list( x = 480, n = 1050, pValue = medium_p$p.value, statistic = medium_p$estimate, lower = medium_p$conf.int[1], upper = medium_p$conf.int[2], p = 0.5 );

	# Convert fixture data to JSON:
	high_p <- to_json( high_p );
	low_p <- to_json( low_p );
	medium_p <- to_json( medium_p );

	# Write the data to file...
	filepath <- get_filepath( "high_p.json" );
	write( high_p, filepath );

	filepath <- get_filepath( "medium_p.json" );
	write( medium_p, filepath );

	filepath <- get_filepath( "low_p.json" );
	write( low_p, filepath );
}

main();
