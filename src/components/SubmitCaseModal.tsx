import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";

const WHATSAPP_POST_URL =
  "https://wa.me/553231980374?text=Ola,%20acabei%20de%20enviar%20um%20caso%20pela%20Vestigio%20e%20gostaria%20de%20acompanhar";

const CONTEXT_TYPES = ["Judicial", "Empresarial", "Auditoria / investigação", "Outro"] as const;
const TECHNICAL_ELEMENTS = [
  "Sistemas / software",
  "Logs / registros",
  "Integrações",
  "Telecom",
  "Infraestrutura / cloud",
  "Não sei ao certo",
] as const;
const CASE_PHASES = ["Inicial", "Em andamento", "Já possui laudo", "Em disputa"] as const;
const URGENCY_LEVELS = ["Baixa", "Média", "Alta"] as const;

interface SubmitCaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SubmitCaseModal = ({ open, onOpenChange }: SubmitCaseModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    contextType: "",
    caseDescription: "",
    technicalElements: [] as string[],
    casePhase: "",
    technicalObjective: "",
    urgency: "",
  });

  const updateField = (field: string, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const toggleElement = (el: string) => {
    setForm((prev) => ({
      ...prev,
      technicalElements: prev.technicalElements.includes(el)
        ? prev.technicalElements.filter((e) => e !== el)
        : [...prev.technicalElements, el],
    }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Campo obrigatório";
    if (!form.company.trim()) e.company = "Campo obrigatório";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email inválido";
    if (!form.whatsapp.trim()) e.whatsapp = "Campo obrigatório";
    if (!form.contextType) e.contextType = "Selecione uma opção";
    if (!form.caseDescription.trim()) e.caseDescription = "Campo obrigatório";
    if (!form.technicalObjective.trim()) e.technicalObjective = "Campo obrigatório";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        contextType: "",
        caseDescription: "",
        technicalElements: [],
        casePhase: "",
        technicalObjective: "",
        urgency: "",
      });
      setErrors({});
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-slate-deep border-mineral/20 text-primary-foreground max-w-2xl max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-copper mx-auto mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                Informações recebidas
              </h3>
              <p className="text-xs text-muted-foreground/50 font-body text-center md:text-right leading-relaxed max-w-md mx-auto mb-3">
                Nosso time fará uma leitura técnica inicial do seu caso para entender o contexto e
                avaliar como podemos contribuir de forma estratégica.
              </p>
              <p className="text-muted-foreground/60 font-body text-sm max-w-md mx-auto mb-8">
                Se houver aderência, entraremos em contato para dar sequência ao atendimento.
              </p>
              <a
                href={WHATSAPP_POST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-mineral/30 text-muted-foreground hover:text-primary-foreground hover:border-mineral/60 font-body font-medium px-8 py-4 rounded-md transition-all duration-300 text-sm tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <DialogHeader className="mb-6">
                <DialogTitle className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground">
                  Submeter caso para análise técnica
                </DialogTitle>
                <DialogDescription className="text-muted-foreground font-body text-sm leading-relaxed mt-2">
                  A Vestígio realiza uma leitura técnica inicial para compreender o contexto,
                  identificar a natureza das evidências e avaliar como pode atuar de forma
                  estratégica.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Identificação */}
                <fieldset className="space-y-4">
                  <legend className="text-xs font-body uppercase tracking-widest text-copper mb-2">
                    Identificação
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Nome completo" error={errors.name}>
                      <Input
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="bg-graphite border-mineral/20 text-primary-foreground placeholder:text-white/40"
                        maxLength={100}
                      />
                    </Field>
                    <Field label="Empresa ou escritório" error={errors.company}>
                      <Input
                        value={form.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className="bg-graphite border-mineral/20 text-primary-foreground placeholder:text-white/40"
                        maxLength={100}
                      />
                    </Field>
                    <Field label="Email" error={errors.email}>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="bg-graphite border-mineral/20 text-primary-foreground placeholder:text-white/40"
                        maxLength={255}
                      />
                    </Field>
                    <Field label="WhatsApp" error={errors.whatsapp}>
                      <Input
                        value={form.whatsapp}
                        onChange={(e) => updateField("whatsapp", e.target.value)}
                        className="bg-graphite border-mineral/20 text-primary-foreground placeholder:text-white/70"
                        placeholder="(00) 00000-0000"
                        maxLength={20}
                      />
                    </Field>
                  </div>
                </fieldset>

                {/* 2. Tipo de contexto */}
                <fieldset className="space-y-3">
                  <legend className="text-xs font-body uppercase tracking-widest text-copper mb-2">
                    Tipo de contexto
                  </legend>
                  {errors.contextType && (
                    <p className="text-sm text-red-400">{errors.contextType}</p>
                  )}
                  <RadioGroup
                    value={form.contextType}
                    onValueChange={(v) => updateField("contextType", v)}
                    className="grid grid-cols-2 gap-3"
                  >
                    {CONTEXT_TYPES.map((ct) => (
                      <label
                        key={ct}
                        className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer transition-all duration-200 ${
                          form.contextType === ct
                            ? "border-copper/60 bg-copper/10"
                            : "border-mineral/20 bg-graphite hover:border-mineral/40"
                        }`}
                      >
                        <RadioGroupItem value={ct} className="border-mineral/40 text-copper" />
                        <span className="text-sm font-body text-white/80">{ct}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </fieldset>

                {/* 3. Descrição do caso */}
                <fieldset className="space-y-3">
                  <legend className="text-xs font-body uppercase tracking-widest text-copper mb-2">
                    Descrição do caso
                  </legend>
                  {errors.caseDescription && (
                    <p className="text-sm text-red-400">{errors.caseDescription}</p>
                  )}
                  <Textarea
                    value={form.caseDescription}
                    onChange={(e) => updateField("caseDescription", e.target.value)}
                    placeholder="Descreva o contexto do caso e o que está sendo discutido envolvendo tecnologia, sistemas ou registros."
                    className="bg-graphite border-mineral/20 text-primary-foreground placeholder:text-white/70 min-h-[120px]"
                    maxLength={2000}
                  />
                </fieldset>

                {/* 4. Elementos técnicos */}
                <fieldset className="space-y-3">
                  <legend className="text-xs font-body uppercase tracking-widest text-copper mb-2">
                    Elementos técnicos envolvidos
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {TECHNICAL_ELEMENTS.map((el) => (
                      <label
                        key={el}
                        className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer transition-all duration-200 ${
                          form.technicalElements.includes(el)
                            ? "border-copper/60 bg-copper/10"
                            : "border-mineral/20 bg-graphite hover:border-mineral/40"
                        }`}
                      >
                        <Checkbox
                          checked={form.technicalElements.includes(el)}
                          onCheckedChange={() => toggleElement(el)}
                          className="border-mineral/40 data-[state=checked]:bg-copper data-[state=checked]:border-copper"
                        />
                        <span className="text-sm font-body text-white/80">{el}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* 5. Fase do caso */}
                <fieldset className="space-y-3">
                  <legend className="text-xs font-body uppercase tracking-widest text-copper mb-2">
                    Fase do caso
                  </legend>
                  <RadioGroup
                    value={form.casePhase}
                    onValueChange={(v) => updateField("casePhase", v)}
                    className="grid grid-cols-2 gap-3"
                  >
                    {CASE_PHASES.map((p) => (
                      <label
                        key={p}
                        className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer transition-all duration-200 ${
                          form.casePhase === p
                            ? "border-copper/60 bg-copper/10"
                            : "border-mineral/20 bg-graphite hover:border-mineral/40"
                        }`}
                      >
                        <RadioGroupItem value={p} className="border-mineral/40 text-copper" />
                        <span className="text-sm font-body text-white/80">{p}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </fieldset>

                {/* 6. Objetivo técnico */}
                <fieldset className="space-y-3">
                  <legend className="text-xs font-body uppercase tracking-widest text-copper mb-2">
                    Objetivo técnico
                  </legend>
                  <p className="text-sm text-white/70 font-body">
                    O que você precisa esclarecer tecnicamente?
                  </p>
                  {errors.technicalObjective && (
                    <p className="text-sm text-red-400">{errors.technicalObjective}</p>
                  )}
                  <Textarea
                    value={form.technicalObjective}
                    onChange={(e) => updateField("technicalObjective", e.target.value)}
                    className="bg-graphite border-mineral/20 text-primary-foreground placeholder:text-white/70 min-h-[100px]"
                    maxLength={2000}
                  />
                </fieldset>

                {/* 7. Urgência */}
                <fieldset className="space-y-3">
                  <legend className="text-xs font-body uppercase tracking-widest text-copper mb-2">
                    Urgência
                  </legend>
                  <RadioGroup
                    value={form.urgency}
                    onValueChange={(v) => updateField("urgency", v)}
                    className="flex gap-4"
                  >
                    {URGENCY_LEVELS.map((u) => (
                      <label
                        key={u}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-md border cursor-pointer transition-all duration-200 ${
                          form.urgency === u
                            ? "border-copper/60 bg-copper/10"
                            : "border-mineral/20 bg-graphite hover:border-mineral/40"
                        }`}
                      >
                        <RadioGroupItem value={u} className="border-mineral/40 text-copper" />
                        <span className="text-sm font-body text-white/80">{u}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </fieldset>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-dark text-primary-foreground font-body font-medium px-8 py-4 rounded-md transition-all duration-300 text-sm tracking-wide"
                >
                  <Send className="w-4 h-4" />
                  Enviar para análise técnica
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label className="text-sm font-body text-white/80">{label}</Label>
    {children}
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);

export default SubmitCaseModal;
