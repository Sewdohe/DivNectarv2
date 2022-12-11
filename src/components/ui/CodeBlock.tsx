// src/components/CodeBlock.jsx
import React, { PropsWithChildren } from 'react'
import Highlight, { DefaultProps, defaultProps, Language } from 'prism-react-renderer'

interface CodeBlockProps {
  className: string,
  children: string
}
 
export default ({ children, className }: CodeBlockProps) => {
  // Pull the className
  const language = className.replace(/language-/, '') || ""
 
  return (
    <Highlight {...defaultProps}
      code={children}
      // @ts-ignore -- I'm sure the language will parse out to something usable
      language={language}
      style={{maxWidth: '100%', overflow: 'scroll'}}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key}{...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          }
          )}
        </pre>
      )}
    </Highlight>
  )
}