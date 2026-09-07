import { MapPin, Info, Utensils, ShoppingBag, Heart, TreePine, Camera, Compass, ExternalLink, Navigation } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ZooMap() {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language === 'es';
  const [activeTab, setActiveTab] = useState<string>("all");

  const zones = [
    {
      id: "felinos",
      name: isEs ? "Zona de Felinos" : "Feline Zone",
      icon: "🐆",
      color: "bg-amber-100 border-amber-500 text-amber-900",
      badgeColor: "bg-amber-600 text-white",
      animals: ["Jaguar", "Ocelote", "Tigrillo", "Puma"],
      location: isEs ? "Entrada Norte" : "North Entrance",
      desc: isEs ? "Especies de felinos autóctonos protegidos en recintos naturales." : "Native feline species protected in natural enclosures."
    },
    {
      id: "aviario",
      name: isEs ? "Aviario Tropical" : "Tropical Aviary",
      icon: "🦜",
      color: "bg-sky-100 border-sky-500 text-sky-900",
      badgeColor: "bg-sky-600 text-white",
      animals: ["Guacamaya Roja", "Tucán Pico Iris", "Águila Arpía", "Quetzal"],
      location: isEs ? "Zona Central" : "Central Zone",
      desc: isEs ? "Gran estructura inmersiva para observar aves en vuelo libre." : "Large immersive structure to observe free-flying birds."
    },
    {
      id: "primates",
      name: isEs ? "Isla de Primates" : "Primate Island",
      icon: "🐵",
      color: "bg-purple-100 border-purple-500 text-purple-900",
      badgeColor: "bg-purple-600 text-white",
      animals: ["Mono Araña", "Mono Aullador (Saraguato)", "Mono Capuchino"],
      location: isEs ? "Zona Este" : "East Zone",
      desc: isEs ? "Hábitats arbolados rodeados de agua para la conservación de primates." : "Wooded habitats surrounded by water for primate conservation."
    },
    {
      id: "reptiles",
      name: isEs ? "Herpetario y Cocodrilario" : "Reptile & Crocodile Center",
      icon: "🐊",
      color: "bg-emerald-100 border-emerald-600 text-emerald-900",
      badgeColor: "bg-emerald-700 text-white",
      animals: ["Cocodrilo de Pantano", "Boa Constrictor", "Iguana Verde", "Tortuga Casquito"],
      location: isEs ? "Zona Sur" : "South Zone",
      desc: isEs ? "Espacio especializado en anfibios, reptiles y conservación de caimanes." : "Specialized facility for amphibians, reptiles, and alligator conservation."
    },
    {
      id: "herbivoros",
      name: isEs ? "Reserva de Herbívoros" : "Herbivore Reserve",
      icon: "🦌",
      color: "bg-orange-100 border-orange-500 text-orange-900",
      badgeColor: "bg-orange-600 text-white",
      animals: ["Tapir Centroamericano", "Venado Cola Blanca", "Pecarí de Collar"],
      location: isEs ? "Zona Oeste" : "West Zone",
      desc: isEs ? "Senderos amplios para observar grandes mamíferos herbívoros." : "Wide trails to observe large herbivorous mammals."
    },
    {
      id: "acuatica",
      name: isEs ? "Zona Acuática y Nutrias" : "Aquatic Zone & Otters",
      icon: "🦦",
      color: "bg-cyan-100 border-cyan-500 text-cyan-900",
      badgeColor: "bg-cyan-600 text-white",
      animals: ["Nutria de Río", "Garza Blanca", "Patos Silvestres"],
      location: isEs ? "Lago Central" : "Central Lake",
      desc: isEs ? "Ecosistema de arroyos y estanques con miradores sumergidos." : "Stream and pond ecosystem with submerged viewing windows."
    }
  ];

  const filteredZones = activeTab === "all" ? zones : zones.filter(z => z.id === activeTab);

  const facilities = [
    { icon: Utensils, name: isEs ? "Cafetería y Snacks" : "Cafeteria & Snacks", description: isEs ? "Alimentos, bebidas frías y descanso" : "Food, cold drinks and rest area" },
    { icon: ShoppingBag, name: isEs ? "Tienda de Recuerdos" : "Gift Shop", description: isEs ? "Souvenirs artesanales y guías" : "Handicraft souvenirs and field guides" },
    { icon: Heart, name: isEs ? "Primeros Auxilios" : "First Aid Station", description: isEs ? "Personal médico y atención básica" : "Medical staff and basic aid" },
    { icon: Info, name: isEs ? "Centro de Visitantes" : "Visitor Information", description: isEs ? "Mapas impresos e información de rutas" : "Printed maps and route information" },
  ];

  const highlights = [
    {
      title: isEs ? "Sendero Interpretativo El Zapotal" : "El Zapotal Interpretive Trail",
      description: isEs ? "Recorrido empedrado de 2.5 km en plena selva baja que conecta todas las exhibiciones." : "A 2.5 km cobblestone path through low jungle connecting all exhibits.",
      icon: TreePine,
      duration: isEs ? "45-60 minutos" : "45-60 minutes"
    },
    {
      title: isEs ? "Mirador Panorámico de Canopia" : "Canopy Panoramic Lookout",
      description: isEs ? "Vista espectacular de la vegetación nativa y el relieve de Tuxtla Gutiérrez." : "Spectacular view of native vegetation and Tuxtla Gutiérrez landscape.",
      icon: Camera,
      duration: isEs ? "15 minutos" : "15 minutes"
    }
  ];

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.612711003444!2d-93.0975618!3d16.7460298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed272bc9776d63%3A0xc3f6a2c2622fbb95!2sZool%C3%B3gico%20Regional%20Miguel%20%C3%81lvarez%20del%20Toro!5e0!3m2!1ses!2smx!45";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir//Zool%C3%B3gico+Regional+Miguel+%C3%81lvarez+del+Toro,+Calz.+Cerro+Hueco+s%2Fn,+El+Zapotal,+29094+Tuxtla+Guti%C3%A9rrez,+Chis./";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/60 via-stone-50 to-emerald-100/50">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white py-16 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2 text-emerald-300 font-semibold text-sm uppercase tracking-wider">
            <Compass className="w-5 h-5 text-emerald-400" />
            <span>{isEs ? "Navegación del Parque" : "Park Navigation"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">{t("mapPage.title")}</h1>
          <p className="text-lg sm:text-xl text-emerald-100/90 font-medium max-w-2xl">
            {t("mapPage.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Mapa Interactivo con Google Maps Real */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-900 to-emerald-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-xl">
                <MapPin className="w-7 h-7 text-emerald-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{t("mapPage.generalPlan")}</h2>
                <p className="text-xs sm:text-sm text-emerald-200/80">
                  Calzada Cerro Hueco S/N, Col. El Zapotal, Tuxtla Gutiérrez, Chiapas.
                </p>
              </div>
            </div>
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-5 py-2.5 rounded-xl transition shadow-md text-sm shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>{t("mapPage.directions")}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Iframe Interactivo en Vivo */}
          <div className="relative w-full h-[450px] sm:h-[550px] bg-stone-100">
            <iframe
              title="Google Maps ZooMAT"
              src={googleMapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Zonas Temáticas Interactivos */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-emerald-950 mb-2">{t("mapPage.zonesTitle")}</h2>
              <p className="text-stone-600 text-sm">
                {isEs ? "Filtra y explora las distintas zonas de conservación dentro del recorrido." : "Filter and explore the conservation zones along the trail."}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTab === "all" ? "bg-emerald-800 text-white shadow-sm" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {isEs ? "Todas las zonas" : "All zones"}
              </button>
              {zones.map(z => (
                <button
                  key={z.id}
                  onClick={() => setActiveTab(z.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                    activeTab === z.id ? "bg-emerald-800 text-white shadow-sm" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  <span>{z.icon}</span>
                  <span>{z.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredZones.map((zone, index) => (
              <div key={index} className={`${zone.color} border-2 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 shadow-sm`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{zone.icon}</span>
                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${zone.badgeColor}`}>
                    {zone.location}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">{zone.name}</h3>
                <p className="text-xs opacity-90 mb-4 leading-relaxed">{zone.desc}</p>
                <div className="space-y-1.5 pt-3 border-t border-black/10">
                  <p className="font-extrabold text-xs uppercase tracking-wider opacity-80">
                    {isEs ? "Especies destacadas:" : "Featured species:"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.animals.map((animal, idx) => (
                      <span key={idx} className="bg-white/80 backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-lg border border-black/5 shadow-2xs">
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
          <h2 className="text-3xl font-extrabold text-emerald-950 mb-6">{t("mapPage.servicesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50/80 to-stone-50 rounded-xl p-6 text-center border border-emerald-200/70 shadow-xs">
                <facility.icon className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
                <h3 className="font-bold text-base text-stone-800 mb-1">{facility.name}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Puntos de Interés */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
          <h2 className="text-3xl font-extrabold text-emerald-950 mb-6">
            {isEs ? "Senderos y Miradores Destacados" : "Featured Trails & Lookouts"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white rounded-2xl p-6 shadow-md">
                <highlight.icon className="w-10 h-10 mb-3 text-emerald-300" />
                <h3 className="font-bold text-xl mb-2">{highlight.title}</h3>
                <p className="text-emerald-100/90 text-sm mb-4 leading-relaxed">{highlight.description}</p>
                <div className="bg-white/15 inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-200">
                  ⏱️ {isEs ? "Duración aproximada:" : "Approximate duration:"} {highlight.duration}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consejos de Recorrido */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-start gap-4">
            <Info className="w-8 h-8 text-emerald-300 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-2xl mb-4 text-white">{t("mapPage.tipsTitle")}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-emerald-100 text-sm leading-relaxed">
                <li className="flex items-center gap-2">🌱 {t("mapPage.tip1")}</li>
                <li className="flex items-center gap-2">🐆 {t("mapPage.tip2")}</li>
                <li className="flex items-center gap-2">🌅 {t("mapPage.tip3")}</li>
                <li className="flex items-center gap-2">🚻 {t("mapPage.tip4")}</li>
                <li className="flex items-center gap-2">♿ {t("mapPage.tip5")}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
