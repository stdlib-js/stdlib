
# VARIABLES #

CODE_COV_INSTRUMENTATION ?= istanbul


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

# FIXME: -rm -rf
clean-cov:
	-rm -rf $(COVERAGE_DIR)


.PHONY: test-cov view-cov clean-cov
