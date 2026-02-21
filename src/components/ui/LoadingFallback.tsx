export default function LoadingFallback({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white'>
      <div className='text-center'>
        <div className='w-8 h-8 border-2 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto mb-4' />
        <p className='text-sm text-gray-500'>{message}</p>
      </div>
    </div>
  )
}
