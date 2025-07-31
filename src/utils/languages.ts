export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  aws: {
    name: "AWS",
    iconName: "code",
  },
  azure: {
    name: "Azure",
    iconName: "cloudflare",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  "ci/cd": {
    name: "CI/CD",
    iconName: "git",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  docker: {
    name: "Docker",
    iconName: "code",
  },
  express: {
    name: "Express.js",
    iconName: "node",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  mongodb: {
    name: "MongoDB",
    iconName: "mongo",
  },
  mongo: {
    name: "MongoDB",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  react: {
    name: "React",
    iconName: "code",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  typescript: {
    name: "TypeScript",
    iconName: "typescript",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  wordpress: {
    name: "WordPress",
    iconName: "wordpress",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  bash: {
    name: "Bash",
    iconName: "markdown", // Using markdown icon as placeholder
  },
  powershell: {
    name: "PowerShell",
    iconName: "markdown", // Using markdown icon as placeholder
  },
  linux: {
    name: "Linux",
    iconName: "markdown", // Using markdown icon as placeholder
  }
};

export const getLanguage = (lang: string): Language => {
  console.log(`getLanguage called with: ${lang}, exists: ${!!languages[lang]}`);
  return languages[lang] || languages.html;
};
