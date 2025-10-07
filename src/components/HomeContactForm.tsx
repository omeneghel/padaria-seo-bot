import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(15, "Telefone inválido"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().max(1000, "Mensagem muito longa").optional(),
});

type FormData = z.infer<typeof formSchema>;

const HomeContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Send to webhook
      await fetch("https://hook.us1.make.com/57o9mdwx7727lop87p1tca57c6duhu85", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          page: "Home - ECONOMICA",
        }),
      });

      // Redirect to WhatsApp
      const phone = "5511956909147";
      const message = encodeURIComponent(
        `Olá! Meu nome é ${data.name}.\n` +
        `Email: ${data.email}\n` +
        `Telefone: ${data.phone}\n` +
        `Serviço de Interesse: ${data.service}\n` +
        (data.message ? `Mensagem: ${data.message}\n` : "") +
        `\nGostaria de mais informações sobre os serviços da ECONOMICA.`
      );
      
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

      toast({
        title: "Sucesso!",
        description: "Você será redirecionado para o WhatsApp.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-xl p-8 border border-border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo *</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone/WhatsApp *</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serviço de Interesse *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pesquisa de Mercado">Pesquisa de Mercado</SelectItem>
                      <SelectItem value="Plano de Negócios">Plano de Negócios</SelectItem>
                      <SelectItem value="Valuation">Valuation</SelectItem>
                      <SelectItem value="Análise de Viabilidade">Análise de Viabilidade</SelectItem>
                      <SelectItem value="Precificação">Precificação</SelectItem>
                      <SelectItem value="Consultoria Empresarial">Consultoria Empresarial</SelectItem>
                      <SelectItem value="Outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem (opcional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Conte-nos um pouco mais sobre suas necessidades..." 
                    rows={4}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "SOLICITAR CONTATO"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HomeContactForm;
