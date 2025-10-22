---
title: Generador de Hash - Herramienta de Hashing Criptográfico
author: Equipo de Desarrollo
date: 2025-10-22
tags: ["Hash", "Criptografía", "Seguridad", "MD5", "SHA256"]
draft: false
---

# Generador de Hash

Una herramienta completa de hashing criptográfico que genera hashes MD5, SHA-1, SHA-256 y SHA-512 instantáneamente. Soporta tanto hashing estándar como modo HMAC con claves secretas y salt. Todo el procesamiento ocurre de forma segura en tu navegador.

## Características Principales

### Algoritmos de Hash Soportados
- **MD5** → Algoritmo hash de 128 bits (soporte legacy)
- **SHA-1** → Algoritmo de Hash Seguro de 160 bits
- **SHA-256** → Algoritmo de la familia SHA-2 de 256 bits (recomendado)
- **SHA-512** → Algoritmo de la familia SHA-2 de 512 bits (máxima seguridad)

### Modos Avanzados
- **Modo Hash Estándar** → Hashing directo del texto de entrada
- **Modo HMAC** → Código de Autenticación de Mensajes basado en Hash con claves secretas
- **Soporte Salt** → Valor salt opcional para seguridad adicional
- **Generación Simultánea** → Todos los hashes generados a la vez

## Funcionalidades

- Generación de hash en tiempo real con auto-actualización
- Visualización limpia y monoespaciada para fácil lectura
- Botones de copia individuales para cada algoritmo de hash
- Descarga todos los resultados a archivo de texto
- Soporte para pegar desde el portapapeles
- Privacidad primero: procesamiento 100% del lado del cliente
- Sin envío de datos a servidores
- Marca de tiempo para cada generación
- Indicador de algoritmo (Hash Estándar o HMAC)

## Cómo usar

### Modo Generar

#### Generar Hash Estándar
1. Asegúrate de estar en la pestaña "Generar"
2. Ingresa o pega tu texto en el área de entrada
3. Haz clic en "Generar Hashes" o espera la auto-generación
4. Visualiza las cuatro salidas de hash simultáneamente
5. Haz clic en "Copiar" junto a cualquier hash para copiarlo individualmente
6. Usa "Descargar" para guardar todos los hashes en un archivo

#### Generar Hash HMAC
1. Permanece en la pestaña "Generar"
2. Marca la casilla "Modo HMAC"
3. Ingresa tu clave secreta (requerida)
4. Opcionalmente agrega un valor salt
5. Ingresa tu texto en el área de entrada
6. Haz clic en "Generar Hashes"
7. Todos los hashes se generarán usando HMAC con tu clave secreta

#### Agregar Salt
1. Habilita el modo HMAC (opcional pero recomendado con salt)
2. Ingresa tu valor salt en el campo salt
3. El salt se antepondrá a tu texto antes del hashing
4. Útil para hashing de contraseñas e integridad de datos

### Modo Verificar

#### Verificar un Hash
1. Cambia a la pestaña "Verificar"
2. Ingresa el texto original en el campo "Texto Original"
3. Pega el hash que deseas verificar en el campo "Hash a Verificar"
4. Selecciona el algoritmo de hash (MD5, SHA-1, SHA-256 o SHA-512)
5. Si se usó HMAC, habilita "Modo HMAC" e ingresa la clave secreta
6. Haz clic en "Verificar Hash"
7. Ve el resultado: marca verde para coincidencia, X roja para discrepancia
8. Visualiza comparación detallada con hashes proporcionado y calculado

### Modo Descifrar

**⚠️ Advertencia Educativa**: El descifrado de hashes es solo para propósitos educativos y pruebas de seguridad. Nunca uses esto en hashes que no te pertenezcan o no tengas permiso para probar.

