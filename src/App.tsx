import { useState } from "react";
import {
  Button,
  Alert,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Toggle,
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  Badge,
  Avatar,
  Spinner,
  ProgressBar,
  Link,
  Table,
  List,
  Tabs,
  Calendar,
  Auth,
} from "./components";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Verificar si el usuario ya está autenticado en esta sesión
    return sessionStorage.getItem('flowy_authenticated') === 'true';
  });
  const [toggleState, setToggleState] = useState(false);

  if (!isAuthenticated) {
    return (
      <Auth 
        onAuthenticated={() => setIsAuthenticated(true)}
        passwordHash={import.meta.env.VITE_AUTH_PASSWORD}
        appName={import.meta.env.VITE_APP_NAME}
      />
    );
  }

  const tableColumns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Cliente" },
    { key: "date", header: "Fecha" },
    {
      key: "status",
      header: "Estado",
      render: (value: string) => {
        let variant: "primary" | "secondary" | "accent" | "outline" = "primary";
        if (value === "Pendiente") variant = "secondary";
        if (value === "Cancelada") variant = "outline";
        return <Badge variant={variant}>{value}</Badge>;
      },
    },
  ];

  const tableData = [
    {
      id: "#001",
      name: "Juan Pérez",
      date: "16/11/2025",
      status: "Confirmada",
    },
    {
      id: "#002",
      name: "María García",
      date: "17/11/2025",
      status: "Pendiente",
    },
    {
      id: "#003",
      name: "Carlos López",
      date: "18/11/2025",
      status: "Cancelada",
    },
  ];

  const tabItems = [
    {
      id: "day",
      label: "Día",
      content: <p className="text-dark">Vista del día seleccionado</p>,
    },
    {
      id: "week",
      label: "Semana",
      content: <p className="text-dark">Vista semanal</p>,
    },
    {
      id: "month",
      label: "Mes",
      content: <p className="text-dark">Vista mensual</p>,
    },
    {
      id: "year",
      label: "Año",
      content: <p className="text-dark">Vista anual</p>,
    },
  ];

  const listItems = [
    "Elemento de lista 1",
    "Elemento de lista 2",
    "Elemento de lista 3",
    "Elemento de lista 4",
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="px-8 py-12 border-b-2 border-beige">
        <h1 className="text-primary text-7xl font-bold mb-4">Flhour UI Kit</h1>
        <p className="text-lg text-dark">
          Componentes de interfaz para el gestor de reservas Flhour
        </p>
      </div>

      <div className="px-8 py-12">
        {/* Typography Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Tipografía</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-heading-1 text-primary font-bold mb-2">
                Heading 1 - 3rem / 800
              </h1>
            </div>

            <div>
              <h2 className="text-heading-2 text-dark font-bold mb-2">
                Heading 2 - 2rem / 700
              </h2>
            </div>

            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-2">
                Heading 3 - 1.5rem / 600
              </h3>
            </div>

            <div>
              <h4 className="text-heading-4 text-dark font-bold mb-2">
                Heading 4 - 1.25rem / 600
              </h4>
            </div>

            <div>
              <h5 className="text-heading-5 text-dark font-bold mb-2">
                Heading 5 - 1rem / 600
              </h5>
            </div>

            <div>
              <h6 className="text-heading-6 text-dark font-bold mb-2">
                Heading 6 - 0.875rem / 600
              </h6>
            </div>

            <div>
              <p className="text-body text-dark mb-2">
                Párrafo base - 1rem / 400
              </p>
            </div>

            <div>
              <p className="text-body-small text-dark">
                Texto pequeño - 0.875rem / 400
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Botones</h2>
          </div>

          <div className="space-y-8">
            {/* Main Styles */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Estilos principales
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex flex-wrap gap-4">
                <Button variant="primary">Botón Primario</Button>
                <Button variant="secondary">Botón Secundario</Button>
                <Button variant="accent">Botón Acento</Button>
                <Button variant="outline">Botón Outline</Button>
                <Button variant="ghost">Botón Ghost</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaños
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 h-48 flex items-center gap-4">
                <Button size="sm" variant="primary">
                  Pequeño
                </Button>
                <Button size="md" variant="primary">
                  Normal
                </Button>
                <Button size="lg" variant="primary">
                  Grande
                </Button>
                <div className="flex-1">
                  <Button className="w-full" variant="primary">
                    Bloque Completo
                  </Button>
                </div>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Estados
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex flex-wrap gap-4">
                <Button variant="primary">Normal</Button>
                <Button variant="primary" disabled>
                  Deshabilitado
                </Button>
                <Button variant="secondary" disabled>
                  Deshabilitado
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">
              Alertas y Notificaciones
            </h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8 space-y-4">
            <Alert type="success">✓ Operación completada exitosamente</Alert>
            <Alert type="warning">
              ⚠ Atención: Verifica los datos ingresados
            </Alert>
            <Alert type="error">
              ✗ Ocurrió un error al procesar la solicitud
            </Alert>
            <Alert type="info">ℹ Información importante sobre tu reserva</Alert>
          </div>
        </section>

        {/* Forms Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Formularios</h2>
          </div>

          <div className="space-y-8">
            {/* Basic Inputs */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Inputs básicos
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-2xl">
                <div className="space-y-6">
                  <Input label="Input de texto" placeholder="Placeholder" />
                  <Input
                    label="Input deshabilitado"
                    placeholder="Valor deshabilitado"
                    disabled
                  />
                  <Textarea
                    label="Textarea"
                    placeholder="Escribe un mensaje..."
                  />
                </div>
              </div>
            </div>

            {/* Select and Options */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Select y opciones
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-2xl">
                <div className="space-y-6">
                  <Select
                    label="Select"
                    options={[
                      { value: "opt1", label: "Opción 1" },
                      { value: "opt2", label: "Opción 2" },
                      { value: "opt3", label: "Opción 3" },
                    ]}
                  />

                  <div className="space-y-3">
                    <Checkbox label="Checkbox 1" />
                    <Checkbox label="Checkbox 2" defaultChecked />
                    <Radio name="test" label="Radio 1" />
                    <Radio name="test" label="Radio 2" defaultChecked />
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Form */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Formulario completo
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-2xl">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Nombre" placeholder="" />
                    <Input label="Apellido" placeholder="" />
                  </div>
                  <Input label="Email" type="email" placeholder="" />
                  <Textarea label="Mensaje" placeholder="" rows={5} />
                  <Button className="w-full" variant="primary">
                    Enviar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Tarjetas</h2>
          </div>

          <div className="space-y-8">
            {/* Basic Card */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tarjeta básica
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Título de la tarjeta</CardTitle>
                  </CardHeader>
                  <p className="text-body text-dark mb-4">
                    Contenido de la tarjeta con descripción breve y detalles
                    importantes.
                  </p>
                  <CardFooter>
                    <Button variant="primary" size="sm">
                      Acción
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Cards with Badges */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tarjetas con badges
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <Card>
                  <div className="mb-4">
                    <Badge variant="primary">Nuevo</Badge>
                  </div>
                  <CardTitle>Reserva Pro</CardTitle>
                  <p className="text-body text-dark mb-4">
                    Accede a funciones avanzadas de gestión.
                  </p>
                  <CardFooter>
                    <Button variant="secondary">Actualizar</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Enlaces</h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8 space-y-4">
            <Link href="#">Enlace primario</Link>
            <Link href="#" variant="secondary">
              Enlace secundario
            </Link>
            <Link href="#" variant="ghost">
              Enlace ghost
            </Link>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Badges</h2>
          </div>

          <div>
            <h3 className="text-heading-3 text-primary font-bold mb-4">
              Estilos
            </h3>
            <div className="bg-white border-2 border-beige rounded-xl p-8 flex flex-wrap gap-4">
              <Badge variant="primary">Primario</Badge>
              <Badge variant="secondary">Secundario</Badge>
              <Badge variant="accent">Acento</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </section>

        {/* Lists Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Listas</h2>
          </div>

          <div className="space-y-8">
            {/* Basic List */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Lista básica
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <List items={listItems} />
              </div>
            </div>

            {/* Striped List */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Lista con striping
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <List
                  items={[
                    "Reserva #001 - Confirmada",
                    "Reserva #002 - Pendiente",
                    "Reserva #003 - Cancelada",
                    "Reserva #004 - Confirmada",
                  ]}
                  striped
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Tabs</h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8">
            <Tabs items={tabItems} />
          </div>
        </section>

        {/* Tables Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Tablas</h2>
          </div>

          <div className="bg-white border-2 border-beige rounded-xl p-8 overflow-auto">
            <Table columns={tableColumns} data={tableData} />
          </div>
        </section>

        {/* Calendars Section */}
        <section className="mb-16 pb-12 border-b-2 border-beige">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Calendarios</h2>
          </div>

          <div className="space-y-8">
            {/* Small Calendar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaño Pequeño
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="sm" variant="primary" />
              </div>
            </div>

            {/* Medium Calendar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaño Mediano
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="md" variant="secondary" />
              </div>
            </div>

            {/* Large Calendar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Tamaño Grande
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="lg" variant="accent" />
              </div>
            </div>

            {/* Multiple Variants */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Variantes de Color
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex justify-center">
                    <Calendar size="md" variant="primary" />
                  </div>
                  <div className="flex justify-center">
                    <Calendar size="md" variant="secondary" />
                  </div>
                  <div className="flex justify-center">
                    <Calendar size="md" variant="accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar with disabled past dates */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Sin Fechas Pasadas
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex justify-center">
                <Calendar size="md" variant="primary" disablePastDates={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Other Components Section */}
        <section className="pb-12">
          <div className="bg-light rounded-lg px-4 py-2 mb-6 inline-block">
            <h2 className="text-2xl font-bold text-dark">Otros Componentes</h2>
          </div>

          <div className="space-y-8">
            {/* Progress Bar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Progress Bar
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 max-w-sm">
                <ProgressBar value={65} showLabel color="bg-primary" />
              </div>
            </div>

            {/* Spinner */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Spinner
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex items-center">
                <Spinner size="md" color="#e46f20" />
              </div>
            </div>

            {/* Avatar */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Avatar
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8 flex gap-4">
                <Avatar initials="JP" size="md" />
              </div>
            </div>

            {/* Toggle Switch */}
            <div>
              <h3 className="text-heading-3 text-primary font-bold mb-4">
                Toggle Switch
              </h3>
              <div className="bg-white border-2 border-beige rounded-xl p-8">
                <Toggle
                  label="Habilitar notificaciones"
                  checked={toggleState}
                  onChange={setToggleState}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
