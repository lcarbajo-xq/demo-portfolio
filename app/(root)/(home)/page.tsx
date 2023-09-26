import Filters from '@/components/filters'
import Header from '@/components/header'
import { ResourceCard } from '@/components/resource-card'
import { SearchForm } from '@/components/search-form'
import { getResources, getResourcesPlaylists } from '@/sanity/actions'

interface Props {
  searchParams: {
    [key: string]: string | undefined
  }
}

export const revailidate = 900

async function Page({ searchParams }: Props) {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylists()

  return (
    <main className='flex items-center justify-center mx-auto main-padding w-full max-w-screen-2xl flex-col'>
      <section className='w-full nav-padding'>
        <div className='flex items-center justify-center min-h-[274px] bg-hero bg-cover bg-center'>
          <h1 className='heading-2 text-center sm:heading-1 mb-6'>
            Luis Carbajo Resources
          </h1>
        </div>

        <SearchForm />
      </section>
      <Filters />

      <section className='flex items-center justify-center mt-6 w-full flex-col sm:mt-20'>
        { (searchParams.query || searchParams.category) && (
            <Header
              query={searchParams?.query || ''}
              category={searchParams?.category || ''}
            />
          )}

        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloads={resource.views}
                slug={resource.slug}
              />
            ))
          ) : (
            <p className='body-text text-white-400'>No resources found</p>
          )}
        </div>
      </section>

      {resourcesPlaylist.map((playlist: any) => (
        <section
          key={playlist._id}
          className='flex items-center justify-center mt-6 w-full flex-col sm:mt-20'>
          <h1 className='heading-3 self-start text-white-800'>
            {playlist.title}
          </h1>
          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {playlist.resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloads={resource.views}
                slug={resource.slug}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Page
