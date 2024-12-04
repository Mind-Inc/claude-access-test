# create_issue

Create a new issue in a GitHub repository.

## Parameters
```javascript
{
    owner:     string,    // Repository owner (required)
    repo:      string,    // Repository name (required)
    title:     string,    // Issue title (required)
    body:      string,    // Issue description (optional)
    assignees: string[],  // Users to assign (optional)
    labels:    string[],  // Issue labels (optional)
    milestone: number     // Milestone number (optional)
}
```

## Usage Example
```javascript
await create_issue({
    owner: "org-name",
    repo: "repo-name",
    title: "Bug: Login Error",
    body: "Detailed description...",
    labels: ["bug", "priority"]
});
```

## Notes
- Use clear, descriptive titles
- Include reproduction steps in body
- Add relevant labels for categorization

## Error Handling
- Verify repository permissions
- Check label existence
- Confirm assignee access