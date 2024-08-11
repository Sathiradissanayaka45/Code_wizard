package com.codeWizard.CodeWizard.service;

import com.codeWizard.CodeWizard.model.Issue;
import com.codeWizard.CodeWizard.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    @Autowired
    private IssueRepository issueRepository;

    public List<Issue> getAllIssues() {
        return issueRepository.findAll();
    }

    public Issue getIssueById(Long id) {
        return issueRepository.findById(id).orElse(null);
    }

    public Issue createIssue(Issue issue) {
        return issueRepository.save(issue);
    }

    public Issue updateIssue(Long id, Issue updatedIssue) {
        Issue issue = issueRepository.findById(id).orElse(null);
        if (issue != null) {
            issue.setTitle(updatedIssue.getTitle());
            issue.setDescription(updatedIssue.getDescription());
            issue.setTechnology(updatedIssue.getTechnology());
            issue.setStatus(updatedIssue.getStatus());
            issue.setReportedBy(updatedIssue.getReportedBy());
            return issueRepository.save(issue);
        }
        return null;
    }

    public void deleteIssue(Long id) {
        issueRepository.deleteById(id);
    }
}
