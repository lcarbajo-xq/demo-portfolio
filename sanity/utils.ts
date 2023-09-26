import qs from 'query-string'

interface QueryParams {
  type: string
  query: string
  category: string
  page: number
  perPage?: number
}

interface URLQueryParams {
  params: string
  key?: string
  keysToRemove?: string[]
  value?: string | null
}

export function buildQuery(params: QueryParams) {
  const { type, query, category, page = 1, perPage = 10 } = params

  const conditions = [`*[_type=="${type}"`]

  if (query) {
    conditions.push(`title match "*${query}*"`)
  }

  if (category && category !== 'all') {
    conditions.push(`category == "${category}"`)
  }

  //calculate pagination limits

  const offset = (page - 1) * perPage
  const limit = perPage

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(' && ')})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`
}

export function formUrlQuery({
  params,
  key,
  keysToRemove,
  value
}: URLQueryParams) {
  const currentUrl = qs.parse(params)

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove]
    })
  } else if (key && value) {
    currentUrl[key] = value
  }

  const newUrl = qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl
    },
    { skipNull: true }
  )
  console.log(newUrl)
  return newUrl
}
