# Softeso App

A modern, responsive website for Softeso built with React, TypeScript, and Tailwind CSS.

## Features

- 🚀 Modern UI with smooth animations
- 📱 Fully responsive design
- 🎨 Custom theming with Tailwind CSS
- 🔍 SEO optimized with React Helmet
- 📧 Contact form with email integration
- 🛣️ Client-side routing
- 🎭 Framer Motion animations
- 💅 Type-safe styling with TypeScript

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Hook Form
- React Helmet Async
- Vite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nit5343/softeso-app.git
cd softeso-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your email configuration:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable components
├── config/          # Configuration files
├── constants/       # Constants and enums
├── pages/          # Page components
├── theme/          # Theme configuration
├── utils/          # Utility functions
└── App.tsx         # Root component
```

## Deployment

The site is configured for deployment on Netlify with serverless functions for the contact form.

### Environment Variables

Required environment variables for production:

- `EMAIL_USER`: Email address for sending contact form messages
- `EMAIL_PASS`: App-specific password for email account

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries, please reach out to:
- Email: support@softeso.com
- Website: https://softeso.com