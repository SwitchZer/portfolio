import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"
import SectionHeading from "./section-heading"

export default function Posts() {
    const posts = getSortedPostsData()
  return (
    <section id="blogs" className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>Blogs</SectionHeading>
        <ul className="w-full underline">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
        </ul>
    </section>
  )
}
