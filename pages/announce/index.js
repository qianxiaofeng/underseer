import React from 'react';
import Layout from "../../components/Layout";
import {Page, PageTitle, PageContent} from "../../components/Page";
import {useRouter} from 'next/router'
import {getAllAnnounces, getAnnounceBySlug, getAnnounceSlugs} from "../../lib/api";

export async function getStaticProps() {
    const allAnnounces = getAllAnnounces([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: {allAnnounces}
    }
}

const Index = ({allAnnounces}) => {

    return (
        <Layout>
            <Page>
                <PageTitle>
                    <h1>title</h1>
                </PageTitle>
                <PageContent>
                    {allAnnounces && (
                        allAnnounces.map((announce, i) => {
                            return (
                                <div key={`${i}`}>
                                    <h1>{announce.title}</h1>
                                    <h1>{announce.slug}</h1>
                                </div>
                            )
                        })
                    )}
                </PageContent>
            </Page>
        </Layout>
    )
}
export default Index;