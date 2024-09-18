
import { h } from 'vue'
import { ColumnDef, createColumnHelper } from '@tanstack/vue-table';
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'
import { Button } from '../ui/button';
import { Data } from './Data';

const columns: ColumnDef<Data>[] = [

    {
      accessorKey: 'id',
      header: 'id',
      cell: ({ row }) => h('div', { class: 'capitalize text-left' }, row.getValue('id')),
    },
    {
      accessorKey: 'Escritor',
      header: ({ column }) => {
        return h(Button, {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        }, () => ['Escritor', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
      },
      cell: ({ row }) => h('div', { class: 'lowercase text-left' }, row.getValue('Escritor')),
    },
    {
        accessorKey: 'Livro',
        header: 'Livro',
        cell: ({ row }) => h('div', { class: 'capitalize text-left' }, row.getValue('Livro')),
      },
  ]

  export default columns;