import React from 'react'

export const Paginacion = () => {
  return (
    <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6">
  <div className="flex flex-1 justify-between sm:hidden">
    <a href="#" className="relative inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10">Previous</a>
    <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10">Next</a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    
    <div>
      <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md">
        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
            <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
        </a>
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">1</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Next</span>
          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
            <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>
  )
}
export default Paginacion