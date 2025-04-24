# Installation Guide for Refugee Connect Platform

This guide will help you set up and run the Refugee Connect Platform on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)
- A modern web browser (Chrome, Firefox, Edge, etc.)

## Installation Steps

1. **Clone the repository**

```markdown
   git clone https://github.com/your-username/refu-connect.git
   cd refu-connect
 ```

2. Install dependencies
   
   ```bash
   npm install
    ```
3. Set up environment variables (if needed)
   
   Create a .env.local file in the root directory and add any necessary environment variables:
   
   ```plaintext
   NEXT_PUBLIC_APP_ENV=development
    ```
## Running the Application
### Development Mode
To run the application in development mode with hot-reloading:

```bash
npm run dev
 ```

The application will be available at http://localhost:3000 .

### Production Build
To create a production build:

```bash
npm run build
 ```

To start the production server:

```bash
npm start
 ```

## Project Structure
The project follows the structure outlined in the CONTEXT.md file.

## Troubleshooting
### Common Issues
1. Module not found errors
   
   - Make sure you've installed all dependencies with npm install
   - Check for typos in import statements
2. Styling issues with RTL languages
   
   - Ensure the language direction is properly set in the HTML document
   - Verify that the RTL styles are being applied correctly
3. TensorFlow.js errors
   
   - Check browser compatibility
   - Ensure you have sufficient memory for model operations
4. Local storage issues
   
   - Clear browser cache if you encounter data persistence problems
   - Check browser console for storage-related errors

### Getting Help
If you encounter any other issues, please:

1. Check the GitHub Issues for similar problems
2. Create a new issue with detailed information about your problem
3. Join our community Discord for real-time support
## Next Steps

After installation, you might want to:

- Read the CONTRIBUTING.md guide to learn how to contribute
- Explore the codebase to understand the application structure
- Try creating a test profile and see the matching algorithm in action