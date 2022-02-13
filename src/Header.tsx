import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Button, Menu, Row } from 'antd'
import { GithubOutlined, SlackOutlined } from '@ant-design/icons'

interface Props {
  siteTitle: string
}

export class Header extends Component<Props> {
  render() {
    const { siteTitle } = this.props
    return (
      <Row>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/docs/overview/introduction/">{siteTitle}</Link>
          </Menu.Item>
          <Menu.Item icon={<GithubOutlined />}>
            <a href="https://github.com/SymbioticLab/FedScale" target="_blank">
              GitHub
            </a>
          </Menu.Item>
          <Menu.Item icon={<SlackOutlined />}>
            <a href="https://fedscale.slack.com" target="_blank">
              Slack
            </a>
          </Menu.Item>
        </Menu>
      </Row>
    )
  }
}
