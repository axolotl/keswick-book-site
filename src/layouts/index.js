import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'

//import './defaults.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Sidebar />
    <div id="content" className="column">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
