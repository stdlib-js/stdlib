
# DEPENDENCIES #

ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	include $(TOOLS_MAKE_LIB_DIR)/tools-test-cov/istanbul.mk
endif


# TARGETS #

# Run unit tests and generate a test coverage report.
#
# This target instruments JavaScript source code, runs unit tests, and outputs a test coverage report.

tools-test-javascript-cov:
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) $(MAKE) -f $(this_file) tools-test-istanbul
endif

.PHONY: tools-test-javascript-cov
