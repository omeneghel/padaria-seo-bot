import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(15, "Telefone inválido"),
  message: z.string().trim().max(1000, "Mensagem muito longa").optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  title?: string;
  description?: string;
  isModal?: boolean;
  onSuccess?: () => void;
  submitText?: string;
}

const ContactForm = ({ 
  title = "Agende sua Consulta!", 
  description = "Preencha o formulário abaixo",
  isModal = false,
  onSuccess,
  submitText = "SOLICITAR ATENDIMENTO"
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Send to webhook
      await fetch("https://hook.us1.make.com/rbl9u3n5xb9ff2rwhkdi0hh4sfv3ynu1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          page: "Plano de Negócios para Padarias",
        }),
      });

      // Redirect to WhatsApp
      const phone = "5511956909147";
      const message = encodeURIComponent(
        `Olá! Meu nome é ${data.name}.\n` +
        `Email: ${data.email}\n` +
        `Telefone: ${data.phone}\n` +
        (data.message ? `Mensagem: ${data.message}\n` : "") +
        `\nGostaria de informações sobre Plano de Negócios para Padarias.`
      );
      
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

      toast({
        title: "Sucesso!",
        description: "Você será redirecionado para o WhatsApp.",
      });

      form.reset();
      onSuccess?.();
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

  const formContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome Completo" {...field} />
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
              <FormControl>
                <Input type="email" placeholder="Seu Melhor E-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Telefone/WhatsApp" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {!isModal && (
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="Mensagem (opcional)" 
                    rows={4}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : submitText}
        </Button>
      </form>
    </Form>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-6 border border-border">
      <h4 className="text-xl font-bold text-secondary mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
      {formContent}
    </div>
  );
};

export default ContactForm;
