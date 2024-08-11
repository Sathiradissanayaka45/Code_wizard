package com.codeWizard.CodeWizard.repository;

import com.codeWizard.CodeWizard.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long> {
}
