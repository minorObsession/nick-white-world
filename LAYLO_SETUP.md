# Laylo API Integration Setup Guide

This project includes a custom Laylo subscription widget that replaces the iframe embed with a native React component that directly calls the Laylo GraphQL API.

## Setup Instructions

### 1. Get Your Laylo API Key

1. Log into your Laylo dashboard
2. Navigate to **Settings** → **Integrations**
3. Scroll to the bottom to find **'API Keyring'**
4. Enter a label for the key (e.g., "Nick White Website")
5. Generate the key
6. **Important**: Copy and store the key immediately - Laylo doesn't store it for security reasons

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_LAYLO_API_KEY=your-actual-api-key-here
```

### 3. Security Considerations

⚠️ **Important Security Note**: The current implementation stores the API key in frontend environment variables, which means it will be visible in the built application. For production use, consider:

- Implementing a backend proxy endpoint
- Moving the API calls to your server
- Using server-side environment variables

### 4. Widget Features

The custom `LayloWidget` component includes:

- **Dual subscription modes**: Email and SMS
- **Responsive design**: Matches your existing theme
- **Loading states**: User feedback during API calls
- **Error handling**: Graceful error messages
- **Legal compliance**: Required terms and privacy policy links
- **Form validation**: Email and phone number validation

### 5. API Integration Details

The widget implements the Laylo GraphQL API:

- **Endpoint**: `https://laylo.com/api/graphql`
- **Mutation**: `subscribeToUser(email: String, phoneNumber: String): Boolean`
- **Authentication**: Bearer token in Authorization header

### 6. Customization

You can customize the widget by:

- Modifying the `LayloWidget` component styling
- Adjusting the form fields and validation
- Changing the success/error messages
- Adding additional form fields if needed

### 7. Testing

To test the integration:

1. Ensure your API key is properly configured
2. Try subscribing with both email and phone number
3. Check your Laylo dashboard for new subscribers
4. Verify error handling with invalid inputs

## Troubleshooting

**"Network error" messages**: Check that your API key is correctly set in the `.env` file and that you've restarted your development server.

**"Subscription failed"**: Verify your API key is valid and active in your Laylo dashboard.

**TypeScript errors**: Ensure all imports are correct and the component is properly typed.
