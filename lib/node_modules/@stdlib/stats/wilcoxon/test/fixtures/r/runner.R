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
	x <- c( 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 );
	twosided <- wilcox.test( x, exact = TRUE );
	twosided <- list( x = x, pValue = twosided$p.value, statistic = twosided$statistic );

	x <- c( 8, 3, 7, 5, 5, 2, 4, 4, -2, -3 );
	ties <- wilcox.test( x, exact = TRUE );
	ties <- list( x = x, pValue = ties$p.value, statistic = ties$statistic );

	x <- rnorm( 100, 0, 2.0 );
	twosided.approx <- wilcox.test( x, exact = FALSE, correct = TRUE );
	twosided.approx <- list( x = x, pValue = twosided.approx$p.value, statistic = twosided.approx$statistic );

	x <- c( 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 );
	less <- wilcox.test( x, alternative = "less", exact = TRUE );
	less <- list( x = x, pValue = less$p.value, statistic = less$statistic );

	x <- rnorm( 100, 0, 2.0 );
	less.approx <- wilcox.test( x, alternative = "less", exact = FALSE, correct = TRUE );
	less.approx <- list( x = x, pValue = less.approx$p.value, statistic = less.approx$statistic );

	x <- c( 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 );
	greater <- wilcox.test( x, alternative = "greater", exact = TRUE );
	greater <- list( x = x, pValue = greater$p.value, statistic = greater$statistic );

	x <- rnorm( 100, 0, 2.0 );
	greater.approx <- wilcox.test( x, alternative = "greater", exact = FALSE, correct = TRUE );
	greater.approx <- list( x = x, pValue = greater.approx$p.value, statistic = greater.approx$statistic );

	x <- rnorm( 20, 1.0, 2.0 );
	y <- rnorm( 20, 3.0, 2.0 );
	paired <- wilcox.test( x, y, paired = TRUE, exact = TRUE );
	paired <- list( x = x, y = y, pValue = paired$p.value, statistic = paired$statistic );

	x <- rnorm( 20, 1.0, 2.0 );
	y <- rnorm( 20, 2.0, 2.0 );
	paired.less <- wilcox.test( x, y, paired = TRUE, alternative = "less", exact = TRUE );
	paired.less <- list( x = x, y = y, pValue = paired.less$p.value, statistic = paired.less$statistic );

	x <- rnorm( 20, 1.0, 2.0 );
	y <- rnorm( 20, 2.0, 2.0 );
	paired.greater <- wilcox.test( x, y, paired = TRUE, alternative = "greater", exact = TRUE );
	paired.greater <- list( x = x, y = y, pValue = paired.less$p.value, statistic = paired.less$statistic );

	# Convert fixture data to JSON:
	twosided <- to_json( twosided );
	twosided.approx <- to_json( twosided.approx );
	ties <- to_json( ties );
	greater <- to_json( greater );
	greater.approx <- to_json( greater.approx );
	less <- to_json( less );
	less.approx <- to_json( less.approx );
	paired <- to_json( paired );
	paired.less <- to_json( paired.less );
	paired.greater <- to_json( paired.greater );

	# Write the data to file...
	filepath <- get_filepath( "twosided.json" );
	write( twosided, filepath );

	filepath <- get_filepath( "ties.json" );
	write( ties, filepath );

	filepath <- get_filepath( "twosided_approx.json" );
	write( twosided.approx, filepath );

	filepath <- get_filepath( "greater.json" );
	write( greater, filepath );

	filepath <- get_filepath( "greater_approx.json" );
	write( greater.approx, filepath );

	filepath <- get_filepath( "less.json" );
	write( less, filepath );

	filepath <- get_filepath( "less_approx.json" );
	write( less.approx, filepath );

	filepath <- get_filepath( "paired.json" );
	write( paired, filepath );

	filepath <- get_filepath( "paired_less.json" );
	write( paired.less, filepath );

	filepath <- get_filepath( "paired_greater.json" );
	write( paired.greater, filepath );
}

main();
