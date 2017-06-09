
# TARGETS #

# Run JavaScript unit tests.
#
# This target runs JavaScript unit tests using a specified test runner and pipes TAP output to a reporter.

tools-test-javascript:
	$(QUIET) FILES="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-javascript-files

.PHONY: tools-test-javascript


# Generate a JavaScript test summary.
#
# This target runs JavaScript unit tests and aggregates TAP output as a test summary.

tools-test-javascript-summary:
	$(QUIET) FILES="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-javascript-files-summary

.PHONY: tools-test-javascript-summary


# Run unit tests against Node.js versions.
#
# This targets runs JavaScript unit tests against specific Node.js versions.
#
# TODO: update once `test-node-versions` has been updated to accepting a `$FILES` list.

tools-test-node-versions:
	$(QUIET) TESTS="$(TOOLS_TESTS)" $(MAKE) -f $(this_file) test-node-versions

.PHONY: tools-test-node-versions
