import { useState } from "react";
import { Calendar, Button, Alert } from "./components";

/**
 * Ejemplo de uso del componente Calendar
 * Demuestra diferentes casos de uso y configuraciones
 */

export function CalendarExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    console.log("Fecha seleccionada:", date.toLocaleDateString("es-ES"));
  };

  const handleStartDate = (date: Date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(null);
    }
  };

  const handleEndDate = (date: Date) => {
    if (date < startDate) {
      return; // No permitir que la fecha final sea anterior a la inicial
    }
    setEndDate(date);
  };

  const calculateDaysBetween = () => {
    if (!endDate) return 0;
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  };

  return (
    <div className="space-y-8 p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Ejemplos de Calendar
      </h1>

      {/* Single Date Selection */}
      <section className="border-b-2 border-beige pb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Selección de Fecha Única
        </h2>
        <p className="text-dark mb-4">
          Selecciona una fecha del calendario. La fecha seleccionada se muestra
          a continuación.
        </p>
        <div className="flex justify-center mb-6">
          <Calendar
            size="lg"
            variant="primary"
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </div>
        <Alert type="info">
          Fecha seleccionada:{" "}
          <strong>{selectedDate.toLocaleDateString("es-ES")}</strong>
        </Alert>
      </section>

      {/* Date Range Selection */}
      <section className="border-b-2 border-beige pb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Selección de Rango de Fechas
        </h2>
        <p className="text-dark mb-4">
          Selecciona una fecha inicial y una fecha final para crear un rango.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="flex justify-center">
            <div>
              <h3 className="text-lg font-bold text-dark mb-4">
                Fecha Inicial
              </h3>
              <Calendar
                size="md"
                variant="primary"
                selectedDate={startDate}
                onDateSelect={handleStartDate}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h3 className="text-lg font-bold text-dark mb-4">Fecha Final</h3>
              <Calendar
                size="md"
                variant="accent"
                selectedDate={endDate || new Date()}
                onDateSelect={handleEndDate}
                disablePastDates={false}
              />
            </div>
          </div>
        </div>
        {endDate && (
          <Alert type="success">
            Rango seleccionado:{" "}
            <strong>{startDate.toLocaleDateString("es-ES")}</strong> a{" "}
            <strong>{endDate.toLocaleDateString("es-ES")}</strong> (
            <strong>{calculateDaysBetween()}</strong> días)
          </Alert>
        )}
      </section>

      {/* All Sizes */}
      <section className="border-b-2 border-beige pb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Todos los Tamaños
        </h2>
        <p className="text-dark mb-6">
          El componente Calendar está disponible en tres tamaños diferentes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-dark mb-4">Pequeño (sm)</h3>
            <Calendar size="sm" variant="primary" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-dark mb-4">Mediano (md)</h3>
            <Calendar size="md" variant="secondary" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-dark mb-4">Grande (lg)</h3>
            <Calendar size="lg" variant="accent" />
          </div>
        </div>
      </section>

      {/* All Variants */}
      <section className="border-b-2 border-beige pb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Todas las Variantes
        </h2>
        <p className="text-dark mb-6">
          Cada variante utiliza un color diferente de la paleta de Flhour.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-dark mb-4">Primary (Zest)</h3>
            <Calendar size="md" variant="primary" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-dark mb-4">
              Secondary (My Sin)
            </h3>
            <Calendar size="md" variant="secondary" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-dark mb-4">
              Accent (Red Stage)
            </h3>
            <Calendar size="md" variant="accent" />
          </div>
        </div>
      </section>

      {/* With Disabled Past Dates */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">
          Sin Fechas Pasadas
        </h2>
        <p className="text-dark mb-6">
          Cuando `disablePastDates` está activo, no puedes seleccionar fechas
          pasadas.
        </p>
        <div className="flex justify-center">
          <Calendar
            size="lg"
            variant="primary"
            disablePastDates={true}
            onDateSelect={handleDateSelect}
          />
        </div>
      </section>
    </div>
  );
}

export default CalendarExample;
