import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { Layout, Menu, Breadcrumb }  from 'antd'

export default function Home() {
    const { Header, Content, Footer } = Layout;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      {/*<main className={styles.main}>*/}
        {/*<h1 className={styles.title}>*/}
          {/*Hello World*/}
        {/*</h1>*/}

      {/*</main>*/}
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                    <div
                        className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
                             src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">
                                        Erin Lindford
                                    </p>
                                    <p className="text-gray-500 font-medium">
                                        Product Engineer
                                    </p>
                                </div>
                                <button
                                    className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message
                                </button>
                            </div>

                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>copyright ©2020 underseer</Footer>
        </Layout>
    </div>
  )
}
