"use client";

import { useState } from "react";
import {
  ChevronLeft,
  User,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  phone: string;
  mode: "sur_place" | "emporter";
  time: string;
}

const INIT: FormState = { name: "", phone: "", mode: "sur_place", time: "" };

export default function Checkout({ open, onClose }: Props) {
  const { items, total, dispatch } = useCart();
  const [form, setForm]     = useState<FormState>(INIT);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [done, setDone]     = useState(false);

  /* ── Validation ── */
  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim())  e.name  = "Champ requis";
    if (!form.phone.trim()) e.phone = "Champ requis";
    if (!form.time)         e.time  = "Champ requis";
    setErrors(e);
    return !Object.keys(e).length;
  }

  /* ── Message builder ── */
  function buildMsg() {
    const modeLabel =
      form.mode === "sur_place" ? "Sur place 🪑" : "À emporter 🥡";
    const lines = items
      .map((i) => `• ${i.qty}x ${i.name} — ${(i.price * i.qty).toFixed(2)}€`)
      .join("\n");

    return (
      `🍽️ Nouvelle commande — Le Sept 7\n\n` +
      `👤 Nom : ${form.name}\n📞 Tél : ${form.phone}\n\n` +
      `📋 Commande :\n${lines}\n\n` +
      `💰 Total : ${total.toFixed(2)}€\n\n` +
      `🏠 Mode : ${modeLabel}\n⏰ Heure : ${form.time}`
    );
  }

  /* ── After send ── */
  function afterSend() {
    setDone(true);
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
      setDone(false);
      setForm(INIT);
      onClose();
    }, 3200);
  }

  /* ── Send via WhatsApp ── */
  function sendWA() {
    if (!validate()) return;
    window.open(
      `https://wa.me/33763676191?text=${encodeURIComponent(buildMsg())}`,
      "_blank"
    );
    afterSend();
  }

  /* ── Send via SMS ── */
  function sendSMS() {
    if (!validate()) return;
    window.open(
      `sms:0763676191?body=${encodeURIComponent(buildMsg())}`,
      "_blank"
    );
    afterSend();
  }

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  if (!open) return null;

  return (
    <div
      className="modal-wrap"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        {done ? (
          /* ── Success screen ── */
          <div className="success">
            <div className="success-icon">🎉</div>
            <h2>Commande envoyée !</h2>
            <div className="success-dot" />
            <p>
              Le restaurant va confirmer votre commande rapidement.
              À très vite !
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="modal-header">
              <button className="icon-btn" onClick={onClose} aria-label="Retour">
                <ChevronLeft size={18} />
              </button>
              <h2>Finaliser ma commande</h2>
            </div>

            <div className="modal-body">
              {/* Récapitulatif */}
              <div className="recap">
                <p className="recap-label">Récapitulatif</p>
                {items.map((i) => (
                  <div key={i.id} className="recap-row">
                    <span>{i.qty}× {i.name}</span>
                    <span>{(i.price * i.qty).toFixed(2)}€</span>
                  </div>
                ))}
                <div className="recap-total">
                  <span>Total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
              </div>

              {/* Nom */}
              <div className="form-group">
                <label className="form-label">
                  <User size={12} /> Prénom &amp; Nom
                </label>
                <input
                  className={`form-input${errors.name ? " err" : ""}`}
                  placeholder="Ex : Jean Dupont"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              {/* Téléphone */}
              <div className="form-group">
                <label className="form-label">
                  <Phone size={12} /> Téléphone
                </label>
                <input
                  className={`form-input${errors.phone ? " err" : ""}`}
                  placeholder="06 12 34 56 78"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              {/* Mode */}
              <div className="form-group">
                <label className="form-label">
                  <MapPin size={12} /> Mode
                </label>
                <div className="mode-grid">
                  <button
                    className={`mode-option${form.mode === "sur_place" ? " active" : ""}`}
                    onClick={() => set("mode", "sur_place")}
                    type="button"
                  >
                    🪑 Sur place
                  </button>
                  <button
                    className={`mode-option${form.mode === "emporter" ? " active" : ""}`}
                    onClick={() => set("mode", "emporter")}
                    type="button"
                  >
                    🥡 À emporter
                  </button>
                </div>
              </div>

              {/* Heure */}
              <div className="form-group">
                <label className="form-label">
                  <Clock size={12} /> Heure souhaitée
                </label>
                <input
                  className={`form-input${errors.time ? " err" : ""}`}
                  type="time"
                  value={form.time}
                  onChange={(e) => set("time", e.target.value)}
                />
                {errors.time && <span className="form-error">{errors.time}</span>}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="modal-footer">
              <button className="wa-btn" onClick={sendWA} type="button">
                <MessageCircle size={20} />
                Commander via WhatsApp
              </button>
              <button className="sms-btn" onClick={sendSMS} type="button">
                <Phone size={16} />
                Envoyer par SMS
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
