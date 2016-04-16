
# VARIABLES #

CODE_COV_INSTRUMENTATION ?= istanbul

# Define the command for removing files and directories:
DELETE_CMD ?= -rm -rf


# DEPENDENCIES #

ifeq ($(CODE_COV_INSTRUMENTATION), istanbul)
	include $(TOOLS_MAKE_DIR)/lib/test-cov/istanbul.mk
endif


# TARGETS #

# Run units and generate a test coverage report.
#
# This target instruments source code, runs unit tests, and outputs a test coverage report.

test-cov:
ifeq ($(CODE_COV_INSTRUMENTATION), istanbul)
	@$(MAKE) -f $(THIS_FILE) test-istanbul
endif


# View a test coverage report.
#
# This target opens an HTML coverage report in a local web browser.

view-cov:
ifeq ($(CODE_COV_INSTRUMENTATION), istanbul)
	@$(MAKE) -f $(THIS_FILE) view-istanbul-report
endif


# Remove a coverage directory.
#
# This target cleans up a coverage directory by removing it entirely.

clean-cov:
	$(DELETE_CMD) $(COVERAGE_DIR)


.PHONY: test-cov view-cov clean-cov
