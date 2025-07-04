import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, children }) {
  return (
    <Card as="li" className="p-6">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Resume',
  description: 'The professional background and experience of Remi Garcia.',
}

export default function Resume() {
  return (
    <SimpleLayout
      title="Resume"
      intro="Here is an overview of my professional experience, education, and interests."
    >
      <div className="space-y-20">
        <ToolsSection title="Experience">
          <Tool title="United States Military Veteran">
            Served honorably, developing leadership, discipline, and teamwork skills that continue to guide my professional and personal life.
          </Tool>
          <Tool title="Oil Rig Worker">
            Worked in challenging environments on oil rigs, gaining hands-on experience, resilience, and a strong work ethic while collaborating with diverse teams to ensure safety and efficiency.
          </Tool>
          <Tool title="United States Postal Service, Postal Worker">
            Responsible for sorting, delivering, and managing mail and packages. Known for reliability, attention to detail, and dedication to serving the community.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Education">
          <Tool title="Associate Degree, Community College">
            Completed coursework in general studies, with a focus on communication and problem-solving.
          </Tool>
          <Tool title="Southern Careers Institute Software Development Program">
            Completed a comprehensive software development program, gaining practical skills in programming, web development, and modern software tools.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Skills">
          <Tool title="Leadership & Teamwork">
            Proven ability to lead and collaborate in high-pressure environments.
          </Tool>
          <Tool title="Customer Service">
            Strong interpersonal skills and a commitment to helping others.
          </Tool>
          <Tool title="Organization & Reliability">
            Consistently dependable and detail-oriented in all tasks.
          </Tool>
          <Tool title="Adaptability">
            Quick to learn new skills and adapt to changing situations.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Interests">
          <Tool title="Adventure & Travel">
            Passionate about exploring new places and seeking out new experiences.
          </Tool>
          <Tool title="Lifelong Learning">
            Always eager to learn new things, whether through formal education or personal exploration.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
