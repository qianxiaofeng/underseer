import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const announcesDirectory = join(process.cwd(), '.data')

const getAnnounceSlugs = () => {
    return fs.readdirSync(announcesDirectory);
}

const getAnnounceBySlug = (slug, fields = []) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(announcesDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

const getAllAnnounces = (fields = []) => {
    const slugs = getAnnounceSlugs();

    return slugs
        .map((slug) => getAnnounceBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}


export {getAnnounceSlugs, getAnnounceBySlug, getAllAnnounces}