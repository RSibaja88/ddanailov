import Keyword from './Keyword'
import Space from '@ddanailov/styled/Space'

function OpenSourceProjects() {
  return (
    <div>
      <h3>Open source projects 🦉</h3>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Nextjs"
            href="https://github.com/dimitardanailov/ddanailov/tree/master/website"
          >
            ddanailov.dev
          </a>
          : The source code behind my blog / portfolio website. Technologies:
          <Space />
          <Keyword word="React" />,
          <Space />
          <Keyword word="nextjs" />,
          <Space />
          <Keyword word="Front-end devops" />
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/gmail-helper"
            target="_blank"
            rel="noopener noreferrer"
            title="Native web componets"
          >
            Gmail Helper
          </a>
          : Gmail helper creates gmail labels and features. Technologies: Custom
          Elements v1, <Keyword word="React" />, Webpack, Lerna, Mocha, Chai,
          Karma
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/tantalus"
            title="Nodejs and Microservices"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tantalus
          </a>
          : is a <Keyword word="Nodejs Microservices" /> application. Project
          uploads big streams from custom cloud provider to AWS. Tantalus uses:
          NodeServer Generator, routing-controllers, tus.io,{' '}
          <Keyword word="Typescript" />.
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/push-notifications"
            title="Safari and Google Chrome Push notifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            Push notification playground
          </a>
          : Google Chrome and Firefox push notifications playground, Docker
          Safari APN creator
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/react-components"
            title="React playground"
            target="_blank"
            rel="noopener noreferrer"
          >
            React components
          </a>
          : <Keyword word="React" /> catalog with different useful components.
        </li>
      </ul>
    </div>
  )
}

export default OpenSourceProjects
