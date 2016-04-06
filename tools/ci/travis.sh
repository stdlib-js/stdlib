#!/usr/bin/env bash

# DESCRIPTION #

# Script to run continuous integration on Travis CI.


# VARIABLES #

# Define a heartbeat interval to prevent Travis CI from prematurely ending due to long running commands:
export HEARTBEAT_INTERVAL=30s

# Define the number of lines of logged output to print upon completion:
export TAIL_LINES=500

# Define an output file to store log output:
export CI_OUT=/var/log/travis-ci.log


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
   tail -$TAIL_LINES $CI_OUT
}

# Runs clean-up tasks.
cleanup() {
	tail_output
	stop_heartbeat
}


# MAIN #

# Exit immediately if one of the executed commands exits with a non-zero status:
set -e

# Set an error handler to print captured output and perform any clean-up tasks:
trap 'on_error' ERR

# Create an output log file:
sudo touch $CI_OUT
sudo chown travis $CI_OUT

# Start a heartbeat:
start_heartbeat

# Run CI commands, merging `stderr` into `stdout` and redirecting logged output to file...
echo 'Running tests...'
make test >> $CI_OUT 2>&1

echo 'Running coverage...'
make coverage >> $CI_OUT 2>&1

echo 'Success!'

# Run cleanup tasks:
cleanup
