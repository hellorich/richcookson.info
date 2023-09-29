import type { Meta, StoryObj } from '@storybook/react'

import Button from '../button/button'
import ContactDetails from './contact-details'
import { FaEnvelope, FaGithub, FaMastodon, FaMobileButton } from 'react-icons/fa6'

const meta: Meta<typeof ContactDetails> = {
  component: ContactDetails,
  title: 'ContactDetails',
}

export default meta

type Story = StoryObj<typeof ContactDetails>

export const Empty: Story = {}

export const WithButtons: Story = {
	render: (args) => (
    <ContactDetails {...args}>
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
				url="https://github.com/hellorich"
			/>
    </ContactDetails>
  ),
}
