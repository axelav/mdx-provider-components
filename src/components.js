import React from 'react'
import { widont } from 'journalize'

const headingClassNames = 'mt0 mb4 hl-title'

const Heading = ({ children }) => (
  <h1 className={`${headingClassNames} f3`}>{children}</h1>
)
const Subheading = ({ children }) => (
  <h2 className={`${headingClassNames} f4`}>{children}</h2>
)
const Title = ({ children }) => (
  <h3 className={`${headingClassNames} f5`}>{children}</h3>
)
const Subtitle = ({ children }) => (
  <h4 className={`${headingClassNames} f5 i normal`}>{children}</h4>
)
const Text = ({ children }) => {
  if (typeof children === 'string') {
    return <p className="lh-copy mt0 mb4 measure-wide-ns">{widont(children)}</p>
  }

  return <p className="lh-copy mt0 mb4 measure-wide-ns">{children}</p>
}
const Link = ({ children, href }) => (
  <a className="blue hover-dark-blue link" href={href}>
    {children}
  </a>
)
// TODO use components/Image here
const Image = ({ src }) => <img className="db mw-100 mb4" src={src} />
const Blockquote = ({ children }) => (
  <blockquote className="mt0 mh0 mb4 ph3 i bl b--light-gray">
    {children}
  </blockquote>
)
const Pre = ({ children }) => (
  <pre className="pre bg-near-white pa3">{children}</pre>
)
const Code = ({ children }) => <code>{children}</code>
const UnorderedList = ({ children }) => (
  <ul className="mt0 mh0 mb4 pl4">{children}</ul>
)
const OrderedList = ({ children }) => (
  <ol className="mt0 mh0 mb4 pl4">{children}</ol>
)
const Item = ({ children }) => <li className="mt0 mb2 lh-copy">{children}</li>
const Table = ({ children }) => (
  <table className="collapse mb4 ba b--light-gray">{children}</table>
)

export {
  Heading,
  Subheading,
  Title,
  Subtitle,
  Text,
  Link,
  Image,
  Blockquote,
  Pre,
  Code,
  UnorderedList,
  OrderedList,
  Item,
  Table
}
