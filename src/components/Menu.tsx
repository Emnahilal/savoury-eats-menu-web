
import React from "react";
import { Separator } from "@/components/ui/separator";

const MenuItem = ({ 
  name, 
  description, 
  price 
}: { 
  name: string; 
  description: string; 
  price: string;
}) => {
  return (
    <li className="menu-item pb-6 mb-4">
      <div className="flex justify-between items-baseline">
        <h3 className="font-serif text-xl font-semibold text-burgundy">{name}</h3>
        <span className="font-serif text-lg font-medium text-gold">{price}</span>
      </div>
      <p className="text-gray-700 mt-1 pr-4">{description}</p>
    </li>
  );
};

const MenuSection = ({ 
  title, 
  items, 
  order 
}: { 
  title: string; 
  items: { name: string; description: string; price: string }[];
  order: number;
}) => {
  return (
    <section className="menu-section my-10" style={{ "--animation-order": order } as React.CSSProperties}>
      <h2 className="font-serif text-3xl font-bold mb-6 text-burgundy relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gold opacity-70"></span>
      </h2>
      <ul>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </section>
  );
};

const Menu = () => {
  const starters = [
    {
      name: "Soupe à l'Oignon",
      description: "Soupe traditionnelle à base d'oignons caramélisés, gratinée avec du gruyère sur croûtons à l'ail.",
      price: "12€"
    },
    {
      name: "Foie Gras de Canard",
      description: "Terrine de foie gras maison accompagnée de pain brioché toasté et chutney de figues.",
      price: "18€"
    },
    {
      name: "Escargots de Bourgogne",
      description: "Escargots préparés avec un beurre à l'ail et aux fines herbes, six ou douze pièces.",
      price: "14€"
    },
    {
      name: "Salade Niçoise",
      description: "Salade composée de thon, œufs durs, olives noires, tomates, poivrons et anchois.",
      price: "16€"
    },
  ];

  const mainCourses = [
    {
      name: "Coq au Vin",
      description: "Volaille marinée et braisée lentement dans un vin rouge corsé avec lardons, champignons et oignons.",
      price: "26€"
    },
    {
      name: "Bœuf Bourguignon",
      description: "Ragoût de bœuf mijoté dans du vin rouge avec carottes, oignons et champignons, servi avec purée.",
      price: "28€"
    },
    {
      name: "Bouillabaisse Provençale",
      description: "Soupe de poissons méditerranéens, servie avec rouille, croûtons et fromage râpé.",
      price: "32€"
    },
    {
      name: "Filet de Sole Meunière",
      description: "Filet de sole poêlé au beurre noisette, citron et persil, accompagné de pommes vapeur.",
      price: "30€"
    },
  ];

  const desserts = [
    {
      name: "Crème Brûlée",
      description: "Crème à la vanille avec une fine couche de sucre caramélisé.",
      price: "10€"
    },
    {
      name: "Tarte Tatin",
      description: "Tarte aux pommes caramélisées servie tiède avec une boule de glace à la vanille.",
      price: "12€"
    },
    {
      name: "Mousse au Chocolat",
      description: "Mousse légère au chocolat noir, garnie d'éclats de chocolat et servie avec un sablé.",
      price: "11€"
    },
    {
      name: "Assortiment de Fromages",
      description: "Sélection de fromages affinés, accompagnés de fruits secs et pain aux noix.",
      price: "14€"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-burgundy mb-3">Le Savoury Bistro</h1>
          <Separator className="mx-auto w-24 bg-gold h-0.5 mb-3" />
          <p className="text-gray-600 italic">cuisine française authentique</p>
        </div>

        <MenuSection title="Entrées" items={starters} order={1} />
        <MenuSection title="Plats Principaux" items={mainCourses} order={2} />
        <MenuSection title="Desserts" items={desserts} order={3} />

        <div className="mt-16 text-center">
          <Separator className="mx-auto w-24 bg-gold h-0.5 mb-6" />
          <p className="text-gray-600 mb-4">Prix nets, service compris.</p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-2 border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-colors duration-300 font-medium rounded-sm"
          >
            Contactez-nous
          </a>
          <p className="text-sm text-gray-500 mt-8">
            © 2025 Le Savoury Bistro - Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
