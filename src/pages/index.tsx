import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, FileOutlined, SlackOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 40 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        FedScale
      </p>
      <h2>
        A Scalable, Comprehensive, and Reproducible Framework for Federated
        Learning Research
      </h2>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<FileOutlined />}
          href="https://arxiv.org/abs/2105.11367"
          target="_blank"
        >
          Paper
        </Button>
        <Button
          size="large"
          icon={<SlackOutlined />}
          href="https://fedscale.slack.com"
          target="_blank"
        >
          Slack
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/SymbioticLab/FedScale"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
