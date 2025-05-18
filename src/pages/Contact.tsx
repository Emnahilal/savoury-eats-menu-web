
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-cream">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="font-serif text-4xl font-bold text-burgundy mb-6 text-center">Contactez-nous</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-gold mb-3">Heures d'ouverture</h2>
            <p className="text-gray-700">
              Du mardi au samedi: 12h00 - 14h30, 19h00 - 22h30<br />
              Dimanche: 12h00 - 15h00<br />
              Lundi: Fermé
            </p>
          </div>
          
          <div>
            <h2 className="font-serif text-2xl font-semibold text-gold mb-3">Adresse</h2>
            <p className="text-gray-700">
              42 Rue de la Gastronomie<br />
              75001 Paris<br />
              France
            </p>
          </div>
          
          <div>
            <h2 className="font-serif text-2xl font-semibold text-gold mb-3">Réservations</h2>
            <p className="text-gray-700">
              Téléphone: +33 1 23 45 67 89<br />
              Email: reservations@savourybistro.fr
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            onClick={() => navigate("/")}
            className="bg-burgundy hover:bg-burgundy/80 text-white"
          >
            Retour au menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
