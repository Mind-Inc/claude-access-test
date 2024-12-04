# get_file_contents

Get the contents of a file or directory from a GitHub repository.

## Parameters
```javascript
{
    owner: string,  // Repository owner (required)
    repo: string,   // Repository name (required)
    path: string,   // Path to file/directory (required)
    branch: string  // Branch name (optional, required for private repos)
}
```

## Usage Example
```javascript
// Get file contents
const fileContent = await get_file_contents({
    owner: "org-name",
    repo: "repo-name",
    path: "docs/README.md",
    branch: "main"
});

// Handle base64 encoded content
const decodedContent = Buffer.from(fileContent.content, 'base64').toString();
```

## Notes
- Content is base64 encoded
- Branch required for private repositories
- Can retrieve directory listings

## Error Handling
- Handle file not found errors
- Verify path validity
- Handle encoding issues