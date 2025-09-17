# InnovativeSphere Frontend

A modern, responsive frontend application for the InnovativeSphere AI-powered capstone project idea generator. Built with React Router, TypeScript, and Tailwind CSS, this application provides an intuitive interface for students and professionals to discover personalized project concepts.

## 🚀 Features

- **AI-Powered Idea Generation**: Generate unique project ideas using Mistral AI integration
- **Smart Filtering System**: Filter ideas by industry, project type, complexity, and user interests
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Modern UI Components**: Built with atomic design principles using Radix UI primitives
- **Type Safety**: Full TypeScript implementation with strict typing
- **Real-time Loading States**: Smooth loading indicators and error handling
- **Interactive Idea Display**: Rich presentation of generated ideas with tech stack, features, and objectives

## 🛠️ Tech Stack

- **Framework**: React Router v7 (SSR-capable)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Build Tool**: Vite with React Router integration
- **Package Manager**: npm

## 📁 Project Structure

```
app/
├── components/
│   ├── molecules/          # Reusable UI molecules
│   │   ├── form-field.tsx
│   │   ├── section.tsx
│   │   ├── select-field.tsx
│   │   ├── textarea-field.tsx
│   │   └── title-group.tsx
│   ├── organisms/          # Complex UI components
│   │   ├── filter-card.tsx
│   │   ├── hero-section.tsx
│   │   └── idea-display.tsx
│   ├── templates/          # Page templates
│   │   └── home-template.tsx
│   └── ui/                 # Base UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── label.tsx
│       ├── popover.tsx
│       ├── scroll-area.tsx
│       ├── skeleton.tsx
│       ├── text.tsx
│       └── textarea.tsx
├── hooks/                  # Custom React hooks
│   ├── useIdeas.ts
│   ├── useIndustries.ts
│   └── useProjectTypes.ts
├── services/               # API service layer
│   └── api.ts
├── types/                  # TypeScript type definitions
│   └── api.ts
├── lib/                    # Utility functions
│   └── utils.ts
├── routes/                 # React Router routes
│   └── home.tsx
└── root.tsx               # Root component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Backend API running (see [Backend README](../ie-backend/README.md))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ie-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration:
```bash
# Create .env.local file
echo "VITE_API_BASE_URL=http://localhost:3000/api/v1" > .env.local
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

The build output will be in the `build/` directory with both client and server bundles.

### Production Server

Start the production server:

```bash
npm start
```

## 🎨 Design System

The application follows atomic design principles with a custom design system:

### Components Hierarchy
- **Atoms**: Basic UI elements (buttons, inputs, text)
- **Molecules**: Simple combinations of atoms (form fields, sections)
- **Organisms**: Complex UI components (filter cards, idea displays)
- **Templates**: Page layouts and structure

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Design Tokens**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Dark/Light Mode**: Built-in theme support (ready for implementation)

## 🔌 API Integration

The frontend communicates with the InnovativeSphere backend API:

### Endpoints Used
- `GET /api/v1/industries` - Fetch available industries
- `GET /api/v1/project-types` - Fetch available project types
- `POST /api/v1/ideas/generate` - Generate new project ideas

### Error Handling
- Centralized error handling with user-friendly messages
- Loading states for all async operations
- Graceful fallbacks for API failures

## 🧪 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow atomic design principles
- Implement proper error boundaries
- Use custom hooks for state management
- Maintain consistent naming conventions

### Component Development
- Create reusable, composable components
- Use proper TypeScript interfaces
- Implement proper accessibility features
- Follow React best practices

## 🚀 Deployment

### Docker Deployment

Build and run using Docker:

```bash
docker build -t innovative-sphere-frontend .

# Run the container
docker run -p 3000:3000 innovative-sphere-frontend
```

### Environment Variables

Configure the following environment variables for production:

```env
VITE_API_BASE_URL=https://your-api-domain.com/api/v1
NODE_ENV=production
```

### Deployment Platforms

The application can be deployed to any platform that supports Node.js:

- **Vercel**: Zero-config deployment with React Router support
- **Netlify**: Static site generation with serverless functions
- **AWS Amplify**: Full-stack deployment with CI/CD
- **Railway**: Simple deployment with automatic builds
- **Fly.io**: Global deployment with edge optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@innovativesphere.com or create an issue in the repository.

## 🔮 Roadmap

- [x] **Core UI Components** - Atomic design system implementation
- [x] **API Integration** - Backend communication layer
- [x] **Idea Generation** - AI-powered idea generation interface
- [x] **Responsive Design** - Mobile-first responsive layout
- [x] **TypeScript Integration** - Full type safety implementation
- [ ] **User Authentication** - Login and user management
- [ ] **Idea Management** - Save, favorite, and organize ideas
- [ ] **Advanced Filtering** - Complex search and filter options
- [ ] **Theme System** - Dark/light mode toggle
- [ ] **PWA Support** - Progressive Web App capabilities
- [ ] **Offline Support** - Service worker implementation
- [ ] **Analytics Integration** - User behavior tracking
- [ ] **Testing Suite** - Comprehensive unit and integration tests
- [ ] **Performance Optimization** - Code splitting and lazy loading

---

**Built with ❤️ for the developer community**

*InnovativeSphere - Your next big idea, in orbit*