# React User List Application

A fully-featured React application that displays a list of users and their details, built with TypeScript and comprehensive testing.

## Features

- **User List and Details:**
  - Fetches 20 users from the provided API
  - Displays users in a list showing full name and email
  - Shows detailed user information when clicked
  - Responsive layout with side-by-side view on larger screens

- **Testing Setup:**
  - Vitest for testing framework
  - Istanbul for code coverage
  - MSW for API mocking
  - Comprehensive test suite covering all components
  - Test coverage > 90%

- **Type Safety:**
  - Full TypeScript implementation
  - Type definitions for all components and API responses

- **Styling:**
  - Clean, modern UI with Tailwind CSS
  - Responsive design
  - Loading and error states

## Project Structure

```
User-Directory/
├── package.json
├── src/
│   ├── types.ts
│   ├── api.ts
│   ├── components/
│   │   ├── UserList.tsx
│   │   └── UserDetails.tsx
│   ├── App.tsx
│   └── test/
│       ├── setup.ts
│       ├── App.test.tsx
│       ├── UserList.test.tsx
│       └── UserDetails.test.tsx
└── vitest.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Danbaba1/User-Directory.git
   cd User-Directory
   ```

2. Install dependencies
   ```
   npm install
   ```

### Running the Application

Start the development server:
```
npm run dev
```

The application will be available at `http://localhost:5173`

### Running Tests

Run the test suite:
```
npm run test
```

Generate test coverage report:
```
npm run coverage
```

## Implementation Details

### Components

- **App.tsx**: Main application component that manages state and layout
- **UserList.tsx**: Displays a list of users with basic information
- **UserDetails.tsx**: Shows detailed information for a selected user

### API Integration

The application fetches user data from a REST API. The API client is implemented in `api.ts` with proper TypeScript typings.

### Testing

The application uses:
- Vitest as the test runner
- React Testing Library for component testing
- MSW (Mock Service Worker) for API mocking
- Istanbul for code coverage reporting

Tests are structured to verify:
- Component rendering
- User interactions
- API integration
- Error handling
- Responsive design

## Future Improvements

- Add search and filtering functionality
- Implement pagination for large user lists
- Add user creation/editing capabilities
- Enhance UI with animations and transitions
- Implement state management with Redux or Context API for larger scale applications
