"use client"
import Link from 'next/link'
import React from 'react'
import { SidebarItemProps } from './SidebarItem.types'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function SidebarItem(props: SidebarItemProps) {
  const {name, href, icon: Icon} = props

  const pathName = usePathname()
  const activePath = pathName === href
  return (
    <Link href={href} className={cn('flex gap-x-2 mt-2  text-sm items-center hover:bg-gray-200 p-4  cursor-pointer text-primary/80 rounded-full', activePath && 'bg-white text-primary')} >
      <CustomTooltip content={name} icon={Icon}/>
    </Link>
  )
}
