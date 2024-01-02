import { Header } from '@/app/_components/header'
import { Group } from '@/app/_components/group'
import { Skill } from '@/app/_components/skill'
import { Section } from '@/app/_components/section'

import { CareerArticle } from '@/app/_components/career-article'

import classes from './page.module.scss'

interface Skill {
  text: string;
  url: URL;
}

export default function HomePage() {
  const skills: Skill[] = [
    { text: "React", url: new URL('https://reactjs.org') },
    { text: "Storybook", url: new URL('https://storybookjs.org') },
    { text: "Styled Components", url: new URL('https://styled-components.com') },
  ]

  return (
    <div className={classes.page}>
      <Header title="Rich Cookson" />

      <Section
        title="Skills"
      >
        <Group>
          <Skill 
            text="HTML" 
            url={new URL("https://developer.mozilla.org/en-US/docs/Web/HTML")}
          />
          <Skill 
            text="CSS" 
            url={new URL("https://developer.mozilla.org/en-US/docs/Web/CSS")}
          />
          <Skill 
            text="JavaScript" 
            url={new URL("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}
          />
          <Skill 
            text="React" 
            url={new URL("https://reactjs.org")}
          />
          <Skill 
            text="Next.js" 
            url={new URL("https://nextjs.org/")}
          />
          <Skill 
            text="Storybook" 
            url={new URL("https://storybookjs.org")}
          />
          <Skill 
            text="Styled Components" 
            url={new URL("https://styled-components.com")}
          />
          <Skill 
            text="Webpack" 
            url={new URL("https://webpack.js.org")}
          />
          <Skill 
            text="Node" 
            url={new URL("https://nodejs.org")}
          />
          <Skill 
            text="Express" 
            url={new URL("https://expressjs.com")}
          />
          <Skill 
            text="Wordpress" 
            url={new URL("https://wordpress.org")}
          />
          <Skill 
            text="Bootstrap" 
            url={new URL("http://getbootstrap.com")}
          />
          <Skill 
            text="SCSS" 
            url={new URL("http://sass-lang.com")}
          />
          <Skill 
            text="jQuery" 
            url={new URL("https://jquery.com")}
          />
          <Skill 
            text="Git" 
            url={new URL("https://git-scm.com")}
          />
          <Skill 
            text="SVG" 
            url={new URL("https://www.w3.org/Graphics/SVG")}
          />
          <Skill 
            text="Docker" 
            url={new URL("https://www.docker.com")}
          />
          <Skill 
            text="CI" 
            url={new URL("https://en.wikipedia.org/wiki/Continuous_integration")}
          />
          <Skill 
            text="UNIX" 
            url={new URL("http://www.opengroup.org/unix")}
          />
          <Skill 
            text="Web Accessibility" 
            url={new URL("https://www.w3.org/WAI/fundamentals/accessibility-intro")}
          />
          <Skill 
            text="Atomic Design" 
            url={new URL("http://atomicdesign.bradfrost.com")}
          />
          <Skill 
            text="Responsive Design" 
            url={new URL("https://en.wikipedia.org/wiki/Responsive_web_design")}
          />
          <Skill 
            text="Figma" 
            url={new URL("https://www.figma.com")}
          />
        </Group>
      </Section>

      <Section 
        title="Recent work"
        description={
          <>
            <p>Here&apos;s what I&apos;ve been doing over the past few years. I&apos;ve highlighted interesting skills I picked up for certain projects but assume the usual core skills such as HTML, CSS, JavaScript and Git are used throughout.</p>
            <p>For my earlier career history, you can check my <a href="https://www.linkedin.com/in/richard-cookson-219377b8">LinkedIn profile</a>.</p>
          </>
        }
      >
        <CareerArticle
          title="Building a single page web app in React for Hugo and Cat"
          url={new URL('http://www.hugoandcat.com')}
          linkText="www.hugoandcat.com"
          dateEnd={new Date('2023, 01, 01')}
          dateStart={new Date('2022, 10, 01')}
          content={
            <>
              <p>Front end developer on a project to create a dashboard app, displaying a number of charts and statistics monitoring roll-out and communication of devices for a telecommunications company.</p>
              <ul>
                <li>Developed the React app in StoryBook for rapid development while the back-end was being worked on.</li>
                <li>Used React Query to consume the multiple API&apos;s required by the app.</li>
                <li>Created a number of charts based on customised Victory Charts components, and also bespoke charts as SVG components.</li>
                <li>Carried out demonstrations of progress to internal team at Hugo & Cat as well as to stakeholders at the client company thorough sprints.</li>
              </ul>
            </>
          }
          skills={skills.map(skill => (
            <Skill 
              key={skill.text}
              text={skill.text} 
              url={skill.url}
            />
          ))}
        />
      </Section>
    </div>
  )
}
