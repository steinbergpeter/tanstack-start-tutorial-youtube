import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavMain } from '@/components/web/dashboard/sidebar/nav-main'
import { NavProjects } from '@/components/web/dashboard/sidebar/nav-projects'
import { NavUser } from '@/components/web/dashboard/sidebar/nav-user'
import { data } from '@/components/web/dashboard/sidebar/sidebar-data'
import { TeamSwitcher } from '@/components/web/dashboard/sidebar/team-switcher'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
