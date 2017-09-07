
# TARGETS #

# Run fixture runners.
#
# This target runs scripts written in Julia to generate test fixtures. Note that we assume the scripts can be run using Julia.

test-fixtures-julia:
	$(QUIET) $(FIND_JULIA_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: test-fixtures-julia


# Run fixture runners.
#
# This target runs a list of scripts written in Julia to generate fixtures. Note that we assume the scripts can be run using Julia.

test-fixtures-julia-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(MAKE_EXECUTABLE) $$file && $$file || exit 1; \
	done

.PHONY: test-fixtures-julia-files
