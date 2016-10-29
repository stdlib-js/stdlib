
# TARGETS #

# Run JavaScript unit tests.
#
# This target runs JavaScript unit tests using a specified test runner and pipes TAP output to a reporter.

tools-test-javascript: $(NODE_MODULES)
	$(QUIET) TESTS="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-javascript

.PHONY: tools-test-javascript


# Generate a JavaScript test summary.
#
# This target runs JavaScript unit tests and aggregates TAP output as a test summary.

tools-test-javascript-summary: $(NODE_MODULES)
	$(QUIET) TESTS="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-javascript-summary

.PHONY: tools-test-javascript-summary


# Run unit tests against Node.js versions.
#
# This targets runs JavaScript unit tests against specific Node.js versions.

tools-test-node-versions: $(NODE_MODULES)
	$(QUIET) TESTS="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-node-versions

.PHONY: tools-test-node-versions
