import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <>
      <section className="container">
        <div className='flex h-[100dvh] flex-col items-center justify-center gap-5'>
          <h1 className='text-red-500 lg:text-4xl'>Payment Decline</h1>
          <Button type='button' variant={'link'} >
            <Link className='underline' href={'/'}>Go back to home </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export default ErrorPage