import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { stripLeadingSlash } from '../../utils/strip-leading-slash';
import styled from 'styled-components';
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import Card from './CodeCard';

interface Props {
    items: [
      {
        url: string;
        title: string;
        items?: [
          {
            url: string;
            title: string;
            items?: [
              {
                url: string;
                title: string;
                items?: [
                  {
                    url: string;
                    title: string;
                    items?: [
                      {
                        url: string;
                        title: string;
                        items?: [
                          {
                            url: string;
                            title: string;
                          }
                        ];
                      }
                    ];
                  }
                ];
              }
            ];
          }
        ];
      }
    ];
    slug: string;
    depth: number;
};

const UL = styled.ul<{depth: number}>`
  margin: 0;
  padding: 0 0.6rem;
  margin-left: 0.5rem;
  margin-right: 1rem;
  list-style-type: none;
  font-size: 14px;
  width: 250px;
  height: 100%;
  min-width: 250px;
  border-left: 1px solid ${(props) => {
    if(props.depth == 0) {
      return 'transparent'
    } else if (props.depth == 1) {
      return props.theme.colors.pink
    } else if (props.depth == 2) {
      return props.theme.colors.green
    } else if (props.depth == 3) {
      return props.theme.colors.purple
    }
    else if (props.depth == 4) {
      return props.theme.colors.orange
    }
    else if (props.depth == 5) {
      return props.theme.colors.yellow
    }
    else if (props.depth == 6) {
      return props.theme.colors.red
    }
    else {
      return props.theme.colors.green
    }
    }};
  a {
    color: ${(props) => {
    if(props.depth == 0) {
      return props.theme.colors.pink
    } else if (props.depth == 1) {
      return props.theme.colors.green
    } else if (props.depth == 2) {
      return props.theme.colors.purple
    } else if (props.depth == 3) {
      return props.theme.colors.orange
    }
    else if (props.depth == 4) {
      return props.theme.colors.yellow
    }
    else if (props.depth == 5) {
      return props.theme.colors.red
    }
    else {
      return props.theme.colors.green
    }
    }};
  }
`

const LI = styled.li`
  padding: 0px;
  margin-bottom: 0px;
`

const TableOfContents = ({ slug, items, depth }: Props) => {
  return (
    depth == 0 ? (
      <Card>
      <UL depth={depth} key={items.length}>
        {items.map((item, index) => {
          const hash = item.url ? stripLeadingSlash(item.url) : null;
          return (
            <LI key={index} style={{padding: `${depth * 3}px`}}>
              {item.url ? (
                <Link
                  id={hash!}
                  to={`${hash}`}
                  className={`not-prose text-xs inline-flex items-center p-1 no-underline hover:text-white text-violet-${
                    depth + 3
                  }00`}
                >
                  {depth > 0 ? (
                    <span></span>
                    // <MdExpandMore style={{fontSize: '16px'}} />
                  ) : null}
                  {item.title}
                </Link>
              ) : null}
              {item.items ? <TableOfContents slug={slug} items={item.items} depth={depth + 1} /> : null}
            </LI>
          );
        })}
      </UL>
      </Card>
    ): (
      <UL depth={depth} key={items.length}>
        {items.map((item, index) => {
          const hash = item.url ? stripLeadingSlash(item.url) : null;
          return (
            <LI key={index} style={{padding: `${depth * 3}px`}}>
              {item.url ? (
                <Link
                  id={hash!}
                  to={`${hash}`}
                  className={`not-prose text-xs inline-flex items-center p-1 no-underline hover:text-white text-violet-${
                    depth + 3
                  }00`}
                >
                  {depth > 0 ? (
                    <span></span>
                    // <MdExpandMore style={{fontSize: '16px'}} />
                  ) : null}
                  {item.title}
                </Link>
              ) : null}
              {item.items ? <TableOfContents slug={slug} items={item.items} depth={depth + 1} /> : null}
            </LI>
          );
        })}
      </UL>
    )

  );
};

TableOfContents.defaultProps = {
  depth: 0
};

TableOfContents.propTypes = {
  /** Array of headings and # links */
  items: PropTypes.any.isRequired,
  /** Determines the padding-left of a nested li */
  depth: PropTypes.number
};

export default TableOfContents;