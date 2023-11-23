'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import {toast, Toaster} from 'react-hot-toast';

import axios from 'axios';
 
const formSchema = z.object({
  name: z.string().min(2,{
    message: 'Name must be at least 2 characters'
    }).max(50, {
    message: 'Name must have a maximum of 50 characters'
    }),
  email: z.string().email(),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters'
  }).max(200, {
    message: 'Message must have a maximum of 200 characters'
  })
})

export default function ContactForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: '',
          message: ''
        },
      })

      async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await axios.post('https://getform.io/f/1f49e7cb-767f-4167-a644-72d790e8a7b6', values)

        try {
          if (response && response.status === 200){
            toast.success('Enviado com sucesso!')
            router.push('/')
            console.log(values)
          }
        } catch (error) {
            toast.error('Erro ao enviar o formulário')
            console.error('Erro na requisição', error)
        }
      }

    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col w-full md:w-1/2">
        <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your name" className="border-b" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email" className="border-b" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        <Button variant='premium' size='lg' type="submit" className="hover:scale-105 text-white">Enviar</Button>
      </form>
      <Toaster />
    </Form>
    )
}