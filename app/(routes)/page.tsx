import Header from '../_components/header/header'
import Skill from '../_components/skill/skill'
import CareerArticle from '../_components/career-article/career-article'

import styles from './page.module.scss'

export default function Home() {
  const skills = [
    { text: "React", url: new URL('https://reactjs.org') },
    { text: "Storybook", url: new URL('https://storybookjs.org') },
    { text: "Styled Components", url: new URL('https://styled-components.com') },
  ]

  return (
    <div className={styles.page}>
      <Header title="Rich Cookson" />
      <CareerArticle
        title="Building a single page web app in React for Hugo and Cat"
        url={new URL('http://www.hugoandcat.com')}
        dateEnd="2023-01"
        dateStart="2022-10"
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
            text={skill.text} 
            url={skill.url}
          />
        ))}
      />
    </div>
  )
}
