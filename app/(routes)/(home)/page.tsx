import { Header } from '@/app/_components/header'
import { Group } from '@/app/_components/group'
import { Skill } from '@/app/_components/skill'
import { Section } from '@/app/_components/section'
import { CareerArticle } from '@/app/_components/career-article'

import skillsData from '@/app/_content/skills.json'
import articlesData from '@/app/_content/articles.json'

interface Skill {
  text: string;
  url: string;
}

interface Article {
  title: string;
  url: string;
  linkText: string;
  dateEnd: string;
  dateStart: string;
  content: string;
  skills: Skill[];
}

const skills: Skill[] = skillsData
const articles: Article[] = articlesData

import classes from './page.module.scss'

export default function HomePage() {
  return (
    <div className={classes.page}>
      <Header title="Rich Cookson" />

      <Section
        title="Skills"
      >
        <Group>
          {skills.map((skill, index) => (
            <Skill 
              key={index}
              text={skill.text} 
              url={new URL(skill.url)}
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
            url={new URL(article.url)}
            linkText={article.linkText}
            dateEnd={new Date(article.dateEnd)}
            dateStart={new Date(article.dateStart)}
            content={article.content}
            skills={article.skills.map(skill => (
              <Skill 
                key={skill.text}
                text={skill.text} 
                url={new URL(skill.url)}
              />
            ))}
          />
        ))}
      </Section>
    </div>
  )
}
