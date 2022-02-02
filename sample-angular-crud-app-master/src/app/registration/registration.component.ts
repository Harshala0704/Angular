import { Component, OnInit } from "@angular/core";
import { Registration } from '../models/registration';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
    registrations: Registration[] = [];
    // regModel: Registration;
    showNew: Boolean = false;
    submitType: string = "Save";
    selectedRow: number;
    companies: string[] = ["Company A", "Company B", "Company C", "Company D", "Company E"];
  form: any;
  constructor() {
      this.registrations.push(
      new Registration(
        "Dave",
        "Black",
        { year: 1986, month: 1, day: 19 },
        { year: 2008, month: 4, day: 1},
        "daveblack@companya.com",
        "pass123",
        "Company A"
      )
    );

    this.registrations.push(
      new Registration(
        "Thomas",
        "Tele",
        { year: 1980, month: 4, day: 19 },
        { year: 2004, month: 5, day: 1},
        "thomastele@companyb.com",
        "pass234",
        "Company B"
      )
    );

    this.registrations.push(
      new Registration(
        "John",
        "Richards",
        { year: 1988, month: 7, day: 11 },
        { year: 2010, month: 1, day: 3},
        "johnrichards@companyc.com",
        "pass345",
        "Company C"
      )
    );
  }


onNew() {
  // this.regModel = new Registration();
  this.submitType = 'Save';
  this.showNew = true;
  }

onSave() {
  if (this.submitType === 'Save') {
    this.registrations.push(this.form);
  } else {

  // Update existing

  this.registrations[this.selectedRow].firstName = this.form.firstName;
  this.registrations[this.selectedRow].lastName = this.form.lastName;
  this.registrations[this.selectedRow].dob = this.form.dob;
  this.registrations[this.selectedRow].doj = this.form.doj;
  this.registrations[this.selectedRow].email = this.form.email;
  this.registrations[this.selectedRow].password = this.form.password;
  this.registrations[this.selectedRow].company = this.form.company;
}

  this.showNew = false;

}

onEdit(index: number) {
  this.selectedRow = index;
  this.form = new Registration();
  // Retrieve selected
  this.form = Object.assign({}, this.registrations[this.selectedRow]);
  this.submitType = 'Update';
  this.showNew = true;

}

onDelete(index: number) {
  this.registrations.splice(index, 1);
}

onCancel() {
  this.showNew = false;
}

onChangeCompany(company: string) {
  this.form.company = company;
}
  ngOnInit() {}
}


