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
	a <- c( 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 );
	b <- c( 560, 550, 580, 550, 560, 590, 550, 590 );
	twosided <- var.test( x = a, y = b );
	twosided <- list( a = a, b = b, pValue = twosided$p.value, statistic = twosided$statistic, lower = twosided$conf.int[1], upper = twosided$conf.int[2] );

	less <- var.test( x = a, y = b, alternative = "less" );
	less <- list( a = a, b = b, pValue = less$p.value, statistic = less$statistic, lower = less$conf.int[1], upper = less$conf.int[2] );

	greater <- var.test( x = a, y = b, alternative = "greater" );
	greater <- list( a = a, b = b, pValue = greater$p.value, statistic = greater$statistic, lower = greater$conf.int[1], upper = greater$conf.int[2] );

	ratio <- 10.0;
	diff <- var.test( x = a, y = b, ratio  = ratio );
	diff <- list( a = a, b = b, ratio = ratio, pValue = diff$p.value, statistic = diff$statistic, lower = diff$conf.int[1], upper = diff$conf.int[2] );

	# Convert fixture data to JSON:
	twosided <- to_json( twosided );
	diff <- to_json( diff );
	less <- to_json( less );
	greater <- to_json( greater );

	# Write the data to file...
	filepath <- get_filepath( "twosided.json" );
	write( twosided, filepath );

	filepath <- get_filepath( "less.json" );
	write( less, filepath );

	filepath <- get_filepath( "greater.json" );
	write( greater, filepath );

	filepath <- get_filepath( "diff.json" );
	write( diff, filepath );
}

main();
