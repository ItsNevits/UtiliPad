---
title: Cifrado AES - Herramienta de Cifrado de Grado Militar
author: Equipo de Desarrollo
date: 2025-10-22
tags: ["AES", "Cifrado", "Seguridad", "Criptografía", "Privacidad"]
draft: false
---

# Cifrado AES

Una herramienta de cifrado de grado profesional con operación de modo dual: **Cifrado basado en contraseña** con derivación de claves PBKDF2, y **Modo manual de Clave/IV** para control criptográfico directo. Soporta tanto **AES-GCM** (autenticado) como **AES-CBC** (clásico) con tamaños de clave flexibles (128/192/256-bit). Compatible con .NET y otras plataformas. Todo el procesamiento ocurre localmente en tu navegador - tus datos y contraseñas nunca salen de tu dispositivo.

## Características Principales

### Modos de Cifrado
- **Modo Contraseña (PBKDF2)** → Cifrado seguro basado en contraseña con derivación automática de claves
- **Modo Manual Clave e IV** → Control directo con claves codificadas en hexadecimal o UTF-8
- **AES-GCM** → Cifrado autenticado con verificación de integridad integrada
- **AES-CBC** → Modo clásico compatible con la mayoría de sistemas y aplicaciones .NET

### Tamaños de Clave y Flexibilidad
- **AES-128** → Claves de 16 bytes (rápido, seguro para la mayoría de usos)
- **AES-192** → Claves de 24 bytes (seguridad equilibrada)
- **AES-256** → Claves de 32 bytes (máxima seguridad, aprobado NSA TOP SECRET)
- **Codificación Hexadecimal** → Formato estándar para claves e IVs
- **Codificación UTF-8** → Modo compatible con .NET `Encoding.UTF8.GetBytes()`

### Características de Seguridad
- **100% del lado del cliente** → Todo el cifrado ocurre en tu navegador
- **Sin comunicación con servidores** → Tus datos nunca salen de tu dispositivo
- **API Web Crypto** → Criptografía nativa del navegador
- **Iteraciones configurables** → Ajusta seguridad vs. velocidad (10K-1M iteraciones)
- **Generación de contraseñas fuertes** → Generador de contraseñas seguras integrado
- **Soporte de formatos** → Salida en Base64 y Hexadecimal

## Funcionalidades

- Cifrado y descifrado en tiempo real
- Detección automática de formato (Base64/Hex)
- Alternancia de visibilidad de contraseña
- Generador de contraseñas aleatorias seguras (32 caracteres)
- Opciones avanzadas para iteraciones PBKDF2
- Selección de formato de salida (Base64/Hex)
- Funcionalidad de copiar al portapapeles
- Descarga de archivos cifrados/descifrados
- Soporte para pegar desde portapapeles
- Seguimiento de tiempo de ejecución
- Retroalimentación visual de éxito/error

## Cómo Usar

### Modo Cifrar

#### Cifrado Basado en Contraseña (Predeterminado)
1. Cambia a la pestaña "Cifrar" (predeterminada)
2. Ingresa o pega tu texto plano en el área de entrada
3. Ingresa una contraseña fuerte (o haz clic en "Generar" para una contraseña aleatoria segura)
4. Haz clic en "Cifrar"
5. Copia la salida cifrada o descárgala como un archivo

**Importante**: ¡Guarda tu contraseña de forma segura! Sin ella, no podrás descifrar tus datos.

#### Cifrado con Clave e IV Manual (Avanzado)
1. Ingresa tu texto plano
2. Haz clic en "Opciones Avanzadas"
3. Selecciona **"Clave e IV Manual"** como modo de cifrado
4. Selecciona algoritmo de cifrado:
   - **AES-GCM**: Cifrado autenticado (recomendado)
   - **AES-CBC**: Modo clásico (compatible con .NET)
5. Selecciona codificación:
   - **Hexadecimal**: Formato estándar
   - **Cadena UTF-8**: Para compatibilidad con .NET `Encoding.UTF8.GetBytes()`
6. Selecciona tamaño de clave: AES-128, AES-192 o AES-256
7. Ingresa tu clave e IV (o haz clic en "Generar" para cada uno)
8. Haz clic en "Cifrar"
9. **Guarda la clave, IV y texto cifrado por separado**

#### Opciones Avanzadas
- **Iteraciones PBKDF2** (modo Contraseña):
   - **100,000** (predeterminado): Buen equilibrio entre seguridad y velocidad
   - **500,000**: Mayor seguridad, más lento
   - **1,000,000**: Máxima seguridad, más lento
- **Formato de Salida**:
   - **Base64**: Compacto, formato estándar
   - **Hexadecimal**: Más largo pero legible

### Modo Descifrar

#### Descifrado Basado en Contraseña
1. Cambia a la pestaña "Descifrar"
2. Pega tu texto cifrado
3. El formato se detectará automáticamente (Base64 o Hex)
4. Ingresa la misma contraseña utilizada para el cifrado
5. Haz clic en "Descifrar"
6. Visualiza el texto descifrado con confirmación visual (marca verde)

#### Descifrado con Clave e IV Manual
1. Cambia a la pestaña "Descifrar"
2. Pega tu texto cifrado
3. Haz clic en "Opciones Avanzadas"
4. Selecciona **"Clave e IV Manual"** como modo de descifrado
5. Selecciona el **mismo algoritmo de cifrado** usado para cifrar (AES-GCM o AES-CBC)
6. Selecciona la **misma codificación** usada para cifrar (Hex o UTF-8)
7. Selecciona el **mismo tamaño de clave** usado para cifrar
8. Ingresa la **misma clave e IV exactos** usados para cifrar
9. Haz clic en "Descifrar"
10. Visualiza el texto descifrado

