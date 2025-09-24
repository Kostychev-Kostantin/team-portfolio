# Kazakhstan Development Team Portfolio

A modern, responsive team portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcases our expertise in Full-Stack development and AI/ML solutions with beautiful animations and professional design.

## 🚀 Features

- **Modern Design**: Clean, professional design with blue color scheme and smooth animations
- **Responsive**: Fully responsive design that works perfectly on all devices
- **Performance**: Optimized for speed and SEO with Next.js 14
- **Interactive**: Smooth animations using Framer Motion
- **Professional**: Complete portfolio sections including case studies and testimonials
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags, sitemap, and structured data

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono

## 📁 Project Structure

```
kazakhstan-team-portfolio/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # Team information
│   ├── CaseStudies.tsx    # Project showcases
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
│   └── robots.txt         # SEO robots file
└── Configuration files
```

## 🎨 Design Features

- **Color Scheme**: Professional blue gradient theme
- **Typography**: Inter font for readability
- **Animations**: Smooth scroll animations and hover effects
- **Glass Effects**: Modern glassmorphism elements
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 📱 Sections

1. **Hero**: Eye-catching introduction with team stats
2. **About**: Team member profiles and capabilities
3. **Case Studies**: Detailed project showcases with metrics
4. **Testimonials**: Client reviews and ratings
5. **Contact**: Professional contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/kazakhstan-team-portfolio.git
   cd kazakhstan-team-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## ⚙️ Customization

### Update Team Information
- Edit team member details in `components/About.tsx`
- Modify team stats and experience in `components/Hero.tsx`

### Add Your Projects
- Update project data in `components/CaseStudies.tsx`
- Add project screenshots to the `public` directory
- Customize tech stacks and metrics

### Modify Contact Details
- Update contact information in `components/Contact.tsx`
- Configure email addresses and social links
- Customize the contact form fields

### Branding
- Update logo and colors in `tailwind.config.js`
- Modify company name in `components/Header.tsx` and `components/Footer.tsx`
- Update metadata in `app/layout.tsx`

## 🌐 SEO Configuration

The portfolio includes comprehensive SEO optimization:

- **Meta Tags**: Configured in `app/layout.tsx`
- **Sitemap**: Auto-generated in `app/sitemap.ts`
- **Robots.txt**: Located in `public/robots.txt`
- **Structured Data**: Built into components
- **Performance**: Optimized images and lazy loading

### Update SEO Settings

1. **Update domain** in `app/sitemap.ts`
2. **Modify meta descriptions** in `app/layout.tsx`
3. **Add Google Analytics** (optional)

## 📞 Contact Information

Update the following contact details throughout the codebase:

- Email: `team@kazakhdev.pro`
- Phone: `+7 (XXX) XXX-XXXX`
- Social links in `components/Footer.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Use GitHub integration
- **Custom Server**: Use `npm run build` and `npm run start`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support or questions, contact us at team@kazakhdev.pro

---

**Built with ❤️ by Kazakhstan Development Team**
