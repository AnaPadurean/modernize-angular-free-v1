import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ClientsAddEditComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      nume: ['', Validators.required],
      prenume: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefon: ['', Validators.required],
    });
  }
}
