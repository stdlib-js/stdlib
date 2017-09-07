
# TARGETS #

# Run fixture runners.
#
# This target runs scripts written in Fortran to generate test fixtures.

test-fixtures-fortran:
	$(QUIET) $(FIND_FORTRAN_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: test-fixtures-fortran


# Run fixture runners.
#
# This target runs a list of scripts written in Fortran to generate fixtures.

test-fixtures-fortran-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: test-fixtures-fortran-files
