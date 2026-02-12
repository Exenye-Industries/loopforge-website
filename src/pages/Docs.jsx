import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Download, Settings, Code, Zap, Server, ChevronRight } from 'lucide-react'

const sections = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: Book,
    content: {
      title: 'Getting Started with LoopForge',
      body: `LoopForge is a modern desktop automation tool for managing Git repositories, building intelligent workflows, and monitoring your development infrastructure in real-time.`,
      subsections: [
        {
          title: 'System Requirements',
          content: `- **Operating System:** Windows 10/11 (64-bit)\n- **RAM:** 4 GB minimum, 8 GB recommended\n- **Disk:** 200 MB free space\n- **Network:** Internet connection for GitHub integration`,
        },
        {
          title: 'Quick Start',
          content: `1. Download the latest release from GitHub\n2. Run the installer and follow the setup wizard\n3. Launch LoopForge and add your first repository\n4. Configure automations and start monitoring`,
        },
      ],
    },
  },
  {
    id: 'installation',
    label: 'Installation',
    icon: Download,
    content: {
      title: 'Installation Guide',
      body: 'LoopForge can be installed on Windows using the official installer or by building from source.',
      subsections: [
        {
          title: 'Using the Installer',
          content: `1. Visit the [GitHub Releases](https://github.com/Exenye-Industries/LoopForge/releases) page\n2. Download the latest \`.exe\` installer\n3. Run the installer with administrator privileges\n4. Follow the on-screen instructions\n5. Launch LoopForge from the Start Menu or Desktop`,
        },
        {
          title: 'Building from Source',
          code: `git clone https://github.com/Exenye-Industries/LoopForge.git
cd LoopForge
npm install
npm run build
npm run electron:build`,
        },
      ],
    },
  },
  {
    id: 'configuration',
    label: 'Configuration',
    icon: Settings,
    content: {
      title: 'Configuration',
      body: 'LoopForge can be configured through the Settings page or by editing the configuration files directly.',
      subsections: [
        {
          title: 'Repository Configuration',
          content: `Each repository can be configured with:\n- **Name:** Display name in the dashboard\n- **Path:** Local path or GitHub URL\n- **Auto-Pull:** Enable automatic pulling of changes\n- **Health Checks:** Configure monitoring intervals\n- **Automations:** Assign automation workflows`,
        },
        {
          title: 'Automation Configuration',
          content: `Automations support:\n- **Triggers:** Event-based, schedule-based, or manual\n- **Actions:** Shell commands, API calls, Git operations\n- **Conditions:** Conditional execution based on status\n- **Error Handling:** Retry policies and fallback actions`,
        },
      ],
    },
  },
  {
    id: 'api',
    label: 'API Reference',
    icon: Code,
    content: {
      title: 'API Reference',
      body: 'LoopForge exposes a REST API for managing repositories and automations programmatically.',
      subsections: [
        {
          title: 'Base URL',
          code: 'http://localhost:5555/api',
        },
        {
          title: 'Endpoints',
          content: `**Repositories**\n- \`GET /api/repos\` — List all repositories\n- \`GET /api/repos/:id\` — Get repository details\n- \`POST /api/repos\` — Add a new repository\n- \`PUT /api/repos/:id\` — Update repository settings\n- \`DELETE /api/repos/:id\` — Remove a repository\n\n**Automations**\n- \`GET /api/automations\` — List all automations\n- \`POST /api/automations\` — Create an automation\n- \`PUT /api/automations/:id\` — Update automation\n- \`POST /api/automations/:id/trigger\` — Manually trigger\n\n**Tasks**\n- \`GET /api/tasks\` — List all tasks\n- \`PUT /api/tasks/:id\` — Update task status\n\n**Notifications**\n- \`POST /api/meta/send-notification\` — Send a notification`,
        },
      ],
    },
  },
  {
    id: 'automations',
    label: 'Automations',
    icon: Zap,
    content: {
      title: 'Building Automations',
      body: 'Automations are the core of LoopForge. They allow you to define workflows that run automatically based on triggers.',
      subsections: [
        {
          title: 'Automation Types',
          content: `- **Loop Automations:** Continuously running workflows that monitor and react\n- **Scheduled Automations:** Time-based workflows (cron-style)\n- **Event Automations:** Triggered by Git events or webhooks\n- **Manual Automations:** One-click execution from the dashboard`,
        },
        {
          title: 'Example: Auto-Deploy Workflow',
          code: `{
  "name": "Auto Deploy",
  "trigger": "on_push",
  "branch": "main",
  "actions": [
    { "type": "shell", "command": "npm run build" },
    { "type": "shell", "command": "npm run deploy" }
  ],
  "on_error": {
    "notify": true,
    "retry": { "count": 2, "delay": "30s" }
  }
}`,
        },
      ],
    },
  },
  {
    id: 'deployment',
    label: 'Deployment',
    icon: Server,
    content: {
      title: 'Deployment',
      body: 'LoopForge runs as a desktop application but can also be configured for server-side operation.',
      subsections: [
        {
          title: 'Desktop Mode',
          content: `The default mode. LoopForge runs as an Electron application with a full GUI.\n- System tray integration\n- Desktop notifications\n- Auto-start on login (configurable)`,
        },
        {
          title: 'Headless Mode',
          content: `For server environments, LoopForge can run without a GUI:\n\`\`\`bash\nnode node-service/index.js\n\`\`\`\nThis starts the Node.js service on port 5555 with full API access.`,
        },
      ],
    },
  },
]

