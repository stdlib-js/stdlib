
# TARGETS #

# Run fixture runners.
#
# This target runs scripts written in C++ to generate test fixtures.

test-fixtures-cpp:
	$(QUIET) set -o pipefail ; $(FIND_CPP_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		BOOST=$(DEPS_BOOST_BUILD_OUT) $(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: test-fixtures-cpp


# Run fixture runners.
#
# This target runs a list of scripts written in C++ to generate fixtures.

test-fixtures-cpp-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		BOOST=$(DEPS_BOOST_BUILD_OUT) $(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: test-fixtures-cpp-files
