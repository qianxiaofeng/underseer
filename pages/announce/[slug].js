import React from 'react';
import Layout from "../../components/Layout";
import {Page, PageTitle, PageContent} from "../../components/Page";
import {useRouter} from 'next/router'
import {getAllAnnounces, getAnnounceBySlug, getAnnounceSlugs} from "../../lib/api";
import remark from 'remark'
import html from 'remark-html'
import markdownToHtml from "../../lib/markdownToHtml";

export async function getStaticPaths() {
    const announces = getAllAnnounces(['slug']);

    return {
        paths: announces.map(a => {
            return {
                params: {
                    slug: a.slug,
                },
            }
        }),
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const announce = getAnnounceBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const contentHtml = await markdownToHtml(announce.content)

    return {
        props: {
            announce: {
                ...announce,
                contentHtml,
            },
        },
    }
}

const Announce = ({
                     announce
                  }) => {
    const router = useRouter()

    return (
        <Layout>
            <Page>
                <PageTitle>
                    <h1>{announce.title}</h1>
                    <h3>{announce.date}</h3>
                    <h3>{announce.slug}</h3>
                </PageTitle>
                <PageContent>
                    <div dangerouslySetInnerHTML={{__html: announce.contentHtml}}/>
                </PageContent>
            </Page>
        </Layout>
    )
}
export default Announce;