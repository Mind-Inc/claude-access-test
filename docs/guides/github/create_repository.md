# create_repository

Create a new GitHub repository in your account.

## Parameters
```javascript
{
    name:        string,  // Repository name (required)
    description: string,  // Repository description (optional)
    private:     boolean, // Whether repo should be private (optional)
    autoInit:    boolean  // Initialize with README.md (optional)
}
```

## Usage Example
```javascript
await create_repository({
    name: "my-new-repo",
    description: "A new project repository",
    private: false,
    autoInit: true
});
```

## Notes
- Repository names must be unique within your account
- Auto-initialization creates a default README.md
- Private repositories may require additional permissions

## Error Handling
- Check for name conflicts
- Verify proper access rights
- Handle initialization failures