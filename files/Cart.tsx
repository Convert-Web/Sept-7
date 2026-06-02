"use client";

import { ShoppingBag, Minus, Plus, X, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Props {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function Cart({ open, onClose, onCheckout }: Props) {
  const { items, dispatch, total } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="cart-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`cart-drawer${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Panier"
      >
        <div className="cart-pill" />

        <div className="cart-header">
          <h2>Mon Panier</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <ShoppingBag size={42} strokeWidth={1.5} />
            <p>Panier vide</p>
            <span>Ajoute tes produits pour commander</span>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((it) => (
                <li key={it.id} className="cart-item">
                  <div className="ci-row">
                    <span className="ci-name">{it.name}</span>
                    <span className="ci-price">
                      {(it.price * it.qty).toFixed(2)}€
                    </span>
                  </div>
                  <div className="ci-row">
                    <div className="ci-controls">
                      <button
                        className="ci-btn"
                        onClick={() => dispatch({ type: "DEC", id: it.id })}
                        aria-label="Diminuer la quantité"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="ci-qty">{it.qty}</span>
                      <button
                        className="ci-btn"
                        onClick={() => dispatch({ type: "INC", id: it.id })}
                        aria-label="Augmenter la quantité"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      className="ci-btn ci-delete"
                      onClick={() => dispatch({ type: "DEL", id: it.id })}
                      aria-label={`Supprimer ${it.name}`}
                    >
                      <X size={12} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total-row">
                <span>Total commande</span>
                <span className="cart-total-num">{total.toFixed(2)}€</span>
              </div>
              <button
                className="checkout-btn"
                onClick={() => {
                  onClose();
                  setTimeout(onCheckout, 330);
                }}
              >
                <span>Passer la commande</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
