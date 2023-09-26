interface Props {
  query?: string
  category?: string
}

function Header({ query, category }: Props) {
  if (query && category) {
    return (
      <h1 className='heading-3 self-start text-white-800'>
        Search results for "{query}" in{' '}
        <span className='capitalize'>{category}</span>
      </h1>
    )
  } 
   if (category) {
    return (
      <h1 className='heading-3 self-start text-white-800'>
        <span className='capitalize'>{category}</span>
      </h1>
    )
  }
  if (query) {
    return (
      <h1 className='heading-3 self-start text-white-800'>
        Search results for "{query}"
      </h1>
    )
  }
  return (
    <h1 className='heading-3 self-start text-white-800'>
      No results found for "{query}"
    </h1>
  )
}

export default Header
