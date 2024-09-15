
import { h } from 'vue'
import { ColumnDef, createColumnHelper } from '@tanstack/vue-table';
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Button } from '../ui/button';
import { Data } from './Data';

const columns: ColumnDef<Data>[] = [

    {
      accessorKey: 'id',
      header: 'id',
      cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('id')),
    },
    {
      accessorKey: 'name',
      header: 'Nome',
      cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('name')),
    },
    {
      accessorKey: 'email',
      header: ({ column }) => {
        return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        }, () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
      },
      cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        if (row.getValue('status') == 'ativo') {
          return h('div', { class: 'inter-bold lowercase bg-green-300 rounded-[20px] text-center text-white' }, row.getValue('status'))
        }
        else {
          return h('div', { class: 'inter-bold lowercase bg-red-300 rounded-[20px] text-center text-white' }, row.getValue('status'))
        }
      }
    },
  ]

  export default columns;