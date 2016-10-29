
# TARGETS #

# Run unit tests and generate a test coverage report.
#
# This target instruments source code, runs unit tests, and outputs a test coverage report.

tools-test-istanbul:
	$(QUIET) NODE_ENV=$(NODE_ENV_TEST) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(ISTANBUL_COVER) \
		--dir $(COVERAGE_DIR) \
		--report $(ISTANBUL_COVER_REPORT_FORMAT) \
	$(JAVASCRIPT_TEST) -- \
		$(JAVASCRIPT_TEST_FLAGS) \
		$(TOOLS_TESTS)

.PHONY: tools-test-istanbul