function renderMarkdown(text) {
  // Simple markdown renderer for bold, code, and links
  return text.split('\n').map((line, i) => {
    let rendered = line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.*?)`/g, '<code style="background:rgba(168,85,247,0.1);padding:1px 5px;border-radius:4px;font-size:12px;color:#c77dff">$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#4ecdc4;text-decoration:none">$1</a>')

    if (line.startsWith('- ')) {
      rendered = rendered.replace(/^- /, '')
      return <li key={i} className="ml-4 mb-1" style={{ listStyleType: 'disc', color: 'rgba(255,255,255,0.6)' }} dangerouslySetInnerHTML={{ __html: rendered }} />
    }
    if (/^\d+\. /.test(line)) {
      rendered = rendered.replace(/^\d+\.\s/, '')
      return <li key={i} className="ml-4 mb-1" style={{ listStyleType: 'decimal', color: 'rgba(255,255,255,0.6)' }} dangerouslySetInnerHTML={{ __html: rendered }} />
    }
    return <p key={i} className="mb-1" style={{ color: 'rgba(255,255,255,0.6)' }} dangerouslySetInnerHTML={{ __html: rendered }} />
  })
}

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const current = sections.find(s => s.id === activeSection)

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Documentation</h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Learn how to use LoopForge to automate your development workflows.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-64 flex-shrink-0"
          >
            <div className="glass-card-static p-3 md:sticky md:top-24">
              <nav className="flex flex-col gap-0.5">
                {sections.map((section) => {
                  const isActive = section.id === activeSection
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-left text-sm font-medium rounded-lg transition-all"
                      style={{
                        background: isActive ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
                        color: isActive ? '#a855f7' : 'rgba(255,255,255,0.45)',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      <section.icon size={16} />
                      {section.label}
                      {isActive && <ChevronRight size={14} className="ml-auto" />}
                    </button>
                  )
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 min-w-0"
          >
            <div className="glass-card-static p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>
                {current.content.title}
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {current.content.body}
              </p>

              {current.content.subsections.map((sub, i) => (
                <div key={i} className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#a855f7' }} />
                    {sub.title}
                  </h3>
                  {sub.content && (
                    <div className="text-sm leading-relaxed">
                      {renderMarkdown(sub.content)}
                    </div>
                  )}
                  {sub.code && (
                    <div className="code-block mt-3">
                      <pre className="whitespace-pre-wrap" style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>
                        {sub.code}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
