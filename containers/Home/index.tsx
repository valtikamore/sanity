import { FC } from 'react'
import { SiteLayout } from '../../layouts/SiteLayout'
import { Post } from '../../models/Entries'
import { urlFor } from '../../sanity'
import { LinkWrapper } from '../../components'

interface IProps {
  posts: Post[]
}

export const HomeContainer: FC<IProps> = ({ posts }) => {
  return (
    <SiteLayout>
      <section className="grid grid-cols-1 gap-2  p-2 sm:grid-cols-1 md:gap-6 md:p-6 lg:grid-cols-3">
        <article>
          {posts?.map((i) => (
            <>
              <h4>{i.author.name}</h4>
              <LinkWrapper path={`post/${i.slug.current}`} className={'block'}>
                <div className={'group overflow-hidden'}>
                  <img
                    src={urlFor(i.mainImage).url()!}
                    alt=""
                    className={
                      'transition-transform duration-200 ease-in-out group-hover:scale-105'
                    }
                  />
                </div>
              </LinkWrapper>
            </>
          ))}
        </article>
      </section>
    </SiteLayout>
  )
}
