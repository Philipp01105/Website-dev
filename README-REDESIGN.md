# I.R.I.S. Website Redesign

This redesign includes a modern React frontend with Shadcn UI components and Tailwind CSS, integrated with the existing Spring Boot backend.

## Project Structure

```
.
├── frontend-react/          # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/          # Shadcn UI components (Button, Card, Input, etc.)
│   │   │   └── Header.jsx   # Main navigation header
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx     # Landing page
│   │   │   ├── Blog.jsx     # Blog listing page
│   │   │   ├── Contact.jsx  # Contact form page
│   │   │   └── Login.jsx    # Login page
│   │   ├── lib/             # Utility functions
│   │   └── App.jsx          # Main app component with routing
│   └── vite.config.js       # Vite configuration with proxy setup
│
├── src/main/                # Spring Boot backend
│   ├── java/com/example/demo/
│   │   ├── Controller/      # REST and view controllers
│   │   ├── Entities/        # JPA entities (Blog now includes imageUrl)
│   │   ├── Repositories/    # Data repositories
│   │   └── Services/        # Business logic services
│   └── resources/
│       ├── static/          # Static assets
│       │   ├── Pictures/    # Organization images and logo
│       │   ├── react-build/ # Built React app (generated)
│       │   └── style.css    # Legacy CSS (for Thymeleaf templates)
│       └── templates/       # Thymeleaf templates (legacy)
│
└── pom.xml                  # Maven configuration
```

## Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Shadcn UI** - High-quality, customizable components
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library

### Backend
- **Spring Boot 3.4.1** - Java framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Data persistence
- **Thymeleaf** - Server-side template engine (legacy)
- **H2/PostgreSQL** - Database options
- **Java 17** - Programming language

## Features

### New React Frontend
- ✅ Modern, responsive design with red and black color scheme
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Hero section with call-to-action buttons
- ✅ Feature cards with hover effects and images
- ✅ Blog page with image support
- ✅ Contact form with validation
- ✅ Login page with clean design
- ✅ Dark/light theme toggle
- ✅ Smooth animations and transitions
- ✅ SEO-friendly structure

### Enhanced Backend
- ✅ REST API endpoint for blogs (`/api/blogs`)
- ✅ Image URL support for blog posts
- ✅ Updated admin interface to add images to blogs
- ✅ Existing authentication and authorization maintained
- ✅ All legacy Thymeleaf templates still functional

## Getting Started

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- npm or yarn

### Development Setup

#### 1. Start the Spring Boot Backend

```bash
# From project root
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080`

#### 2. Start the React Frontend (Development Mode)

```bash
# Navigate to frontend directory
cd frontend-react

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

The frontend dev server will start on `http://localhost:3000` and proxy API requests to the backend.

### Production Build

#### Build the React Frontend

```bash
cd frontend-react
npm run build
```

This builds the React app and outputs to `src/main/resources/static/react-build/`

#### Build the Complete Application

```bash
# From project root
./mvnw clean package -DskipTests
```

This creates an executable JAR with both frontend and backend.

## Accessing the Application

### Development Mode
- **React Frontend**: http://localhost:3000
- **Legacy Thymeleaf**: http://localhost:8080
- **React in Production**: http://localhost:8080/react

### Available Routes

#### React Frontend
- `/` - Home page with hero section and features
- `/blog` - Blog listing with images
- `/contact` - Contact form
- `/login` - Login page

#### Backend API
- `/api/blogs` - GET all blogs (JSON)
- `/contact` - POST contact form submission
- `/login-real` - Spring Security login endpoint

#### Legacy Thymeleaf (Still Functional)
- `/` - Original home page
- `/blog` - Original blog page (now with image support)
- `/wiki` - Wiki page (Admin only)
- `/admin/*` - Admin panel

## Customization

### Theme Colors
The organization colors (red and black) are defined in:
- `frontend-react/tailwind.config.js` - Tailwind theme
- `frontend-react/src/index.css` - CSS variables

### Adding Blog Images
When creating a blog post through the admin panel:
1. Go to `/admin/add-blog`
2. Enter the title and content
3. Add image URL (e.g., `/Pictures/image.jpg`)
4. Submit

Images should be placed in `src/main/resources/static/Pictures/`

## Architecture Notes

### Why Two Frontend Options?
1. **React (New)**: Modern, component-based, better UX, easier to maintain
2. **Thymeleaf (Legacy)**: Server-side rendering, existing admin panel, backward compatibility

### API Integration
The React frontend communicates with Spring Boot via:
- REST APIs for data (e.g., `/api/blogs`)
- Form submissions for contact and login
- Vite proxy during development
- Static files in production

### Deployment Strategy
For production, you can:
1. Build React app (`npm run build` in `frontend-react/`)
2. Package Spring Boot app (`./mvnw package`)
3. Deploy the resulting JAR file
4. Users access React app at `/react` or main site at `/`

## Future Enhancements

Potential improvements:
- [ ] Migrate admin panel to React
- [ ] Add user registration in React
- [ ] Implement blog post detail pages
- [ ] Add comment system
- [ ] Image upload functionality
- [ ] Wiki page in React
- [ ] User dashboard
- [ ] Search functionality
- [ ] Progressive Web App (PWA) features

## Troubleshooting

### Frontend Build Issues
```bash
cd frontend-react
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Backend Build Issues
```bash
./mvnw clean compile
```

### Port Already in Use
Change ports in:
- `application.properties` (Spring Boot)
- `vite.config.js` (React dev server)

## Contributing

When making changes:
1. Update React components in `frontend-react/src/`
2. Rebuild: `cd frontend-react && npm run build`
3. Test Spring Boot integration
4. Commit both source and built files

## License

See LICENSE.md in the project root.
