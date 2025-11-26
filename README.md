# Sagar Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and React Router. Features dark mode, interactive components, and a clean, professional design.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Interactive Game**: Fun click challenge game on the landing page
- **Project Showcase**: Grid-based project gallery with modal details
- **Blog System**: Blog listing and individual blog post pages
- **Skills Display**: Categorized skills with visual progress indicators
- **Case Studies**: Detailed case study presentations
- **Smooth Routing**: React Router for seamless navigation
- **Fully Responsive**: Works perfectly on all screen sizes

## 📁 Project Structure

```
SagarPortfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ClickGame.jsx
│   │   ├── ProjectModal.jsx
│   │   └── SocialLinks.jsx
│   ├── pages/               # Page components
│   │   ├── Landing.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Blogs.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Skills.jsx
│   │   └── CaseStudies.jsx
│   ├── router/              # Router configuration
│   │   └── index.jsx
│   ├── data/                # Sample data
│   │   ├── projects.js
│   │   ├── blogs.js
│   │   ├── skills.js
│   │   └── caseStudies.js
│   ├── utils/               # Utility functions
│   │   └── theme.js
│   ├── assets/              # Images and static assets
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd SagarPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up EmailJS (for contact forms):**
   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with these variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Get your Public Key from Account > API Keys
   - Create a `.env` file in the root directory:
     ```env
     VITE_EMAILJS_SERVICE_ID=service_lbni2jp
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the template ID and public key with your actual EmailJS credentials

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Update Profile Information

1. **Profile Image**: Replace the placeholder image in `src/pages/Landing.jsx` and `src/pages/About.jsx` with your actual profile photo.

2. **Social Links**: Update the URLs in:
   - `src/components/SocialLinks.jsx`
   - `src/pages/Landing.jsx`
   - `src/pages/About.jsx`

3. **About Section**: Edit the introduction text in `src/pages/About.jsx`.

### Update Projects

Edit `src/data/projects.js` to add your own projects:

```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Your project description",
  techStack: ["React", "Node.js", "MongoDB"],
  liveLink: "https://your-project.com",
  githubLink: "https://github.com/yourusername/project",
  image: "path/to/image.jpg"
}
```

### Update Blogs

Edit `src/data/blogs.js` to add your blog posts. The content supports simple markdown-like formatting.

### Update Skills

Edit `src/data/skills.js` to customize your skills and proficiency levels.

### Update Case Studies

Edit `src/data/caseStudies.js` to add your case studies.

## 🎯 Routes

- `/` - Landing page with hero section and interactive game
- `/about` - About page with introduction and social links
- `/projects` - Projects gallery with modal details
- `/blogs` - Blog listing page
- `/blogs/:id` - Individual blog post page
- `/skills` - Skills page with categorized display
- `/case-studies` - Case studies page

## 🎨 Styling

The project uses Tailwind CSS for all styling. Key features:

- **Dark Mode**: Toggle with the theme button in the header
- **Glassmorphism**: Glass effect components using backdrop blur
- **Gradients**: Beautiful gradient backgrounds and text
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first responsive design

## 📝 Notes

- Replace all placeholder images with your actual images
- Update all social media links with your profiles
- Customize the color scheme in `tailwind.config.js` if needed
- Add your actual project images to the `src/assets/` directory
- **Important**: Make sure to set up EmailJS environment variables in `.env` file for the contact forms to work properly

## 🚀 Deployment

You can deploy this portfolio to:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using React, Vite, and Tailwind CSS

