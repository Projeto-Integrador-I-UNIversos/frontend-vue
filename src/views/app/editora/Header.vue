<script lang="ts">
import { Input } from '@/components/ui/input';
import { Search, Plus, Mail, Bell } from 'lucide-vue-next'
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils';

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  components: {
    Input,
    Search,
    Plus,
    Mail,
    Bell,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    cn,
  },
  data() {
    return {
      notifications : [
        {
          title: 'Your call has been confirmed.',
          description: '1 hour ago',
        },
        {
          title: 'You have a new message!',
          description: '1 hour ago',
        },
        {
          title: 'Your subscription is expiring soon!',
          description: '2 hours ago',
        },
      ],
      cn
    }
  }
})
</script>

<template>
  <header class="bg-white p-4 border-b-2 flex-row px-10 w-[100%] z-[100]">
    <ul class="flex flex-row">
      
      <li class="px-2 w-96 mr-[116vh]">
        <div class="relative w-full max-w-sm items-center">
          <Input id="search" type="text" placeholder="Pesquisar..." class="pl-10 border-stone-400" style="border-radius: 10px;"/>
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="size-6 text-muted-foreground" color="#a8a29e" />
          </span>
        </div>
      </li>
      <li >
        <!--Button class="flex bg-violet-600 text-white flex items-center hover:bg-indigo-500" style="border-radius: 30px;" 
        @click="$router.push(`/app/cadastro-obra`)">
          <Plus class="w-4 h-4 mr-2 " /> Adicionar Livro
        </Button-->
      </li>
     
      <!--li>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent class="bg-white mr-10">
            <Card :class="cn('w-[380px]', $attrs.class ?? '')" class="border-none"> 
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent class="grid gap-4">
                <div class=" flex items-center space-x-4 rounded-md border p-4">
                  <BellRing />
                  <div class="flex-1 space-y-1">
                    <p class="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p class="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                  <Switch />
                </div>
                <div>
                  <div
                    v-for="(notification, index) in notifications" :key="index"
                    class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div class="space-y-1">
                      <p class="text-sm font-medium leading-none">
                        {{ notification.title }}
                      </p>
                      <p class="text-sm text-muted-foreground">
                        {{ notification.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button class="w-full">
                  <Check class="mr-2 h-4 w-4" /> Mark all as read
                </Button>
              </CardFooter>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
      </li-->
      <li>
        <div class="bg-green-400 w-12 h-12 icon ml-6">
          <p>a</p>
        </div>
      </li>
    </ul>
  
  </header>
</template>

<style scoped>

.icon {
  border-radius: 30px;
}

</style>