#### Modo de Compatibilidad .NET
Para descifrar datos cifrados con .NET `Encoding.UTF8.GetBytes()`:
1. Selecciona **"Cadena UTF-8 (estilo .NET)"** como codificación
2. Selecciona **"AES-CBC"** como algoritmo de cifrado
3. Ingresa las cadenas de clave e IV (no hex)
4. La longitud de la clave determina la variante AES automáticamente

#### Solución de Problemas de Descifrado
Si el descifrado falla:
- ✗ **Contraseña/clave incorrecta**: Verifica los valores exactos de contraseña o clave/IV
- ✗ **Datos corruptos**: Asegúrate de que el texto cifrado esté completo y sin modificar
- ✗ **Desajuste de formato**: Verifica el formato Base64 o Hexadecimal
- ✗ **Desajuste de modo de cifrado**: Debe usar el mismo modo (GCM/CBC) que el cifrado
- ✗ **Desajuste de codificación**: Hex vs UTF-8 debe coincidir con el cifrado
- ✗ **Desajuste de tamaño de clave**: AES-128/192/256 debe coincidir con el cifrado

## Casos de Uso

- **Comunicación Segura**: Cifra mensajes antes de enviarlos por correo electrónico o chat
- **Almacenamiento de Contraseñas**: Cifra contraseñas y claves sensibles
- **Protección de Datos**: Protege documentos y notas confidenciales
- **Cifrado de Archivos**: Cifra archivos de texto antes del almacenamiento en la nube
- **Respaldos Seguros**: Crea respaldos cifrados de datos importantes
- **Integración Multiplataforma**: Descifra datos de aplicaciones .NET, Java, Python
- **Seguridad API**: Cifra/descifra datos para comunicación API segura
- **Desarrollo**: Cifra archivos de configuración y secretos
- **Cumplimiento**: Cumple con regulaciones de protección de datos (GDPR, HIPAA)
- **Sistemas Legacy**: Compatible con implementaciones AES-CBC
- **Pruebas**: Prueba implementaciones de cifrado entre plataformas

## Especificaciones Técnicas

### Proceso de Cifrado
1. **Contraseña → Derivación de Clave**: PBKDF2-SHA256 con salt aleatorio de 16 bytes
2. **Generación de IV Aleatorio**: Vector de inicialización de 12 bytes para modo GCM
3. **Cifrado AES-256-GCM**: Cifrado autenticado del texto plano
4. **Empaquetado de Salida**: Iteraciones(4) + Salt(16) + IV(12) + Texto Cifrado
5. **Codificación**: Codificación Base64 o Hexadecimal para almacenamiento/transmisión

### Proceso de Descifrado
1. **Análisis de Entrada**: Extrae iteraciones, salt, IV y texto cifrado
2. **Re-derivación de Clave**: PBKDF2 con el mismo salt e iteraciones
3. **Descifrado AES-256-GCM**: Descifrado autenticado con IV
4. **Verificación**: La etiqueta de autenticación GCM valida la integridad
5. **Salida**: Texto plano original

### Notas de Seguridad
- **AES-256** está aprobado por la NSA para información TOP SECRET
- **Modo GCM** proporciona cifrado autenticado (AEAD)
- **PBKDF2** con 100,000+ iteraciones resiste ataques de fuerza bruta
- **Salt aleatorio** previene ataques de tabla arcoíris pre-computada
- **IV aleatorio** asegura texto cifrado único para texto plano idéntico
- **API Web Crypto** utiliza aceleración por hardware cuando está disponible

### Rendimiento
- **Cifrado**: Típicamente 5-50ms dependiendo de las iteraciones y longitud del texto
- **Descifrado**: Tiempo similar al cifrado
- **Impacto de iteraciones**: 100K iteraciones ≈ 10-20ms, 1M iteraciones ≈ 100-200ms
- **Optimizado para navegador**: Utiliza SubtleCrypto para rendimiento nativo

## Mejores Prácticas

1. **Fortaleza de Contraseña**: Usa al menos 16 caracteres con mayúsculas, minúsculas, números y símbolos
2. **Almacenamiento de Contraseña**: Usa un administrador de contraseñas o almacenamiento seguro
3. **Respaldo**: Guarda el texto cifrado y la contraseña por separado
4. **Iteraciones**: Usa 100,000+ para uso general, 500,000+ para datos sensibles
5. **Formato**: Base64 para almacenamiento, cualquier formato funciona para transmisión
6. **Pruebas**: Prueba el descifrado inmediatamente después del cifrado
7. **Nunca**: Compartas contraseñas por el mismo canal que los datos cifrados

## Compatibilidad

- **Navegadores Modernos**: Chrome, Firefox, Safari, Edge (todas las versiones recientes)
- **API Web Crypto**: Requerida (disponible en todos los navegadores modernos)
- **Móvil**: Completamente funcional en navegadores iOS y Android
- **Multiplataforma**: Cifra en un dispositivo, descifra en otro
- **Basado en Estándares**: Utiliza algoritmos aprobados por IETF y NIST

---

**Garantía de Seguridad**: Todas las operaciones criptográficas utilizan la API Web Crypto nativa del navegador, que implementa algoritmos estándar de la industria. No se utilizan implementaciones criptográficas personalizadas.

**Garantía de Privacidad**: Cero transmisión de datos - todo ocurre localmente. Tu texto plano, texto cifrado y contraseñas nunca salen de tu navegador.
