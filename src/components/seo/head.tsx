import { Helmet, HelmetData } from 'react-helmet-async'

type HeadProps = {
  title?: string
  description?: string
}

const helmetData = new HelmetData({})

export function Head({ title = '', description = '' }: HeadProps = {}) {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | React Tmpl` : undefined}
      defaultTitle="React Tmpl"
    >
      <meta name="description" content={description} />
    </Helmet>
  )
}