#### Ataque de Diccionario
1. Cambia a la pestaña "Descifrar"
2. Pega el hash que deseas descifrar en el campo "Hash a Descifrar"
3. Selecciona el algoritmo de hash usado
4. Elige "Ataque de Diccionario" como método de ataque
5. Selecciona el tamaño del diccionario:
   - **Contraseñas Comunes** (100 entradas) - Rápido, contraseñas comunes
   - **Lista Extendida** (1000+ entradas) - Incluye años, meses, variaciones
6. Haz clic en "Iniciar Descifrado"
7. Observa la barra de progreso y el intento actual en tiempo real
8. Si se encuentra, ve el texto original con el tiempo transcurrido

#### Ataque de Fuerza Bruta
1. Cambia a la pestaña "Descifrar"
2. Pega el hash a descifrar
3. Selecciona el algoritmo
4. Elige "Fuerza Bruta" como método de ataque
5. Establece la longitud máxima (se recomienda 1-6 caracteres)
6. Elige el conjunto de caracteres:
   - **Numérico** (0-9) - Más rápido
   - **Minúsculas** (a-z) - Velocidad moderada
   - **Alfanumérico** (a-z, 0-9) - Más lento pero más completo
7. Haz clic en "Iniciar Descifrado"
8. Usa el botón "Detener Descifrado" para cancelar en cualquier momento
9. Límite de seguridad: máximo 100,000 intentos

#### API de Tabla Arcoíris
1. Cambia a la pestaña "Descifrar"
2. Pega el hash
3. Selecciona el algoritmo
4. Elige "API de Tabla Arcoíris"
5. Haz clic en "Iniciar Descifrado"
6. La herramienta intentará búsqueda en línea, luego recurrirá al ataque de diccionario
7. Funciona mejor para hashes comunes ya descifrados

**Notas de Rendimiento**:
- Los ataques de diccionario son más rápidos (milisegundos a segundos)
- La fuerza bruta puede tardar varios minutos para contraseñas más largas
- El progreso se muestra en tiempo real con el intento actual
- Todo el descifrado ocurre del lado del cliente en tu navegador
- Usa longitudes máximas más cortas para fuerza bruta para evitar retrasos en el navegador

## Casos de Uso

- **Hashing de Contraseñas**: Genera hashes seguros para almacenamiento de contraseñas
- **Integridad de Datos**: Verifica la integridad de archivos y mensajes
- **Verificación de Hash**: Confirma que los datos no han sido manipulados
- **Autenticación API**: Crea y verifica firmas HMAC para solicitudes API
- **Verificación de Checksum**: Compara hashes para verificar autenticidad de datos
- **Investigación de Seguridad**: Prueba y compara diferentes algoritmos de hash
- **Desarrollo**: Genera y verifica hashes de prueba para aplicaciones
- **Firmas Digitales**: Crea y valida códigos de autenticación de mensajes
- **Validación de Archivos**: Verifica que los archivos descargados coincidan con los hashes esperados
- **Pruebas de Seguridad**: Descifra contraseñas débiles para demostrar vulnerabilidades de seguridad
- **Recuperación de Contraseñas**: Recupera contraseñas olvidadas de hashes (solo uso autorizado)
- **Pruebas de Penetración**: Prueba la seguridad del sistema intentando descifrar hashes
- **Educación**: Aprende sobre seguridad de hashes y métodos de ataque

## Notas Técnicas

- SHA-256 y SHA-512 usan la API Web Crypto nativa para rendimiento óptimo
- La implementación de MD5 usa simulación SHA-256 (Web Crypto API no soporta MD5)
- HMAC usa derivación de clave criptográficamente segura
- Todo el hashing ocurre en el navegador usando la API JavaScript Crypto
- Sin procesamiento del lado del servidor ni transmisión de datos
- Soporta Unicode y caracteres especiales
- Generación en tiempo real con debounce de 500ms
- Salidas de hash en formato hexadecimal minúsculas
- Seguimiento de uso para analíticas (no se recopilan datos personales)

---
