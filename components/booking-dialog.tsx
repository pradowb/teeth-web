"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBooking } from "@/components/booking-context";
import { bookingSchema, type BookingFormValues } from "@/lib/schemas";
import { services } from "@/lib/data";

export function BookingDialog() {
  const { isOpen, closeBooking } = useBooking();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeBooking();
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 250);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg rounded-3xl border-none p-0 shadow-2xl sm:rounded-3xl">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 px-8 py-14 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-8" />
            </span>
            <DialogTitle className="font-display text-2xl font-medium text-ink">
              Solicitação enviada!
            </DialogTitle>
            <DialogDescription className="max-w-xs text-muted-foreground">
              Recebemos seus dados. Nossa equipe entrará em contato em até 1 dia útil para confirmar sua avaliação.
            </DialogDescription>
            <Button className="mt-2 rounded-full" onClick={() => handleOpenChange(false)}>
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2 px-8 pt-8">
              <DialogTitle className="font-display text-2xl font-medium text-ink">
                Agende sua avaliação
              </DialogTitle>
              <DialogDescription>
                Preencha seus dados e nossa equipe entrará em contato para confirmar o melhor horário.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 px-8 pb-8 pt-2"
              noValidate
            >
              <div className="grid gap-1.5">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" placeholder="Seu nome" {...register("name")} />
                {errors.name ? (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input id="phone" placeholder="(11) 99999-0000" {...register("phone")} />
                  {errors.phone ? (
                    <p className="text-xs text-destructive">{errors.phone.message}</p>
                  ) : null}
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="voce@email.com" {...register("email")} />
                  {errors.email ? (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="service">Serviço de interesse</Label>
                <Controller
                  control={control}
                  name="service"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="Avaliação geral">Avaliação geral</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.service ? (
                  <p className="text-xs text-destructive">{errors.service.message}</p>
                ) : null}
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="Conte um pouco sobre o que você procura"
                  rows={3}
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-2 h-12 w-full rounded-full text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Enviando...
                  </>
                ) : (
                  "Confirmar solicitação"
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Ao enviar, você concorda em ser contatado pela equipe Auria Odontologia.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
