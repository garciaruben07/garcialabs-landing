# 📧 Configurar dominio garcialabs.es en Loading.es para Resend

## 🎯 Objetivo

Verificar tu dominio `garcialabs.es` en Resend para poder enviar emails desde `contacto@garcialabs.es` en lugar de `onboarding@resend.dev`.

## 📝 Paso 1: Obtener registros DNS de Resend

1. Ve a [resend.com/domains](https://resend.com/domains)
2. Inicia sesión con tu cuenta
3. Haz clic en **"Add Domain"**
4. Escribe: `garcialabs.es`
5. Haz clic en **"Add"**

Resend te mostrará **3 registros DNS** que necesitas agregar:

### Ejemplo de lo que verás:

```
📋 SPF Record
Tipo: TXT
Nombre: @ (o garcialabs.es)
Valor: v=spf1 include:resend.com ~all

📋 DKIM Record
Tipo: TXT
Nombre: resend._domainkey
Valor: p=MIGfMA0GCSqGSIb3DQEBA... (valor largo único)

📋 DMARC Record
Tipo: TXT
Nombre: _dmarc
Valor: v=DMARC1; p=none; rua=mailto:ruben@garcialabs.es
```

> ⚠️ **IMPORTANTE**: Copia estos valores EXACTAMENTE como aparecen en Resend. Los necesitarás en el siguiente paso.

## 🔧 Paso 2: Agregar registros DNS en Loading.es

### 1. Accede al panel de Loading.es

1. Ve a [loading.es](https://loading.es)
2. Inicia sesión con tus credenciales
3. Ve a **"Mis Dominios"** o **"Gestión de Dominios"**
4. Busca `garcialabs.es` y haz clic en **"Gestionar"**

### 2. Accede a la zona DNS

En Loading.es, busca una opción que diga:
- **"Zona DNS"**
- **"Gestión DNS"**
- **"DNS Manager"**
- O similar

### 3. Agregar el registro SPF

Haz clic en **"Añadir registro"** o **"Nuevo registro"**:

```
Tipo: TXT
Nombre: @
    (o déjalo vacío, o pon "garcialabs.es" según te permita Loading.es)
Valor: v=spf1 include:resend.com ~all
TTL: 3600 (o déjalo por defecto)
```

**Clic en "Guardar"** o **"Añadir"**

### 4. Agregar el registro DKIM

Añade otro registro:

```
Tipo: TXT
Nombre: resend._domainkey
Valor: [pega el valor largo que te dio Resend]
    Ejemplo: p=MIGfMA0GCSqGSIb3DQEBA...
TTL: 3600 (o déjalo por defecto)
```

**Clic en "Guardar"**

### 5. Agregar el registro DMARC

Añade el último registro:

```
Tipo: TXT
Nombre: _dmarc
Valor: v=DMARC1; p=none; rua=mailto:ruben@garcialabs.es
TTL: 3600 (o déjalo por defecto)
```

**Clic en "Guardar"**

## ⏱️ Paso 3: Esperar la propagación DNS

Los cambios DNS pueden tardar entre **15 minutos y 24 horas** en propagarse completamente.

### Verificar si ya se propagó:

Puedes usar esta herramienta online:
- [mxtoolbox.com/SuperTool.aspx](https://mxtoolbox.com/SuperTool.aspx)
- Pon: `garcialabs.es`
- Busca los registros TXT

O desde tu terminal:

```bash
# Verificar registro SPF
dig TXT garcialabs.es +short

# Verificar registro DKIM
dig TXT resend._domainkey.garcialabs.es +short

# Verificar registro DMARC
dig TXT _dmarc.garcialabs.es +short
```

## ✅ Paso 4: Verificar en Resend

1. Vuelve a [resend.com/domains](https://resend.com/domains)
2. Junto a `garcialabs.es` verás un botón **"Verify"**
3. Haz clic en **"Verify"**

Si todo está correcto, verás:
- ✅ **Status: Verified** (verde)

Si sale error:
- ⏳ Espera un poco más (hasta 24h)
- 🔄 Verifica que copiaste los valores exactamente
- 📧 Contacta a soporte de Loading.es si hay problemas

## 🚀 Paso 5: Actualizar variable de entorno

Una vez verificado el dominio:

### En desarrollo (local):

Edita `.env.local`:

```bash
RESEND_FROM_EMAIL=Garcia Labs <contacto@garcialabs.es>
```

Reinicia el servidor:
```bash
npm run dev
```

### En producción:

En tu hosting (Vercel/Netlify/etc.):

1. Settings → Environment Variables
2. Edita `RESEND_FROM_EMAIL`
3. Nuevo valor: `Garcia Labs <contacto@garcialabs.es>`
4. Guarda
5. Redeploy

## 🎨 Personalización adicional (Opcional)

### Crear alias de email

En Loading.es puedes crear un alias para recibir los emails:

1. Panel de Loading.es → **"Correo"** o **"Email"**
2. **"Crear alias"** o **"Reenvío de correo"**
3. Alias: `contacto@garcialabs.es`
4. Reenviar a: `ruben@garcialabs.es`

Así recibirás las respuestas en tu email personal.

### Otros emails que puedes usar

Una vez verificado el dominio, puedes enviar desde cualquier dirección:

```bash
# Diferentes estilos
RESEND_FROM_EMAIL=Garcia Labs <contacto@garcialabs.es>
RESEND_FROM_EMAIL=Rubén García <ruben@garcialabs.es>
RESEND_FROM_EMAIL=Auditorías <auditoria@garcialabs.es>
RESEND_FROM_EMAIL=Info <info@garcialabs.es>
```

## 🐛 Solución de problemas

### Loading.es no me deja poner "@" en el campo Nombre

Prueba estas alternativas:
- Déjalo **vacío** (algunas interfaces lo interpretan como @)
- Pon: **garcialabs.es**
- Pon: **@garcialabs.es**

### No veo la opción "Zona DNS" en Loading.es

Busca en:
- **Panel de control** → **Servicios** → **Dominio** → **DNS**
- O contacta a soporte de Loading.es: pueden ayudarte por chat/ticket

### Los registros no se verifican después de 24h

1. Verifica que los valores sean EXACTOS (sin espacios extra)
2. Contacta a soporte de Loading.es
3. Como alternativa temporal, usa: `onboarding@resend.dev`

### ¿Puedo usar Gmail/Outlook en lugar de Resend?

No directamente con Server Actions por seguridad. Necesitarías:
- Una API de terceros (SendGrid, Mailgun)
- O SMTP (menos seguro, no recomendado)

Resend es la mejor opción para Next.js.

## 📋 Checklist de verificación

Antes de considerar que está listo:

- [ ] Agregaste los 3 registros DNS en Loading.es
- [ ] Esperaste al menos 1 hora
- [ ] Verificaste el dominio en Resend (verde ✅)
- [ ] Actualizaste `RESEND_FROM_EMAIL` en desarrollo
- [ ] Actualizaste `RESEND_FROM_EMAIL` en producción
- [ ] Probaste enviar un formulario
- [ ] El email llegó correctamente con tu dominio

## 📸 Capturas de ejemplo de Loading.es

Si Loading.es tiene una interfaz similar a cPanel, verás algo así:

```
┌─────────────────────────────────────┐
│ Zona DNS de garcialabs.es           │
├─────────────────────────────────────┤
│ Tipo │ Nombre              │ Valor  │
├──────┼─────────────────────┼────────┤
│ TXT  │ @                   │ v=spf1...
│ TXT  │ resend._domainkey   │ p=MIG...
│ TXT  │ _dmarc              │ v=DMA...
└─────────────────────────────────────┘
```

## 🆘 ¿Necesitas ayuda?

Si tienes problemas:

1. **Documentación de Loading.es**: [loading.es/ayuda](https://loading.es)
2. **Soporte Loading.es**: Abre un ticket desde tu panel
3. **Documentación Resend**: [resend.com/docs/dashboard/domains/introduction](https://resend.com/docs/dashboard/domains/introduction)

## 💡 Tip Pro

Una vez verificado, los emails enviados desde `contacto@garcialabs.es`:
- ✅ Tienen mejor reputación
- ✅ Menos probabilidad de spam
- ✅ Aspecto más profesional
- ✅ Mayor confianza del cliente

¡Vale totalmente la pena! 🚀
