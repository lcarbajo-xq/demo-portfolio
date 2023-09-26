import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  id: string
  image: string
  downloads: number
  slug: string
}

export function ResourceCard({ title, id, image, downloads, slug }: Props) {
  return (
    <Card className='w-full max-w-fit border-0 sm:max-w-[356px]'>
      <Link href={`/resources/${id}`}>
        <CardHeader className='flex items-center justify-center gap-2.5 flex-col p-0'>
          <div className='w-full h-full'>
            <Image
              src={image}
              alt={title}
              className='aspect-video rounded-md object-cover h-auto'
              width={380}
              height={440}
            />
          </div>
          <CardTitle className='line-clamp-1 font-semibold w-full text-left'>
            {title}
          </CardTitle>
        </CardHeader>
      </Link>

      <CardContent className='flex items-center justify-between mt-4 p-0'>
        <div className='flex items-center justify-center gap-1.5'>
          <Image src='/download.svg' width={20} height={20} alt='download' />
          {downloads}
        </div>
        <Link
          className='flex items-center justify-center link-gradient gap-1.5 font-semibold'
          href={`/resources/${id}`}>
          Check the code
          <Image
            src='/arrow-right.svg'
            width={16}
            height={16}
            alt='go to code'
          />
        </Link>
      </CardContent>
    </Card>
  )
}
