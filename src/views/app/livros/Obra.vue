<script lang="ts">
import { defineComponent } from 'vue';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Label from '@/components/ui/label/Label.vue';
import Button from '@/components/ui/button/Button.vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import banner from '@/assets/imagens/5432299.jpg'

export default defineComponent({
    name: 'Obra',
    components: {
        Input,
        Label,
        Button,
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuLabel,
        DropdownMenuRadioGroup,
        DropdownMenuRadioItem,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
        Checkbox,
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
    },
  
})
</script>


<template>
    <div class=" pt-20 flex justify-center bg-[#f9f9f9] h-[95vh]">
      a
    </div>
</template>

<style>
.form {
    width: 100vh;
}

.input {
    border-radius: 6px;
}

.button {
    border-radius: 10px;
}

.banner {
    background-image: url("@/assets/imagens/5432299.jpg");
}

.input-group input {
  background: transparent;
}

.input-group label {
  position: relative;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
  padding: 0 5px;
  pointer-events: none;
}

.input-group input:focus~label {
background: #000;
font-size: 12px;
}

</style>
