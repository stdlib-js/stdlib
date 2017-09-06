
# TARGETS #

# Run fixture runners.
#
# This target runs scripts written in R to generate test fixtures. Note that we assume the scripts can be run using R.

test-fixtures-r:
	$(QUIET) set -o pipefail ; $(FIND_R_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: test-fixtures-r


# Run fixture runners.
#
# This target runs a list of scripts written in R to generate fixtures. Note that we assume the scripts can be run using R.

test-fixtures-r-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: test-fixtures-r-files
