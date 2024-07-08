import { Header } from '@/app/_components/header'
import { Section } from '@/app/_components/section'
import { Block } from '@/app/_components/block'
import { Group } from '@/app/_components/group'
import { Button } from '@/app/_components/button'
import { ButtonPDF } from '@/app/_components/button-pdf'
import { Skill } from '@/app/_components/skill'
import { Text } from '@/app/_components/text'

import { CareerArticle } from '@/app/_components/career-article'

// ToDo: This is a temporary solution to get the data into the page while I build CMS functionality
import skillsData from '@/app/_content/skills.json'
import articlesData from '@/app/_content/articles.json'

import { FaEnvelope, FaGithub, FaMastodon, FaMobileButton } from 'react-icons/fa6'

interface Skill {
  text: string
  url: string
}

interface Article {
  title: string
  url: string
  linkText: string
  dateEnd?: string
  dateStart: string
  content: string
  skills: Skill[]
}

const skills: Skill[] = skillsData
const articles: Article[] = articlesData

import classes from './page.module.scss'

export default function HomePage() {
  return (
    <div className={classes.page}>
      <Header title="Rich Cookson" />
      
      <Block>
        <Text>Hi, I&apos;m Rich. I&apos;m a senior web developer with over 14 years of freelance expertise, working both for digital agencies and directly for organisations such as the BBC, Time Inc and Starling Bank.</Text>
        <Text>My core expertise is front end development, but I&apos;ve worked with a variety of surrounding technologies over my career and am able to adapt quickly to new technologies as required by a project.</Text>
      </Block>

      <Block>
        <Group stack>
          <Button 
            icon={<FaEnvelope aria-label="Email"/>} 
            text="rich.cookson@frobitz.com" 
            url="mailto:rich.cookson@frobitz.com"
          />
          <Button 
            icon={<FaMobileButton aria-label="Phone"/>} 
            text="+44 7792 871 698" 
            url="tel:+447792871698"
          />
          <Button 
            icon={<FaGithub aria-label="Github logo"/>} 
            text="Github" 
            url="https://github.com/hellorich"
          />
          <Button 
            icon={<FaMastodon aria-label="Mastodon logo"/>} 
            text="Mastodon" 
            url="https://mastodon.social/@hellorich"
          />
          <ButtonPDF />
        </Group>
      </Block>

      <Section
        title="Skills"
      >
        <Group>
          {skills.map((skill, index) => (
            <Skill 
              key={index}
              text={skill.text} 
              url={skill.url}
            />
          ))}
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
        {articles.map((article, index) => (
          <CareerArticle
            key={index}
            title={article.title}
            url={article.url}
            linkText={article.linkText}
            dateEnd={article.dateEnd ? new Date(article.dateEnd) : undefined}
            dateStart={new Date(article.dateStart)}
            content={article.content}
            skills={article.skills.map(skill => (
              <Skill 
                key={skill.text}
                text={skill.text} 
                url={skill.url}
              />
            ))}
          />
        ))}
      </Section>

      <Section
        title="And finally&hellip;"
      >
        <Text>I&apos;m a big music fan and love going to see bands play live locally. I&apos;m also a life long fan of video games.</Text>
        <Text>More actively, I enjoy running, swimming and hiking the coast and countryside around Brighton.</Text>
      </Section>
    </div>
  )
}
