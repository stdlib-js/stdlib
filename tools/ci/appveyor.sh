#!/usr/bin/env bash
#
# Script to run continuous integration on AppVeyor.


# VARIABLES #

# Define a heartbeat interval to periodically print messages to `stdout`:
export HEARTBEAT_INTERVAL=30s

# Define the number of lines of logged output to print upon completion:
export TAIL_LINES=4000

# Define an output file to store log output:
export CI_LOG_DIR=./var/log
export CI_LOG_PATH=$CI_LOG_DIR/appveyor.log


# FUNCTIONS #

# Starts a heartbeat.
start_heartbeat() {
	echo 'Starting heartbeat...'

	# Create a heartbeat and send to background:
	heartbeat &

	# Capture the heartbeat pid:
	HEARTBEAT_PID=$!
	echo "Heartbeat pid: $HEARTBEAT_PID"
}

# Runs an infinite print loop in which output is periodically written to `stdout`.
heartbeat() {
	while true; do
		echo "$(date) - heartbeat...";
		sleep $HEARTBEAT_INTERVAL;
	done
}

# Stops the heartbeat print loop.
stop_heartbeat() {
	echo 'Stopping heartbeat...'
	kill $HEARTBEAT_PID
}

# Defines an error handler.
on_error() {
	echo 'ERROR: An error was encountered during execution.'
	cleanup
	exit 1
}

# Tails the log output.
tail_output() {
   echo "Printing the last $TAIL_LINES lines of log output..."
   tail -"$TAIL_LINES" "$CI_LOG_PATH"
}

# Runs clean-up tasks.
cleanup() {
	tail_output
	stop_heartbeat
}


# MAIN #

# Run in the top-level project directory:
cd `dirname "$0"`/../..

# Exit immediately if one of the executed commands exits with a non-zero status:
set -e

# Set an error handler to print captured output and perform any clean-up tasks:
trap 'on_error' ERR

# Create an output log file:
mkdir -p "$CI_LOG_DIR"
touch "$CI_LOG_PATH"

# Start a heartbeat:
start_heartbeat

# Run CI commands, merging `stderr` into `stdout` and redirecting logged output to file...
# echo 'Checking dependencies...'
# make check-deps >> "$CI_LOG_PATH" 2>&1

# echo 'Running tests...'
# make test >> "$CI_LOG_PATH" 2>&1

# echo 'Running benchmarks...'
# make benchmark >> "$CI_LOG_PATH" 2>&1

# echo 'Running examples...'
# make examples >> "$CI_LOG_PATH" 2>&1

echo 'Generating test coverage report...'
make test-cov >> "$CI_LOG_PATH" 2>&1

echo 'Success!'

# Run cleanup tasks:
cleanup
