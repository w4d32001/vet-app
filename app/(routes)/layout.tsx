import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-svh bg-custom-gradient flex flex-col w-full'>
      <Navbar />
      <div className='flex w-full'>
        <aside className='w-20'>
          <Sidebar/ >
        </aside>
        <main className='h-[calc(100svh-4rem)] overflow-y-auto py-4 flex flex-1'>
          {children}
        </main>
      </div>
    </div>
  )
}
