
# VARIABLES #

# Define the code coverage instrumentation utility:
JAVASCRIPT_CODE_INSTRUMENTER ?= istanbul

# Define the command for removing files and directories:
DELETE ?= -rm
DELETE_FLAGS ?= -rf


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	include $(TOOLS_MAKE_LIB_DIR)/test-cov/istanbul.mk
endif


# TARGETS #

# Run unit tests and generate a test coverage report.
#
# This target instruments JavaScript source code, runs unit tests, and outputs a test coverage report.

test-javascript-cov:
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	@$(MAKE) -f $(this_file) test-istanbul
endif

.PHONY: test-javascript-cov


# View a test coverage report.
#
# This target opens an HTML JavaScript coverage report in a local web browser.

view-javascript-cov:
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	@$(MAKE) -f $(this_file) view-istanbul-report
endif

.PHONY: view-javascript-cov


# Remove a coverage directory.
#
# This target cleans up a JavaScript coverage directory by removing it entirely.

clean-javascript-cov:
	$(DELETE) $(DELETE_FLAGS) $(COVERAGE_DIR)

.PHONY: clean-javascript-cov
