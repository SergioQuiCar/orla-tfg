import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="row">

<div class="col-md-8 align-content-center">
  <h1>TU ORLA EN POCOS PASOS</h1>
  <h2>No necesitas instalar ni descargar nada y puedes hacerla desde cualquier ordenador. ¡Y podrás descargar una prueba en PDF!</h2>
</div>

<div class="col-md-3 border border-info rounded-5 bg-info-subtle">
  <div class="row justify-content-center mt-5">
      <div class="col-md-6">
          <h2 class="mb-4">ACCESO</h2>
          <form>
              <div class="mb-3">
                  <label for="email_acceso" class="form-label">Email:</label>
                  <input type="email" class="form-control" id="email_acceso" name="email_acceso" required>
              </div>
              <div class="mb-3">
                  <label for="password_acceso" class="form-label">Contraseña:</label>
                  <input type="password" class="form-control" id="password_acceso" name="password_acceso" required>
              </div>
              <button type="submit" class="btn btn-primary">INICIAR SESIÓN</button>
          </form>
      </div>
  </div>
  <hr class="mt-5">
  <div class="row justify-content-center mt-5">
      <div class="col-md-6">
          <h2 class="mb-4">REGÍSTRATE</h2>
          <form>
              <div class="mb-3">
                  <label for="email_registro" class="form-label">Email:</label>
                  <input type="email" class="form-control" id="email_registro" name="email_registro" required>
              </div>
              <div class="mb-3">
                  <label for="password_registro" class="form-label">Contraseña:</label>
                  <input type="password" class="form-control" id="password_registro" name="password_registro" required>
              </div>
              <div class="mb-3">
                  <label for="confirm_password" class="form-label">Confirmar Contraseña:</label>
                  <input type="password" class="form-control" id="confirm_password" name="confirm_password" required>
              </div>
              <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="privacy_policy" name="privacy_policy" required>
                  <label class="form-check-label" for="privacy_policy">Acepto la política de privacidad</label>
              </div>
              <button type="submit" class="btn btn-primary">CREAR CUENTA</button>
          </form>
      </div>
  </div>
</div>

</div>

<div class="row bg-info-subtle">
<h2>TU ORLA EN POCOS PASOS</h2>
<div class="col-md-4">
  <h3>Haz tus fotos</h3>
  <p>Y para que el resultado sea inmejorable, intenta que todas las fotografías sean iguales, con el mismo fondo, la misma luz, etc.</p>
</div>
<div class="col-md-4">
  <h3>Sube tus fotos</h3>
  <p>¡Y saca tu lado creativo! Eligiendo una plantilla de entre todas las opciones que ponemos a tu disposición o subiendo tu propio diseño.</p>
</div>
<div class="col-md-4">
  <h3>Pide tu orla</h3>
  <p>Recibirás tu orla en 48-72 horas. Si eliges papel fotográfico, te la enviamos en una semana.</p>
</div>
</div>

<div class="row">
<h2>Nuestros precios</h2>
<p class="text-danger">Componentes con precios/servicios</p>
</div>

<div class="row bg-info-subtle">
<div class="col">
  <h2>¿TE SURGEN DUDAS?</h2>
  <h3>Pregúntanos cualquier cosa etc.....</h3>
  <h5 class="text-danger">AQUI VA EL FORMULARIO DE CONTACTO</h5>
</div>
</div>
  `,
  styles: ``
})
export class HomeComponent {

}
