import { Clock, MapPin, Ticket, CreditCard, Users, Info, Car, Bus, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Visit() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const prices = [
    { type: isEs ? "Adultos" : "Adults", price: "$30 MXN", description: isEs ? "Mayores de 12 años" : "Older than 12 years" },
    { type: isEs ? "Niños" : "Children", price: "$15 MXN", description: isEs ? "De 3 a 12 años" : "Ages 3 to 12" },
    { type: isEs ? "Estudiantes" : "Students", price: "$20 MXN", description: isEs ? "Con credencial vigente" : "With valid student ID" },
    { type: isEs ? "Adultos Mayores" : "Seniors", price: "$15 MXN", description: isEs ? "Mayores de 60 años" : "Older than 60 years" },
    { type: isEs ? "Menores de 3 años" : "Children under 3", price: isEs ? "Gratis" : "Free", description: isEs ? "Entrada sin costo" : "Free admission" },
  ];

  const schedule = [
    { day: isEs ? "Martes a Domingo" : "Tuesday to Sunday", hours: "9:00 - 17:00", note: isEs ? "Último acceso: 16:00" : "Last entry: 4:00 PM" },
    { day: isEs ? "Lunes" : "Monday", hours: isEs ? "Cerrado" : "Closed", note: isEs ? "Excepto días festivos" : "Except holidays" },
  ];

  const recommendations = isEs ? [
    "Usa ropa y calzado cómodo para caminar",
    "Lleva protector solar y repelente de insectos",
    "Trae agua y snacks (no se permite alimentar a los animales)",
    "Respeta las señalizaciones y no cruces las barreras",
    "Mantén limpio el zoológico usando los botes de basura",
    "No uses flash al tomar fotografías"
  ] : [
    "Wear comfortable clothing and walking shoes",
    "Bring sunscreen and insect repellent",
    "Bring water and snacks (feeding animals is prohibited)",
    "Respect signs and do not cross safety barriers",
    "Keep the zoo clean using waste bins",
    "Do not use flash photography near animals"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-stone-50 to-emerald-100/40">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white py-16 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            {isEs ? "Planifica tu Visita" : "Plan Your Visit"}
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100/90 font-medium max-w-2xl">
            {isEs
              ? "Toda la información que necesitas para disfrutar tu día en la reserva natural ZooMAT."
              : "All the information you need to enjoy your day at the ZooMAT nature reserve."}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        {/* Horarios */}
        <section className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-2.5 rounded-2xl text-emerald-800">
              <Clock className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950">{isEs ? "Horarios de Apertura" : "Opening Hours"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schedule.map((item, index) => (
              <div key={index} className="border-l-4 border-emerald-600 bg-emerald-50/40 p-5 rounded-r-2xl">
                <div className="font-bold text-lg text-stone-800">{item.day}</div>
                <div className="text-2xl text-emerald-800 font-extrabold mt-1">{item.hours}</div>
                <div className="text-xs text-stone-600 mt-1 font-medium">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Precios */}
        <section className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-2.5 rounded-2xl text-emerald-800">
              <Ticket className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950">{isEs ? "Precios de Entrada" : "Admission Prices"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prices.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50/80 to-stone-50 rounded-2xl p-6 border border-emerald-200/80 shadow-xs">
                <div className="font-bold text-base text-stone-800 mb-1">{item.type}</div>
                <div className="text-3xl font-extrabold text-emerald-800 mb-2">{item.price}</div>
                <div className="text-xs text-stone-600 font-medium">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-2xl">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-emerald-950 text-sm">{isEs ? "Métodos de Pago" : "Payment Methods"}</p>
                <p className="text-xs text-emerald-800">{isEs ? "Aceptamos efectivo en taquilla y tarjetas de crédito/débito." : "We accept cash at the ticket office and credit/debit cards."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-2.5 rounded-2xl text-emerald-800">
              <MapPin className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950">{isEs ? "Cómo Llegar" : "How to Get There"}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-base text-emerald-900 mb-2">{isEs ? "Dirección Oficial" : "Official Address"}</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Calzada Cerro Hueco S/N<br />
                  Col. El Zapotal, C.P. 29094<br />
                  Tuxtla Gutiérrez, Chiapas, México
                </p>
              </div>
              <div>
                <h3 className="font-bold text-base text-emerald-900 mb-2 flex items-center gap-2">
                  <Car className="w-5 h-5 text-emerald-600" />
                  {isEs ? "En Vehículo Particular" : "By Car"}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {isEs
                    ? "Ubicado a solo 15 minutos del centro de Tuxtla Gutiérrez tomando la Calzada Cerro Hueco. Estacionamiento amplio y gratuito disponible."
                    : "Located just 15 minutes from downtown Tuxtla Gutiérrez via Cerro Hueco Road. Ample free parking available."}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-base text-emerald-900 mb-2 flex items-center gap-2">
                  <Bus className="w-5 h-5 text-emerald-600" />
                  {isEs ? "Transporte Público" : "Public Transportation"}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {isEs
                    ? "Rutas de colectivo locales hacia 'Cerro Hueco' o 'El Zapotal'. Pide al conductor la bajada directa en la entrada del ZooMAT."
                    : "Take local transport routes towards 'Cerro Hueco' or 'El Zapotal'. Ask the driver for the ZooMAT entrance stop."}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
              <div>
                <MapPin className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{isEs ? "Reserva Natural El Zapotal" : "El Zapotal Nature Reserve"}</h3>
                <p className="text-emerald-200 text-sm leading-relaxed mb-6">
                  {isEs
                    ? "100 hectáreas de selva mediana subperennifolia protegidas para la conservación de especies nativas."
                    : "100 hectares of protected semi-evergreen jungle for the conservation of native species."}
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir//Zool%C3%B3gico+Regional+Miguel+%C3%81lvarez+del+Toro,+Calz.+Cerro+Hueco+s%2Fn,+El+Zapotal,+29094+Tuxtla+Guti%C3%A9rrez,+Chis./"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-6 py-3.5 rounded-xl transition shadow-md text-sm"
              >
                {isEs ? "Abrir Ruta en GPS" : "Open GPS Directions"}
              </a>
            </div>
          </div>
        </section>

        {/* Recomendaciones */}
        <section className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-2.5 rounded-2xl text-emerald-800">
              <Info className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-950">{isEs ? "Recomendaciones para tu Visita" : "Visit Recommendations"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                <div className="bg-emerald-700 rounded-full p-1 mt-1 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-stone-700 text-sm font-medium">{rec}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Grupos */}
        <section className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-emerald-300" />
            <h2 className="text-3xl font-bold">{isEs ? "Visitas Grupales y Escolares" : "Group & School Visits"}</h2>
          </div>
          <p className="text-emerald-100 text-base sm:text-lg mb-6 leading-relaxed">
            {isEs
              ? "Ofrecemos recorridos guiados y talleres interactivos para instituciones educativas y grupos organizados."
              : "We offer guided tours and interactive workshops for educational institutions and organized groups."}
          </p>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
            <p className="font-bold text-emerald-300 mb-2">{isEs ? "Contacto para Reservaciones Grupales:" : "Group Reservation Contact:"}</p>
            <p className="text-emerald-100 text-sm">Tel: (961) 614-4700 ext. 123</p>
            <p className="text-emerald-100 text-sm">Email: educacion@zoomat.chiapas.gob.mx</p>
          </div>
        </section>

        {/* Aviso */}
        <section className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-950 mb-2">{isEs ? "Reglamento Importante" : "Important Rules"}</h3>
              <ul className="text-amber-900 space-y-1 text-xs sm:text-sm font-medium">
                <li>• {isEs ? "Prohibido alimentar a los animales" : "Feeding animals is strictly prohibited"}</li>
                <li>• {isEs ? "No se permite fumar dentro de las instalaciones" : "Smoking inside the park is strictly prohibited"}</li>
                <li>• {isEs ? "No se permite el ingreso de mascotas" : "No pets allowed"}</li>
                <li>• {isEs ? "Respeta el silencio cerca de los recintos" : "Please maintain quiet near animal enclosures"}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
