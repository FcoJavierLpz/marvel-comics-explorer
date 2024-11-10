# 🦸‍♂️ Marvel Comics Explorer (Demo)

Una aplicación web moderna para explorar y comprar cómics de Marvel, construida con React, TypeScript y Tailwind CSS. Esta es una aplicación de demostración con fines educativos y de portafolio.

## 🚀 Características Principales

### Experiencia de Usuario Optimizada

- **CREATE Action Funnel**: Implementación del embudo de conversión siguiendo el patrón CREATE (Cue, Reaction, Evaluation, Action, and Transaction Enhancement)
  - **Cue**: Banners de urgencia y ofertas limitadas
  - **Reaction**: Filtros intuitivos y búsqueda en tiempo real
  - **Evaluation**: Información detallada del producto y reseñas
  - **Action**: Proceso de compra simplificado
  - **Transaction Enhancement**: Seguimiento post-compra y recomendaciones

- **Persuasive Technology**:
  - Indicadores de stock limitado
  - Prueba social con calificaciones y número de lectores
  - Badges de "Popular Choice" para productos destacados
  - Precios digitales con descuento visible

- **Nudge Theory**:
  - Recordatorios sutiles de productos vistos recientemente
  - Sugerencias personalizadas basadas en el historial
  - Indicadores de tiempo limitado para ofertas

### Características Técnicas

- 🌗 Tema Claro/Oscuro
  - Detección automática de preferencias del sistema
  - Persistencia de preferencias del usuario
  - Transiciones suaves entre temas

- 🛒 Carrito de Compras Avanzado
  - Persistencia de datos
  - Actualización en tiempo real
  - Animaciones fluidas
  - Mini carrito con vista previa

- 🖼️ Optimización de Imágenes
  - Efecto blur durante la carga
  - Lazy loading optimizado
  - Transiciones suaves

- 🔍 Búsqueda y Filtrado
  - Búsqueda en tiempo real con debounce
  - Filtros múltiples

- 📱 Diseño Responsivo
  - Adaptación fluida a todos los dispositivos
  - Interacciones optimizadas para móviles
  - Layouts específicos por dispositivo

## 🛠️ Tecnologías

- React + TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (gestión del estado)
- React Query
- React Router
- Lucide Icons

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/FcoJavierLpz/marvel-comics-explorer.git
```

2. Instala las dependencias (recomendamos usar pnpm por su velocidad y eficiencia):
```bash
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```
Añade tus claves de API de Marvel en el archivo `.env`:
```
VITE_MARVEL_BASE_URL=https://gateway.marvel.com/v1/public
VITE_MARVEL_PUBLIC_KEY=tu_clave_publica
VITE_MARVEL_PRIVATE_KEY=tu_clave_privada
```

4. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

## 🔑 Variables de Entorno Requeridas

- `VITE_MARVEL_BASE_URL`: URL base de la API de Marvel
- `VITE_MARVEL_PUBLIC_KEY`: Tu clave pública de la API de Marvel
- `VITE_MARVEL_PRIVATE_KEY`: Tu clave privada de la API de Marvel

## 🚀 Posibles Mejoras y Escalabilidad

### Funcionalidades Futuras

- 📚 **Sistema de Suscripción**
  - Planes mensuales/anuales para acceso ilimitado
  - Beneficios exclusivos para suscriptores
  - Sistema de recompensas y niveles

- 🎮 **Gamificación**
  - Sistema de logros por lectura
  - Colecciones completadas
  - Insignias y recompensas

- 🤝 **Características Sociales**
  - Clubs de lectura
  - Reseñas y calificaciones
  - Compartir colecciones
  - Recomendaciones basadas en amigos

- 📱 **Aplicación Móvil**
  - Lectura offline
  - Sincronización multiplataforma

- 🎯 **Personalización Avanzada**
  - Recomendaciones con ML
  - Preferencias de lectura

- 🔄 **Integración con Servicios**
  - Compartir en redes sociales
  - Calendario de lanzamientos
  - Integración con eventos de Marvel

- 🗄️ Integración con Backend y Base de Datos
  - Conectar la aplicación frontend con un backend que gestione una base de datos, como MongoDB, para almacenar datos de usuarios y preferencias.
  - Implementar una API para la gestión de la información de los usuarios y datos relevantes de la aplicación, permitiendo una experiencia más personalizada y un mejor manejo de historiales de compras.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## ⚠️ Descargo de Responsabilidad

Esta es una aplicación de demostración creada con fines educativos y de portafolio. No es una tienda real y no procesa pagos reales. Los datos de los cómics son proporcionados por la API de Marvel.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.